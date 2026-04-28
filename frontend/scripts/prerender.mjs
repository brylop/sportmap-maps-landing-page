import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { resolve, join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { preview } from 'vite';

const __dirname = dirname(fileURLToPath(import.meta.url));
const projectRoot = resolve(__dirname, '..');
const buildDir = resolve(projectRoot, 'build');
const sitemapPath = resolve(projectRoot, 'public/sitemap.xml');

const SITE_DOMAIN = 'https://sportmaps.co';
const PREVIEW_PORT = 4173;
const PAGE_TIMEOUT_MS = 45000;
const isCI = !!process.env.VERCEL || !!process.env.CI;

async function launchBrowser() {
  if (isCI) {
    const [{ default: chromium }, { default: puppeteer }] = await Promise.all([
      import('@sparticuz/chromium'),
      import('puppeteer-core'),
    ]);
    console.log('🌐 Using @sparticuz/chromium (CI/Vercel mode)');
    return puppeteer.launch({
      args: chromium.args,
      defaultViewport: chromium.defaultViewport,
      executablePath: await chromium.executablePath(),
      headless: chromium.headless,
    });
  }
  const { default: puppeteer } = await import('puppeteer');
  console.log('🌐 Using puppeteer (local mode)');
  return puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
  });
}

async function getRoutesFromSitemap() {
  const xml = await readFile(sitemapPath, 'utf-8');
  const matches = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)];
  const routes = matches
    .map((m) => m[1].replace(SITE_DOMAIN, ''))
    .map((path) => (path === '' ? '/' : path));
  return [...new Set(routes)];
}

async function startPreviewServer() {
  const server = await preview({
    root: projectRoot,
    preview: { port: PREVIEW_PORT, host: '127.0.0.1' },
  });
  server.printUrls();
  return server;
}

async function prerenderRoute(browser, route) {
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 800 });
  const url = `http://127.0.0.1:${PREVIEW_PORT}${route}`;
  const startedAt = Date.now();

  try {
    await page.goto(url, { waitUntil: 'networkidle2', timeout: PAGE_TIMEOUT_MS });
    await page.evaluate(() => new Promise((resolve) => setTimeout(resolve, 500)));
    const html = await page.content();

    const outputPath =
      route === '/'
        ? join(buildDir, 'index.html')
        : join(buildDir, route.replace(/^\//, ''), 'index.html');

    await mkdir(dirname(outputPath), { recursive: true });
    await writeFile(outputPath, html, 'utf-8');

    const sizeKB = (Buffer.byteLength(html, 'utf-8') / 1024).toFixed(1);
    const elapsedMs = Date.now() - startedAt;
    console.log(`  ✓ ${route.padEnd(22)} ${sizeKB.padStart(7)} KB  ${elapsedMs}ms`);
  } catch (err) {
    const elapsedMs = Date.now() - startedAt;
    console.error(`  ✗ ${route.padEnd(22)} FAILED in ${elapsedMs}ms — ${err.message}`);
    throw err;
  } finally {
    await page.close();
  }
}

async function main() {
  console.log('🔨 Postbuild prerender starting...\n');

  const routes = await getRoutesFromSitemap();
  console.log(`Found ${routes.length} routes in sitemap.xml`);

  const server = await startPreviewServer();
  const browser = await launchBrowser();

  console.log('\n📄 Prerendering routes:');
  let failed = 0;
  for (const route of routes) {
    try {
      await prerenderRoute(browser, route);
    } catch {
      failed += 1;
    }
  }

  await browser.close();
  await new Promise((resolve, reject) => {
    server.httpServer.close((err) => (err ? reject(err) : resolve()));
  });

  console.log(`\n${failed === 0 ? '✅' : '⚠️ '} Prerender finished — ${routes.length - failed}/${routes.length} routes OK`);

  if (failed > 0) {
    process.exit(1);
  }
}

main().catch((err) => {
  console.error('\n❌ Prerender crashed:', err);
  process.exit(1);
});
