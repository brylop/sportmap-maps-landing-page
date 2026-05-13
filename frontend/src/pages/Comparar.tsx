import { useParams, Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import {
  Check,
  X,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  TrendingDown,
} from "lucide-react";
import { SEO } from "@/components/SEO";
import { TechHeader } from "@/components/TechHeader";
import { SportMapsFooter } from "@/components/SportMapsFooter";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { getComparisonBySlug, comparisons } from "@/lib/comparisons";

const SITE_URL = "https://sportmaps.co";

export default function Comparar() {
  const { competidor } = useParams<{ competidor: string }>();
  const navigate = useNavigate();
  const comp = competidor ? getComparisonBySlug(competidor) : undefined;

  if (!comp) {
    return <NotFoundBlock onBack={() => navigate("/planes")} />;
  }

  const canonical = `${SITE_URL}/comparar/${comp.slug}`;
  const title = `SportMaps vs ${comp.competitorName}: Comparativa Completa 2026`;

  // FAQPage schema for "People also ask"
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: comp.faqs.map((f) => ({
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
        title={title}
        description={comp.metaDescription}
        url={canonical}
        canonical={canonical}
        keywords={`sportmaps vs ${comp.competitorName.toLowerCase()}, alternativa a ${comp.competitorName.toLowerCase()}, software gestión deportiva`}
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <TechHeader onSectionClick={() => {}} activeSection="comparar" />

      <main className="pt-24 pb-16">
        {/* Hero */}
        <section className="container mx-auto px-4 text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Badge className="mb-4 bg-sport-primary/10 text-sport-primary border-sport-primary/30">
              Comparativa honesta
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              SportMaps vs{" "}
              <span className="text-sport-primary">{comp.competitorName}</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {comp.tagline}
            </p>
          </motion.div>
        </section>

        {/* TL;DR */}
        <section className="container mx-auto px-4 mb-16">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
            <Card className="border-muted">
              <CardContent className="p-6">
                <Badge variant="outline" className="mb-3">
                  Elige {comp.competitorName}
                </Badge>
                <p className="text-muted-foreground leading-relaxed">
                  {comp.tldr.chooseCompetitor}
                </p>
              </CardContent>
            </Card>
            <Card className="border-sport-primary/40 bg-sport-primary/5">
              <CardContent className="p-6">
                <Badge className="mb-3 bg-sport-primary text-white">
                  <Sparkles className="w-3 h-3 mr-1" />
                  Elige SportMaps
                </Badge>
                <p className="text-foreground leading-relaxed">
                  {comp.tldr.chooseSportMaps}
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Feature comparison table */}
        <section className="container mx-auto px-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            Comparativa lado a lado
          </h2>
          <div className="max-w-5xl mx-auto overflow-x-auto rounded-2xl border border-border">
            <table className="w-full">
              <thead>
                <tr className="bg-sport-primary/5">
                  <th className="text-left p-4 font-semibold text-foreground">
                    Feature
                  </th>
                  <th className="text-center p-4 font-semibold text-muted-foreground">
                    {comp.competitorName}
                  </th>
                  <th className="text-center p-4 font-semibold text-sport-primary">
                    SportMaps
                  </th>
                </tr>
              </thead>
              <tbody>
                {comp.features.map((f, i) => (
                  <tr
                    key={i}
                    className={`border-t border-border ${
                      i % 2 === 0 ? "bg-card" : "bg-background"
                    }`}
                  >
                    <td className="p-4 font-medium text-foreground">
                      {f.feature}
                    </td>
                    <td className="p-4 text-center text-muted-foreground text-sm">
                      {f.competitor}
                    </td>
                    <td
                      className={`p-4 text-center text-sm font-medium ${
                        f.sportmapsAdvantage
                          ? "text-sport-primary"
                          : "text-foreground"
                      }`}
                    >
                      <span className="inline-flex items-center gap-1.5">
                        {f.sportmapsAdvantage && (
                          <Check className="w-4 h-4 text-sport-success" />
                        )}
                        {f.sportmaps}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Dónde gana cada uno */}
        <section className="container mx-auto px-4 mb-16">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
            <Card className="border-muted">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Check className="w-5 h-5 text-muted-foreground" />
                  Dónde gana {comp.competitorName}
                </h3>
                <ul className="space-y-3">
                  {comp.competitorWins.map((w) => (
                    <li
                      key={w}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <Check className="w-4 h-4 text-muted-foreground shrink-0 mt-0.5" />
                      <span>{w}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <Card className="border-sport-primary/40 bg-sport-primary/5">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-sport-primary">
                  <Check className="w-5 h-5" />
                  Dónde gana SportMaps
                </h3>
                <ul className="space-y-3">
                  {comp.sportmapsWins.map((w) => (
                    <li
                      key={w}
                      className="flex items-start gap-2 text-sm text-foreground"
                    >
                      <Check className="w-4 h-4 text-sport-success shrink-0 mt-0.5" />
                      <span>{w}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Cost example */}
        <section className="container mx-auto px-4 mb-16">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-3">
              El costo real en tu caso
            </h2>
            <p className="text-center text-muted-foreground mb-8">
              {comp.costExample.scenarioLabel}
            </p>
            <div className="overflow-x-auto rounded-2xl border border-border">
              <table className="w-full">
                <thead>
                  <tr className="bg-sport-primary/5">
                    <th className="text-left p-4 font-semibold text-foreground">
                      Concepto
                    </th>
                    <th className="text-right p-4 font-semibold text-muted-foreground">
                      {comp.competitorName}
                    </th>
                    <th className="text-right p-4 font-semibold text-sport-primary">
                      SportMaps
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comp.costExample.rows.map((row, i) => (
                    <tr key={i} className="border-t border-border">
                      <td className="p-4 text-foreground">{row.concept}</td>
                      <td className="p-4 text-right text-muted-foreground">
                        {row.competitorCost}
                      </td>
                      <td className="p-4 text-right text-foreground font-medium">
                        {row.sportmapsCost}
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr className="border-t-2 border-sport-primary bg-sport-primary/5">
                    <td className="p-4 font-bold text-foreground">TOTAL</td>
                    <td className="p-4 text-right font-bold text-muted-foreground line-through">
                      {comp.costExample.competitorTotal}
                    </td>
                    <td className="p-4 text-right font-bold text-sport-success text-lg">
                      {comp.costExample.sportmapsTotal}
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
            <div className="mt-6 flex items-center justify-center gap-2 text-sport-success font-semibold">
              <TrendingDown className="w-5 h-5" />
              <span>Ahorras +70% vs {comp.competitorName} a igualdad de features</span>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="container mx-auto px-4 mb-16">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
              Preguntas frecuentes
            </h2>
            <div className="space-y-4">
              {comp.faqs.map((faq, i) => (
                <Card key={i} className="border-border">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-foreground mb-2">
                      {faq.question}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-gradient-to-br from-sport-primary/15 to-sport-accent/15 rounded-3xl p-8 md:p-12 text-center border border-sport-primary/30">
            <h2 className="text-3xl font-bold mb-4">
              ¿Listo para migrar de {comp.competitorName}?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Migración asistida sin costo en menos de 30 días. Trial gratuito
              en paralelo: si SportMaps no te convence, no migras.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-sport-primary hover:bg-sport-primary/90 text-white rounded-xl"
              >
                <Link to="/planes">
                  Ver planes y precios
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-xl">
                <Link to="/calculadora">Calcular mi ROI</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <SportMapsFooter />
      <WhatsAppButton />
    </div>
  );
}

function NotFoundBlock({ onBack }: { onBack: () => void }) {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <TechHeader onSectionClick={() => {}} activeSection="comparar" />
      <main className="flex-1 container mx-auto px-4 pt-24 pb-16 flex items-center justify-center">
        <div className="text-center max-w-md">
          <h1 className="text-3xl font-bold mb-4">Comparación no encontrada</h1>
          <p className="text-muted-foreground mb-6">
            Comparaciones disponibles:{" "}
            {comparisons.map((c, i) => (
              <span key={c.slug}>
                <Link
                  to={`/comparar/${c.slug}`}
                  className="text-sport-primary hover:underline"
                >
                  {c.competitorName}
                </Link>
                {i < comparisons.length - 1 && ", "}
              </span>
            ))}
          </p>
          <Button onClick={onBack} size="lg">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver a planes
          </Button>
        </div>
      </main>
      <SportMapsFooter />
    </div>
  );
}
