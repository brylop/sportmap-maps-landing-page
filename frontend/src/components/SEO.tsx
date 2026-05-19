import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'product';
  keywords?: string;
  author?: string;
  canonical?: string;
}

const SITE_URL = 'https://sportmaps.co';

const defaultSEO = {
  title: 'SportMaps | Software de Gestión Deportiva en Colombia',
  description: 'Software todo-en-uno para escuelas, entrenadores y federaciones deportivas. Agenda online, pagos integrados, gestión de alumnos y app para padres. Empieza gratis.',
  image: '/logo.jpg',
  url: SITE_URL,
  type: 'website' as const,
  keywords: 'software gestión deportiva, sistema gestión escuelas deportivas Colombia, software academias deportivas, CRM entrenadores, agenda online deportiva, plataforma gestión clubes, software federaciones deportivas, gestión deportiva online',
  author: 'SportMaps',
};

/**
 * Organization JSON-LD — emitido globalmente desde el componente SEO.
 * Sirve como entidad canónica para que las IAs (ChatGPT, Gemini, Perplexity)
 * vinculen "SportMaps" con sus perfiles oficiales en redes y dominios.
 * sameAs es la propiedad clave para AEO: confirma identidad cross-platform.
 */
const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${SITE_URL}/#organization`,
  name: 'SportMaps',
  alternateName: 'SportMaps Colombia',
  url: SITE_URL,
  logo: {
    '@type': 'ImageObject',
    url: `${SITE_URL}/logo.jpg`,
    width: 512,
    height: 512,
  },
  description: 'Software todo-en-uno para escuelas, entrenadores y federaciones deportivas en Latinoamérica.',
  foundingDate: '2024',
  areaServed: ['CO', 'MX', 'AR', 'CL', 'PE', 'EC'],
  inLanguage: 'es-CO',
  sameAs: [
    'https://www.linkedin.com/company/sportmaps/',
    'https://www.instagram.com/spoortmaps/',
  ],
};

export function SEO({
  title,
  description,
  image,
  url,
  type = 'website',
  keywords,
  author,
  canonical,
}: SEOProps) {
  const seo = {
    title: title ? `${title} | SportMaps` : defaultSEO.title,
    description: description || defaultSEO.description,
    image: image || defaultSEO.image,
    url: url || defaultSEO.url,
    type: type || defaultSEO.type,
    keywords: keywords || defaultSEO.keywords,
    author: author || defaultSEO.author,
  };

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{seo.title}</title>
      <meta name="title" content={seo.title} />
      <meta name="description" content={seo.description} />
      <meta name="keywords" content={seo.keywords} />
      <meta name="author" content={seo.author} />

      {/* Canonical URL */}
      {canonical && <link rel="canonical" href={canonical} />}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={seo.type} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:site_name" content="SportMaps" />
      <meta property="og:locale" content="es_CO" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />

      {/* Additional SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow, max-video-preview:-1, max-image-preview:large, max-snippet:-1" />
      <html lang="es-CO" />

      {/* Organization schema — entidad canónica para AEO (ChatGPT, Gemini, Perplexity) */}
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
    </Helmet>
  );
}

export default SEO;
