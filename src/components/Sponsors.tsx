export function Sponsors() {
  return (
    <section className="relative py-24 px-6 border-t border-white/5">
      <div className="mx-auto max-w-6xl text-center">
        <p className="text-sm uppercase tracking-widest text-clover font-mono">
          Sponsors
        </p>
        <h2 className="mt-3 font-display text-3xl md:text-4xl font-semibold tracking-tight">
          Want your logo here?
        </h2>
        <p className="mt-4 text-muted max-w-xl mx-auto">
          We partner with companies who care about students building real things.
          Reach 200+ student builders and the people who hire them.
        </p>
        <a
          href="mailto:sponsors@cloverhacks.org"
          className="mt-8 inline-flex items-center gap-2 rounded-full border border-clover/40 text-clover px-6 py-3 font-semibold hover:bg-clover/10 transition-colors"
        >
          Become a sponsor
          <span aria-hidden>→</span>
        </a>
      </div>
    </section>
  );
}
