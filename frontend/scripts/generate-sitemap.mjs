/**
 * generate-sitemap.mjs — genera public/sitemap.xml desde el código fuente
 * (blog-posts.ts, comparisons.ts, help-articles.ts), en vez de mantenerlo a
 * mano.
 *
 * Por qué existe: hasta 2026-08-25 el sitemap era un XML editado manualmente.
 * Cuatro comparativas que ya existían en comparisons.ts nunca se agregaron —
 * nunca se indexaron, y el prerender (que lee las rutas DEL sitemap) tampoco
 * las generaba como HTML estático. Este script hace que "agregar un post o
 * una comparativa" sea automáticamente "agregarlo al sitemap", sin un paso
 * manual que se pueda olvidar.
 *
 * Usa `server.ssrLoadModule` de Vite para importar los .ts fuente
 * directamente (mismo patrón que ya usa prerender.mjs importando la API de
 * Vite) — sin agregar tsx/ts-node como dependencia nueva solo para esto.
 *
 * Se corre ANTES de `vite build` (ver package.json): el sitemap tiene que
 * existir en public/ antes de que el build lo copie a build/, y antes de que
 * prerender.mjs lea sus rutas.
 */
import { createServer } from 'vite';
import { writeFile } from 'node:fs/promises';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const projectRoot = resolve(__dirname, '..');
const sitemapPath = resolve(projectRoot, 'public/sitemap.xml');

const SITE_URL = 'https://sportmaps.co';

// Páginas que no vienen de una fuente de datos — el resto del sitio.
const STATIC_ROUTES = [
  { loc: '/', changefreq: 'weekly', priority: '1.0' },
  { loc: '/planes', changefreq: 'weekly', priority: '0.95' },
  { loc: '/escuelas', changefreq: 'weekly', priority: '0.9' },
  { loc: '/entrenadores', changefreq: 'weekly', priority: '0.9' },
  { loc: '/deportistas', changefreq: 'weekly', priority: '0.9' },
  { loc: '/eventos', changefreq: 'weekly', priority: '0.9' },
  { loc: '/federaciones', changefreq: 'weekly', priority: '0.85' },
  { loc: '/bienestar', changefreq: 'weekly', priority: '0.85' },
  { loc: '/marcas', changefreq: 'weekly', priority: '0.85' },
  { loc: '/proveedores', changefreq: 'weekly', priority: '0.85' },
  { loc: '/servicios', changefreq: 'weekly', priority: '0.85' },
  { loc: '/equipamiento', changefreq: 'weekly', priority: '0.8' },
  { loc: '/blog', changefreq: 'weekly', priority: '0.8' },
  { loc: '/calculadora', changefreq: 'monthly', priority: '0.9' },
  { loc: '/casos-exito', changefreq: 'monthly', priority: '0.7' },
  { loc: '/sobre-nosotros', changefreq: 'monthly', priority: '0.7' },
  { loc: '/partners', changefreq: 'monthly', priority: '0.7' },
  { loc: '/ayuda', changefreq: 'monthly', priority: '0.8' },
  { loc: '/privacidad', changefreq: 'yearly', priority: '0.4' },
  { loc: '/terminos', changefreq: 'yearly', priority: '0.4' },
  { loc: '/tratamiento-datos', changefreq: 'yearly', priority: '0.4' },
];

// La comparativa contra el rival explícito va con prioridad más alta que el
// resto — mismo criterio que ya tenía el sitemap a mano.
const COMPARISON_PRIORITY = { 'controla-club': '0.95' };

function escapeXml(s) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function buildXml(urls) {
  const body = urls
    .map(
      (u) =>
        `  <url><loc>${escapeXml(SITE_URL + u.loc)}</loc><lastmod>${u.lastmod}</lastmod><changefreq>${u.changefreq}</changefreq><priority>${u.priority}</priority></url>`,
    )
    .join('\n');
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`;
}

async function main() {
  const server = await createServer({
    root: projectRoot,
    server: { middlewareMode: true },
    appType: 'custom',
  });

  const [{ blogPosts }, { comparisons }, { helpArticles }] = await Promise.all([
    server.ssrLoadModule('/src/lib/blog-posts.ts'),
    server.ssrLoadModule('/src/lib/comparisons.ts'),
    server.ssrLoadModule('/src/lib/help-articles.ts'),
  ]);

  await server.close();

  const today = new Date().toISOString().slice(0, 10);

  const urls = [
    ...STATIC_ROUTES.map((r) => ({ ...r, lastmod: today })),
    ...blogPosts.map((p) => ({
      loc: `/blog/${p.slug}`,
      lastmod: (p.isoDateModified || p.isoDate || today).slice(0, 10),
      changefreq: 'monthly',
      priority: '0.75',
    })),
    ...comparisons.map((c) => ({
      loc: `/comparar/${c.slug}`,
      lastmod: today,
      changefreq: 'monthly',
      priority: COMPARISON_PRIORITY[c.slug] || '0.85',
    })),
    ...helpArticles.map((a) => ({
      loc: `/ayuda/${a.slug}`,
      lastmod: today,
      changefreq: 'monthly',
      priority: '0.7',
    })),
  ];

  await writeFile(sitemapPath, buildXml(urls), 'utf-8');
  console.log(`✅ sitemap.xml generado — ${urls.length} URLs (${blogPosts.length} posts, ${comparisons.length} comparativas, ${helpArticles.length} artículos de ayuda, ${STATIC_ROUTES.length} páginas estáticas)`);
}

main().catch((err) => {
  console.error('\n❌ generate-sitemap crashó:', err);
  process.exit(1);
});
