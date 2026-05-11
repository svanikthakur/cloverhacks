import { SPONSORSHIP_PACKAGES } from "@/lib/event";

const MAILTO =
  "mailto:sponsors@cloverhacks.org?subject=Sponsorship%20Inquiry";

const TIERS = [
  {
    name: "Diamond",
    accent: "text-cyan-300",
    border: "border-cyan-300/40",
    slots: 4,
    cols: "grid-cols-1 sm:grid-cols-2",
  },
  {
    name: "Gold",
    accent: "text-gold",
    border: "border-gold/40",
    slots: 6,
    cols: "grid-cols-2 sm:grid-cols-3",
  },
  {
    name: "Silver",
    accent: "text-zinc-300",
    border: "border-zinc-300/30",
    slots: 4,
    cols: "grid-cols-2 sm:grid-cols-4",
  },
  {
    name: "Supporter",
    accent: "text-clover",
    border: "border-clover/40",
    slots: 6,
    cols: "grid-cols-3 sm:grid-cols-6",
  },
];

export function Sponsors() {
  return (
    <section
      id="sponsors"
      className="relative py-28 px-6 border-t border-white/5"
    >
      <div className="mx-auto max-w-6xl">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-sm uppercase tracking-widest text-clover font-mono">
            Sponsors
          </p>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-semibold tracking-tight">
            Want your logo here?
          </h2>
          <p className="mt-4 text-muted">
            We partner with companies who care about high schoolers building real things.
            Click any open slot to start the conversation.
          </p>
        </div>

        <details className="group mt-10 mx-auto max-w-3xl rounded-2xl border border-clover/30 bg-card overflow-hidden">
          <summary className="flex items-center justify-between gap-4 cursor-pointer list-none px-6 py-4 hover:bg-clover/5 transition-colors">
            <span className="font-display font-semibold text-base md:text-lg">
              View sponsorship packages
            </span>
            <span
              aria-hidden
              className="text-clover text-2xl transition-transform group-open:rotate-45 select-none"
            >
              +
            </span>
          </summary>

          <div className="px-6 pb-6 pt-2 border-t border-white/5">
            <ul className="space-y-4 mt-4">
              {SPONSORSHIP_PACKAGES.map((pkg) => (
                <li
                  key={pkg.name}
                  className="rounded-xl border border-white/10 bg-background/50 p-5"
                >
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="font-display font-semibold text-lg">
                      {pkg.name}
                    </h3>
                    <span className="font-mono text-clover text-sm">
                      {pkg.price}
                    </span>
                  </div>
                  <ul className="mt-3 space-y-1.5 text-sm text-muted">
                    {pkg.perks.map((perk) => (
                      <li key={perk} className="flex gap-2">
                        <span className="text-clover">›</span>
                        <span>{perk}</span>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a
                href="/sponsorship-packet.html"
                download="CloverHacks-Sponsorship-Packet.html"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-clover text-[#06160e] px-5 py-2.5 text-sm font-semibold hover:bg-clover/90 transition-colors"
              >
                Download packet
                <span aria-hidden>↓</span>
              </a>
              <a
                href={MAILTO}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-clover/40 text-clover px-5 py-2.5 text-sm font-semibold hover:bg-clover/10 transition-colors"
              >
                Email us
              </a>
            </div>
          </div>
        </details>

        <div className="mt-16 space-y-12">
          {TIERS.map((tier) => (
            <div key={tier.name}>
              <p
                className={`font-mono text-sm uppercase tracking-widest ${tier.accent}`}
              >
                {tier.name}
              </p>
              <ul className={`mt-4 grid gap-3 ${tier.cols}`}>
                {Array.from({ length: tier.slots }).map((_, i) => (
                  <li key={i}>
                    <a
                      href={MAILTO}
                      aria-label={`Inquire about ${tier.name} sponsorship`}
                      className={`group relative flex items-center justify-center aspect-[2/1] rounded-lg border border-dashed ${tier.border} bg-white/[0.015] hover:bg-clover/5 hover:border-clover/60 transition-colors`}
                    >
                      <span
                        aria-hidden
                        className="text-white/20 group-hover:text-clover text-3xl transition-colors select-none"
                      >
                        +
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
