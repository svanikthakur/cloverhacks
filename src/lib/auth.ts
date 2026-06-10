import crypto from "node:crypto";
import { cookies } from "next/headers";

// Simple single-password gate for the organizer's admin dashboard.
// Set ADMIN_PASSWORD in .env.local (a default is used in dev with a warning).
const COOKIE_NAME = "clover_admin";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 7; // 7 days

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

// The cookie never stores the password itself, only a token derived from it.
// Without knowing the password the token can't be forged.
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
  store.set(COOKIE_NAME, sessionToken(), {
    httpOnly: true,
    sameSite: "lax",
    path: "/",
    secure: process.env.NODE_ENV === "production",
    maxAge: COOKIE_MAX_AGE,
  });
}

export async function endAdminSession(): Promise<void> {
  const store = await cookies();
  store.delete(COOKIE_NAME);
}

export async function isAdmin(): Promise<boolean> {
  const store = await cookies();
  const token = store.get(COOKIE_NAME)?.value;
  if (!token) return false;
  const expected = sessionToken();
  const a = Buffer.from(token);
  const b = Buffer.from(expected);
  return a.length === b.length && crypto.timingSafeEqual(a, b);
}
