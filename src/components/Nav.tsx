import Link from "next/link";
import { Clover } from "./Clover";
import { event } from "@/lib/event";

const links = [
  { href: "#about", label: "About" },
  { href: "#tracks", label: "Tracks" },
  { href: "#schedule", label: "Schedule" },
  { href: "#sponsors", label: "Sponsors" },
  { href: "#faq", label: "FAQ" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-background/60 border-b border-white/5">
      <nav className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <Clover className="text-clover transition-transform group-hover:rotate-12" size={38} />
          <span className="font-display font-semibold tracking-tight text-lg">
            Clover Hacks
          </span>
        </Link>

        <ul className="hidden md:flex items-center gap-8 text-sm text-muted">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-foreground transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={event.applyUrl}
          className="inline-flex items-center gap-2 rounded-full bg-clover text-[#06160e] px-4 py-2 text-sm font-semibold hover:bg-clover/90 transition-colors"
        >
          Register
          <span aria-hidden>→</span>
        </a>
      </nav>
    </header>
  );
}
