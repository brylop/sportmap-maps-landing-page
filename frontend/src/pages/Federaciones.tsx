import { SEO } from "@/components/SEO";
import { TechHeader } from "@/components/TechHeader";
import { SportMapsFooter } from "@/components/SportMapsFooter";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Trophy, Link2, Receipt, Table2,
  Globe, CheckCircle, ArrowRight, Award, Layers
} from "lucide-react";
import { motion } from "framer-motion";
import { RolePricingSection, rolePricingConfigs } from "@/components/common/cards";
import { salesWhatsappLink } from "@/lib/whatsappFallback";

const PILOT_URL = salesWhatsappLink(
  "Hola SportMaps, soy de una liga / federación y quiero el piloto para ligas 2027 (un mes gratis)."
);

function openPilot() {
  window.open(PILOT_URL, "_blank", "noopener,noreferrer");
}

const Federaciones = () => {
  const features = [
    {
      icon: Link2,
      title: "Inscripción de Escuelas por Enlace",
      description: "Cada club o escuela inscribe a sus deportistas desde un enlace. Tú ves todo consolidado."
    },
    {
      icon: Layers,
      title: "Categorías y Precios",
      description: "Configura las categorías del torneo y los precios de inscripción, con fases de precio."
    },
    {
      icon: Receipt,
      title: "Cobro con Comprobante",
      description: "Cada inscripción se paga con comprobante y tú lo apruebas."
    },
    {
      icon: Trophy,
      title: "Fixture de Liga o Copa",
      description: "Arma el fixture en formato liga o copa a partir de los equipos inscritos."
    },
    {
      icon: Table2,
      title: "Goleadores y Tabla Pública",
      description: "Resultados, goleadores y tabla de posiciones en una página pública."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Federaciones y Ligas | SportMaps - Piloto para ligas 2027"
        description="Piloto para ligas 2027, un mes gratis: inscripción de escuelas por enlace, categorías y precios, cobro con comprobante, fixture de liga o copa, goleadores y tabla pública."
        keywords="ligas deportivas, federaciones deportivas, gestión de torneos, fixture liga copa, tabla de posiciones"
        url="https://sportmaps.co/federaciones"
        canonical="https://sportmaps.co/federaciones"
      />
      <TechHeader onSectionClick={() => {}} activeSection="" />

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-sport-accent/10 via-transparent to-sport-primary/10" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 bg-sport-accent/10 border border-sport-accent/20 rounded-full px-4 py-2 mb-6">
              <Award className="w-4 h-4 text-sport-accent" />
              <span className="text-sm text-sport-accent font-medium">Piloto para ligas 2027</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Tus torneos de <span className="text-sport-primary">Liga</span>, sin Excel
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Estamos buscando ligas para un piloto en 2027: un mes gratis organizando tus
              torneos con SportMaps, acompañado por nuestro equipo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-sport-primary hover:bg-sport-primary/90"
                onClick={openPilot}
              >
                Piloto para ligas 2027 — un mes gratis
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => {
                  document.getElementById('federaciones-features')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Conocer Más
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="federaciones-features" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Lo que <span className="text-sport-primary">ya funciona</span> hoy
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Las herramientas de torneos que hoy usan las escuelas en SportMaps, abiertas a tu liga durante el piloto.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full bg-card/50 backdrop-blur border-border/50 hover:border-sport-primary/50 transition-colors">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-xl bg-sport-primary/10 flex items-center justify-center mb-4">
                      <feature.icon className="w-6 h-6 text-sport-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="aspect-square max-w-md mx-auto rounded-2xl bg-gradient-to-br from-sport-primary/20 to-sport-accent/20 flex items-center justify-center">
                <div className="text-center p-8">
                  <Globe className="w-20 h-20 text-sport-primary mx-auto mb-4" />
                  <p className="text-xl font-bold">Escuelas y torneos en un solo lugar</p>
                  <p className="text-muted-foreground mt-2">Los clubes de tu liga pueden usar SportMaps para su día a día</p>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Cómo funciona el <span className="text-sport-primary">piloto</span>
              </h2>
              <div className="space-y-4">
                {[
                  "Un mes gratis, sin compromiso de compra",
                  "Montamos contigo un torneo real de tu liga",
                  "Inscripción de los clubes por enlace y cobro con comprobante",
                  "Fixture, goleadores y tabla pública",
                  "Acompañamiento directo por WhatsApp"
                ].map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-sport-success mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <RolePricingSection
        config={rolePricingConfigs.federaciones}
        onCTA={openPilot}
      />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-sport-accent/10 to-sport-primary/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Piloto para ligas 2027 — un mes gratis
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Escríbenos por WhatsApp y cuéntanos de tu liga.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-sport-primary hover:bg-sport-primary/90" onClick={openPilot}>
              Quiero el piloto
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      <SportMapsFooter />
      <WhatsAppButton />
    </div>
  );
};

export default Federaciones;
