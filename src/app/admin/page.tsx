import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { AdminDashboard } from "@/components/AdminDashboard";
import { isAdmin } from "@/lib/auth";
import { getSignups } from "@/lib/signups";

export const metadata: Metadata = {
  title: "Dashboard · Clover Hacks",
  robots: { index: false },
};

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  if (!(await isAdmin())) redirect("/admin/login");

  const signups = await getSignups();

  return (
    <main className="flex-1 mx-auto w-full max-w-5xl px-6 py-12">
      <AdminDashboard signups={signups} />
    </main>
  );
}
