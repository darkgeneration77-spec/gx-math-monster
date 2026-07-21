create extension if not exists pgcrypto;

create table if not exists players (
  id uuid primary key default gen_random_uuid(),
  room_code text not null,
  student_name text not null,
  class_name text,
  score integer not null default 0,
  current_world integer not null default 1,
  current_question integer not null default 0,
  correct_count integer not null default 0,
  answered_count integer not null default 0,
  corrections_completed integer not null default 0,
  updated_at timestamptz not null default now()
);

create index if not exists players_room_score_idx on players(room_code, score desc);

create table if not exists attempts (
  id uuid primary key default gen_random_uuid(),
  player_id uuid not null references players(id) on delete cascade,
  question_id text not null,
  category text not null,
  selected_answer integer,
  correct_answer integer not null,
  is_correct boolean not null,
  explanation text,
  corrected boolean not null default false,
  created_at timestamptz not null default now()
);

alter table players enable row level security;
alter table attempts enable row level security;

create policy "public room leaderboard read"
on players for select
using (true);

create policy "anonymous player insert"
on players for insert
with check (true);

create policy "anonymous player update"
on players for update
using (true)
with check (true);

create policy "anonymous attempts read"
on attempts for select
using (true);

create policy "anonymous attempts insert"
on attempts for insert
with check (true);

create policy "anonymous attempts update"
on attempts for update
using (true)
with check (true);

alter publication supabase_realtime add table players;
