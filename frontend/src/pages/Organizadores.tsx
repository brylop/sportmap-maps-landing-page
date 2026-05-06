import { useState } from "react";
import {
  ArrowLeft,
  Trophy,
  School,
  FileCheck,
  CreditCard,
  Wallet,
  Ticket,
  QrCode,
  MapPin,
  CheckCircle2,
  Play,
  Clock,
  Shield,
  Smartphone,
  Star,
  ClipboardList,
  Globe,
  MessageSquare,
  Mail,
  Calculator,
  FileSpreadsheet,
  Receipt,
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
import { motion } from "framer-motion";

const painPoints = [
  {
    problem: "Las escuelas te mandan listas de atletas en Excel",
    solution: "Inscripción colectiva: cada escuela inscribe a sus atletas en bloque",
    icon: FileSpreadsheet,
  },
  {
    problem: "Documentos por email y WhatsApp sin orden",
    solution: "Bandeja de documentos por inscrito (cédula, EPS, autorización)",
    icon: Mail,
  },
  {
    problem: "Llevas abonos en cuaderno o en notas del celular",
    solution: "Plan de abonos parciales con saldos en vivo y recordatorios",
    icon: Calculator,
  },
  {
    problem: "Pasarela de pagos en una cuenta, efectivo en otra",
    solution: "Pasarela + pagos manuales conciliados en un solo reporte",
    icon: Wallet,
  },
  {
    problem: "Ticketera externa que cobra comisión gigante",
    solution: "Boletería integrada con QR, sin comisión de plataforma",
    icon: Ticket,
  },
  {
    problem: "Distribución solo por flyer y WhatsApp",
    solution: "Página pública + pin en mapa SportMaps + link compartible",
    icon: MapPin,
  },
];

const features = [
  {
    title: "Inscripciones con Escuelas",
    description:
      "Cada escuela tiene su panel para inscribir a sus atletas en bloque. Tú ves todo consolidado, sin pegar Excels.",
    icon: School,
    color: "text-sport-primary",
  },
  {
    title: "Recepción de Documentos",
    description:
      "Cédula, EPS, autorización de padres, certificado médico. Subida directa por el atleta o la escuela; tú validas o rechazas con un click.",
    icon: FileCheck,
    color: "text-sport-success",
  },
  {
    title: "Pagos Completos y Abonos",
    description:
      "Configura precios por categoría y permite pagos parciales con fechas de corte. El saldo se actualiza solo.",
    icon: CreditCard,
    color: "text-sport-accent",
  },
  {
    title: "Pasarelas + Pagos Manuales",
    description:
      "Wompi, transferencia o efectivo. Cargas el comprobante manual o entra automático por la pasarela; todo en una sola conciliación.",
    icon: Wallet,
    color: "text-sport-info",
  },
  {
    title: "Boletería con QR",
    description:
      "Vende boletas para público, acompañantes y aliados. Cada boleta es un QR único validado en la entrada.",
    icon: Ticket,
    color: "text-sport-highlight",
  },
  {
    title: "Check-in en la Puerta",
    description:
      "Escanea QR de atletas y boletas con tu celular. Reportes de asistencia en tiempo real y control de aforo.",
    icon: QrCode,
    color: "text-sport-warning",
  },
  {
    title: "Distribución Dentro y Fuera",
    description:
      "Tu evento aparece en el mapa SportMaps, tiene página pública profesional y un link único para WhatsApp, IG y email.",
    icon: Globe,
    color: "text-sport-primary",
  },
  {
    title: "Conciliación y Reportes",
    description:
      "Reporte único de pagos, abonos, boletería y asistencia. Exporta a Excel o conecta con tu contador. Cero hojas sueltas.",
    icon: Receipt,
    color: "text-sport-accent",
  },
];

const eventTypes = [
  { name: "Copas Departamentales", emoji: "🥇" },
  { name: "Festivales Escolares", emoji: "🎉" },
  { name: "Torneos por Categoría", emoji: "🏆" },
  { name: "Circuitos Anuales", emoji: "🔁" },
  { name: "Competencias Federadas", emoji: "🛡️" },
  { name: "Showcases Multi-escuela", emoji: "✨" },
];

const flow = [
  {
    step: "1",
    title: "Configura tu evento",
    desc: "Categorías, precios, cupos, fechas de corte y documentos requeridos.",
    icon: Trophy,
  },
  {
    step: "2",
    title: "Las escuelas inscriben",
    desc: "Cada escuela inscribe a sus atletas y carga sus documentos.",
    icon: School,
  },
  {
    step: "3",
    title: "Cobras y validas",
    desc: "Pagos completos, abonos parciales, pasarela o manual. Validas docs.",
    icon: CreditCard,
  },
  {
    step: "4",
    title: "Vendes boletería",
    desc: "Público, acompañantes y patrocinadores con QR único por boleta.",
    icon: Ticket,
  },
  {
    step: "5",
    title: "Distribuyes",
    desc: "Página pública + mapa SportMaps + link único para tus canales.",
    icon: Globe,
  },
  {
    step: "6",
    title: "Operas el día D",
    desc: "Check-in con QR, control de aforo y conciliación 1-click.",
    icon: QrCode,
  },
];

const testimonials = [
  {
    name: "Carlos Restrepo",
    role: "Director, Copa Departamental Fútbol Sub-15",
    quote:
      "Antes tenía 12 escuelas mandándome Excel con 800 niños. Hoy cada escuela inscribe a los suyos, suben docs y yo apruebo. Cerré la operación 3 días antes del evento.",
    rating: 5,
  },
  {
    name: "Andrea Pérez",
    role: "Coordinadora, Festival de Patinaje",
    quote:
      "Los abonos parciales me cambiaron la vida. Padres pagan en 3 partes, el sistema avisa solo y al día del evento ya estaba todo cuadrado.",
    rating: 5,
  },
  {
    name: "Felipe Vargas",
    role: "Manager, Torneo Juvenil Multidisciplina",
    quote:
      "Vendí 2.300 boletas con QR sin pagar comisión a una ticketera. La conciliación entre Wompi y los pagos en efectivo me la hace en un click.",
    rating: 5,
  },
];

const differentiators = [
  { text: "Sin Excel", icon: FileSpreadsheet },
  { text: "Coordinación con escuelas", icon: School },
  { text: "Abonos parciales", icon: Calculator },
  { text: "Pasarela + manual", icon: Wallet },
  { text: "Boletería con QR sin comisión", icon: Ticket },
  { text: "Mapa + link público", icon: MapPin },
  { text: "Mobile first", icon: Smartphone },
];

export default function Organizadores() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SEO
        title="Organizadores Pro de Eventos Deportivos | SportMaps"
        description="Operación completa de eventos deportivos: inscripciones con escuelas, recepción de documentos, pagos y abonos, pasarelas + manuales, boletería con QR y distribución. Todo desde la app, sin Excel."
        url="https://sportmaps.co/organizadores"
        canonical="https://sportmaps.co/organizadores"
        keywords="organizar eventos deportivos, inscripciones colectivas escuelas, abonos torneos, ticketería deportiva QR, gestión torneos sin excel, copas escolares Colombia"
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
                SportMaps para Organizadores Pro
              </h1>
              <p className="text-xs text-sport-text-secondary hidden sm:block">
                Operación completa de eventos sin Excel
              </p>
            </div>
          </div>
          <Button
            onClick={openModal}
            className="bg-violet-600 hover:bg-violet-700 text-white"
          >
            Solicitar Demo
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
                Nuevo · Organizadores Pro
              </Badge>

              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                <span className="text-foreground">Tus eventos. </span>
                <span className="bg-gradient-to-r from-violet-500 to-sport-accent bg-clip-text text-transparent">
                  Sin Excel. Sin caos.
                </span>
              </h2>

              <p className="text-lg md:text-xl text-sport-text-secondary max-w-2xl mx-auto mb-6">
                Coordina inscripciones con escuelas, recibe documentos, valida pagos y
                abonos, vende boletería con QR y distribuye tu evento dentro y fuera de la
                plataforma. <strong>Todo desde la app.</strong>
              </p>

              <p className="text-md text-violet-600 font-medium italic mb-8">
                "Operación de eventos lista de verdad, no un Excel disfrazado."
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  onClick={openModal}
                  className="bg-gradient-to-r from-violet-500 to-sport-accent hover:shadow-glow-accent text-white px-8 py-6 text-lg font-bold rounded-full"
                >
                  <Play className="w-5 h-5 mr-2" />
                  Ver Demo en Vivo
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={openModal}
                  className="border-violet-500 text-violet-600 hover:bg-violet-500 hover:text-white px-8 py-6 text-lg rounded-full"
                >
                  <MessageSquare className="w-5 h-5 mr-2" />
                  Hablar con Ventas
                </Button>
              </div>

              <p className="text-sm text-sport-text-secondary mt-4 flex items-center justify-center gap-2">
                <Shield className="w-4 h-4" />
                Pasarela + manual · Abonos · Boletería con QR · Sin comisión de plataforma
              </p>
            </motion.div>
          </div>
        </section>

        {/* Event Types */}
        <section className="py-8 container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {eventTypes.map((type, index) => (
              <motion.div
                key={type.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
              >
                <Badge
                  variant="outline"
                  className="px-4 py-2 text-sm border-sport-border bg-sport-card"
                >
                  <span className="mr-2">{type.emoji}</span>
                  {type.name}
                </Badge>
              </motion.div>
            ))}
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
                Lo que el organizador profesional vive cada temporada — y cómo lo
                resolvemos.
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
              Así fluye la operación
            </h3>
            <p className="text-sport-text-secondary max-w-2xl mx-auto">
              De crear el evento a cuadrar caja el día siguiente, todo en una sola
              herramienta.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
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
                Todo lo que necesitas para operar
              </h3>
              <p className="text-sport-text-secondary max-w-2xl mx-auto">
                Inscripciones, documentos, pagos, abonos, ticketería y distribución —
                conectados en un solo flujo.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
          </div>
        </section>

        {/* Coordinación con escuelas — bloque dedicado */}
        <section className="py-12 md:py-16 container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <Badge className="mb-3 bg-violet-500/10 text-violet-600 border-violet-500/30">
                  <School className="w-3 h-3 mr-1" />
                  Coordinación con escuelas
                </Badge>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  La escuela inscribe. Tú apruebas. El padre paga.
                </h3>
                <p className="text-sport-text-secondary mb-6">
                  Cada escuela tiene su panel para inscribir a sus atletas, subir
                  documentos y ver el estado de pago. Tú ves todo consolidado en un solo
                  tablero. Sin Excel rebotando, sin mensajes perdidos.
                </p>
                <ul className="space-y-3">
                  {[
                    "Cada escuela inscribe en bloque a sus atletas",
                    "Documentos se cargan por inscrito y tú los validas",
                    "Pagos por escuela, por atleta o mixtos",
                    "Abonos con fechas de corte y recordatorios automáticos",
                    "Reporte por escuela: cuántos vienen, cuánto deben",
                  ].map((b) => (
                    <li key={b} className="flex items-start gap-3 text-sm">
                      <CheckCircle2 className="w-5 h-5 text-sport-success flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{b}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <Card className="border-violet-500/30 bg-gradient-to-br from-violet-500/5 to-sport-accent/5">
                  <CardContent className="p-6 space-y-4">
                    {[
                      { school: "Escuela Águilas FC", count: "42 atletas", status: "85% pagado", color: "text-sport-success" },
                      { school: "Liga San Antonio", count: "28 atletas", status: "60% pagado", color: "text-sport-warning" },
                      { school: "Club Los Andes", count: "55 atletas", status: "100% pagado", color: "text-sport-success" },
                      { school: "Academia Nueva", count: "18 atletas", status: "Sin pagar", color: "text-sport-text-secondary" },
                    ].map((row) => (
                      <div
                        key={row.school}
                        className="flex items-center justify-between p-3 rounded-lg bg-background/60 border border-sport-border"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 rounded-lg bg-violet-500/10 flex items-center justify-center">
                            <School className="w-4 h-4 text-violet-600" />
                          </div>
                          <div>
                            <p className="text-sm font-semibold text-foreground">
                              {row.school}
                            </p>
                            <p className="text-xs text-sport-text-secondary">
                              {row.count}
                            </p>
                          </div>
                        </div>
                        <span className={`text-xs font-medium ${row.color}`}>
                          {row.status}
                        </span>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Differentiators */}
        <section className="py-12 bg-sport-surface/30">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-3">
              {differentiators.map((diff, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center gap-2 px-4 py-2 bg-sport-card rounded-full border border-violet-500/30"
                >
                  <diff.icon className="w-4 h-4 text-violet-600" />
                  <span className="text-sm font-medium text-foreground">
                    {diff.text}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-12 md:py-16 container mx-auto px-4">
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Organizadores que ya operan así
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full border-sport-border bg-sport-card">
                  <CardContent className="p-6">
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 fill-sport-warning text-sport-warning"
                        />
                      ))}
                    </div>
                    <p className="text-foreground mb-4 italic">
                      "{testimonial.quote}"
                    </p>
                    <div>
                      <p className="font-semibold text-foreground">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-sport-text-secondary">
                        {testimonial.role}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Comparativa con Eventos */}
        <section className="py-12 container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center bg-sport-card border border-sport-border rounded-2xl p-6 md:p-8">
            <h4 className="text-lg md:text-xl font-bold mb-3">
              ¿Solo necesitas un evento puntual?
            </h4>
            <p className="text-sport-text-secondary mb-5">
              Si organizas un festival o clase abierta sin coordinación con escuelas, abonos
              ni boletería con QR, el plan por evento de SportMaps es para ti.
            </p>
            <Link to="/eventos">
              <Button
                variant="outline"
                className="border-sport-accent text-sport-accent hover:bg-sport-accent hover:text-white rounded-full"
              >
                Ver SportMaps para Eventos puntuales
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 md:py-20 container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center bg-gradient-to-br from-violet-500/10 to-sport-accent/10 rounded-3xl p-8 md:p-12 border border-violet-500/20">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              ¿Listo para operar sin Excel?
            </h3>
            <p className="text-sport-text-secondary mb-8 max-w-xl mx-auto">
              Agenda una demo de 30 min con tu calendario de eventos en mano. Te mostramos
              cómo migrar tu próximo torneo en menos de 1 semana.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={openModal}
                className="bg-gradient-to-r from-violet-500 to-sport-accent text-white px-8 py-6 text-lg font-bold rounded-full hover:shadow-glow-accent"
              >
                <Trophy className="w-5 h-5 mr-2" />
                Agendar Demo
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={openModal}
                className="border-violet-500 text-violet-600 hover:bg-violet-500 hover:text-white px-8 py-6 text-lg rounded-full"
              >
                <Clock className="w-5 h-5 mr-2" />
                Recibir info por WhatsApp
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
