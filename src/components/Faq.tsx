import { faq } from "@/lib/event";

export function Faq() {
  return (
    <section id="faq" className="relative py-28 px-6 border-t border-white/5">
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <p className="text-sm uppercase tracking-widest text-clover font-mono">
            FAQ
          </p>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-semibold tracking-tight">
            Quick answers.
          </h2>
        </div>

        <ul className="mt-12 space-y-3">
          {faq.map((item) => (
            <li
              key={item.q}
              className="rounded-2xl border border-white/10 bg-card overflow-hidden"
            >
              <details className="group">
                <summary className="flex items-center justify-between cursor-pointer list-none px-6 py-5">
                  <span className="font-display font-medium text-lg pr-4">
                    {item.q}
                  </span>
                  <span
                    aria-hidden
                    className="text-clover text-2xl transition-transform group-open:rotate-45 select-none"
                  >
                    +
                  </span>
                </summary>
                <div className="px-6 pb-6 text-muted leading-relaxed">
                  {item.a}
                </div>
              </details>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
