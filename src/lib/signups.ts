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

const table = "signups";

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

function fromRow({ created_at, ...rest }: Row): Signup {
  return { ...rest, createdAt: created_at };
}

export async function getSignups(): Promise<Signup[]> {
  const { data, error } = await supabase
    .from(table)
    .select("*")
    .order("created_at", { ascending: false });
  if (error) throw new Error(`Failed to load signups: ${error.message}`);
  return (data ?? []).map(fromRow);
}

export async function addSignup(data: NewSignup): Promise<Signup> {
  const { data: row, error } = await supabase
    .from(table)
    .insert(data)
    .select()
    .single();
  if (error) throw new Error(`Failed to save signup: ${error.message}`);
  return fromRow(row as Row);
}

export async function deleteSignup(id: string): Promise<void> {
  const { error } = await supabase.from(table).delete().eq("id", id);
  if (error) throw new Error(`Failed to delete signup: ${error.message}`);
}

export async function hasEmail(email: string): Promise<boolean> {
  const normalized = email.trim();
  const { data, error } = await supabase
    .from(table)
    .select("id")
    .ilike("email", normalized)
    .limit(1);
  if (error) throw new Error(`Failed to check email: ${error.message}`);
  return (data ?? []).length > 0;
}
