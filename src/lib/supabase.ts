import { createClient } from "@supabase/supabase-js";

// Server-only client. Uses the service_role key, so it bypasses row-level
// security — never import this into client components or expose the key.
const url = process.env.SUPABASE_URL;
const key = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!url || !key) {
  throw new Error(
    "Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY in environment (.env.local).",
  );
}

export const supabase = createClient(url, key, {
  auth: { persistSession: false, autoRefreshToken: false },
});
