import { useState } from "react";
import {
  ArrowLeft,
  Trophy,
  School,
  Link2,
  Layers,
  Receipt,
  GitBranch,
  Goal,
  Table2,
  Ticket,
  QrCode,
  CalendarDays,
  CheckCircle2,
  MessageSquare,
  FileSpreadsheet,
  Wallet,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TechBackground } from "@/components/TechBackground";
import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { SportMapsFooter } from "@/components/SportMapsFooter";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { DemoRequestModal } from "@/components/modals/DemoRequestModal";
import { salesWhatsappLink } from "@/lib/whatsappFallback";
import { motion } from "framer-motion";

const ORGANIZER_WAITLIST_URL = salesWhatsappLink(
  "Hola SportMaps, organizo torneos y quiero entrar a la lista de espera / piloto gratis de 1 mes para organizadores."
);

const painPoints = [
  {
    problem: "Las escuelas te mandan listas de atletas en Excel",
    solution: "Cada escuela se inscribe por un enlace y carga a sus deportistas",
    icon: FileSpreadsheet,
  },
  {
    problem: "Comprobantes de pago perdidos en el WhatsApp",
    solution: "Cada inscripción se cobra con su comprobante y tú lo apruebas",
    icon: Wallet,
  },
  {
    problem: "El fixture armado a mano en una hoja",
    solution: "Fixture de liga o copa generado desde el torneo",
    icon: GitBranch,
  },
  {
    problem: "La tabla y los goleadores se pasan por foto",
    solution: "Tabla de posiciones y goleadores en una página pública",
    icon: Table2,
  },
];

const features = [
  {
    title: "Inscripción por enlace",
    description:
      "Compartes un enlace y cada escuela inscribe a sus deportistas. Tú ves todo consolidado, sin pegar Excels.",
    icon: Link2,
    color: "text-sport-primary",
  },
  {
    title: "Categorías y precios",
    description:
      "Configura las categorías del torneo y los precios de inscripción, con fases de precio.",
    icon: Layers,
    color: "text-sport-accent",
  },
  {
    title: "Cobro con comprobante",
    description:
      "La escuela paga la inscripción y sube el comprobante; tú lo revisas y lo apruebas.",
    icon: Receipt,
    color: "text-sport-success",
  },
  {
    title: "Fixture de liga o copa",
    description:
      "Arma el fixture en formato liga o copa a partir de los equipos inscritos.",
    icon: GitBranch,
    color: "text-sport-info",
  },
  {
    title: "Goleadores",
    description: "Registra los resultados y lleva la tabla de goleadores del torneo.",
    icon: Goal,
    color: "text-sport-highlight",
  },
  {
    title: "Tabla pública",
    description:
      "Página pública con la tabla de posiciones para compartir con familias y escuelas.",
    icon: Table2,
    color: "text-sport-warning",
  },
];

const comingSoon = [
  { title: "Boletería con QR", icon: Ticket },
  { title: "Check-in en la puerta", icon: QrCode },
  { title: "Plan por evento", icon: CalendarDays },
];

const flow = [
  {
    step: "1",
    title: "Configura el torneo",
    desc: "Categorías, precios de inscripción y fases de precio.",
    icon: Trophy,
  },
  {
    step: "2",
    title: "Las escuelas se inscriben",
    desc: "Compartes el enlace y cada escuela inscribe a sus deportistas.",
    icon: School,
  },
  {
    step: "3",
    title: "Cobras con comprobante",
    desc: "Cada escuela sube su comprobante y tú lo apruebas.",
    icon: Receipt,
  },
  {
    step: "4",
    title: "Juegas el torneo",
    desc: "Fixture de liga o copa, resultados, goleadores y tabla pública.",
    icon: GitBranch,
  },
];

export default function Organizadores() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO
        title="Torneos para Escuelas y Organizadores | SportMaps"
        description="Torneos de escuela: inscripción de escuelas por enlace, categorías y precios, cobro con comprobante, fixture de liga o copa, goleadores y tabla pública. Organizadores independientes: lista de espera y piloto gratis de un mes."
        url="https://sportmaps.co/organizadores"
        canonical="https://sportmaps.co/organizadores"
        keywords="organizar torneos deportivos, inscripción de escuelas, fixture liga copa, tabla de posiciones, goleadores, torneos escolares Colombia"
      />
      <TechBackground />

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-sport-border bg-background/90 backdrop-blur-md">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="w-5 h-5" />
              </Button>
            </Link>
            <div>
              <h1 className="text-lg font-bold text-sport-primary">
                SportMaps para Organizadores
              </h1>
              <p className="text-xs text-sport-text-secondary hidden sm:block">
                Torneos de escuela sin Excel
              </p>
            </div>
          </div>
          <Button asChild className="bg-violet-600 hover:bg-violet-700 text-white">
            <a href={ORGANIZER_WAITLIST_URL} target="_blank" rel="noopener noreferrer">
              Lista de espera
            </a>
          </Button>
        </div>
      </header>

      <main className="relative z-10 pt-20">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-12 md:py-16">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Badge className="mb-4 bg-violet-500/10 text-violet-600 border-violet-500/30">
                <Trophy className="w-3 h-3 mr-1" />
                Torneos de escuela
              </Badge>

              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="text-foreground">Tus torneos. </span>
                <span className="bg-gradient-to-r from-violet-500 to-sport-accent bg-clip-text text-transparent">
                  Sin Excel.
                </span>
              </h2>

              <p className="text-lg md:text-xl text-sport-text-secondary max-w-2xl mx-auto mb-6">
                Inscripción de escuelas por enlace, categorías y precios, cobro con
                comprobante, fixture de liga o copa, goleadores y tabla pública.
              </p>

              <p className="text-md text-sport-text-secondary mb-8">
                Hoy los torneos se crean desde una escuela con el adicional{" "}
                <strong>Torneos</strong>. ¿Organizas por tu cuenta? Únete a la lista de
                espera o pide un piloto gratis de un mes.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  asChild
                  className="bg-gradient-to-r from-violet-500 to-sport-accent hover:shadow-glow-accent text-white px-8 py-6 text-lg font-bold rounded-full"
                >
                  <a href={ORGANIZER_WAITLIST_URL} target="_blank" rel="noopener noreferrer">
                    <MessageSquare className="w-5 h-5 mr-2" />
                    Piloto gratis 1 mes
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={openModal}
                  className="border-violet-500 text-violet-600 hover:bg-violet-500 hover:text-white px-8 py-6 text-lg rounded-full"
                >
                  <School className="w-5 h-5 mr-2" />
                  Soy una escuela
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Pain Points */}
        <section className="bg-sport-surface/30 py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-3">
                ¿Te suena familiar?
              </h3>
              <p className="text-sport-text-secondary max-w-2xl mx-auto">
                Lo que vive quien organiza un torneo con varias escuelas, y cómo lo
                resolvemos hoy.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {painPoints.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                >
                  <Card className="border-sport-border bg-sport-card hover:shadow-lg transition-shadow h-full">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-violet-500/10 flex items-center justify-center flex-shrink-0">
                          <point.icon className="w-6 h-6 text-violet-600" />
                        </div>
                        <div>
                          <p className="text-sport-text-secondary line-through mb-2">
                            ❌ {point.problem}
                          </p>
                          <p className="text-foreground font-medium flex items-start gap-2">
                            <CheckCircle2 className="w-5 h-5 text-sport-success flex-shrink-0 mt-0.5" />
                            <span>{point.solution}</span>
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* How it Works */}
        <section className="py-12 md:py-16 container mx-auto px-4">
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Así fluye un torneo
            </h3>
            <p className="text-sport-text-secondary max-w-2xl mx-auto">
              De abrir inscripciones a publicar la tabla, en una sola herramienta.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {flow.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
              >
                <Card className="h-full border-sport-border bg-sport-card hover:border-violet-500/40 hover:shadow-lg transition-all">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-violet-500 to-sport-accent flex items-center justify-center text-white text-lg font-bold flex-shrink-0">
                        {item.step}
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <item.icon className="w-5 h-5 text-violet-600" />
                          <h4 className="font-bold text-lg">{item.title}</h4>
                        </div>
                        <p className="text-sm text-sport-text-secondary">{item.desc}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-12 md:py-16 bg-sport-surface/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Lo que tienes hoy
              </h3>
              <p className="text-sport-text-secondary max-w-2xl mx-auto">
                Disponible para escuelas con el adicional Torneos.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <Card className="h-full border-sport-border bg-sport-card hover:shadow-lg hover:border-violet-500/30 transition-all">
                    <CardHeader>
                      <feature.icon className={`w-10 h-10 ${feature.color} mb-2`} />
                      <CardTitle className="text-lg">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-sport-text-secondary">
                        {feature.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Próximamente */}
            <div className="mt-10 max-w-3xl mx-auto text-center">
              <p className="text-sm font-semibold uppercase tracking-wide text-sport-text-secondary mb-3">
                Próximamente
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {comingSoon.map((item) => (
                  <div
                    key={item.title}
                    className="flex items-center gap-2 px-4 py-2 bg-sport-card rounded-full border border-dashed border-sport-border"
                  >
                    <item.icon className="w-4 h-4 text-sport-text-secondary" />
                    <span className="text-sm text-sport-text-secondary">{item.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Comparativa con Eventos */}
        <section className="py-12 container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center bg-sport-card border border-sport-border rounded-2xl p-6 md:p-8">
            <h4 className="text-lg md:text-xl font-bold mb-3">
              ¿Organizas un evento puntual?
            </h4>
            <p className="text-sport-text-secondary mb-5">
              Mira cómo funcionan hoy los eventos en SportMaps y quién puede crearlos.
            </p>
            <Link to="/eventos">
              <Button
                variant="outline"
                className="border-sport-accent text-sport-accent hover:bg-sport-accent hover:text-white rounded-full"
              >
                Ver SportMaps para Eventos
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 md:py-20 container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center bg-gradient-to-br from-violet-500/10 to-sport-accent/10 rounded-3xl p-8 md:p-12 border border-violet-500/20">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              ¿Organizas torneos sin tener una escuela?
            </h3>
            <p className="text-sport-text-secondary mb-8 max-w-xl mx-auto">
              Estamos abriendo SportMaps a organizadores independientes. Únete a la lista
              de espera o pide un piloto gratis de un mes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                asChild
                className="bg-gradient-to-r from-violet-500 to-sport-accent text-white px-8 py-6 text-lg font-bold rounded-full hover:shadow-glow-accent"
              >
                <a href={ORGANIZER_WAITLIST_URL} target="_blank" rel="noopener noreferrer">
                  <MessageSquare className="w-5 h-5 mr-2" />
                  Unirme a la lista de espera
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={openModal}
                className="border-violet-500 text-violet-600 hover:bg-violet-500 hover:text-white px-8 py-6 text-lg rounded-full"
              >
                <Trophy className="w-5 h-5 mr-2" />
                Soy una escuela: activar Torneos
              </Button>
            </div>
          </div>
        </section>
      </main>

      <SportMapsFooter />
      <WhatsAppButton />
      <DemoRequestModal
        isOpen={isModalOpen}
        onClose={closeModal}
        source="organizadores"
      />
    </div>
  );
}
