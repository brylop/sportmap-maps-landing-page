import {
  ArrowLeft,
  ArrowRight,
  Trophy,
  Map as MapIcon,
  Users,
  Sparkles,
  Heart,
  Calendar,
  CreditCard,
  CheckCircle2,
  User,
  Bell,
  Shield,
  Activity,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TechBackground } from "@/components/TechBackground";
import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { SportMapsFooter } from "@/components/SportMapsFooter";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { motion } from "framer-motion";

const APP_URL = "https://app.sportmaps.co/";

function goToApp(role?: "athlete" | "parent") {
  const url = role ? `${APP_URL}?role=${role}` : APP_URL;
  window.location.href = url;
}

const atletaBenefits = [
  "Historial deportivo digital portable",
  "Inscripción a eventos sin fricción",
  "Acceso a rutas y mapa SportMaps",
  "Estadísticas avanzadas y video highlights",
  "Descuentos en marcas aliadas",
  "Conexión con scouts y patrocinadores",
];

const padreBenefits = [
  "Ver progreso y asistencia del hijo",
  "Pagar matrícula y mensualidad en 1 click",
  "Comunicación directa con el coach",
  "Calendario de prácticas y eventos",
  "Notificaciones de pagos y eventos",
  "Múltiples hijos en una sola cuenta",
];

const ecosystemFeatures = [
  {
    icon: MapIcon,
    title: "El mapa que conecta tu carrera",
    description:
      "Encuentra escuelas, eventos, rutas y profesionales del bienestar cerca de ti con un solo perfil.",
  },
  {
    icon: Trophy,
    title: "Inscríbete a eventos en 30 segundos",
    description:
      "Tu Atleta ID precarga datos médicos y deportivos. Sin formularios largos, sin Excel, sin caos.",
  },
  {
    icon: Activity,
    title: "Tu historial te sigue",
    description:
      "Cambia de escuela, ciudad o disciplina. Tu progreso, certificados y logros viajan contigo.",
  },
  {
    icon: Heart,
    title: "Bienestar integrado",
    description:
      "Conéctate con fisios, nutricionistas y profesionales de salud verificados en tu zona.",
  },
];

export default function Deportistas() {
  return (
    <div className="min-h-screen bg-sport-background text-sport-text-primary">
      <SEO
        title="Atleta ID y App para Padres — Gratis siempre | SportMaps"
        description="Crea tu Atleta ID gratis: perfil deportivo portable, inscripción a eventos, descuentos en marcas y conexión con escuelas. App de padres incluida."
        url="https://sportmaps.co/deportistas"
        canonical="https://sportmaps.co/deportistas"
        keywords="atleta id, perfil deportivo, app padres, inscripción eventos deportivos, deportistas Colombia"
      />
      <TechBackground />

      {/* Header */}
      <header className="relative z-10 border-b border-sport-border bg-sport-surface/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center gap-4">
          <Link to="/">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="w-5 h-5" />
            </Button>
          </Link>
          <div>
            <h1 className="text-2xl font-bold text-sport-primary">Atletas y Padres</h1>
            <p className="text-sm text-sport-text-secondary">
              Tu carrera deportiva en una sola app — gratis siempre
            </p>
          </div>
        </div>
      </header>

      <main className="relative z-10">
        {/* Hero */}
        <section className="container mx-auto px-4 py-12 md:py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <Badge className="mb-6 bg-sport-success/10 text-sport-success border border-sport-success/30">
              <Sparkles className="w-3 h-3 mr-1" />
              Gratis para siempre — sin tarjeta de crédito
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-to-r from-sport-primary to-sport-accent bg-clip-text text-transparent">
                Tu carrera deportiva
              </span>
              <span className="text-foreground"> en una sola app</span>
            </h2>
            <p className="text-lg md:text-xl text-sport-text-secondary mb-8 max-w-2xl mx-auto">
              Crea tu Atleta ID y conéctate con escuelas, entrenadores, eventos y marcas en
              todo el país. Y si eres padre, ve el progreso de tu hijo y paga su matrícula
              desde el mismo lugar.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-sport-primary hover:bg-sport-primary/90 text-white px-8 py-6 text-lg font-bold rounded-full"
                onClick={() => goToApp("athlete")}
              >
                <User className="w-5 h-5 mr-2" />
                Crear Atleta ID gratis
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-sport-primary text-sport-primary hover:bg-sport-primary hover:text-white px-8 py-6 text-lg rounded-full"
                onClick={() => goToApp("parent")}
              >
                <Users className="w-5 h-5 mr-2" />
                Soy Padre/Tutor
              </Button>
            </div>
          </motion.div>
        </section>

        {/* Two free-forever product cards */}
        <section className="container mx-auto px-4 py-12 md:py-16">
          <div className="text-center mb-10 max-w-3xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Dos roles, una sola plataforma
            </h3>
            <p className="text-muted-foreground">
              Para Atletas y Padres SportMaps es gratis siempre. Ningún cobro escondido,
              ninguna prueba que vence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <FreeForeverCard
              icon={User}
              badge="Atleta ID"
              title="Tu pasaporte deportivo"
              description="Historial portable, perfil verificado, eventos cercanos y descuentos en marcas aliadas."
              benefits={atletaBenefits}
              ctaText="Crear Atleta ID gratis"
              onCTA={() => goToApp("athlete")}
            />
            <FreeForeverCard
              icon={Users}
              badge="Padre / Tutor"
              title="Conectado con la academia"
              description="Mira el progreso de tu hijo, paga matrícula y comunícate con su coach desde una sola app."
              benefits={padreBenefits}
              ctaText="Crear cuenta de Padre"
              onCTA={() => goToApp("parent")}
            />
          </div>
        </section>

        {/* Ecosystem value */}
        <section className="container mx-auto px-4 py-12 md:py-16">
          <div className="text-center mb-10 max-w-3xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Qué desbloqueas con tu Atleta ID
            </h3>
            <p className="text-muted-foreground">
              No es un perfil más. Es el centro de tu vida deportiva.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ecosystemFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full border-sport-border bg-sport-card hover:border-sport-primary/40 transition-all">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-xl bg-sport-primary/10 flex items-center justify-center mb-4">
                      <feature.icon className="w-6 h-6 text-sport-primary" />
                    </div>
                    <h4 className="text-lg font-bold mb-2">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Trust strip */}
        <section className="container mx-auto px-4 py-12">
          <div className="rounded-2xl border border-sport-border bg-sport-card/50 p-6 md:p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { icon: Shield, label: "Datos protegidos", value: "Habeas Data" },
                { icon: Bell, label: "Notificaciones inteligentes", value: "WhatsApp + Push" },
                { icon: Calendar, label: "Eventos sincronizados", value: "Google / Apple" },
                { icon: CreditCard, label: "Pagos seguros", value: "Wompi / PSE" },
              ].map((item) => (
                <div key={item.label} className="flex flex-col items-center gap-2">
                  <item.icon className="w-6 h-6 text-sport-primary" />
                  <p className="text-sm font-bold text-foreground">{item.value}</p>
                  <p className="text-xs text-muted-foreground">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="container mx-auto px-4 py-16 md:py-20">
          <div className="max-w-3xl mx-auto text-center bg-gradient-to-br from-sport-success/10 to-sport-primary/10 rounded-3xl p-8 md:p-12 border border-sport-success/20">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Listo. Tu Atleta ID te espera.
            </h3>
            <p className="text-sport-text-secondary mb-8 max-w-xl mx-auto">
              Crea tu cuenta gratis en menos de 60 segundos. Sin tarjeta, sin permanencia,
              sin sorpresas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={() => goToApp("athlete")}
                className="bg-sport-success hover:bg-sport-success/90 text-white px-8 py-6 text-lg font-bold rounded-full"
              >
                <CheckCircle2 className="w-5 h-5 mr-2" />
                Crear mi Atleta ID
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => goToApp()}
                className="px-8 py-6 text-lg rounded-full"
              >
                Ya tengo cuenta
                <ArrowRight className="ml-2 w-4 h-4" />
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

interface FreeForeverCardProps {
  icon: typeof User;
  badge: string;
  title: string;
  description: string;
  benefits: string[];
  ctaText: string;
  onCTA: () => void;
}

function FreeForeverCard({
  icon: Icon,
  badge,
  title,
  description,
  benefits,
  ctaText,
  onCTA,
}: FreeForeverCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="rounded-2xl border border-sport-success/30 bg-gradient-to-br from-sport-success/5 to-transparent p-6 md:p-8"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="w-12 h-12 rounded-xl bg-sport-success/10 flex items-center justify-center">
          <Icon className="w-6 h-6 text-sport-success" />
        </div>
        <span className="text-xs font-bold uppercase tracking-wide text-sport-success bg-sport-success/10 px-3 py-1 rounded-full">
          {badge}
        </span>
      </div>
      <h3 className="text-2xl font-bold text-foreground mb-1">{title}</h3>
      <p className="text-sm text-muted-foreground mb-5">{description}</p>
      <p className="text-3xl font-bold text-sport-success mb-1">Gratis siempre</p>
      <p className="text-xs text-muted-foreground mb-6">
        Sin tarjeta de crédito · Sin permanencia
      </p>
      <ul className="space-y-2 mb-6">
        {benefits.map((b) => (
          <li key={b} className="flex items-start gap-2 text-sm text-muted-foreground">
            <CheckCircle2 className="w-4 h-4 text-sport-success shrink-0 mt-0.5" />
            {b}
          </li>
        ))}
      </ul>
      <Button
        onClick={onCTA}
        className="w-full bg-sport-success hover:bg-sport-success/90 text-white font-bold py-5 rounded-xl"
      >
        {ctaText}
      </Button>
    </motion.div>
  );
}
