import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { RegisterForm } from "@/components/RegisterForm";
import { event, tracks } from "@/lib/event";

export const metadata: Metadata = {
  title: "Register · Clover Hacks",
  description: "Sign up for Clover Hacks — a one-day high school hackathon.",
};

export default function RegisterPage() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <section className="relative mx-auto max-w-2xl px-6 pt-16 pb-24 md:pt-24">
          <div className="text-center">
            <p className="text-sm font-medium text-clover">Clover Hacks · {event.location}</p>
            <h1 className="mt-3 font-display text-4xl md:text-5xl font-semibold tracking-tight">
              Save your spot
            </h1>
            <p className="mt-4 text-muted text-lg">
              Free for any high schooler, and it only takes a minute.
            </p>
          </div>

          <div className="mt-10 rounded-3xl border border-white/10 bg-white/[0.02] p-6 md:p-8 backdrop-blur-sm">
            <RegisterForm tracks={tracks.map((t) => ({ title: t.title }))} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
