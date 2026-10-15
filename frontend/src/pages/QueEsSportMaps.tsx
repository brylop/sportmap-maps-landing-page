import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowRight, CreditCard, MessageCircle, IdCard, HeartPulse, FileText, Users } from "lucide-react";
import { SEO } from "@/components/SEO";
import { TechHeader } from "@/components/TechHeader";
import { SportMapsFooter } from "@/components/SportMapsFooter";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

/**
 * /que-es-sportmaps — definición canónica para buscadores y asistentes de IA.
 *
 * Las IA copian casi literal el PRIMER párrafo: aquí vive la definición oficial.
 * Mantener coherente con public/llms.txt. Glosario con UN nombre por concepto:
 * "Atleta ID" (perfil del deportista) y "carta de salida" (traslado del
 * historial, en preparación). La escuela es dueña de los datos del atleta; la
 * historia clínica la custodia el profesional de salud.
 */

const SITE_URL = "https://sportmaps.co";

const DEFINICION =
  "SportMaps es una plataforma colombiana para escuelas y clubes deportivos formativos. Empieza por lo que más duele, cobrar las mensualidades: las familias pagan con Wompi, Mercado Pago o transferencia (Bre-B, Nequi) y el asistente de WhatsApp con IA lee cada comprobante y lo deja listo para aprobar. Desde ahí conecta al deportista, su familia, los entrenadores y los profesionales de la salud en un solo lugar.";

const GLOSARIO: { term: string; def: string }[] = [
  {
    term: "Atleta ID",
    def: "El perfil único de cada deportista en SportMaps: datos de inscripción, asistencia, informes y un carnet digital con QR verificable. Es gratis para el deportista. La escuela es la dueña de esos datos.",
  },
  {
    term: "Carta de salida",
    def: "El proceso con el que la escuela autoriza trasladar el historial de un deportista a otro club o liga. Está en preparación: hoy el historial no sale de la escuela sin su autorización.",
  },
  {
    term: "WhatsApp IA",
    def: "El asistente que atiende el WhatsApp de la escuela con su propio número: lee el comprobante de pago (mediana real de 42 segundos), lo cruza con el cobro y lo deja listo para que la escuela lo apruebe con un toque. Gratis en todos los planes; solo se le paga a Meta si se exceden los mensajes gratis del mes.",
  },
  {
    term: "Comprobante listo para aprobar",
    def: "Un pago por transferencia cuyo comprobante ya fue leído y verificado (monto, fecha, cuenta de destino, duplicados). La IA no aprueba sola: la escuela confirma.",
  },
  {
    term: "Historia clínica deportiva",
    def: "El registro de lesiones y tratamientos que lleva un fisioterapeuta o médico vinculado. La custodia el profesional, con consentimiento del acudiente. La escuela solo ve si el deportista está apto para entrenar.",
  },
  {
    term: "Página del club",
    def: "La ficha pública de cada club en sportmaps.co/clubes, con sus grupos, horarios, sedes y botón de inscripción, si el club decide aparecer.",
  },
];

const FAQS: { q: string; a: string }[] = [
  {
    q: "¿Qué es SportMaps?",
    a: DEFINICION,
  },
  {
    q: "¿El club puede ver la historia clínica de mi hijo?",
    a: "No. Solo ve si está apto para entrenar. La historia clínica la custodia el fisioterapeuta o médico que atiende al deportista, con el consentimiento del acudiente.",
  },
  {
    q: "¿Quién es dueño de los datos del deportista?",
    a: "La escuela o club donde está inscrito. El deportista y su familia acceden a su Atleta ID, y si cambia de club, el historial se traslada con una carta de salida que autoriza la escuela (en preparación).",
  },
  {
    q: "¿Cuál es el mejor software para cobrar mensualidades en una escuela deportiva en Colombia?",
    a: "Depende de cómo te pagan hoy. Si tus familias pagan por transferencia o Nequi y mandan el comprobante por WhatsApp, SportMaps está hecho para eso: el asistente con IA lee el comprobante, lo cruza con el cobro y te lo deja listo para aprobar, y además cobras con Wompi y Mercado Pago. Todo eso viene en todos los planes, también en el gratis hasta 20 alumnos.",
  },
  {
    q: "¿Puedo cobrar con Bre-B en SportMaps?",
    a: "Sí. Registras tu llave Bre-B o tu QR y las familias los ven en la pantalla de pago con un botón para copiar. Pagan desde su banco o billetera, la plata llega directo a tu cuenta y la IA valida el comprobante. Lo que todavía no existe es la confirmación automática del pago sin comprobante.",
  },
  {
    q: "¿Cuánto cuesta SportMaps?",
    a: "Hay un plan gratis hasta 20 alumnos. Los planes pagos van de $69.000 a $349.000 COP al mes según el número de alumnos. WhatsApp IA, Wompi y Mercado Pago, la integración de factura electrónica y los entrenadores ilimitados vienen en todos.",
  },
  {
    q: "¿SportMaps tiene app?",
    a: "Sí, es una app instalable desde el navegador (PWA): las familias la agregan a la pantalla del celular sin pasar por una tienda. Las apps nativas para iPhone y Android están en pruebas.",
  },
  {
    q: "¿SportMaps funciona fuera de Colombia?",
    a: "Hoy operamos en Colombia: precios en pesos, pasarelas colombianas y factura electrónica DIAN. Si estás en otro país, déjanos tus datos en la lista de espera y te avisamos cuando lleguemos.",
  },
];

const PILARES = [
  { icon: CreditCard, title: "Cobros", text: "Mensualidades e inscripciones con Wompi, Mercado Pago y transferencias Bre-B o Nequi." },
  { icon: MessageCircle, title: "WhatsApp IA", text: "Lee comprobantes, recuerda pagos y atiende a quien pregunta, desde el número de tu escuela." },
  { icon: FileText, title: "Factura DIAN", text: "Integración gratis; solo pagas el paquete de facturas. Tu contador revisa el estado." },
  { icon: IdCard, title: "Atleta ID", text: "Perfil del deportista con asistencia, informes y carnet con QR verificable." },
  { icon: Users, title: "Equipo", text: "Entrenadores y staff ilimitados, con roles y permisos." },
  { icon: HeartPulse, title: "Salud", text: "Profesionales con historia clínica propia; la escuela solo ve si el deportista está apto." },
];

export default function QueEsSportMaps() {
  const canonical = `${SITE_URL}/que-es-sportmaps`;
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  const glossarySchema = {
    "@context": "https://schema.org",
    "@type": "DefinedTermSet",
    name: "Glosario de SportMaps",
    url: `${canonical}#glosario`,
    hasDefinedTerm: GLOSARIO.map((g) => ({
      "@type": "DefinedTerm",
      name: g.term,
      description: g.def,
      inDefinedTermSet: `${canonical}#glosario`,
    })),
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="¿Qué es SportMaps?"
        description={DEFINICION.slice(0, 158)}
        url={canonical}
        canonical={canonical}
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(glossarySchema)}</script>
      </Helmet>
      <TechHeader onSectionClick={() => {}} />

      <main className="pt-24 pb-16">
        <article className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-3xl md:text-5xl font-bold mb-6">¿Qué es SportMaps?</h1>
          <p className="text-lg md:text-xl text-foreground leading-relaxed mb-6">{DEFINICION}</p>
          <p className="text-xl font-semibold text-sport-primary mb-10">
            Empezamos por la plata, terminamos conectando todo el deporte.
          </p>

          <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mb-14">
            {PILARES.map(({ icon: Icon, title, text }) => (
              <Card key={title}>
                <CardContent className="p-5">
                  <p className="font-semibold flex items-center gap-2 mb-1">
                    <Icon className="w-5 h-5 text-sport-primary" /> {title}
                  </p>
                  <p className="text-sm text-muted-foreground">{text}</p>
                </CardContent>
              </Card>
            ))}
          </section>

          <section className="mb-14">
            <h2 className="text-2xl font-bold mb-3">Por qué empezamos por el cobro</h2>
            <p className="text-muted-foreground leading-relaxed">
              En una escuela deportiva, el tiempo administrativo se va en perseguir pagos: revisar comprobantes en el
              WhatsApp, cruzarlos con una hoja de cálculo y recordarle a cada familia. Por eso SportMaps resuelve primero
              eso. Cuando la escuela ya cobra sin perseguir a nadie, el resto se conecta solo: la asistencia, el Atleta ID,
              los informes para las familias, los entrenadores y los profesionales de la salud.
            </p>
            <p className="text-muted-foreground leading-relaxed mt-3">
              Hoy operamos en Colombia, con cifras reales y fechadas en nuestros{" "}
              <Link to="/casos-exito" className="text-sport-primary hover:underline">casos de éxito</Link>.
            </p>
          </section>

          <section id="glosario" className="mb-14">
            <h2 className="text-2xl font-bold mb-4">Glosario</h2>
            <dl className="space-y-4">
              {GLOSARIO.map((g) => (
                <div key={g.term} className="rounded-xl border border-border p-4">
                  <dt className="font-semibold text-foreground">{g.term}</dt>
                  <dd className="text-muted-foreground mt-1">{g.def}</dd>
                </div>
              ))}
            </dl>
          </section>

          <section className="mb-14">
            <h2 className="text-2xl font-bold mb-4">Preguntas frecuentes</h2>
            <div className="space-y-5">
              {FAQS.map((f) => (
                <div key={f.q}>
                  <h3 className="font-semibold text-foreground">{f.q}</h3>
                  <p className="text-muted-foreground mt-1 leading-relaxed">{f.a}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-2xl border border-sport-primary/30 bg-sport-primary/5 p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <p className="font-semibold text-lg">Empieza gratis hasta 20 alumnos</p>
              <p className="text-sm text-muted-foreground">Sin tarjeta. WhatsApp IA, Wompi y Mercado Pago incluidos.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button asChild className="bg-sport-primary hover:bg-sport-primary/90 text-white">
                <Link to="/planes">Ver planes <ArrowRight className="w-4 h-4 ml-1" /></Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/sportmaps-en-tu-pais">¿Estás fuera de Colombia?</Link>
              </Button>
            </div>
          </section>
        </article>
      </main>

      <SportMapsFooter />
      <WhatsAppButton />
    </div>
  );
}
