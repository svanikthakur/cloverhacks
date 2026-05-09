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
          Apps open soon. Drop your email and we&apos;ll be the first to tell you.
        </p>

        <form
          className="relative mt-8 mx-auto flex flex-col sm:flex-row gap-3 max-w-md"
          action="#"
          method="post"
        >
          <input
            required
            type="email"
            name="email"
            placeholder="you@school.edu"
            className="flex-1 rounded-full bg-background border border-white/15 px-5 py-3 text-foreground placeholder:text-muted/70 focus:outline-none focus:border-clover transition-colors"
          />
          <button
            type="submit"
            className="rounded-full bg-clover text-[#06160e] px-6 py-3 font-semibold hover:bg-clover/90 transition-colors"
          >
            Notify me
          </button>
        </form>

        <p className="relative mt-3 text-xs text-muted">
          No spam. Just one email when applications open.
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
