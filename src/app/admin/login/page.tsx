import type { Metadata } from "next";
import { redirect } from "next/navigation";
import Link from "next/link";
import { AdminLogin } from "@/components/AdminLogin";
import { Clover } from "@/components/Clover";
import { isAdmin } from "@/lib/auth";

export const metadata: Metadata = {
  title: "Admin · Clover Hacks",
  robots: { index: false },
};

export default async function AdminLoginPage() {
  if (await isAdmin()) redirect("/admin");

  return (
    <main className="flex-1 flex items-center justify-center px-6 py-24">
      <div className="w-full max-w-sm">
        <Link href="/" className="flex items-center justify-center gap-2 mb-8">
          <Clover className="text-clover" size={40} />
          <span className="font-display font-semibold text-lg">Clover Hacks</span>
        </Link>
        <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-7 backdrop-blur-sm">
          <h1 className="font-display text-2xl font-semibold text-center">Organizer login</h1>
          <p className="mt-1.5 mb-6 text-sm text-muted text-center">
            Sign in to manage signups.
          </p>
          <AdminLogin />
        </div>
      </div>
    </main>
  );
}
