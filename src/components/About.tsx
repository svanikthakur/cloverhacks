const POINTS = [
  {
    title: "Made for first-timers",
    body: "Never been to a hackathon? Good. We run beginner workshops, keep a track just for newcomers, and grade first projects on a gentler curve.",
  },
  {
    title: "Free, actually free",
    body: "Admission, food, and swag are all on us. Show up with a laptop and something you want to make.",
  },
  {
    title: "Build, don't pitch",
    body: "We'd rather see a rough demo that works than a perfect slide deck. Make something you'd actually open again next week.",
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
              A hackathon that doesn&apos;t take itself too seriously.
            </h2>
            <p className="mt-6 text-muted text-lg leading-relaxed">
              Most hackathons feel like a race. This one feels more like a really
              productive party. You get a day to build, eat, get a little stuck,
              and figure it out next to people who are just as excited as you are.
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
