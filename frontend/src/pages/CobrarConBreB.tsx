import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowRight, Copy, QrCode, ScanSearch, CheckCircle2, ShieldCheck, Clock } from "lucide-react";
import { SEO } from "@/components/SEO";
import { TechHeader } from "@/components/TechHeader";
import { SportMapsFooter } from "@/components/SportMapsFooter";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

/**
 * /cobrar-con-bre-b — "Cobra mensualidades con Bre-B".
 *
 * Todo lo que dice esta página está verificado contra el producto (auditoría
 * 2026-10-15):
 *  · la escuela registra su llave Bre-B o su QR (Ajustes de pagos / onboarding);
 *  · las familias los ven con botón de copiar en la pantalla de pago, el
 *    checkout y el enlace de cobro /p/;
 *  · Mapi lee el comprobante (monto, fecha, referencia y cuenta de destino) y
 *    detecta repetidos por imagen y por referencia; la escuela aprueba.
 * Dato publicado con permiso: Dynasty, 321 de 458 comprobantes leídos llegaron
 * a sus llaves Bre-B (corte 15 oct 2026).
 * NO existe todavía la confirmación automática sin comprobante: va como "en
 * exploración", nunca como disponible.
 */

const SITE_URL = "https://sportmaps.co";

const PASOS = [
  {
    icon: QrCode,
    title: "Registras tu llave Bre-B o tu QR",
    text: "En los ajustes de pagos de SportMaps agregas tu llave Bre-B (y si quieres Nequi o Daviplata) o subes el QR de tu cuenta. Se hace una vez.",
  },
  {
    icon: Copy,
    title: "La familia la ve con un botón de copiar",
    text: "Cuando le llega el cobro, en la pantalla de pago o en el enlace que le mandamos por WhatsApp ve tu llave Bre-B lista para copiar, o tu QR. Paga desde cualquier banco o billetera.",
  },
  {
    icon: ScanSearch,
    title: "Mapi lee el comprobante",
    text: "La familia manda la captura por WhatsApp. Mapi lee monto, fecha, referencia y la cuenta a la que llegó la plata, lo cruza con el cobro y revisa que no sea un comprobante repetido.",
  },
  {
    icon: CheckCircle2,
    title: "Tú apruebas con un toque",
    text: "El pago te queda listo para aprobar. Nada que mueva plata se hace sin tu aprobación. Si algo no cuadra, Mapi te dice qué: monto distinto, otra cuenta de destino o un comprobante que ya se usó.",
  },
];

const FAQS: { q: string; a: string }[] = [
  {
    q: "¿Puedo cobrar con Bre-B en SportMaps?",
    a: "Sí. Registras tu llave Bre-B o tu QR y las familias los ven en la pantalla de pago con un botón para copiar. Pagan desde su banco o billetera, la plata llega directo a tu cuenta y Mapi, el asistente de WhatsApp IA, valida el comprobante para que tú solo apruebes.",
  },
  {
    q: "¿Cuánto cuesta recibir pagos por Bre-B?",
    a: "SportMaps no cobra comisión por los pagos que recibes por Bre-B: es una transferencia directa de la cuenta de la familia a la tuya. Mapi viene gratis en todos los planes, incluido el plan gratis hasta 20 alumnos. Si tu banco cobra algo por cuentas empresariales, eso depende de tu banco, no de SportMaps.",
  },
  {
    q: "¿Cómo evita SportMaps los comprobantes falsos o repetidos?",
    a: "Mapi revisa cada comprobante: que el monto y la fecha correspondan al cobro, que la plata haya llegado a una de tus cuentas o llaves registradas y que la misma imagen o la misma referencia no se haya usado antes. Si algo no cuadra, el pago no se aprueba solo: te lo marca con el motivo para que decidas.",
  },
  {
    q: "¿Cuánto se demora Mapi en validar un comprobante?",
    a: "En segundos. La mediana real es de 42 segundos desde que la familia manda la captura hasta que Mapi responde, medida sobre 157 comprobantes.",
  },
  {
    q: "¿El pago por Bre-B se confirma solo, sin comprobante?",
    a: "Todavía no. Hoy la familia manda el comprobante y Mapi lo valida. La confirmación automática del pago sin comprobante está en exploración y no la ofrecemos todavía.",
  },
  {
    q: "¿Mis familias tienen que instalar algo?",
    a: "No. Pagan con la app de su banco o billetera, como cualquier transferencia Bre-B, y mandan el comprobante por WhatsApp al número de tu escuela.",
  },
];

export default function CobrarConBreB() {
  const canonical = `${SITE_URL}/cobrar-con-bre-b`;
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };
  const howTo = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Cómo cobrar mensualidades con Bre-B en una escuela deportiva",
    step: PASOS.map((p, i) => ({ "@type": "HowToStep", position: i + 1, name: p.title, text: p.text })),
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Cobra mensualidades con Bre-B en tu escuela deportiva"
        description="Recibe las mensualidades por Bre-B o QR directo a tu cuenta, sin comisión de SportMaps. Mapi lee cada comprobante en segundos, detecta repetidos y tú solo apruebas."
        url={canonical}
        canonical={canonical}
        keywords="cobrar mensualidades con Bre-B, llave Bre-B club deportivo, QR Bre-B academia deportiva, Bre-B escuela de fútbol, validar comprobantes Bre-B"
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(howTo)}</script>
      </Helmet>
      <TechHeader onSectionClick={() => {}} />

      <main className="pt-24 pb-16">
        <article className="container mx-auto px-4 max-w-4xl">
          <header className="text-center mb-12">
            <img
              src="/mapi/mapi-avatar-192.webp"
              alt="Mapi, el asistente de WhatsApp IA de SportMaps"
              width={96}
              height={96}
              className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-sport-primary/20"
            />
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Cobra mensualidades con Bre-B</h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Las familias te pagan con tu llave Bre-B o tu QR desde cualquier banco o billetera, la plata llega
              directo a tu cuenta y Mapi valida cada comprobante en segundos. Tú solo apruebas.
            </p>
            <p className="mt-4 text-sm font-semibold text-sport-success">Nada que mueva plata se hace sin tu aprobación.</p>
          </header>

          {/* Dato real (publicado con permiso de Dynasty Volley Club). */}
          <Card className="mb-12 border-sport-primary/30 bg-sport-primary/5">
            <CardContent className="p-6 grid gap-6 sm:grid-cols-3 text-center">
              <div>
                <p className="text-3xl font-bold text-sport-primary">7 de cada 10</p>
                <p className="text-sm text-muted-foreground mt-1">pagos que valida Mapi en Dynasty Volley Club llegan por Bre-B</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-sport-primary">42 s</p>
                <p className="text-sm text-muted-foreground mt-1">mediana para leer un comprobante y responder</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-sport-primary">$0</p>
                <p className="text-sm text-muted-foreground mt-1">de comisión de SportMaps por pagos Bre-B</p>
              </div>
              <p className="sm:col-span-3 text-xs text-muted-foreground">
                Fuente: datos de la plataforma SportMaps, corte 15 oct 2026 (321 de 458 comprobantes de Dynasty llegaron a sus llaves Bre-B).
              </p>
            </CardContent>
          </Card>

          <section className="mb-14">
            <h2 className="text-2xl font-bold mb-6">Así funciona, paso a paso</h2>
            <ol className="grid gap-4 sm:grid-cols-2">
              {PASOS.map(({ icon: Icon, title, text }, i) => (
                <li key={title}>
                  <Card className="h-full">
                    <CardContent className="p-5">
                      <p className="font-semibold flex items-center gap-2 mb-2">
                        <span className="w-7 h-7 rounded-full bg-sport-primary text-white text-sm flex items-center justify-center shrink-0">{i + 1}</span>
                        <Icon className="w-5 h-5 text-sport-primary" /> {title}
                      </p>
                      <p className="text-sm text-muted-foreground leading-relaxed">{text}</p>
                    </CardContent>
                  </Card>
                </li>
              ))}
            </ol>
          </section>

          <section className="mb-14 grid gap-4 sm:grid-cols-2">
            <div className="rounded-xl border border-border p-5">
              <p className="font-semibold flex items-center gap-2 mb-2"><ShieldCheck className="w-5 h-5 text-sport-success" /> Disponible hoy</p>
              <ul className="text-sm text-muted-foreground space-y-1.5 list-disc pl-5">
                <li>Llave Bre-B, Nequi, Daviplata o QR visibles para la familia, con botón de copiar.</li>
                <li>Lectura del comprobante con IA y detección de comprobantes repetidos.</li>
                <li>Aviso si la plata llegó a una cuenta que no es la tuya.</li>
                <li>Recordatorios de pago por WhatsApp y correo con el enlace para pagar.</li>
                <li>Wompi y Mercado Pago si también quieres tarjeta o PSE.</li>
              </ul>
            </div>
            <div className="rounded-xl border border-border p-5">
              <p className="font-semibold flex items-center gap-2 mb-2"><Clock className="w-5 h-5 text-sport-accent" /> En exploración</p>
              <ul className="text-sm text-muted-foreground space-y-1.5 list-disc pl-5">
                <li>Confirmación automática del pago Bre-B sin que la familia mande el comprobante.</li>
              </ul>
              <p className="text-xs text-muted-foreground mt-3">No lo ofrecemos todavía. Cuando esté listo, lo anunciamos aquí.</p>
            </div>
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
              <p className="text-sm text-muted-foreground">Mapi, Bre-B, Wompi y Mercado Pago incluidos. Sin tarjeta.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button asChild className="bg-sport-primary hover:bg-sport-primary/90 text-white">
                <Link to="/planes">Ver planes <ArrowRight className="w-4 h-4 ml-1" /></Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/blog/caso-dynasty-volley-club-cobros-whatsapp-ia-facturacion">Ver el caso Dynasty</Link>
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
