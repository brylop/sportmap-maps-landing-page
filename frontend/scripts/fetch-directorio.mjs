/**
 * fetch-directorio.mjs — descarga el directorio público de clubes y lo deja en
 * src/data/directorio.json para que generate-sitemap y el prerender generen una
 * página estática por club (sportmaps.co/clubes/<slug>).
 *
 * Fuente: RPC list_public_school_directory() (migración 20261014212441 del repo
 * de la app). Es SECURITY INVOKER y solo devuelve campos publicables de las
 * escuelas con perfil público: sin contacto, pagos ni deportistas. Por eso basta
 * la llave anónima, que es pública por diseño.
 *
 * Si la red o la base fallan, el build NO se cae: se queda con el último
 * snapshot commiteado. Un club que apaga su perfil público desaparece en el
 * siguiente build exitoso.
 */
import { readFile, writeFile } from 'node:fs/promises';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const outPath = resolve(__dirname, '../src/data/directorio.json');

// Públicos por diseño (los mismos que usa cualquier navegador en la app).
const SUPABASE_URL = process.env.VITE_SUPABASE_URL || 'https://luebjarufsiadojhvxgi.supabase.co';
const ANON_KEY =
  process.env.VITE_SUPABASE_PUBLISHABLE_KEY ||
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx1ZWJqYXJ1ZnNpYWRvamh2eGdpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTg5MTU2NTgsImV4cCI6MjA3NDQ5MTY1OH0.yfmAH4N9UboL4p6UqK-_tQnfhBHlTQrXCrwRokALix4';

async function main() {
  let previous = [];
  try {
    previous = JSON.parse(await readFile(outPath, 'utf-8'));
  } catch {
    /* primer build: no hay snapshot */
  }

  try {
    const res = await fetch(`${SUPABASE_URL}/rest/v1/rpc/list_public_school_directory`, {
      method: 'POST',
      headers: {
        apikey: ANON_KEY,
        Authorization: `Bearer ${ANON_KEY}`,
        'Content-Type': 'application/json',
      },
      body: '{}',
      signal: AbortSignal.timeout(20000),
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}: ${(await res.text()).slice(0, 200)}`);
    const clubs = await res.json();
    if (!Array.isArray(clubs)) throw new Error('respuesta no es un arreglo');
    // Un directorio vacío casi siempre es un error (RLS, red), no la realidad:
    // no pisar un snapshot bueno con uno vacío.
    if (clubs.length === 0 && previous.length > 0) throw new Error('directorio vacío; se conserva el snapshot');
    await writeFile(outPath, JSON.stringify(clubs, null, 1) + '\n', 'utf-8');
    const clients = clubs.filter((c) => c.is_client).length;
    console.log(`✅ directorio.json — ${clubs.length} clubes (${clients} clientes con contenido)`);
  } catch (err) {
    console.warn(`⚠️  fetch-directorio: ${err.message}. Se usa el snapshot commiteado (${previous.length} clubes).`);
  }
}

main();
