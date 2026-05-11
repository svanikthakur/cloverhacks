const POINTS = [
  {
    title: "Built for first-timers",
    body: "Beginner workshops, a dedicated track, and a friendlier judging rubric so your first hackathon doesn't feel like jumping into the deep end.",
  },
  {
    title: "Zero cost, all in",
    body: "Free admission, food, and swag. Just bring your laptop and your ideas.",
  },
  {
    title: "Ship something real",
    body: "We care more about a working demo than a polished slide deck. Build something you'd actually use Monday morning.",
  },
];

export function About() {
  return (
    <section id="about" className="relative py-28 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-sm uppercase tracking-widest text-clover font-mono">
              About
            </p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl font-semibold tracking-tight">
              A weekend that actually feels lucky.
            </h2>
            <p className="mt-6 text-muted text-lg leading-relaxed">
              Most hackathons feel like a sprint. Clover Hacks is more like a tiny
              festival. One day of building, eating, occasional panicking,
              and meeting the kind of people who say &ldquo;wait, what if we just&hellip;&rdquo;
              and mean it.
            </p>
          </div>

          <ul className="space-y-6">
            {POINTS.map((p) => (
              <li
                key={p.title}
                className="rounded-2xl border border-white/10 bg-card px-6 py-5"
              >
                <h3 className="font-display font-semibold text-lg">{p.title}</h3>
                <p className="mt-2 text-muted leading-relaxed">{p.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
