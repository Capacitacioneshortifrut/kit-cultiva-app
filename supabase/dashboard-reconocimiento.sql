-- ============================================================
-- DASHBOARD · RECONOCIMIENTO SINCERO (quién lo está usando)
-- Nueva función dash_reconocimiento(): por cada líder (no admin, activo)
-- cuántos reconocimientos guardó en el periodo y cuándo fue el último.
-- Respeta los mismos filtros del panel (Área / Nivel / Periodo).
-- NO modifica dash_resumen(). Correr UNA vez en el SQL Editor de Supabase.
--   p_area    : null|'' = todas | 'cosecha'|'produccion'|'packing'|'calidad'
--   p_nivel   : null|'' = todos | 'N1'|'N2'|'N3'|'N4'|'TAC'
--   p_periodo : 'semana' (por defecto) | 'mes' | 'acumulado'
-- Ids de ritual de reconocimiento: 'reconocimiento' y 'reconocimiento-sincero' (cal-n1).
-- ============================================================

create or replace function public.dash_reconocimiento(
  p_area text default null,
  p_nivel text default null,
  p_periodo text default 'semana'
) returns json language plpgsql stable security definer set search_path = public as $$
declare
  result json;
  v_desde timestamptz;
begin
  if not public.is_admin() then
    raise exception 'no autorizado';
  end if;

  v_desde := case lower(coalesce(p_periodo, 'semana'))
               when 'mes'       then date_trunc('month', now())
               when 'acumulado' then '-infinity'::timestamptz
               else date_trunc('week', now())
             end;

  with base as (
    select u.legajo, u.nombre, u.cargo,
      case split_part(u.perfil, '-', 1)
        when 'cos' then 'cosecha' when 'prod' then 'produccion'
        when 'pack' then 'packing' when 'cal' then 'calidad' else 'otro' end as area,
      upper(split_part(u.perfil, '-', 2)) as nivel
    from usuarios u
    where coalesce(u.es_admin, false) = false
      and coalesce(u.activo, true) = true
      and u.perfil is not null
  ),
  sel as (
    select * from base
    where (p_area is null or p_area = '' or area = lower(p_area))
      and (p_nivel is null or p_nivel = '' or nivel = upper(p_nivel))
  ),
  rec as (
    select r.legajo, count(*)::int as n, max(r.created_at) as ultimo
    from registros r
    join sel s on s.legajo = r.legajo
    where r.created_at >= v_desde
      and r.ritual_id in ('reconocimiento', 'reconocimiento-sincero')
    group by r.legajo
  )
  select coalesce(json_agg(json_build_object(
           'legajo', s.legajo, 'nombre', s.nombre, 'cargo', s.cargo,
           'area', s.area, 'nivel', s.nivel,
           'n', coalesce(rec.n, 0), 'ultimo', rec.ultimo)
         order by coalesce(rec.n, 0) desc, rec.ultimo desc nulls last, s.nombre), '[]')
  into result
  from sel s left join rec on rec.legajo = s.legajo;

  return result;
end;
$$;
grant execute on function public.dash_reconocimiento(text, text, text) to authenticated;
