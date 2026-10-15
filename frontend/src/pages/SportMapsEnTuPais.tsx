import { useState } from "react";
import { Link } from "react-router-dom";
import { Globe, CheckCircle2 } from "lucide-react";
import { SEO } from "@/components/SEO";
import { TechHeader } from "@/components/TechHeader";
import { SportMapsFooter } from "@/components/SportMapsFooter";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

/**
 * /sportmaps-en-tu-pais — lista de espera por país (sensor de demanda).
 *
 * Hoy SportMaps opera solo en Colombia. Esta página no promete fechas: mide
 * dónde hay interés. Las condiciones para abrir un país viven en el ROADMAP
 * interno, no aquí.
 *
 * Se guarda en contact_messages (ya admite inserts públicos con validación y el
 * panel de admin lo muestra). NO va a school_signup_leads: esa tabla son los
 * prospectos de CADA escuela (exige school_id) y la lista de espera aparecería
 * en la bandeja de un club. El asunto lleva el país para poder contar por país.
 *
 * Ley 1581 de 2012: la autorización es obligatoria y queda registrada con fecha
 * y el enlace a la política vigente dentro del mensaje.
 */

const PRIVACY_URL = "https://app.sportmaps.co/politica-de-privacidad";

const PAISES = [
  "México", "Perú", "Chile", "Argentina", "Ecuador", "Venezuela", "Bolivia", "Paraguay", "Uruguay",
  "Panamá", "Costa Rica", "Guatemala", "Honduras", "El Salvador", "Nicaragua", "República Dominicana",
  "Puerto Rico", "España", "Estados Unidos", "Otro",
];

const TIPOS = ["Escuela o academia deportiva", "Club deportivo", "Liga o federación", "Entrenador independiente", "Otro"];

const TAMANOS = ["Menos de 50", "50 a 150", "151 a 300", "301 a 800", "Más de 800"];

export default function SportMapsEnTuPais() {
  const { toast } = useToast();
  const [sent, setSent] = useState(false);
  const [busy, setBusy] = useState(false);
  const [form, setForm] = useState({
    name: "", email: "", phone: "", country: "", city: "", orgName: "", orgType: "", size: "",
  });
  const [consent, setConsent] = useState(false);
  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!consent) {
      toast({ title: "Falta tu autorización", description: "Para guardar tus datos necesitamos que aceptes el tratamiento de datos.", variant: "destructive" });
      return;
    }
    setBusy(true);
    const consentAt = new Date().toISOString();
    const { error } = await supabase.from("contact_messages").insert({
      name: form.name.trim(),
      email: form.email.trim(),
      subject: `Lista de espera · ${form.country}`,
      category: "lista_espera_pais",
      message: [
        "🌎 LISTA DE ESPERA POR PAÍS",
        `País: ${form.country}`,
        `Ciudad: ${form.city || "—"}`,
        `Organización: ${form.orgName || "—"}`,
        `Tipo: ${form.orgType || "—"}`,
        `Deportistas: ${form.size || "—"}`,
        `Teléfono: ${form.phone || "—"}`,
        "",
        `Autorización de tratamiento de datos (Ley 1581 de 2012): ACEPTADA el ${consentAt}. Política: ${PRIVACY_URL}`,
      ].join("\n"),
    });
    setBusy(false);
    if (error) {
      toast({ title: "No pudimos guardar tus datos", description: "Inténtalo de nuevo o escríbenos por WhatsApp.", variant: "destructive" });
      return;
    }
    setSent(true);
  };

  const selectCls =
    "w-full h-10 rounded-md border border-input bg-muted/50 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring";

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="SportMaps en tu país"
        description="SportMaps hoy opera en Colombia. Si tienes una escuela o club deportivo en otro país, déjanos tus datos y te avisamos cuando lleguemos."
        url="https://sportmaps.co/sportmaps-en-tu-pais"
        canonical="https://sportmaps.co/sportmaps-en-tu-pais"
      />
      <TechHeader onSectionClick={() => {}} />

      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-2xl">
          <header className="text-center mb-8">
            <Globe className="w-10 h-10 text-sport-primary mx-auto mb-3" />
            <h1 className="text-3xl md:text-4xl font-bold mb-3">SportMaps en tu país</h1>
            <p className="text-muted-foreground">
              Hoy operamos en Colombia. Si tienes una escuela, club o liga en otro país, déjanos tus datos y te avisamos
              cuando lleguemos. No te vamos a escribir para nada más.
            </p>
          </header>

          {sent ? (
            <Card>
              <CardContent className="p-8 text-center">
                <CheckCircle2 className="w-12 h-12 text-sport-success mx-auto mb-3" />
                <p className="font-semibold text-lg mb-1">¡Listo, quedaste en la lista!</p>
                <p className="text-muted-foreground mb-5">Te escribimos cuando SportMaps llegue a {form.country}.</p>
                <Button asChild variant="outline">
                  <Link to="/que-es-sportmaps">Conoce qué es SportMaps</Link>
                </Button>
              </CardContent>
            </Card>
          ) : (
            <Card>
              <CardContent className="p-6">
                <form onSubmit={submit} className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-1.5">
                      <Label htmlFor="name">Nombre *</Label>
                      <Input id="name" required minLength={2} maxLength={100} value={form.name} onChange={set("name")} />
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="email">Correo *</Label>
                      <Input id="email" type="email" required value={form.email} onChange={set("email")} />
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="country">País *</Label>
                      <select id="country" required className={selectCls} value={form.country} onChange={set("country")}>
                        <option value="">Elige tu país</option>
                        {PAISES.map((p) => <option key={p} value={p}>{p}</option>)}
                      </select>
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="city">Ciudad</Label>
                      <Input id="city" maxLength={80} value={form.city} onChange={set("city")} />
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="orgName">Nombre de tu organización</Label>
                      <Input id="orgName" maxLength={120} value={form.orgName} onChange={set("orgName")} />
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="phone">WhatsApp (opcional)</Label>
                      <Input id="phone" type="tel" maxLength={30} value={form.phone} onChange={set("phone")} />
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="orgType">Tipo de organización *</Label>
                      <select id="orgType" required className={selectCls} value={form.orgType} onChange={set("orgType")}>
                        <option value="">Elige una opción</option>
                        {TIPOS.map((t) => <option key={t} value={t}>{t}</option>)}
                      </select>
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="size">Número de deportistas *</Label>
                      <select id="size" required className={selectCls} value={form.size} onChange={set("size")}>
                        <option value="">Elige un rango</option>
                        {TAMANOS.map((t) => <option key={t} value={t}>{t}</option>)}
                      </select>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 rounded-lg border border-border p-3">
                    <Checkbox id="consent" checked={consent} onCheckedChange={(v) => setConsent(v === true)} className="mt-0.5" />
                    <Label htmlFor="consent" className="text-sm font-normal leading-relaxed text-muted-foreground">
                      Autorizo a SportMaps a tratar mis datos personales para avisarme cuando llegue a mi país, conforme a
                      la Ley 1581 de 2012 y la{" "}
                      <a href={PRIVACY_URL} target="_blank" rel="noopener noreferrer" className="text-sport-primary underline">
                        política de tratamiento de datos
                      </a>
                      . *
                    </Label>
                  </div>

                  <Button type="submit" disabled={busy} className="w-full bg-sport-primary hover:bg-sport-primary/90 text-white">
                    {busy ? "Guardando…" : "Quiero que SportMaps llegue a mi país"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          )}
        </div>
      </main>

      <SportMapsFooter />
      <WhatsAppButton />
    </div>
  );
}
