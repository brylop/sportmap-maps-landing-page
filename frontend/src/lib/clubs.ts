/**
 * Directorio público de clubes — datos para /clubes y /clubes/:slug.
 *
 * La fuente es src/data/directorio.json, que escribe scripts/fetch-directorio.mjs
 * en cada build desde la RPC list_public_school_directory() (solo campos
 * publicables de escuelas con perfil público). Aquí solo se normaliza: ciudades
 * escritas de cinco formas, deportes en inglés o en mayúsculas, horarios por día.
 *
 * Dos tipos de ficha:
 *  - cliente (is_client): escuela que opera en SportMaps → página completa e
 *    indexable, con "Hecho con SportMaps".
 *  - directorio: registro público importado, sin dueño en SportMaps → ficha
 *    corta con "¿Es tu club? Reclama tu página". Va con noindex: son textos de
 *    una línea y Google castiga cientos de páginas delgadas.
 */
import rawDirectory from "@/data/directorio.json";

export interface ClubScheduleSlot {
  day: number;
  time?: string;
  end?: string;
  place?: string;
}

export interface ClubTeam {
  name: string;
  sport: string | null;
  age_group: string | null;
  age_min: number | null;
  age_max: number | null;
  level: string | null;
  schedule: ClubScheduleSlot[] | null;
  location: string | null;
  accepts_new: boolean | null;
  price_monthly: number | null;
}

export interface ClubBranch {
  name: string | null;
  city: string | null;
  address: string | null;
  lat: number | null;
  lng: number | null;
  is_main: boolean | null;
}

export interface Club {
  slug: string;
  name: string;
  city: string | null;
  school_type: string | null;
  sports: string[];
  logo_url: string | null;
  cover_image_url: string | null;
  verified: boolean;
  is_client: boolean;
  description: string | null;
  business_hours: unknown;
  teams: ClubTeam[];
  price_from: number | null;
  branches: ClubBranch[];
  staff: { full_name: string; specialty: string | null }[];
  updated_at: string | null;
}

export const SITE_URL = "https://sportmaps.co";
export const APP_URL = "https://app.sportmaps.co";

const SPORT_ALIASES: Record<string, string> = {
  volleyball: "Voleibol",
  voleibol: "Voleibol",
  "voley": "Voleibol",
  football: "Fútbol",
  soccer: "Fútbol",
  futbol: "Fútbol",
  "fútbol": "Fútbol",
  basketball: "Baloncesto",
  baloncesto: "Baloncesto",
  swimming: "Natación",
  natacion: "Natación",
  "natación": "Natación",
  gymnastics: "Gimnasia",
  tennis: "Tenis",
  skating: "Patinaje",
  patinaje: "Patinaje",
};

export function normalizeSport(s: string | null | undefined): string | null {
  if (!s) return null;
  const key = s.trim().toLowerCase();
  if (SPORT_ALIASES[key]) return SPORT_ALIASES[key];
  const t = s.trim();
  // "MULTIDEPORTE" → "Multideporte"
  return t === t.toUpperCase() ? t.charAt(0) + t.slice(1).toLowerCase() : t;
}

export function normalizeCity(c: string | null | undefined): string | null {
  if (!c) return null;
  const k = c
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/\./g, "");
  if (k === "colombia") return null;
  if (k.startsWith("bogota")) return "Bogotá";
  if (k.startsWith("medellin")) return "Medellín";
  if (k === "cali") return "Cali";
  const t = c.trim();
  return t === t.toUpperCase()
    ? t.toLowerCase().replace(/(^|\s)\S/g, (m) => m.toUpperCase())
    : t;
}

export function citySlug(city: string): string {
  return city
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

/** Deportes del club: los declarados + los de sus equipos, sin duplicar. */
export function clubSports(c: Club): string[] {
  const all = [...(c.sports ?? []), ...c.teams.map((t) => t.sport ?? "")]
    .map(normalizeSport)
    .filter((s): s is string => !!s && s.length > 1);
  return [...new Set(all)];
}

export function clubCity(c: Club): string | null {
  return normalizeCity(c.city) ?? normalizeCity(c.branches.find((b) => b.city)?.city) ?? null;
}

/** Las fichas importadas traen fotos genéricas de stock: no se muestran. */
export function clubLogo(c: Club): string | null {
  if (!c.logo_url || /unsplash\.com|placeholder/i.test(c.logo_url)) return null;
  return c.logo_url;
}

const DAYS = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];

export function formatSchedule(slots: ClubScheduleSlot[] | null): string[] {
  if (!Array.isArray(slots) || slots.length === 0) return [];
  return [...slots]
    .sort((a, b) => ((a.day + 6) % 7) - ((b.day + 6) % 7))
    .map((s) => {
      const day = DAYS[s.day] ?? "";
      const hours = s.time ? `${s.time}${s.end ? `–${s.end}` : ""}` : "";
      return [day, hours].filter(Boolean).join(" ");
    });
}

export function formatAges(t: ClubTeam): string | null {
  if (t.age_min != null && t.age_max != null) return `${t.age_min} a ${t.age_max} años`;
  if (t.age_min != null) return `Desde ${t.age_min} años`;
  if (t.age_max != null) return `Hasta ${t.age_max} años`;
  return null;
}

export function formatCop(n: number): string {
  return `$${Math.round(n).toLocaleString("es-CO")}`;
}

const TYPE_LABEL: Record<string, string> = {
  academy: "Escuela deportiva",
  club: "Club deportivo",
  hybrid: "Club y escuela deportiva",
  gimnasio: "Gimnasio",
  association: "Asociación deportiva",
  federation: "Federación deportiva",
  institute: "Ente de deporte",
};

export function clubTypeLabel(c: Club): string {
  return TYPE_LABEL[c.school_type ?? ""] ?? "Organización deportiva";
}

export const clubs: Club[] = (rawDirectory as unknown as Club[]).filter((c) => !!c.slug && !!c.name);

export const clientClubs = clubs.filter((c) => c.is_client);

export function getClubBySlug(slug: string): Club | undefined {
  return clubs.find((c) => c.slug === slug);
}
