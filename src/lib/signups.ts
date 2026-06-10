import { supabase } from "./supabase";

export type Signup = {
  id: string;
  name: string;
  email: string;
  school: string;
  grade: string;
  track: string;
  experience: string;
  dietary: string;
  createdAt: string;
};

export type NewSignup = Omit<Signup, "id" | "createdAt">;

// Signups live in a Supabase (Postgres) table named `signups`. This persists
// in production no matter where the app is deployed. The rest of the app only
// touches the functions below, so the storage backend stays isolated here.
const TABLE = "signups";

type Row = {
  id: string;
  name: string;
  email: string;
  school: string;
  grade: string;
  track: string;
  experience: string;
  dietary: string;
  created_at: string;
};

function fromRow(r: Row): Signup {
  return {
    id: r.id,
    name: r.name,
    email: r.email,
    school: r.school,
    grade: r.grade,
    track: r.track,
    experience: r.experience,
    dietary: r.dietary,
    createdAt: r.created_at,
  };
}

export async function getSignups(): Promise<Signup[]> {
  const { data, error } = await supabase
    .from(TABLE)
    .select("*")
    .order("created_at", { ascending: false });
  if (error) throw new Error(`Failed to load signups: ${error.message}`);
  return (data ?? []).map(fromRow);
}

export async function addSignup(data: NewSignup): Promise<Signup> {
  const { data: row, error } = await supabase
    .from(TABLE)
    .insert({
      name: data.name,
      email: data.email,
      school: data.school,
      grade: data.grade,
      track: data.track,
      experience: data.experience,
      dietary: data.dietary,
    })
    .select()
    .single();
  if (error) throw new Error(`Failed to save signup: ${error.message}`);
  return fromRow(row as Row);
}

export async function deleteSignup(id: string): Promise<void> {
  const { error } = await supabase.from(TABLE).delete().eq("id", id);
  if (error) throw new Error(`Failed to delete signup: ${error.message}`);
}

export async function hasEmail(email: string): Promise<boolean> {
  const normalized = email.trim();
  const { data, error } = await supabase
    .from(TABLE)
    .select("id")
    .ilike("email", normalized)
    .limit(1);
  if (error) throw new Error(`Failed to check email: ${error.message}`);
  return (data ?? []).length > 0;
}
