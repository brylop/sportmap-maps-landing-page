import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  Bell,
  CalendarCheck,
  CalendarClock,
  CalendarX,
  CheckCircle2,
  Clock,
  Combine,
  FileText,
  Layers,
  ListOrdered,
  MessageCircle,
  Receipt,
  Repeat,
  Rocket,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Split,
  Users,
  Wallet,
  BarChart3,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { TechBackground } from "@/components/TechBackground";
import { SEO } from "@/components/SEO";
import { SportMapsFooter } from "@/components/SportMapsFooter";
import { salesWhatsappLink } from "@/lib/whatsappFallback";

/**
 * /canchas — SportMaps Canchas (reserva y cobro de canchas por WhatsApp).
 *
 * REGLA DE HONESTIDAD: el producto NO está en vivo todavía. Piloto con un club
 * el 6-nov-2026 y lanzamiento público el 20-nov-2026
 * (docs/plan-agresivo-canchas-2026-10.md en el repo de la app). Todo lo que
 * describe el producto va en futuro ("Lo que vas a tener"); solo se afirma
 * en presente lo que SportMaps ya tiene hoy (escuelas, cobros Wompi/MP,
 * lectura de comprobantes con IA, bot oficial de WhatsApp, torneos, tienda).
 *
 * Los precios viven aquí y NO en src/config/saas-plans.ts: ese archivo es
 * copia exacta del de la app y solo modela los tiers de Academia + addons.
 * Precios decididos el 2026-10-14 (D9 del plan).
 */

const LAUNCH_LABEL = "Lanzamiento: noviembre 2026";

const EARLY_ACCESS_MESSAGE =
  "Hola SportMaps, quiero ser de los primeros 50 clubes en SportMaps Canchas (3 meses de Canchas Pro gratis).\n\n" +
  "• Nombre del club o cancha:\n" +
  "• Ciudad:\n" +
  "• Número de canchas y deportes:\n" +
  "• ¿Ya usas SportMaps para tu escuela? (sí/no):";

const earlyAccessLink = salesWhatsappLink(EARLY_ACCESS_MESSAGE);

const steps = [
  {
    title: "El jugador elige la hora",
    description:
      "Por WhatsApp o en la página de tu cancha ve solo las horas libres, con el precio final desde el primer paso.",
    icon: CalendarClock,
  },
  {
    title: "Paga el abono",
    description:
      "En línea con Wompi o Mercado Pago (PSE, Nequi, tarjeta), o manda la foto de la transferencia y la IA la lee.",
    icon: Wallet,
  },
  {
    title: "Confirmación automática",
    description:
      "Cuando el pago cuadra, la reserva queda confirmada y le llega el mensaje. Tú no tienes que contestar nada.",
    icon: CheckCircle2,
  },
  {
    title: "Recordatorio antes de jugar",
    description:
      "El jugador recibe el recordatorio con la hora y la política de cancelación. Menos gente que no llega.",
    icon: Bell,
  },
];

const features = [
  {
    title: "Reserva sin cuenta, con número verificado",
    description:
      "El jugador no descarga nada ni crea usuario: reserva con su número de celular y un código de verificación. Nadie aparta a nombre de otro.",
    icon: Smartphone,
  },
  {
    title: "WhatsApp oficial de Meta",
    description:
      "El bot corre sobre la API oficial de WhatsApp Business, la misma que SportMaps ya usa hoy con escuelas. Sin riesgo de que te bloqueen el número.",
    icon: MessageCircle,
  },
  {
    title: "Wompi, PSE, Nequi y transferencia leída con IA",
    description:
      "Cobro en línea con la plata directo a tu cuenta, o transferencia: la IA lee monto, banco y referencia del comprobante, como ya lo hace hoy con las mensualidades de las escuelas.",
    icon: Receipt,
  },
  {
    title: "Pago dividido entre jugadores",
    description:
      "Cada jugador paga su parte con su propio enlace, y uno queda como responsable de la reserva.",
    icon: Split,
  },
  {
    title: "Política de cancelación clara",
    description:
      "Configurada en el sistema y visible antes de pagar. Al cancelar, el jugador ve cuánto se le devuelve.",
    icon: FileText,
  },
  {
    title: "Cero dobles reservas",
    description:
      "Una sola agenda para WhatsApp, web y recepción. La base de datos rechaza dos reservas en la misma cancha a la misma hora.",
    icon: ShieldCheck,
  },
  {
    title: "Socio vs. público",
    description:
      "Precios, ventanas de reserva y topes distintos para socios, alumnos de tu escuela y público general.",
    icon: Users,
  },
  {
    title: "Lista de espera",
    description:
      "Si alguien cancela o no paga a tiempo, la hora se libera y se avisa a los que estaban esperando.",
    icon: ListOrdered,
  },
  {
    title: "Turnos fijos",
    description:
      "El equipo que juega todos los martes a las 8 queda con su turno fijo y su precio especial.",
    icon: Repeat,
  },
  {
    title: "Canchas combinadas",
    description:
      "Dos canchas de fútbol 5 que se unen en una de fútbol 8: al reservar una, se bloquean las otras.",
    icon: Combine,
  },
  {
    title: "Festivos y franjas de precio",
    description:
      "Tarifas por franja horaria, fin de semana y festivos, sin que tengas que cambiar precios a mano.",
    icon: CalendarX,
  },
  {
    title: "Reportes de ocupación e ingresos",
    description:
      "Qué horas se llenan, cuáles quedan vacías y cuánto entró por cancha y por sede.",
    icon: BarChart3,
  },
  {
    title: "Escuela + canchas + torneos + tienda en una cuenta",
    description:
      "Si ya tienes escuela, torneos o tienda en SportMaps, las canchas se suman a la misma cuenta: la cancha se bloquea con las clases y tus alumnos pagan precio de socio.",
    icon: Layers,
  },
];

const plans = [
  {
    name: "Gratis",
    price: "$0",
    period: "/mes",
    limit: "Hasta 2 canchas",
    highlight: false,
    items: [
      "Página pública de reservas de tu cancha",
      "Agenda única sin dobles reservas",
      "Transferencia con aprobación manual",
      "Pago en efectivo",
      "Sin bot de WhatsApp",
    ],
  },
  {
    name: "Canchas Pro",
    price: "$99.000",
    period: "/mes",
    limit: "Hasta 5 canchas",
    highlight: true,
    items: [
      "Todo lo del plan Gratis",
      "Bot de WhatsApp sin tope de reservas",
      "Comprobantes leídos con IA",
      "Cobro en línea con Wompi y Mercado Pago",
      "Reglas socio/público, lista de espera y pago dividido",
    ],
  },
  {
    name: "Canchas Club",
    price: "$199.000",
    period: "/mes",
    limit: "Canchas ilimitadas, multisede",
    highlight: false,
    items: [
      "Todo lo de Canchas Pro",
      "Varias sedes en una sola cuenta",
      "Reportes avanzados",
      "Adicionales y caja por sede",
      "Roles para recepción y contador",
    ],
  },
];

const faqs = [
  {
    question: "¿SportMaps Canchas ya está disponible?",
    answer:
      "Todavía no. Arrancamos en noviembre de 2026: primero un piloto con un club real y luego el lanzamiento público. Si te anotas ahora en la lista de los primeros 50 clubes, te avisamos apenas abra y te quedas con 3 meses de Canchas Pro gratis.",
  },
  {
    question: "¿Cobran comisión por cada reserva?",
    answer:
      "No. SportMaps no cobra comisión por reserva, ni al club ni al jugador. Pagas solo el plan mensual (o nada, en el plan Gratis). Si cobras en línea, la pasarela (Wompi o Mercado Pago) cobra su tarifa de transacción como en cualquier pago con tarjeta o PSE; SportMaps no le suma nada encima.",
  },
  {
    question: "¿El jugador tiene que descargar una app o crear una cuenta?",
    answer:
      "No. Reserva por WhatsApp o en la página de tu cancha con su número de celular, que se verifica con un código. Así nadie puede apartar una hora a nombre de otra persona.",
  },
  {
    question: "¿Cómo evitan las dobles reservas?",
    answer:
      "WhatsApp, la página web y la recepción leen la misma agenda. Además, la base de datos no deja guardar dos reservas en la misma cancha a la misma hora, aunque lleguen al mismo segundo por canales distintos.",
  },
  {
    question: "¿Qué pasa si el jugador paga por transferencia?",
    answer:
      "Manda la foto del comprobante por WhatsApp o la sube en la página. La IA lee monto, banco y referencia y detecta comprobantes repetidos. Mientras tanto la hora queda apartada por unos minutos; si el comprobante no llega, se libera y se avisa a la lista de espera. Esta lectura de comprobantes ya funciona hoy en SportMaps para las mensualidades de las escuelas.",
  },
  {
    question: "Ya tengo mi escuela en SportMaps. ¿Puedo sumar las canchas?",
    answer:
      "Sí, y es donde más vas a ganar: todo queda en la misma cuenta. Puedes darles precio de socio a tus alumnos y sus familias, y la cancha se bloquea sola en las horas de clase de tu academia. Escríbenos y te contamos el precio del combo Academia + Canchas.",
  },
  {
    question: "¿Qué incluye el plan Gratis?",
    answer:
      "Hasta 2 canchas, página pública de reservas, agenda sin dobles reservas, pago por transferencia con aprobación manual y pago en efectivo. El bot de WhatsApp, la lectura de comprobantes con IA y el cobro en línea vienen desde Canchas Pro ($99.000/mes).",
  },
  {
    question: "¿Cómo funciona la promoción de los primeros 50 clubes?",
    answer:
      "Los primeros 50 clubes que se suman a SportMaps Canchas tienen 3 meses de Canchas Pro gratis. Para apartar tu cupo, escríbenos por WhatsApp con el nombre de tu cancha, la ciudad y cuántas canchas tienes.",
  },
];

const SITE_URL = "https://sportmaps.co";

export default function Canchas() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO
        title="SportMaps Canchas: reserva y cobro de canchas por WhatsApp | SportMaps"
        description="Tu cancha se reserva y se cobra sola por WhatsApp. Sin comisiones, sin dobles reservas, sin cuaderno. Lanzamiento en noviembre 2026: los primeros 50 clubes tienen 3 meses de Canchas Pro gratis."
        url={`${SITE_URL}/canchas`}
        canonical={`${SITE_URL}/canchas`}
        keywords="software reserva de canchas, reservar cancha por WhatsApp, alquiler de canchas sintéticas, sistema de reservas fútbol 5, agenda de canchas Colombia, alternativa a Controla Cancha, alternativa a Easycancha"
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <TechBackground />

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-sport-border bg-background/90 backdrop-blur-md">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3 min-w-0">
            <Link to="/" aria-label="Volver al inicio">
              <Button variant="ghost" size="icon">
                <ArrowLeft className="w-5 h-5" />
              </Button>
            </Link>
            <div className="min-w-0">
              <p className="text-lg font-bold text-sport-primary truncate">SportMaps Canchas</p>
              <p className="text-xs text-sport-text-secondary hidden sm:block">{LAUNCH_LABEL}</p>
            </div>
          </div>
          <Button asChild className="bg-sport-primary hover:bg-sport-primary/90 shrink-0">
            <a href={earlyAccessLink} target="_blank" rel="noopener noreferrer">
              <span className="hidden sm:inline">Quiero ser de los primeros 50</span>
              <span className="sm:hidden">Anotarme</span>
            </a>
          </Button>
        </div>
      </header>

      <main className="relative z-10 pt-20">
        {/* Hero */}
        <section className="container mx-auto px-4 py-12 md:py-16">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Badge className="mb-4 bg-sport-primary/10 text-sport-primary border-sport-primary/30">
                <Rocket className="w-3 h-3 mr-1" />
                {LAUNCH_LABEL}
              </Badge>

              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="text-foreground">Tu cancha se reserva y se cobra sola </span>
                <span className="bg-gradient-to-r from-sport-primary to-sport-accent bg-clip-text text-transparent">
                  por WhatsApp.
                </span>
              </h1>

              <p className="text-lg md:text-xl text-sport-text-secondary max-w-2xl mx-auto mb-8">
                Sin comisiones, sin dobles reservas, sin cuaderno. Tus jugadores eligen la hora,
                pagan el abono y reciben la confirmación sin que tengas que contestar un solo mensaje.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  asChild
                  className="bg-gradient-to-r from-sport-primary to-sport-accent hover:shadow-glow-primary text-white px-6 sm:px-8 py-6 text-base sm:text-lg font-bold rounded-full whitespace-normal h-auto"
                >
                  <a href={earlyAccessLink} target="_blank" rel="noopener noreferrer">
                    <Sparkles className="w-5 h-5 mr-2 shrink-0" />
                    Quiero ser de los primeros 50 — 3 meses Pro gratis
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  asChild
                  className="border-sport-primary text-sport-primary hover:bg-sport-primary hover:text-white px-8 py-6 text-lg rounded-full"
                >
                  <a href="#precios">Ver precios</a>
                </Button>
              </div>

              <p className="text-sm text-sport-text-secondary mt-4 flex items-center justify-center gap-2">
                <Clock className="w-4 h-4 shrink-0" />
                Aún no está abierto: te avisamos por WhatsApp apenas lancemos.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Cómo funciona */}
        <section className="bg-sport-surface/30 py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Así va a funcionar</h2>
              <p className="text-sport-text-secondary max-w-2xl mx-auto">
                Cuatro pasos, todos automáticos. Tú solo miras la agenda llenarse.
              </p>
            </div>
            <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {steps.map((step, index) => (
                <motion.li
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Card className="h-full border-sport-border bg-sport-card">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="w-9 h-9 rounded-full bg-sport-primary text-white font-bold flex items-center justify-center">
                          {index + 1}
                        </span>
                        <step.icon className="w-6 h-6 text-sport-primary" />
                      </div>
                      <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                      <p className="text-sm text-sport-text-secondary">{step.description}</p>
                    </CardContent>
                  </Card>
                </motion.li>
              ))}
            </ol>
          </div>
        </section>

        {/* Lo que ya existe hoy */}
        <section className="py-12 md:py-16 container mx-auto px-4">
          <div className="max-w-4xl mx-auto rounded-3xl border border-sport-border bg-sport-card p-6 md:p-10">
            <div className="flex items-center gap-2 mb-4">
              <BadgeCheck className="w-6 h-6 text-sport-success" />
              <h2 className="text-xl md:text-2xl font-bold">No arrancamos de cero</h2>
            </div>
            <p className="text-sport-text-secondary mb-6">
              SportMaps Canchas se construye sobre lo que SportMaps ya opera hoy con escuelas deportivas en Colombia:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "Cobros con Wompi y Mercado Pago, con la plata directo a la cuenta del club",
                "Lectura de comprobantes de transferencia con IA",
                "Bot sobre la API oficial de WhatsApp Business",
                "Gestión de escuelas, torneos y tienda en la misma cuenta",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="w-5 h-5 text-sport-success shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Features */}
        <section className="py-12 md:py-16 bg-sport-surface/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <Badge variant="outline" className="mb-3 border-sport-primary/40 text-sport-primary">
                {LAUNCH_LABEL}
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Lo que vas a tener</h2>
              <p className="text-sport-text-secondary max-w-2xl mx-auto">
                Pensado para canchas sintéticas, coliseos y clubes que hoy llevan la agenda en un cuaderno o en el chat.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: (index % 3) * 0.1 }}
                >
                  <Card className="h-full border-sport-border bg-sport-card hover:shadow-lg hover:border-sport-primary/30 transition-all">
                    <CardHeader>
                      <feature.icon className="w-9 h-9 text-sport-primary mb-2" />
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
          </div>
        </section>

        {/* Precios */}
        <section id="precios" className="py-12 md:py-16 container mx-auto px-4 scroll-mt-24">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Precios claros, sin comisión</h2>
            <p className="text-sport-text-secondary max-w-2xl mx-auto">
              Sin comisión por reserva, ni para el club ni para el jugador. Precios en pesos colombianos.
            </p>
          </div>

          <div className="max-w-3xl mx-auto mb-8 rounded-2xl border border-sport-primary/30 bg-sport-primary/10 p-4 text-center">
            <p className="font-semibold text-foreground flex items-center justify-center gap-2 flex-wrap">
              <Sparkles className="w-5 h-5 text-sport-primary" />
              Primeros 50 clubes: 3 meses de Canchas Pro gratis
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {plans.map((plan) => (
              <Card
                key={plan.name}
                className={`h-full flex flex-col bg-sport-card ${
                  plan.highlight ? "border-2 border-sport-primary shadow-lg" : "border-sport-border"
                }`}
              >
                <CardHeader>
                  {plan.highlight && (
                    <Badge className="w-fit mb-2 bg-sport-primary text-white">Recomendado</Badge>
                  )}
                  <CardTitle className="text-xl">{plan.name}</CardTitle>
                  <p className="text-sm text-sport-text-secondary">{plan.limit}</p>
                  <p className="mt-2">
                    <span className="text-3xl md:text-4xl font-bold text-foreground">{plan.price}</span>
                    <span className="text-sport-text-secondary">{plan.period}</span>
                  </p>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <ul className="space-y-2 mb-6 flex-1">
                    {plan.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-sport-success shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    asChild
                    variant={plan.highlight ? "default" : "outline"}
                    className={
                      plan.highlight
                        ? "w-full bg-sport-primary hover:bg-sport-primary/90"
                        : "w-full border-sport-primary text-sport-primary hover:bg-sport-primary hover:text-white"
                    }
                  >
                    <a href={earlyAccessLink} target="_blank" rel="noopener noreferrer">
                      Anotarme a la lista
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <p className="text-xs text-sport-text-secondary text-center mt-6 max-w-2xl mx-auto">
            Si cobras en línea, la pasarela (Wompi o Mercado Pago) cobra su propia tarifa de transacción; SportMaps no
            le suma comisión. ¿Ya tienes tu escuela en SportMaps? Pregúntanos por el combo Academia + Canchas.
          </p>
        </section>

        {/* Comparativas */}
        <section className="pb-4 container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm text-sport-text-secondary mb-3">¿Estás comparando opciones?</p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { slug: "controla-cancha", name: "Controla Cancha" },
                { slug: "easycancha", name: "Easycancha" },
                { slug: "playtomic", name: "Playtomic" },
              ].map((c) => (
                <Link
                  key={c.slug}
                  to={`/comparar/${c.slug}`}
                  className="inline-flex items-center gap-1 rounded-full border border-sport-border px-4 py-2 text-sm hover:border-sport-primary hover:text-sport-primary transition-colors"
                >
                  SportMaps vs {c.name}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-12 md:py-16 container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Preguntas frecuentes</h2>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={faq.question} value={`faq-${index}`}>
                  <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-sport-text-secondary">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* CTA final */}
        <section className="py-16 md:py-20 container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center bg-gradient-to-br from-sport-primary/10 to-sport-accent/10 rounded-3xl p-6 sm:p-8 md:p-12 border border-sport-primary/20">
            <CalendarCheck className="w-10 h-10 text-sport-primary mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Aparta tu cupo entre los primeros 50</h2>
            <p className="text-sport-text-secondary mb-8 max-w-xl mx-auto">
              Lanzamos en noviembre de 2026. Los primeros 50 clubes que se anoten tienen 3 meses de Canchas Pro gratis.
              Escríbenos por WhatsApp y te avisamos apenas abra.
            </p>
            <Button
              size="lg"
              asChild
              className="bg-gradient-to-r from-sport-primary to-sport-accent text-white px-6 sm:px-8 py-6 text-base sm:text-lg font-bold rounded-full hover:shadow-glow-primary whitespace-normal h-auto"
            >
              <a href={earlyAccessLink} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5 mr-2 shrink-0" />
                Quiero ser de los primeros 50 — 3 meses Pro gratis
              </a>
            </Button>
          </div>
        </section>
      </main>

      <SportMapsFooter />

    </div>
  );
}
