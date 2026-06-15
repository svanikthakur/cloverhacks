import crypto from "node:crypto";
import { cookies } from "next/headers";

const cookieName = "clover_admin";
const cookieMaxAge = 60 * 60 * 24 * 7;

function adminPassword(): string {
  const pw = process.env.ADMIN_PASSWORD;
  if (!pw) {
    console.warn(
      "[clover] ADMIN_PASSWORD is not set — falling back to 'clover'. Set it in .env.local before launch.",
    );
    return "clover";
  }
  return pw;
}

function sessionToken(): string {
  return crypto
    .createHmac("sha256", adminPassword())
    .update("clover-admin-session")
    .digest("hex");
}

export function checkPassword(input: string): boolean {
  const a = Buffer.from(input);
  const b = Buffer.from(adminPassword());
  return a.length === b.length && crypto.timingSafeEqual(a, b);
}

export async function startAdminSession(): Promise<void> {
  const store = await cookies();
  store.set(cookieName, sessionToken(), {
    httpOnly: true,
    sameSite: "lax",
    path: "/",
    secure: process.env.NODE_ENV === "production",
    maxAge: cookieMaxAge,
  });
}

export async function endAdminSession(): Promise<void> {
  const store = await cookies();
  store.delete(cookieName);
}

export async function isAdmin(): Promise<boolean> {
  const store = await cookies();
  const token = store.get(cookieName)?.value;
  if (!token) return false;
  const expected = sessionToken();
  const a = Buffer.from(token);
  const b = Buffer.from(expected);
  return a.length === b.length && crypto.timingSafeEqual(a, b);
}
