import { Clover } from "./Clover";
import { EVENT } from "@/lib/event";

const eventDate = new Date(EVENT.startsAt);
const dateLabel = eventDate.toLocaleDateString("en-US", {
  month: "long",
  day: "numeric",
  year: "numeric",
});

const decorativeClovers = [
  { top: "12%", left: "8%", rotate: -18, size: 36, delay: "0s", opacity: 0.45 },
  { top: "22%", left: "85%", rotate: 22, size: 44, delay: "1.2s", opacity: 0.5 },
  { top: "70%", left: "12%", rotate: 12, size: 30, delay: "0.6s", opacity: 0.35 },
  { top: "78%", left: "78%", rotate: -8, size: 52, delay: "1.8s", opacity: 0.55 },
  { top: "45%", left: "92%", rotate: 30, size: 24, delay: "2.4s", opacity: 0.3 },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-clover-radial">
      <div className="absolute inset-0 bg-grid pointer-events-none" />
      {decorativeClovers.map((c, i) => (
        <Clover
          key={i}
          size={c.size}
          className="absolute text-clover animate-float pointer-events-none"
          // @ts-expect-error custom CSS var for keyframe rotation
          style={{
            top: c.top,
            left: c.left,
            opacity: c.opacity,
            animationDelay: c.delay,
            "--r": `${c.rotate}deg`,
            transform: `rotate(${c.rotate}deg)`,
          }}
        />
      ))}

      <div className="relative mx-auto max-w-6xl px-6 pt-24 pb-32 md:pt-32 md:pb-40 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-clover/30 bg-clover/10 px-3 py-1 text-xs font-medium text-clover">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-clover animate-ping-slow" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-clover" />
          </span>
          Applications open soon
        </div>

        <h1 className="mt-6 font-display text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight leading-[1.05]">
          <span className="text-gradient">Get Lucky.</span>
          <br />
          Build Something.
        </h1>

        <p className="mt-6 mx-auto max-w-2xl text-lg md:text-xl text-muted">
          Clover Hacks is a one-day student hackathon where 200+ builders, designers,
          and dreamers come together to ship something worth bragging about.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={EVENT.applyUrl}
            className="inline-flex items-center gap-2 rounded-full bg-clover text-[#06160e] px-6 py-3 font-semibold hover:bg-clover/90 transition-colors shadow-[0_0_40px_-8px_var(--clover-glow)]"
          >
            Apply to hack
            <span aria-hidden>→</span>
          </a>
          <a
            href="#about"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 font-medium text-foreground/90 hover:bg-white/5 transition-colors"
          >
            Learn more
          </a>
        </div>

        <dl className="mt-16 grid grid-cols-3 gap-4 max-w-2xl mx-auto text-left">
          <Stat label="When" value={dateLabel} />
          <Stat label="Where" value={EVENT.location} />
          <Stat label="Hours" value="9 AM – 10 PM" />
        </dl>
      </div>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm px-5 py-4">
      <dt className="text-xs uppercase tracking-wider text-muted">{label}</dt>
      <dd className="mt-1 font-display text-lg font-medium">{value}</dd>
    </div>
  );
}
