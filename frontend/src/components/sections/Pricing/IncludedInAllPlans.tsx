import { MessageCircle, CreditCard, FileText, Users, Globe, PenTool } from "lucide-react";

/**
 * Lo que viene incluido en TODOS los planes (decisión 2026-10-14), también en
 * los gratis. Se pinta arriba de las tarjetas de precios para que la decisión
 * de compra no dependa de leer cada tarjeta: lo diferencial no cambia de plan.
 *
 * Escuelas ve la lista completa; los demás roles, solo lo que les aplica.
 */
const ITEMS = [
  {
    icon: MessageCircle,
    title: "Mapi, tu WhatsApp IA, gratis",
    body: "Lee el comprobante y responde en menos de un minuto (mediana real: 42 s), y te lo deja listo para aprobar. Solo le pagas a Meta si te excedes de los mensajes gratis del mes.",
    roles: "all",
  },
  {
    icon: CreditCard,
    title: "Wompi + Mercado Pago",
    body: "PSE, Nequi, tarjetas y billetera. La plata llega directo a tu cuenta; no cobramos comisión por la integración.",
    roles: "all",
  },
  {
    icon: FileText,
    title: "Facturación electrónica",
    body: "Integración DIAN gratis: solo pagas el paquete según tus facturas, más barato que un proveedor aparte. Tu contador revisa el estado.",
    roles: "all",
  },
  {
    icon: Users,
    title: "Entrenadores y staff ilimitados",
    body: "Suma a todo tu equipo, cada uno con su rol y permisos.",
    roles: "escuelas",
  },
  {
    icon: Globe,
    title: "Tu página web",
    body: "Página pública de tu escuela con 4 diseños y botón de inscripción. ¿Tienes dominio propio? Te ayudamos a conectarlo.",
    roles: "escuelas",
  },
  {
    icon: PenTool,
    title: "Pizarra táctica",
    body: "Jugadas, alineaciones y ejercicios (fútbol hoy; más deportes en camino), con planificación por mesociclos.",
    roles: "escuelas",
  },
] as const;

export function IncludedInAllPlans({ role }: { role: string }) {
  const items = ITEMS.filter((i) => i.roles === "all" || i.roles === role);
  return (
    <div className="max-w-6xl mx-auto mb-10">
      <p className="text-center text-sm font-semibold uppercase tracking-wide text-sport-success mb-4">
        Incluido en todos los planes, también en el gratis
      </p>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {items.map(({ icon: Icon, title, body }) => (
          <div key={title} className="rounded-xl border border-sport-success/25 bg-sport-success/5 p-4">
            <p className="flex items-center gap-2 text-sm font-semibold text-foreground mb-1">
              <Icon className="w-4 h-4 text-sport-success shrink-0" />
              {title}
            </p>
            <p className="text-xs text-muted-foreground leading-relaxed">{body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
