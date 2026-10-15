import { useState } from "react";
import { ArrowLeft, Tag, Award, Handshake, ShieldCheck, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TechBackground } from "@/components/TechBackground";
import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { SportMapsFooter } from "@/components/SportMapsFooter";
import { MarcasRegistroModal } from "@/components/modals/MarcasRegistroModal";
import { RolePricingSection, rolePricingConfigs } from "@/components/common/cards";
import { salesWhatsappLink } from "@/lib/whatsappFallback";

const BRAND_PILOT_URL = salesWhatsappLink(
  "Hola SportMaps, soy de una marca y quiero entrar al programa de marcas aliadas (piloto gratis por un mes)."
);

function openBrandPilot() {
  window.open(BRAND_PILOT_URL, "_blank", "noopener,noreferrer");
}

export default function Marcas() {
  const [isRegistroOpen, setIsRegistroOpen] = useState(false);

  return (
    <div className="min-h-screen bg-sport-background text-sport-text-primary">
      <SEO
        title="Marcas Aliadas - SportMaps"
        description="Programa de marcas aliadas de SportMaps: lleva beneficios de tu marca a las familias de las escuelas deportivas. Piloto gratis por un mes."
        url="https://sportmaps.co/marcas"
        canonical="https://sportmaps.co/marcas"
        keywords="marcas deportivas, patrocinio deportivo, escuelas deportivas, beneficios para familias, marcas aliadas"
      />
      <TechBackground />

      <header className="relative z-10 border-b border-sport-border bg-sport-surface/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center gap-4">
          <Link to="/">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="w-5 h-5" />
            </Button>
          </Link>
          <div>
            <h1 className="text-2xl font-bold text-sport-primary">Marcas Aliadas</h1>
            <p className="text-sm text-sport-text-secondary">Programa piloto para marcas</p>
          </div>
        </div>
      </header>

      <main className="relative z-10 container mx-auto px-4 py-8">
        <section className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-sport-primary to-sport-accent bg-clip-text text-transparent">
            Programa de marcas aliadas
          </h2>
          <p className="text-xl text-sport-text-secondary max-w-3xl mx-auto mb-8">
            Lleva beneficios de tu marca a las familias de las escuelas deportivas que usan SportMaps. Estamos armando el programa con las primeras marcas: piloto gratis por un mes.
          </p>
          <Button size="lg" onClick={openBrandPilot}>
            <MessageCircle className="w-5 h-5 mr-2" />
            Quiero el piloto
          </Button>
        </section>

        <section className="mb-12">
          <h3 className="text-2xl font-bold mb-6">Cómo funciona el piloto</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="border-sport-border bg-sport-card">
              <CardHeader>
                <Handshake className="w-8 h-8 text-sport-primary mb-2" />
                <CardTitle>Lo diseñamos contigo</CardTitle>
                <CardDescription>
                  Definimos juntos el beneficio, las escuelas y cómo medir el resultado
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-sport-border bg-sport-card">
              <CardHeader>
                <Tag className="w-8 h-8 text-sport-warning mb-2" />
                <CardTitle>Beneficios para familias</CardTitle>
                <CardDescription>
                  Descuentos o beneficios de tu marca para las familias de las escuelas
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-sport-border bg-sport-card">
              <CardHeader>
                <ShieldCheck className="w-8 h-8 text-sport-success mb-2" />
                <CardTitle>Sin datos de menores</CardTitle>
                <CardDescription>
                  Te compartimos resultados agregados, nunca datos personales de menores
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-sport-border bg-sport-card">
              <CardHeader>
                <Award className="w-8 h-8 text-sport-accent mb-2" />
                <CardTitle>Un mes gratis</CardTitle>
                <CardDescription>
                  El piloto no tiene costo durante el primer mes
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </section>

        {/* Pricing Section */}
        <RolePricingSection
          config={rolePricingConfigs.marcas}
          onCTA={openBrandPilot}
        />

        <section className="text-center bg-sport-card rounded-3xl p-8 border border-sport-border mt-12">
          <h3 className="text-2xl font-bold mb-4">¿Quieres ser marca aliada?</h3>
          <p className="text-sport-text-secondary mb-6 max-w-2xl mx-auto">
            Escríbenos por WhatsApp o déjanos tus datos y te contactamos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="default" onClick={openBrandPilot}>
              <MessageCircle className="w-5 h-5 mr-2" />
              Hablar por WhatsApp
            </Button>
            <Button size="lg" variant="outline" onClick={() => setIsRegistroOpen(true)}>
              Dejar mis datos
            </Button>
          </div>
        </section>
      </main>

      <SportMapsFooter />

      <MarcasRegistroModal
        isOpen={isRegistroOpen}
        onClose={() => setIsRegistroOpen(false)}
      />
    </div>
  );
}
