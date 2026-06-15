"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { addSignup, deleteSignup, hasEmail } from "@/lib/signups";
import {
  checkPassword,
  endAdminSession,
  isAdmin,
  startAdminSession,
} from "@/lib/auth";

export type RegisterState = {
  ok: boolean;
  error?: string;
  name?: string;
};

function str(formData: FormData, key: string): string {
  return (formData.get(key) ?? "").toString().trim();
}

export async function registerSignup(
  _prev: RegisterState,
  formData: FormData,
): Promise<RegisterState> {
  const name = str(formData, "name");
  const email = str(formData, "email");
  const school = str(formData, "school");
  const grade = str(formData, "grade");
  const track = str(formData, "track");
  const experience = str(formData, "experience");
  const dietary = str(formData, "dietary");

  if (!name || !email || !school || !grade) {
    return { ok: false, error: "Please fill out name, email, school, and grade." };
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { ok: false, error: "That email doesn't look right." };
  }
  if (await hasEmail(email)) {
    return { ok: false, error: "You're already signed up with that email!" };
  }

  await addSignup({ name, email, school, grade, track, experience, dietary });
  revalidatePath("/admin");
  return { ok: true, name };
}

export type LoginState = { error?: string };

export async function adminLogin(
  _prev: LoginState,
  formData: FormData,
): Promise<LoginState> {
  const password = str(formData, "password");
  if (!checkPassword(password)) {
    return { error: "Incorrect password." };
  }
  await startAdminSession();
  redirect("/admin");
}

export async function adminLogout(): Promise<void> {
  await endAdminSession();
  redirect("/admin/login");
}

export async function removeSignup(formData: FormData): Promise<void> {
  if (!(await isAdmin())) throw new Error("Unauthorized");
  const id = str(formData, "id");
  if (id) await deleteSignup(id);
  revalidatePath("/admin");
}
