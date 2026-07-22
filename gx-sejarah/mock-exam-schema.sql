-- GX Sejarah V2.7 Mock Exam Results
create table if not exists public.gx_mock_exam_results (
  id uuid primary key default gen_random_uuid(),
  class_code text not null,
  student_name text not null,
  exam_mode text not null default 'standard',
  score integer not null default 0,
  total integer not null default 0,
  percentage numeric(5,2) not null default 0,
  grade text not null default 'G',
  duration_seconds integer not null default 0,
  wrong_question_ids text[] not null default '{}',
  submitted_at timestamptz not null default now(),
  unique(class_code, student_name, exam_mode, submitted_at)
);

create index if not exists gx_mock_exam_results_class_idx
  on public.gx_mock_exam_results(class_code, submitted_at desc);

alter table public.gx_mock_exam_results enable row level security;

drop policy if exists "mock_exam_read" on public.gx_mock_exam_results;
create policy "mock_exam_read" on public.gx_mock_exam_results
for select using (true);

drop policy if exists "mock_exam_insert" on public.gx_mock_exam_results;
create policy "mock_exam_insert" on public.gx_mock_exam_results
for insert with check (
  char_length(class_code) between 2 and 20
  and char_length(student_name) between 1 and 50
  and score >= 0 and total > 0 and score <= total
  and percentage >= 0 and percentage <= 100
);

alter publication supabase_realtime add table public.gx_mock_exam_results;
