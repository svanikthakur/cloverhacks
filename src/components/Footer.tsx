import { Clover } from "./Clover";
import { EVENT } from "@/lib/event";

export function Footer() {
  return (
    <footer className="border-t border-white/5 mt-auto">
      <div className="mx-auto max-w-6xl px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <Clover className="text-clover" size={32} />
          <span className="font-display font-semibold">Clover Hacks</span>
          <span className="text-muted text-sm ml-3">
            © {new Date().getFullYear()}
          </span>
        </div>

        <ul className="flex items-center gap-6 text-sm text-muted">
          <li>
            <a
              href={EVENT.socials.instagram}
              className="hover:text-foreground transition-colors"
            >
              Instagram
            </a>
          </li>
          <li>
            <a
              href={EVENT.socials.discord}
              className="hover:text-foreground transition-colors"
            >
              Discord
            </a>
          </li>
          <li>
            <a
              href={EVENT.socials.email}
              className="hover:text-foreground transition-colors"
            >
              Email
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
