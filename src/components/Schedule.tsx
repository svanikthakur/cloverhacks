import { schedule } from "@/lib/event";

export function Schedule() {
  return (
    <section id="schedule" className="relative py-28 px-6 border-t border-white/5">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-widest text-clover font-mono">
            Schedule
          </p>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-semibold tracking-tight">
            One day, packed.
          </h2>
          <p className="mt-4 text-muted text-lg">
            Still tentative. The times might move around; the food won&apos;t.
          </p>
        </div>

        <div className="mt-14 grid gap-10 md:grid-cols-2">
          {schedule.map((day) => (
            <div key={day.day}>
              <h3 className="font-display text-2xl font-semibold mb-6 flex items-center gap-3">
                {day.day}
                <span className="h-px flex-1 bg-white/10" />
              </h3>
              <ol className="space-y-1">
                {day.items.map((item) => (
                  <li
                    key={item.time + item.title}
                    className="flex items-start gap-5 py-3 border-b border-white/5 last:border-0"
                  >
                    <span className="font-mono text-sm text-clover w-20 shrink-0 pt-0.5">
                      {item.time}
                    </span>
                    <span className="text-foreground">{item.title}</span>
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
