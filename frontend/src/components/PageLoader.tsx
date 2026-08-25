/**
 * PageLoader — fallback de <Suspense> para el code-splitting por ruta.
 * Se ve solo en la fracción de segundo entre navegar a una ruta y que su
 * chunk termine de descargar; en la carga inicial de una página prerenderizada
 * no debería notarse porque el chunk ya se resolvió antes de que Puppeteer
 * capturara el HTML estático.
 */
export function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div
        className="h-8 w-8 animate-spin rounded-full border-2 border-muted-foreground/30 border-t-primary"
        role="status"
        aria-label="Cargando"
      />
    </div>
  );
}
