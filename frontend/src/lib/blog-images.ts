/**
 * Foto real de portada para cada post del blog (antes: degradado verde + emoji).
 *
 * Fotos de Unsplash (licencia Unsplash: uso libre, sin atribución obligatoria),
 * revisadas una por una en una hoja de contactos el 2026-10-15. Se elige por
 * palabras clave del slug; si nada coincide, por categoría; y si tampoco, una
 * foto deportiva genérica estable por slug (el mismo post siempre da la misma).
 *
 * Si un post define `image`, esa manda.
 */
import type { BlogPost } from "./blog-posts";

const U = (id: string) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&q=70`;

const P = {
  estadioNoche: U("1431324155629-1a6deb1dec8d"),
  balonCesped: U("1574629810360-7efbbe195018"),
  balonGuayos: U("1579952363873-27f3bade9f55"),
  futbolJuvenil: U("1517466787929-bc90951d0974"),
  voleibol: U("1612872087720-bb876e2e67d1"),
  voleibolPlaya: U("1592656094267-764a45160876"),
  natacionMariposa: U("1530549387789-4c1017266635"),
  natacionLibre: U("1519315901367-f34ff9154487"),
  baloncestoAro: U("1546519638-68e109498ffc"),
  baloncestoBalon: U("1519861531473-9200262188bf"),
  tenisArcilla: U("1554068865-24cecd4e34b8"),
  tenisJugador: U("1622279457486-62dcc4a431d6"),
  karate: U("1555597673-b21d5c935865"),
  corredores: U("1552674605-db6ffd4facb5"),
  atletismo: U("1461896836934-ffe607ba8211"),
  ciclismo: U("1517649763962-0c623066013b"),
  pagoMostrador: U("1556742049-0cfed4f6a45d"),
  pagoTarjeta: U("1563013544-824ae1b704d3"),
  datafono: U("1601597111158-2fceff292cdc"),
  whatsapp: U("1611746872915-64382b5c76da"),
  celularApps: U("1512941937669-90a1b58e7e9c"),
  ninosEntrenador: U("1526232761682-d26e03ac148e"),
  bogota: U("1568632234157-ce7aecd03d0d"),
  balones: U("1551958219-acbc608c6377"),
  partidoJuvenil: U("1543326727-cf6c39e8f84c"),
  trofeo: U("1518091043644-c1d4457512c6"),
  ejercicio: U("1571019613454-1cb2f99b2d8b"),
  fisioterapia: U("1571019614242-c5c5dee9f50b"),
  saludDatos: U("1576091160550-2173dba999ef"),
  contabilidad: U("1554224155-6726b3ff858f"),
  firmaContrato: U("1450101499163-c8848c66ca85"),
  planificacion: U("1434030216411-0b793f4b4173"),
  arco: U("1517927033932-b3d18e61fb3a"),
  futsal: U("1606925797300-0b35e9d1794e"),
  remate: U("1560272564-c83b66b1ad12"),
  yogaDanza: U("1544367567-0f2fcb009e0b"),
  gimnasio: U("1599058917212-d750089bc07e"),
  bicicleta: U("1530143584546-02191bc84eb5"),
  arena: U("1504450758481-7338eba7524a"),
};

/** Orden importa: la primera regla que coincide con el slug gana. */
const BY_SLUG: [RegExp, string | string[]][] = [
  [/bre-?b/, P.datafono],
  [/whatsapp-business|whatsapp-ia|leer-comprobantes|validacion|comprobante/, P.whatsapp],
  [/grupos-de-whatsapp|recordatorio/, P.celularApps],
  [/wompi|mercado-pago|pagar-mensualidad|cobrar-mensualidades|mejor-app-para-cobrar/, P.pagoTarjeta],
  [/mora|cuanto-cobra|precio-mensualidad|inscripcion-vs/, P.pagoMostrador],
  [/conciliar|facturacion|dian|contab|kpis/, P.contabilidad],
  [/contrato|reglamento|ley-1581|datos-de-menores|poliza|reconocimiento|paz-y-salvo|prestacion/, P.firmaContrato],
  [/planificacion|mesociclo|pizarra|calendario-temporada|ajedrez/, P.planificacion],
  [/futsal|futbol-sala/, P.futsal],
  [/volei|volley|dynasty|monster/, P.voleibol],
  [/natacion/, P.natacionMariposa],
  [/baloncesto/, P.baloncestoAro],
  [/tenis|padel/, P.tenisJugador],
  [/artes-marciales|karate|taekwondo/, P.karate],
  [/danza|yoga|porrismo|cheer|gimnasia|dreamers/, P.yogaDanza],
  [/atletismo/, P.atletismo],
  [/ciclismo/, P.ciclismo],
  [/patinaje/, P.corredores],
  [/rugby|beisbol|softbol/, P.partidoJuvenil],
  [/gym-rm|torniquete|crossfit|control-de-acceso/, P.gimnasio],
  [/carnet|pagina-web|app/, P.celularApps],
  [/informe|salud|fisio|retiran|por-que-se/, P.fisioterapia],
  [/torneo|gestion-torneos/, P.trofeo],
  [/tienda|uniformes/, P.balonGuayos],
  [/bogota/, P.bogota],
  [/elegir-escuela|categorias|abrir-una-escuela|entrenador|asistencia|escuelas-de-futbol|digitalizar/, P.ninosEntrenador],
  // Comparativas: rotan entre fotos neutras (no la de estetoscopio, que parece de salud).
  [/vs-|alternativas|mejor-software|cuanto-cuesta|excel-vs|comparativa/, [P.pagoTarjeta, P.celularApps, P.planificacion, P.balones, P.estadioNoche, P.pagoMostrador]],
  [/estadisticas|metricas/, P.partidoJuvenil],
];

const BY_CATEGORY: Record<string, string> = {
  "Cobros y pagos": P.pagoTarjeta,
  "WhatsApp IA": P.whatsapp,
  "Para familias": P.ninosEntrenador,
  "Casos de éxito": P.voleibol,
  Comparativas: P.celularApps,
  Análisis: P.contabilidad,
  Guías: P.planificacion,
  Organización: P.ninosEntrenador,
  Tecnología: P.celularApps,
  Producto: P.celularApps,
};

const GENERIC = [P.futbolJuvenil, P.partidoJuvenil, P.balones, P.arco, P.remate, P.estadioNoche, P.balonCesped, P.arena];

function hash(s: string): number {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) | 0;
  return Math.abs(h);
}

export function postImage(post: Pick<BlogPost, "slug" | "category" | "image">, width = 1200): string {
  if (post.image && !/sportmaps-logo|logo\.jpg/.test(post.image)) return post.image;
  const hit = BY_SLUG.find(([re]) => re.test(post.slug))?.[1];
  const pick = Array.isArray(hit) ? hit[hash(post.slug) % hit.length] : hit;
  const base = pick ?? BY_CATEGORY[post.category] ?? GENERIC[hash(post.slug) % GENERIC.length];
  return `${base}&w=${width}`;
}
