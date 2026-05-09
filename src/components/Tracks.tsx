import { TRACKS } from "@/lib/event";

export function Tracks() {
  return (
    <section id="tracks" className="relative py-28 px-6 border-t border-white/5">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-widest text-clover font-mono">
            Tracks
          </p>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-semibold tracking-tight">
            Pick a lane. Or don&apos;t.
          </h2>
          <p className="mt-4 text-muted text-lg">
            Three ways to win, plus sponsor prizes.
          </p>
        </div>

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {TRACKS.map((t) => (
            <li
              key={t.title}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-card p-6 hover:border-clover/40 transition-colors"
            >
              <div
                aria-hidden
                className="pointer-events-none absolute -top-12 -right-12 h-40 w-40 rounded-full bg-clover/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"
              />
              <div className="relative">
                <div className="text-3xl">{t.icon}</div>
                <h3 className="mt-4 font-display font-semibold text-lg">
                  {t.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {t.blurb}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
