import { useParams, Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import {
  Clock,
  Calendar,
  ArrowLeft,
  ArrowRight,
  User as UserIcon,
  Info,
  Lightbulb,
  AlertTriangle,
} from "lucide-react";
import { SEO } from "@/components/SEO";
import { TechHeader } from "@/components/TechHeader";
import { SportMapsFooter } from "@/components/SportMapsFooter";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  blogPosts,
  getPostBySlug,
  getRelatedPosts,
  type ContentBlock,
} from "@/lib/blog-posts";

const SITE_URL = "https://sportmaps.co";

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const post = slug ? getPostBySlug(slug) : undefined;

  if (!post) {
    return <NotFoundBlock onBack={() => navigate("/blog")} />;
  }

  const canonical = `${SITE_URL}/blog/${post.slug}`;
  const related = getRelatedPosts(post.related);

  // Article JSON-LD schema (E-E-A-T + rich snippets)
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.isoDate,
    dateModified: post.isoDate,
    author: {
      "@type": "Organization",
      name: "SportMaps",
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "SportMaps",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo.jpg`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": canonical,
    },
    image: post.image ?? `${SITE_URL}/logo.jpg`,
    articleSection: post.category,
  };

  // BreadcrumbList schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Inicio",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: `${SITE_URL}/blog`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: canonical,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={post.title}
        description={post.excerpt}
        url={canonical}
        canonical={canonical}
        type="article"
        keywords={`${post.category.toLowerCase()}, ${post.title.toLowerCase()}`}
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      <TechHeader onSectionClick={() => {}} activeSection="blog" />

      <main className="pt-24 pb-16">
        {/* Breadcrumb */}
        <nav className="container mx-auto px-4 mb-6 text-sm">
          <Link to="/" className="text-muted-foreground hover:text-sport-primary">
            Inicio
          </Link>
          <span className="text-muted-foreground mx-2">/</span>
          <Link to="/blog" className="text-muted-foreground hover:text-sport-primary">
            Blog
          </Link>
          <span className="text-muted-foreground mx-2">/</span>
          <span className="text-foreground">{post.category}</span>
        </nav>

        {/* Hero */}
        <article className="container mx-auto px-4 max-w-3xl">
          <motion.header
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-10"
          >
            <Badge className="mb-4 bg-sport-primary/10 text-sport-primary border-sport-primary/30">
              {post.category}
            </Badge>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              {post.title}
            </h1>
            <p className="text-lg text-muted-foreground mb-6">{post.excerpt}</p>
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <UserIcon className="w-4 h-4" />
                {post.author} · {post.authorRole}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                {post.date}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </span>
            </div>
          </motion.header>

          {/* Hero image placeholder */}
          <div
            className={`aspect-[2/1] rounded-2xl mb-12 bg-gradient-to-br ${post.heroGradient} flex items-center justify-center`}
          >
            <span className="text-6xl">📊</span>
          </div>

          {/* Body */}
          <div className="prose prose-invert max-w-none">
            {post.body.map((block, i) => (
              <ContentBlockRenderer key={i} block={block} />
            ))}
          </div>
        </article>

        {/* Related posts */}
        {related.length > 0 && (
          <section className="container mx-auto px-4 mt-20 max-w-5xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Lectura relacionada
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {related.map((r) => (
                <Link key={r.slug} to={`/blog/${r.slug}`} className="group">
                  <Card className="h-full hover:border-sport-primary/40 transition-colors">
                    <div
                      className={`aspect-[16/9] rounded-t-xl bg-gradient-to-br ${r.heroGradient}`}
                    />
                    <CardContent className="p-5">
                      <Badge variant="outline" className="mb-3 text-xs">
                        {r.category}
                      </Badge>
                      <h3 className="font-bold mb-2 group-hover:text-sport-primary transition-colors line-clamp-2">
                        {r.title}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {r.excerpt}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Back to blog */}
        <div className="container mx-auto px-4 mt-16 text-center">
          <Button asChild variant="outline" size="lg" className="rounded-xl">
            <Link to="/blog">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Volver al blog
            </Link>
          </Button>
        </div>
      </main>

      <SportMapsFooter />
      <WhatsAppButton />
    </div>
  );
}

function ContentBlockRenderer({ block }: { block: ContentBlock }) {
  switch (block.type) {
    case "p":
      return (
        <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6">
          {block.content}
        </p>
      );
    case "h2":
      return (
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-12 mb-4">
          {block.content}
        </h2>
      );
    case "h3":
      return (
        <h3 className="text-xl md:text-2xl font-bold text-foreground mt-8 mb-3">
          {block.content}
        </h3>
      );
    case "ul":
      return (
        <ul className="list-disc pl-6 mb-6 space-y-2 text-muted-foreground">
          {block.items.map((item, i) => (
            <li key={i} className="text-base md:text-lg leading-relaxed">
              {item}
            </li>
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol className="list-decimal pl-6 mb-6 space-y-2 text-muted-foreground">
          {block.items.map((item, i) => (
            <li key={i} className="text-base md:text-lg leading-relaxed">
              {item}
            </li>
          ))}
        </ol>
      );
    case "quote":
      return (
        <blockquote className="my-8 pl-6 border-l-4 border-sport-primary italic">
          <p className="text-lg md:text-xl text-foreground mb-3">
            "{block.content}"
          </p>
          {block.author && (
            <footer className="text-sm text-muted-foreground not-italic">
              — {block.author}
            </footer>
          )}
        </blockquote>
      );
    case "callout": {
      const variantConfig = {
        info: {
          icon: Info,
          color: "border-sport-info/40 bg-sport-info/5 text-sport-info",
        },
        tip: {
          icon: Lightbulb,
          color:
            "border-sport-success/40 bg-sport-success/5 text-sport-success",
        },
        warning: {
          icon: AlertTriangle,
          color: "border-amber-500/40 bg-amber-500/5 text-amber-600",
        },
      };
      const { icon: Icon, color } = variantConfig[block.variant];
      return (
        <div className={`my-6 rounded-xl border p-5 flex gap-3 ${color}`}>
          <Icon className="w-5 h-5 shrink-0 mt-0.5" />
          <p className="text-base leading-relaxed">{block.content}</p>
        </div>
      );
    }
    case "table":
      return (
        <div className="my-8 overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-sport-primary/5">
                {block.headers.map((h, i) => (
                  <th
                    key={i}
                    className="text-left p-3 text-foreground font-semibold border-b border-border"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, i) => (
                <tr key={i} className="border-b border-border">
                  {row.map((cell, j) => (
                    <td
                      key={j}
                      className="p-3 text-sm text-muted-foreground"
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    case "cta":
      return (
        <div className="my-12 rounded-2xl border border-sport-primary/40 bg-gradient-to-br from-sport-primary/10 to-sport-accent/10 p-6 md:p-8 text-center">
          <h3 className="text-xl md:text-2xl font-bold mb-2">{block.title}</h3>
          <p className="text-muted-foreground mb-5">{block.description}</p>
          <Button
            asChild
            size="lg"
            className="bg-sport-primary hover:bg-sport-primary/90 text-white rounded-xl"
          >
            <Link to={block.href}>
              {block.label}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      );
    default:
      return null;
  }
}

function NotFoundBlock({ onBack }: { onBack: () => void }) {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <TechHeader onSectionClick={() => {}} activeSection="blog" />
      <main className="flex-1 container mx-auto px-4 pt-24 pb-16 flex items-center justify-center">
        <div className="text-center max-w-md">
          <h1 className="text-3xl font-bold mb-4">Artículo no encontrado</h1>
          <p className="text-muted-foreground mb-6">
            El post que buscas no existe o fue movido. Hay {blogPosts.length}{" "}
            artículos disponibles en el blog.
          </p>
          <Button onClick={onBack} size="lg">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Ver todos los posts
          </Button>
        </div>
      </main>
      <SportMapsFooter />
    </div>
  );
}
