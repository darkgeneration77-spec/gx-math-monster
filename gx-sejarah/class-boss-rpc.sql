-- Run after class-boss-schema.sql
create or replace function public.gx_apply_class_boss_action(
  p_class_code text,
  p_student_name text,
  p_question_id text,
  p_is_correct boolean,
  p_damage integer,
  p_boss_heal integer,
  p_class_damage integer
) returns public.gx_class_boss_rooms
language plpgsql
security definer
set search_path = public
as $$
declare
  room public.gx_class_boss_rooms;
begin
  insert into public.gx_class_boss_rooms(class_code)
  values (upper(p_class_code))
  on conflict (class_code) do nothing;

  update public.gx_class_boss_rooms
  set boss_hp = greatest(0, least(boss_max_hp, boss_hp - greatest(0,p_damage) + greatest(0,p_boss_heal))),
      class_hp = greatest(0, class_hp - greatest(0,p_class_damage)),
      total_damage = total_damage + greatest(0,p_damage),
      total_heal = total_heal + greatest(0,p_boss_heal),
      phase = case
        when greatest(0, least(boss_max_hp, boss_hp - greatest(0,p_damage) + greatest(0,p_boss_heal))) <= boss_max_hp * 0.33 then 3
        when greatest(0, least(boss_max_hp, boss_hp - greatest(0,p_damage) + greatest(0,p_boss_heal))) <= boss_max_hp * 0.66 then 2
        else 1 end,
      status = case
        when greatest(0, least(boss_max_hp, boss_hp - greatest(0,p_damage) + greatest(0,p_boss_heal))) = 0 then 'victory'
        when greatest(0, class_hp - greatest(0,p_class_damage)) = 0 then 'defeat'
        else 'active' end,
      updated_at = now()
  where class_code = upper(p_class_code)
  returning * into room;

  insert into public.gx_class_boss_players(class_code,student_name,damage,correct_count,wrong_count,last_seen)
  values(upper(p_class_code),p_student_name,greatest(0,p_damage),case when p_is_correct then 1 else 0 end,case when p_is_correct then 0 else 1 end,now())
  on conflict(class_code,student_name) do update set
    damage = gx_class_boss_players.damage + excluded.damage,
    correct_count = gx_class_boss_players.correct_count + excluded.correct_count,
    wrong_count = gx_class_boss_players.wrong_count + excluded.wrong_count,
    last_seen = now();

  insert into public.gx_class_boss_actions(class_code,student_name,question_id,is_correct,damage,boss_heal,class_damage)
  values(upper(p_class_code),p_student_name,p_question_id,p_is_correct,greatest(0,p_damage),greatest(0,p_boss_heal),greatest(0,p_class_damage));

  return room;
end;
$$;

grant execute on function public.gx_apply_class_boss_action(text,text,text,boolean,integer,integer,integer) to anon;
