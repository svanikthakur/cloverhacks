"use client";

import { useActionState } from "react";
import Link from "next/link";
import { registerSignup, type RegisterState } from "@/app/actions";
import { Clover } from "./Clover";

const initialState: RegisterState = { ok: false };

const inputClass =
  "w-full rounded-xl bg-background border border-white/15 px-4 py-3 text-foreground placeholder:text-muted/70 focus:outline-none focus:border-clover transition-colors";
const labelClass = "block text-sm font-medium text-foreground/90 mb-1.5";

export function RegisterForm({
  tracks,
}: {
  tracks: { title: string }[];
}) {
  const [state, formAction, pending] = useActionState(
    registerSignup,
    initialState,
  );

  if (state.ok) {
    return (
      <div className="text-center py-10">
        <Clover className="mx-auto text-clover" size={72} />
        <h2 className="mt-6 font-display text-3xl font-semibold">
          You&apos;re in{state.name ? `, ${state.name.split(" ")[0]}` : ""}! 🍀
        </h2>
        <p className="mt-3 text-muted max-w-md mx-auto">
          Your spot is saved. We&apos;ll email you with details as the event gets
          closer. Now go get lucky.
        </p>
        <Link
          href="/"
          className="mt-8 inline-block rounded-full border border-white/15 px-6 py-3 font-medium hover:bg-white/5 transition-colors"
        >
          Back to home
        </Link>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-5">
      {state.error && (
        <p className="rounded-xl border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm text-red-300">
          {state.error}
        </p>
      )}

      <div>
        <label htmlFor="name" className={labelClass}>
          Full name
        </label>
        <input id="name" name="name" required className={inputClass} placeholder="Ada Lovelace" />
      </div>

      <div>
        <label htmlFor="email" className={labelClass}>
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className={inputClass}
          placeholder="you@school.edu"
        />
      </div>

      <div>
        <label htmlFor="school" className={labelClass}>
          School
        </label>
        <input id="school" name="school" required className={inputClass} placeholder="Lincoln High School" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="grade" className={labelClass}>
            Grade
          </label>
          <select id="grade" name="grade" required defaultValue="" className={inputClass}>
            <option value="" disabled>
              Select grade
            </option>
            <option value="9">9th</option>
            <option value="10">10th</option>
            <option value="11">11th</option>
            <option value="12">12th</option>
          </select>
        </div>

        <div>
          <label htmlFor="experience" className={labelClass}>
            Experience level
          </label>
          <select id="experience" name="experience" defaultValue="Beginner" className={inputClass}>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="track" className={labelClass}>
          Which track interests you most?
        </label>
        <select id="track" name="track" defaultValue={tracks[0]?.title ?? ""} className={inputClass}>
          {tracks.map((t) => (
            <option key={t.title} value={t.title}>
              {t.title}
            </option>
          ))}
          <option value="Undecided">Not sure yet</option>
        </select>
      </div>

      <div>
        <label htmlFor="dietary" className={labelClass}>
          Dietary restrictions <span className="text-muted font-normal">(optional)</span>
        </label>
        <input
          id="dietary"
          name="dietary"
          className={inputClass}
          placeholder="Vegetarian, allergies, none…"
        />
      </div>

      <button
        type="submit"
        disabled={pending}
        className="w-full rounded-full bg-clover text-[#06160e] px-6 py-3.5 font-semibold hover:bg-clover/90 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {pending ? "Saving your spot…" : "Lock in my spot 🍀"}
      </button>
    </form>
  );
}
