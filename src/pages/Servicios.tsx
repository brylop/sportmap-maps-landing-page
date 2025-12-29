import { useState } from "react";
import { ArrowLeft, Sparkles, Activity, Brain, Leaf, Stethoscope, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TechBackground } from "@/components/TechBackground";
import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { SportMapsFooter } from "@/components/SportMapsFooter";
import { PlansSection } from "@/components/sections/Pricing/PlansSection";

export default function Servicios() {
  const [selectedClient] = useState("default");

  return (
    <div className="min-h-screen bg-sport-background text-sport-text-primary">
      <SEO 
        title="Servicios Deportivos - SportMaps"
        description="Encuentra y ofrece servicios deportivos profesionales: nutrición, fisioterapia, psicología deportiva, medicina del deporte y más."
        url="https://sportmaps.co/servicios"
        canonical="https://sportmaps.co/servicios"
        keywords="servicios deportivos, nutrición deportiva, fisioterapia deportiva, psicología deportiva, medicina del deporte"
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
            <h1 className="text-2xl font-bold text-sport-primary">Servicios Deportivos</h1>
            <p className="text-sm text-sport-text-secondary">Profesionales al servicio del deporte</p>
          </div>
        </div>
      </header>

      <main className="relative z-10 container mx-auto px-4 py-8">
        <section className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-sport-primary to-sport-accent bg-clip-text text-transparent">
            Servicios Profesionales
          </h2>
          <p className="text-xl text-sport-text-secondary max-w-3xl mx-auto mb-8">
            Conecta con profesionales especializados en el rendimiento deportivo. Nutricionistas, fisioterapeutas, psicólogos y más.
          </p>
        </section>

        <section className="mb-12">
          <h3 className="text-2xl font-bold mb-6">Categorías de Servicios</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-sport-border bg-sport-card hover:shadow-hover transition-all duration-300">
              <CardHeader>
                <Leaf className="w-8 h-8 text-sport-primary mb-2" />
                <CardTitle>Nutrición Deportiva</CardTitle>
                <CardDescription>
                  Planes alimenticios personalizados para optimizar el rendimiento y la recuperación
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="border-sport-border bg-sport-card hover:shadow-hover transition-all duration-300">
              <CardHeader>
                <Activity className="w-8 h-8 text-sport-accent mb-2" />
                <CardTitle>Fisioterapia</CardTitle>
                <CardDescription>
                  Rehabilitación, prevención de lesiones y terapia manual especializada
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="border-sport-border bg-sport-card hover:shadow-hover transition-all duration-300">
              <CardHeader>
                <Brain className="w-8 h-8 text-sport-highlight mb-2" />
                <CardTitle>Psicología Deportiva</CardTitle>
                <CardDescription>
                  Entrenamiento mental, manejo del estrés competitivo y motivación
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="border-sport-border bg-sport-card hover:shadow-hover transition-all duration-300">
              <CardHeader>
                <Stethoscope className="w-8 h-8 text-sport-info mb-2" />
                <CardTitle>Medicina Deportiva</CardTitle>
                <CardDescription>
                  Evaluaciones médicas, certificados y seguimiento de salud del atleta
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="border-sport-border bg-sport-card hover:shadow-hover transition-all duration-300">
              <CardHeader>
                <Heart className="w-8 h-8 text-sport-wellness mb-2" />
                <CardTitle>Bienestar Integral</CardTitle>
                <CardDescription>
                  Yoga, meditación, recuperación activa y balance vida-deporte
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="border-sport-border bg-sport-card hover:shadow-hover transition-all duration-300">
              <CardHeader>
                <Sparkles className="w-8 h-8 text-sport-warning mb-2" />
                <CardTitle>Suplementación</CardTitle>
                <CardDescription>
                  Asesoría en suplementos deportivos seguros y efectivos
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </section>

        <PlansSection selectedClient={selectedClient} />

        <section className="text-center bg-sport-card rounded-3xl p-8 border border-sport-border mt-12">
          <h3 className="text-2xl font-bold mb-4">¿Eres profesional del deporte?</h3>
          <p className="text-sport-text-secondary mb-6 max-w-2xl mx-auto">
            Registra tu servicio y conecta con atletas y escuelas que necesitan tu expertise
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/planes">
              <Button size="lg" variant="default">
                Registrar mi servicio
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <SportMapsFooter />
    </div>
  );
}