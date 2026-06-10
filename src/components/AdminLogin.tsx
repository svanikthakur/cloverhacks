"use client";

import { useActionState } from "react";
import { adminLogin, type LoginState } from "@/app/actions";

const initialState: LoginState = {};

export function AdminLogin() {
  const [state, formAction, pending] = useActionState(adminLogin, initialState);

  return (
    <form action={formAction} className="space-y-4">
      {state.error && (
        <p className="rounded-xl border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm text-red-300">
          {state.error}
        </p>
      )}
      <div>
        <label htmlFor="password" className="block text-sm font-medium text-foreground/90 mb-1.5">
          Admin password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          required
          autoFocus
          className="w-full rounded-xl bg-background border border-white/15 px-4 py-3 text-foreground focus:outline-none focus:border-clover transition-colors"
          placeholder="••••••••"
        />
      </div>
      <button
        type="submit"
        disabled={pending}
        className="w-full rounded-full bg-clover text-[#06160e] px-6 py-3 font-semibold hover:bg-clover/90 transition-colors disabled:opacity-60"
      >
        {pending ? "Checking…" : "Enter dashboard"}
      </button>
    </form>
  );
}
