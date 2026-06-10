import Link from "next/link";
import { Clover } from "./Clover";
import { EVENT } from "@/lib/event";

export function Cta() {
  return (
    <section
      id="register"
      className="relative py-28 px-6 border-t border-white/5"
    >
      <div className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl border border-clover/30 bg-gradient-to-br from-clover/15 via-clover/5 to-transparent p-12 md:p-16 text-center">
        <Clover
          className="absolute -top-6 -left-6 text-clover/20"
          size={140}
        />
        <Clover
          className="absolute -bottom-10 -right-8 text-clover/20 rotate-45"
          size={180}
        />

        <h2 className="relative font-display text-4xl md:text-5xl font-semibold tracking-tight">
          Ready to find out how lucky you are?
        </h2>
        <p className="relative mt-4 text-muted text-lg max-w-xl mx-auto">
          Registration is open. Grab your spot — it&apos;s free, and it only takes a minute.
        </p>

        <div className="relative mt-8 flex justify-center">
          <Link
            href={EVENT.applyUrl}
            className="inline-flex items-center gap-2 rounded-full bg-clover text-[#06160e] px-8 py-3.5 font-semibold hover:bg-clover/90 transition-colors shadow-[0_0_40px_-8px_var(--clover-glow)]"
          >
            Register now
            <span aria-hidden>→</span>
          </Link>
        </div>

        <p className="relative mt-3 text-xs text-muted">
          Free for all high school students. Food and swag included.
        </p>

        <a
          href={EVENT.socials.email}
          className="relative mt-6 inline-block text-sm text-muted hover:text-foreground transition-colors"
        >
          Or reach the team directly →
        </a>
      </div>
    </section>
  );
}
