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

const defaultSEO = {
  title: 'SportMaps - Mapas Deportivos y Rutas Interactivas',
  description: 'Descubre, crea y comparte rutas deportivas. La mejor plataforma de mapas para ciclismo, running, senderismo y más. Conectamos atletas, escuelas deportivas y profesionales del deporte.',
  image: 'https://storage.googleapis.com/gpt-engineer-file-uploads/mh0l2TB2SzYCBnhAkrbPSmXzagX2/social-images/social-1762890125654-475c57b2-79a3-4c08-8c8c-459136cbceb4.jpg',
  url: 'https://sportmaps.co',
  type: 'website' as const,
  keywords: 'mapas deportivos, rutas ciclismo, rutas running, senderismo, escuelas deportivas, entrenadores, nutrición deportiva, bienestar atletas',
  author: 'SportMaps',
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
      <meta property="og:locale" content="es_ES" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={seo.url} />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
      
      {/* Additional SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow, max-video-preview:-1, max-image-preview:large, max-snippet:-1" />
      <html lang="es" />
    </Helmet>
  );
}

export default SEO;
