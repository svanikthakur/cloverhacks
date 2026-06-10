-- Clover Hacks signups table.
-- Run this once in the Supabase dashboard: SQL Editor -> New query -> paste -> Run.

create extension if not exists pgcrypto;

create table if not exists public.signups (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  school text not null,
  grade text not null,
  track text not null default '',
  experience text not null default '',
  dietary text not null default '',
  created_at timestamptz not null default now()
);

-- Prevent duplicate signups (case-insensitive email).
create unique index if not exists signups_email_unique on public.signups (lower(email));

-- Lock the table down: only the server (service_role key) can read/write it.
alter table public.signups enable row level security;
