"use client";

import { useMemo, useState } from "react";
import type { Signup } from "@/lib/signups";
import { removeSignup, adminLogout } from "@/app/actions";

function StatTile({ label, value }: { label: string; value: number | string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.02] px-5 py-4">
      <div className="font-display text-3xl font-semibold text-clover">{value}</div>
      <div className="mt-0.5 text-xs uppercase tracking-wider text-muted">{label}</div>
    </div>
  );
}

function formatDate(iso: string): string {
  const d = new Date(iso);
  const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
  ];
  return `${months[d.getUTCMonth()]} ${d.getUTCDate()}, ${d.getUTCFullYear()}`;
}

export function AdminDashboard({ signups }: { signups: Signup[] }) {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return signups;
    return signups.filter((s) =>
      [s.name, s.email, s.school, s.track, s.grade, s.experience]
        .join(" ")
        .toLowerCase()
        .includes(q),
    );
  }, [signups, query]);

  const beginners = signups.filter((s) => s.experience === "Beginner").length;
  const schools = new Set(signups.map((s) => s.school.trim().toLowerCase())).size;

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="font-display text-3xl md:text-4xl font-semibold tracking-tight">
            Signups
          </h1>
          <p className="mt-1 text-muted text-sm">Manage everyone registered for Clover Hacks.</p>
        </div>
        <div className="flex items-center gap-2">
          <a
            href="/admin/export"
            className="rounded-full border border-white/15 px-4 py-2 text-sm font-medium hover:bg-white/5 transition-colors"
          >
            Export CSV
          </a>
          <form action={adminLogout}>
            <button
              type="submit"
              className="rounded-full border border-white/15 px-4 py-2 text-sm font-medium text-muted hover:text-foreground hover:bg-white/5 transition-colors"
            >
              Log out
            </button>
          </form>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-3">
        <StatTile label="Total signups" value={signups.length} />
        <StatTile label="Beginners" value={beginners} />
        <StatTile label="Schools" value={schools} />
        <StatTile label="Showing" value={filtered.length} />
      </div>

      <input
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search by name, email, school, track…"
        className="mt-6 w-full rounded-xl bg-background border border-white/15 px-4 py-3 text-foreground placeholder:text-muted/70 focus:outline-none focus:border-clover transition-colors"
      />

      {filtered.length === 0 ? (
        <p className="mt-12 text-center text-muted">
          {signups.length === 0 ? "No signups yet." : "No matches for that search."}
        </p>
      ) : (
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          {filtered.map((s) => (
            <div
              key={s.id}
              className="group relative rounded-2xl border border-white/10 bg-white/[0.02] p-5 hover:border-clover/30 transition-colors"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="font-display text-lg font-semibold">{s.name}</div>
                <span className="shrink-0 rounded-full bg-clover/10 border border-clover/30 px-2.5 py-0.5 text-xs font-medium text-clover">
                  Grade {s.grade}
                </span>
              </div>
              <div className="mt-1 text-sm text-muted">
                {s.school}
                {s.track ? ` · ${s.track}` : ""}
              </div>
              <a
                href={`mailto:${s.email}`}
                className="mt-2 inline-block text-sm text-foreground/90 hover:text-clover transition-colors"
              >
                {s.email}
              </a>
              <div className="mt-3 flex flex-wrap items-end justify-between gap-x-3 gap-y-1">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted">
                  <span>{s.experience}</span>
                  {s.dietary && <span>· 🍽 {s.dietary}</span>}
                  <span>· Signed up {formatDate(s.createdAt)}</span>
                </div>
                <form action={removeSignup}>
                  <input type="hidden" name="id" value={s.id} />
                  <button
                    type="submit"
                    title="Remove signup"
                    className="opacity-0 group-hover:opacity-100 text-muted hover:text-red-400 transition-all text-xs"
                  >
                    Remove
                  </button>
                </form>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
