import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import {
  Search,
  MessageCircle,
  HelpCircle,
  ArrowRight,
  Mail,
  Phone,
  ChevronRight,
  Clock,
} from "lucide-react";
import { SEO } from "@/components/SEO";
import { TechHeader } from "@/components/TechHeader";
import { SportMapsFooter } from "@/components/SportMapsFooter";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { ChatBotModal } from "@/components/modals/ChatBotModal";
import {
  helpArticles,
  helpCategories,
  helpFAQs,
  getArticlesByCategory,
  type HelpArticle,
} from "@/lib/help-articles";

const SITE_URL = "https://sportmaps.co";

const CentroAyuda = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isChatOpen, setIsChatOpen] = useState(false);

  const searchResults = useMemo<HelpArticle[]>(() => {
    if (!searchQuery.trim()) return [];
    const q = searchQuery.toLowerCase();
    return helpArticles.filter(
      (a) =>
        a.title.toLowerCase().includes(q) ||
        a.excerpt.toLowerCase().includes(q)
    );
  }, [searchQuery]);

  // FAQPage JSON-LD schema (Google "People also ask")
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: helpFAQs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Centro de Ayuda | SportMaps - Soporte y Documentación"
        description="Guías paso a paso, tutoriales y respuestas a preguntas frecuentes. Aprende a usar SportMaps al máximo."
        keywords="ayuda sportmaps, soporte sportmaps, tutoriales, documentación, preguntas frecuentes"
        url={`${SITE_URL}/ayuda`}
        canonical={`${SITE_URL}/ayuda`}
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <TechHeader onSectionClick={() => {}} activeSection="ayuda" />

      {/* Hero with search */}
      <section className="pt-32 pb-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-sport-primary/10 via-transparent to-sport-accent/10" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              ¿En qué podemos{" "}
              <span className="text-sport-primary">ayudarte</span>?
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              {helpArticles.length} guías paso a paso basadas en preguntas
              reales de academias, coaches y padres.
            </p>
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Buscar artículos, guías..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-4 py-6 text-lg rounded-xl bg-background border-border"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search results */}
      {searchQuery.trim() && (
        <section className="container mx-auto px-4 pb-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-xl font-bold mb-4">
              {searchResults.length} resultado{searchResults.length !== 1 && "s"}{" "}
              para "{searchQuery}"
            </h2>
            {searchResults.length === 0 ? (
              <Card className="bg-card/50">
                <CardContent className="p-6 text-center">
                  <p className="text-muted-foreground mb-4">
                    No encontramos artículos con ese término. Pregúntale a
                    soporte directo:
                  </p>
                  <Button
                    onClick={() => setIsChatOpen(true)}
                    className="bg-sport-primary"
                  >
                    Hablar con soporte
                  </Button>
                </CardContent>
              </Card>
            ) : (
              <div className="space-y-3">
                {searchResults.map((a) => (
                  <ArticleResultCard key={a.slug} article={a} />
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      {/* Categories */}
      {!searchQuery.trim() && (
        <section className="py-12 bg-muted/20">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
              Explora por categoría
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {helpCategories.map((cat, index) => {
                const articles = getArticlesByCategory(cat.id);
                return (
                  <motion.div
                    key={cat.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Card
                      id={cat.id}
                      className="h-full hover:border-sport-primary/40 transition-all"
                    >
                      <CardContent className="p-6">
                        <div className="flex items-start gap-3 mb-4">
                          <span className="text-3xl">{cat.emoji}</span>
                          <div className="flex-1">
                            <h3 className="text-lg font-bold mb-1">
                              {cat.title}
                            </h3>
                            <p className="text-sm text-muted-foreground">
                              {cat.description}
                            </p>
                          </div>
                        </div>
                        <ul className="space-y-2">
                          {articles.map((a) => (
                            <li key={a.slug}>
                              <Link
                                to={`/ayuda/${a.slug}`}
                                className="flex items-center justify-between gap-2 text-sm py-2 px-3 rounded-lg hover:bg-sport-primary/5 hover:text-sport-primary transition-colors group"
                              >
                                <span className="line-clamp-1">{a.title}</span>
                                <ChevronRight className="w-4 h-4 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                              </Link>
                            </li>
                          ))}
                        </ul>
                        <p className="text-xs text-muted-foreground mt-4">
                          {articles.length} artículo{articles.length !== 1 && "s"}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Popular articles */}
      {!searchQuery.trim() && (
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
              Artículos más leídos
            </h2>
            <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              {helpArticles.slice(0, 6).map((a) => (
                <ArticleResultCard key={a.slug} article={a} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQs */}
      {!searchQuery.trim() && (
        <section className="py-12 bg-muted/20">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
              Preguntas frecuentes
            </h2>
            <div className="max-w-3xl mx-auto space-y-4">
              {helpFAQs.map((faq, idx) => (
                <motion.div
                  key={faq.question}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.03 }}
                >
                  <Card className="border-border">
                    <CardContent className="p-6">
                      <h3 className="font-semibold mb-2 flex items-start gap-3">
                        <HelpCircle className="w-5 h-5 text-sport-primary shrink-0 mt-0.5" />
                        {faq.question}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed ml-8">
                        {faq.answer}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Contact support */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              ¿No encontraste lo que buscabas?
            </h2>
            <p className="text-muted-foreground">
              El equipo de soporte responde en menos de 2h en horario hábil.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <SupportCard
              icon={MessageCircle}
              title="Chat en vivo"
              description="Respuesta inmediata"
              cta="Iniciar chat"
              onClick={() => setIsChatOpen(true)}
            />
            <SupportCard
              icon={Mail}
              title="Email"
              description="contacto@sportmaps.co"
              cta="Enviar email"
              onClick={() =>
                (window.location.href =
                  "mailto:contacto@sportmaps.co?subject=Consulta desde Centro de Ayuda")
              }
            />
            <SupportCard
              icon={Phone}
              title="WhatsApp"
              description="+57 312 846 3555"
              cta="Contactar"
              onClick={() =>
                window.open(
                  "https://wa.me/573128463555?text=" +
                    encodeURIComponent(
                      "Hola, vengo del Centro de Ayuda y necesito asistencia"
                    ),
                  "_blank"
                )
              }
            />
          </div>
        </div>
      </section>

      <SportMapsFooter />
      <WhatsAppButton />
      <ChatBotModal isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </div>
  );
};

function ArticleResultCard({ article }: { article: HelpArticle }) {
  const category = helpCategories.find((c) => c.id === article.categoryId);
  return (
    <Link to={`/ayuda/${article.slug}`} className="group block">
      <Card className="hover:border-sport-primary/40 transition-colors">
        <CardContent className="p-5">
          <div className="flex items-start justify-between gap-3 mb-2">
            <Badge variant="outline" className="text-xs">
              {category?.emoji} {category?.title}
            </Badge>
            <span className="text-xs text-muted-foreground flex items-center gap-1 shrink-0">
              <Clock className="w-3 h-3" />
              {article.readTime}
            </span>
          </div>
          <h3 className="font-bold mb-2 group-hover:text-sport-primary transition-colors">
            {article.title}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
            {article.excerpt}
          </p>
          <span className="inline-flex items-center gap-1 text-sm text-sport-primary font-medium">
            Leer guía
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </span>
        </CardContent>
      </Card>
    </Link>
  );
}

function SupportCard({
  icon: Icon,
  title,
  description,
  cta,
  onClick,
}: {
  icon: typeof MessageCircle;
  title: string;
  description: string;
  cta: string;
  onClick: () => void;
}) {
  return (
    <Card className="text-center hover:border-sport-primary/40 transition-colors">
      <CardContent className="p-6">
        <div className="w-12 h-12 rounded-xl bg-sport-primary/10 flex items-center justify-center mx-auto mb-4">
          <Icon className="w-6 h-6 text-sport-primary" />
        </div>
        <h3 className="font-semibold mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground mb-4">{description}</p>
        <Button variant="outline" size="sm" onClick={onClick}>
          {cta}
        </Button>
      </CardContent>
    </Card>
  );
}

export default CentroAyuda;
