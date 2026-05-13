import { useParams, Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import {
  Clock,
  ArrowLeft,
  ArrowRight,
  MessageCircle,
  Info,
  Lightbulb,
  AlertTriangle,
  Mail,
} from "lucide-react";
import { SEO } from "@/components/SEO";
import { TechHeader } from "@/components/TechHeader";
import { SportMapsFooter } from "@/components/SportMapsFooter";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  helpArticles,
  helpCategories,
  getArticleBySlug,
  getRelatedArticles,
} from "@/lib/help-articles";
import type { ContentBlock } from "@/lib/blog-posts";

const SITE_URL = "https://sportmaps.co";
const SALES_WHATSAPP = "573128463555";

export default function HelpArticle() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const article = slug ? getArticleBySlug(slug) : undefined;

  if (!article) {
    return <NotFoundBlock onBack={() => navigate("/ayuda")} />;
  }

  const category = helpCategories.find((c) => c.id === article.categoryId);
  const canonical = `${SITE_URL}/ayuda/${article.slug}`;
  const related = getRelatedArticles(article.related);

  // Extract step-by-step from ol blocks for HowTo schema
  const allSteps = article.body
    .filter((b): b is { type: "ol"; items: string[] } => b.type === "ol")
    .flatMap((b) => b.items);

  const howToSchema = allSteps.length >= 3
    ? {
        "@context": "https://schema.org",
        "@type": "HowTo",
        name: article.title,
        description: article.excerpt,
        totalTime: `PT${article.readTime.replace(/\D/g, "")}M`,
        step: allSteps.slice(0, 12).map((s, i) => ({
          "@type": "HowToStep",
          position: i + 1,
          text: s,
        })),
      }
    : null;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Centro de Ayuda", item: `${SITE_URL}/ayuda` },
      {
        "@type": "ListItem",
        position: 3,
        name: category?.title ?? "Artículo",
        item: `${SITE_URL}/ayuda#${article.categoryId}`,
      },
      { "@type": "ListItem", position: 4, name: article.title, item: canonical },
    ],
  };

  const handleSupportWhatsApp = () => {
    const msg = `Hola SportMaps, vengo del Centro de Ayuda, leí el artículo "${article.title}" y necesito ayuda adicional.`;
    window.open(
      `https://wa.me/${SALES_WHATSAPP}?text=${encodeURIComponent(msg)}`,
      "_blank"
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={`${article.title} | Centro de Ayuda SportMaps`}
        description={article.excerpt}
        url={canonical}
        canonical={canonical}
        type="article"
        keywords={`ayuda sportmaps, ${article.title.toLowerCase()}, ${category?.title.toLowerCase() ?? ""}`}
      />
      <Helmet>
        {howToSchema && (
          <script type="application/ld+json">{JSON.stringify(howToSchema)}</script>
        )}
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>

      <TechHeader onSectionClick={() => {}} activeSection="ayuda" />

      <main className="pt-24 pb-16">
        {/* Breadcrumb */}
        <nav className="container mx-auto px-4 mb-6 text-sm">
          <Link to="/" className="text-muted-foreground hover:text-sport-primary">
            Inicio
          </Link>
          <span className="text-muted-foreground mx-2">/</span>
          <Link to="/ayuda" className="text-muted-foreground hover:text-sport-primary">
            Centro de Ayuda
          </Link>
          <span className="text-muted-foreground mx-2">/</span>
          <span className="text-foreground">{category?.title ?? "Artículo"}</span>
        </nav>

        {/* Article */}
        <article className="container mx-auto px-4 max-w-3xl">
          <motion.header
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-10"
          >
            {category && (
              <Badge className="mb-4 bg-sport-primary/10 text-sport-primary border-sport-primary/30">
                {category.emoji} {category.title}
              </Badge>
            )}
            <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
              {article.title}
            </h1>
            <p className="text-lg text-muted-foreground mb-6">{article.excerpt}</p>
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                {article.readTime}
              </span>
              {article.targetRole.length > 0 && (
                <span className="flex items-center gap-1.5">
                  Para:{" "}
                  {article.targetRole
                    .map((r) => roleLabel(r))
                    .join(", ")}
                </span>
              )}
            </div>
          </motion.header>

          {/* Body */}
          <div className="prose prose-invert max-w-none">
            {article.body.map((block, i) => (
              <ContentBlockRenderer key={i} block={block} />
            ))}
          </div>

          {/* Was this helpful? */}
          <div className="mt-16 p-6 rounded-2xl border border-border bg-card/50 text-center">
            <p className="text-sm text-muted-foreground mb-4">
              ¿Te sirvió este artículo?
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                onClick={handleSupportWhatsApp}
                className="bg-sport-success hover:bg-sport-success/90 text-white rounded-xl"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Necesito ayuda específica
              </Button>
              <Button
                asChild
                variant="outline"
                className="rounded-xl"
              >
                <a href="mailto:contacto@sportmaps.co?subject=Sugerencia para artículo de ayuda">
                  <Mail className="w-4 h-4 mr-2" />
                  Sugerir mejora
                </a>
              </Button>
            </div>
          </div>
        </article>

        {/* Related */}
        {related.length > 0 && (
          <section className="container mx-auto px-4 mt-16 max-w-5xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Artículos relacionados</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {related.map((r) => (
                <Link key={r.slug} to={`/ayuda/${r.slug}`} className="group">
                  <Card className="h-full hover:border-sport-primary/40 transition-colors">
                    <CardContent className="p-5">
                      <Badge variant="outline" className="mb-3 text-xs">
                        {helpCategories.find((c) => c.id === r.categoryId)?.title}
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

        {/* Back */}
        <div className="container mx-auto px-4 mt-12 text-center">
          <Button asChild variant="outline" size="lg" className="rounded-xl">
            <Link to="/ayuda">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Volver al Centro de Ayuda
            </Link>
          </Button>
        </div>
      </main>

      <SportMapsFooter />
      <WhatsAppButton />
    </div>
  );
}

function roleLabel(role: string): string {
  switch (role) {
    case "school":
      return "Escuela";
    case "parent":
      return "Padres";
    case "coach":
      return "Coaches";
    case "athlete":
      return "Atletas";
    case "all":
      return "Todos";
    default:
      return role;
  }
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
          color: "border-sport-success/40 bg-sport-success/5 text-sport-success",
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
                    <td key={j} className="p-3 text-sm text-muted-foreground">
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
      <TechHeader onSectionClick={() => {}} activeSection="ayuda" />
      <main className="flex-1 container mx-auto px-4 pt-24 pb-16 flex items-center justify-center">
        <div className="text-center max-w-md">
          <h1 className="text-3xl font-bold mb-4">Artículo no encontrado</h1>
          <p className="text-muted-foreground mb-6">
            Hay {helpArticles.length} artículos disponibles en el Centro de
            Ayuda.
          </p>
          <Button onClick={onBack} size="lg">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Ver todos los artículos
          </Button>
        </div>
      </main>
      <SportMapsFooter />
    </div>
  );
}
