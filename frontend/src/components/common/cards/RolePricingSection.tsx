import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IncludedInAllPlans } from '@/components/sections/Pricing/IncludedInAllPlans';
import {
  Check,
  Zap,
  Star,
  Crown,
  MessageCircle,
  Sparkles,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useAnalytics } from '@/hooks/useAnalytics';

import { SALES_WHATSAPP } from '@/lib/whatsappFallback';

export type PriceValue = number | 'Gratis' | 'A medida';

export interface RolePlan {
  name: string;
  monthlyPrice: PriceValue;
  annualPrice: PriceValue;
  /** Override visual del precio (e.g., "Desde $1.200.000") cuando price es 'A medida' */
  priceFromLabel?: string;
  benefits: string[];
  ctaText: string;
  popular?: boolean;
  icon: 'basic' | 'pro' | 'enterprise' | 'demo';
  badge?: string | null;
  /** Frase ancla justo debajo del precio (solo en tier popular) */
  anchor?: string | null;
  /** Conversaciones WhatsApp IA incluidas. Se pinta como benefit destacado.
   *  undefined = texto por defecto (incluido); null = no se pinta el badge. */
  whatsappAi?: string | null;
  /** Reemplaza la card por una "Demo personalizada" que abre WhatsApp directo */
  isDemo?: boolean;
  /** Mensaje WhatsApp custom para esta card (default genérico) */
  whatsappMessage?: string;
}

export interface FreeStartBanner {
  title: string;
  description: string;
  ctaText: string;
}

export interface CustomTier {
  name: string;
  priceLabel: string;
  description: string;
  benefits: string[];
  ctaText: string;
  whatsappMessage: string;
  badge?: string;
}

export interface ClupikComparison {
  title: string;
  body: string;
  competitorPrice: string;
  ourPrice: string;
}

export interface WhatsappBundleCta {
  title: string;
  message: string;
}

export interface RolePricingConfig {
  role: string;
  emoji: string;
  title: string;
  headline: string;
  plans: RolePlan[];
  /** Banner gratuito arriba del grid de tiers pagos */
  freeStart?: FreeStartBanner | null;
  /** Bloque ancho enterprise debajo del grid */
  customTier?: CustomTier | null;
  /** Pricing transaccional (sin toggle anual) */
  oneTimePricing?: boolean;
  /** Oculta el toggle mensual/anual (precio mensual único, sin descuento anual) */
  monthlyOnly?: boolean;
  /** Mostrar el bloque «WhatsApp IA gratis / qué cobra Meta» */
  showAddOns?: boolean;
  /** Bloque comparativo vs competidor (Clupik) */
  comparison?: ClupikComparison | null;
  /** CTA WhatsApp para bundle (Eventos) */
  whatsappBundle?: WhatsappBundleCta | null;
}

interface RolePricingSectionProps {
  config: RolePricingConfig;
  onCTA: (planName: string) => void;
}

function formatPrice(price: PriceValue): string {
  if (price === 'Gratis') return 'Gratis';
  if (price === 'A medida') return 'A medida';
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
}

function formatThousands(amount: number): string {
  if (amount >= 1_000_000) {
    const millions = amount / 1_000_000;
    return `$${millions % 1 === 0 ? millions.toFixed(0) : millions.toFixed(1)}M`;
  }
  return `$${(amount / 1000).toFixed(0)}k`;
}

function computeAnnualSavings(plan: RolePlan): number | null {
  if (typeof plan.monthlyPrice !== 'number' || typeof plan.annualPrice !== 'number') {
    return null;
  }
  if (plan.monthlyPrice === plan.annualPrice) return null;
  return (plan.monthlyPrice - plan.annualPrice) * 12;
}

const iconMap = {
  basic: Zap,
  pro: Star,
  enterprise: Crown,
  demo: MessageCircle,
};

// Decisión 2026-10-14: WhatsApp IA va GRATIS en todos los planes. SportMaps no
// cobra el asistente ni vende paquetes de conversaciones; lo único que puede
// costar es la entrega del mensaje, que Meta factura directo a la escuela y solo
// si pasa de los mensajes gratis del mes.
const WHATSAPP_IA_INCLUIDO = 'WhatsApp IA incluido · sin costo';
// Entrenadores y profesionales de bienestar: el canal de WhatsApp IA está atado
// a la escuela; para ellos todavía no existe (2026-10-14).
const WHATSAPP_IA_PROXIMAMENTE = 'WhatsApp IA · próximamente';

function openWhatsapp(message: string) {
  const url = `https://wa.me/${SALES_WHATSAPP}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
}

// =============================================================================
// Pricing configs v3.0
// =============================================================================
export const rolePricingConfigs: Record<string, RolePricingConfig> = {
  escuelas: {
    role: 'escuelas',
    emoji: '🏫',
    title: 'Escuelas',
    headline:
      'Gestiona tu academia, no tu papeleo. El software que paga su propia inversión.',
    freeStart: {
      title: 'Empieza gratis con Free Start',
      description:
        'Hasta 20 alumnos, cobros en línea con Wompi y Mercado Pago, y WhatsApp IA incluidos. Sin tarjeta de crédito.',
      ctaText: 'Crear cuenta gratis',
    },
    plans: [
      {
        name: 'Escuela Start',
        monthlyPrice: 69000,
        annualPrice: 59000,
        benefits: [
          'Hasta 50 alumnos',
          'Gestión de equipos y asistencia',
          'Pagos en línea: Wompi + Mercado Pago incluidos',
          'App para padres (consulta básica)',
          'Reportes financieros esenciales',
          'Soporte por WhatsApp',
        ],
        ctaText: 'Empezar Start',
        icon: 'basic',
      },
      {
        name: 'Escuela Crecimiento',
        monthlyPrice: 99000,
        annualPrice: 89000,
        benefits: [
          'Hasta 120 alumnos',
          'Todo lo de Start',
          'Pagos en línea: Wompi + Mercado Pago incluidos',
          'Asistencia con QR + reportes',
          'Historial médico y roles secundarios',
          'Marketplace y certificados',
          'Soporte por WhatsApp',
        ],
        ctaText: 'Empezar Crecimiento',
        icon: 'basic',
      },
      {
        name: 'Escuela Pro',
        monthlyPrice: 159000,
        annualPrice: 139000,
        badge: 'MÁS ELEGIDO',
        anchor: 'Menos de lo que cobras por una matrícula al mes',
        whatsappAi: WHATSAPP_IA_INCLUIDO,
        benefits: [
          'Hasta 300 alumnos',
          'Portal interactivo para padres',
          'WhatsApp IA: cobranza + recordatorios',
          'Pagos en línea: Wompi + Mercado Pago incluidos',
          'Control de ingresos y egresos',
          'Reportes financieros y operativos',
          'Soporte prioritario',
        ],
        ctaText: 'Empezar ahora',
        popular: true,
        icon: 'pro',
      },
      {
        name: 'Escuela Elite',
        monthlyPrice: 349000,
        annualPrice: 299000,
        badge: 'ENTERPRISE',
        whatsappAi: WHATSAPP_IA_INCLUIDO,
        benefits: [
          'Hasta 800 alumnos',
          'Pagos en línea: Wompi + Mercado Pago incluidos',
          'Multi-sede + roles avanzados',
          'WhatsApp IA a gran escala',
          'API e integraciones',
          'Migración de datos VIP',
          'Gerente de cuenta dedicado',
        ],
        ctaText: 'Ser Elite',
        icon: 'enterprise',
      },
    ],
    customTier: {
      name: 'Custom',
      priceLabel: 'Desde $750.000 / a medida',
      description:
        'Para holdings, federaciones o academias con +800 alumnos. Cotización a medida con migración VIP, integraciones y SLA dedicado.',
      benefits: [
        'Todo en Escuela Elite',
        'Alumnos ilimitados',
        'Multi-academia / holding',
        'SLA dedicado y onboarding white-glove',
        'Integraciones a la medida',
      ],
      ctaText: 'Habla con ventas',
      whatsappMessage:
        'Hola SportMaps, soy un holding/federación y necesito una cotización Custom para mi academia.',
      badge: 'CONTÁCTANOS',
    },
    showAddOns: true,
    comparison: {
      title: 'Compara lado a lado',
      body:
        'En Clupik, plan base + Mercado Pago suman ≈$275.000/mes ($200k + $75k). SportMaps Pro cuesta $159.000/mes con Wompi, Mercado Pago y WhatsApp IA incluidos.',
      competitorPrice: '≈$275.000/mes',
      ourPrice: '$159.000/mes',
    },
  },
  entrenadores: {
    role: 'entrenadores',
    emoji: '🏃',
    title: 'Entrenadores',
    headline:
      'Dos caminos: si entrenas en una academia, vas gratis dentro del plan de tu escuela; si eres independiente, Coach Pro.',
    monthlyOnly: true,
    plans: [
      {
        name: 'Entrenador de escuela',
        monthlyPrice: 'Gratis',
        annualPrice: 'Gratis',
        whatsappAi: WHATSAPP_IA_PROXIMAMENTE,
        anchor: 'Gratis dentro del plan de tu academia',
        benefits: [
          'Sesiones y periodización por mesociclos',
          'Asistencia con QR',
          'Reportes del entrenador e informe mensual',
          'Rutinas con catálogo de ejercicios',
          'Pizarra táctica (fútbol hoy)',
        ],
        ctaText: 'Quiero que mi escuela lo use',
        icon: 'basic',
      },
      {
        name: 'Coach Pro',
        monthlyPrice: 59000,
        annualPrice: 59000,
        badge: 'ENTRENADOR INDEPENDIENTE',
        whatsappAi: WHATSAPP_IA_PROXIMAMENTE,
        benefits: [
          'Clientes con ficha, metas, medidas y progreso',
          'Rutinas con catálogo de ejercicios',
          'Disponibilidad y agenda de sesiones',
          'Planes y cobros a tus clientes',
          'Perfil público de entrenador',
        ],
        ctaText: 'Ser Coach Pro',
        popular: true,
        icon: 'pro',
      },
    ],
    showAddOns: false,
  },
  bienestar: {
    role: 'bienestar',
    emoji: '❤️',
    title: 'Bienestar',
    headline:
      'Para el fisio y los profesionales de salud de tu escuela: agenda, pacientes e historia clínica en un solo lugar.',
    monthlyOnly: true,
    plans: [
      {
        name: 'Wellness Pro',
        monthlyPrice: 59000,
        annualPrice: 59000,
        badge: 'FISIO DE TU ESCUELA',
        whatsappAi: WHATSAPP_IA_PROXIMAMENTE,
        benefits: [
          'Agenda, disponibilidad y recordatorio de citas',
          'Pacientes: deportistas de la escuela, hijos invitados por el acudiente o externos',
          'Consentimiento del acudiente para menores (Ley 1581)',
          'Historia clínica según la Resolución 1995',
          'Registro de lesiones y vuelta al juego',
          'Cobro de consultas dentro de la app: próximamente',
        ],
        ctaText: 'Ser Wellness Pro',
        popular: true,
        icon: 'pro',
      },
    ],
    showAddOns: false,
  },
  federaciones: {
    role: 'federaciones',
    emoji: '🏆',
    title: 'Federaciones',
    headline:
      'Piloto para ligas 2027: arma tus torneos con SportMaps durante un mes, sin costo.',
    monthlyOnly: true,
    plans: [
      {
        name: 'Piloto para ligas 2027',
        monthlyPrice: 'Gratis',
        annualPrice: 'Gratis',
        priceFromLabel: 'Un mes gratis',
        whatsappAi: null,
        benefits: [
          'Fixture de liga o copa, goleadores y tabla pública',
          'Inscripción de escuelas por enlace, con categorías y precios',
          'Cobro de inscripciones con comprobante',
          'Acompañamiento directo del equipo de SportMaps',
        ],
        ctaText: 'Quiero el piloto',
        icon: 'demo',
        isDemo: true,
        whatsappMessage:
          'Hola SportMaps, soy de una liga / federación y quiero el piloto para ligas 2027 (un mes gratis).',
      },
    ],
    showAddOns: false,
  },
  marcas: {
    role: 'marcas',
    emoji: '🎽',
    title: 'Marcas',
    headline:
      'Programa de marcas aliadas: lleva beneficios de tu marca a las familias de las escuelas que usan SportMaps.',
    monthlyOnly: true,
    plans: [
      {
        name: 'Programa de marcas aliadas',
        monthlyPrice: 'Gratis',
        annualPrice: 'Gratis',
        priceFromLabel: 'Piloto gratis por un mes',
        whatsappAi: null,
        benefits: [
          'Diseñamos el piloto contigo',
          'Beneficios de tu marca para las familias de las escuelas',
          'Reporte agregado, nunca datos de menores',
          'Sin costo durante el primer mes',
        ],
        ctaText: 'Quiero el piloto',
        icon: 'demo',
        isDemo: true,
        whatsappMessage:
          'Hola SportMaps, soy de una marca y quiero entrar al programa de marcas aliadas (piloto gratis por un mes).',
      },
    ],
    showAddOns: false,
  },
  proveedores: {
    role: 'proveedores',
    emoji: '📦',
    title: 'Proveedores',
    headline:
      'Proveedor recomendado para escuelas: tu empresa en el directorio, con contacto directo.',
    monthlyOnly: true,
    plans: [
      {
        name: 'Proveedor recomendado para escuelas',
        monthlyPrice: 'Gratis',
        annualPrice: 'Gratis',
        priceFromLabel: 'Piloto gratis por un mes',
        whatsappAi: null,
        benefits: [
          'Tu empresa en el directorio de proveedores recomendados',
          'Datos de contacto visibles para las escuelas',
          'Sin costo durante el primer mes',
        ],
        ctaText: 'Quiero el piloto',
        icon: 'demo',
        isDemo: true,
        whatsappMessage:
          'Hola SportMaps, soy proveedor y quiero aparecer como proveedor recomendado para escuelas (piloto gratis por un mes).',
      },
    ],
    showAddOns: false,
  },
  servicios: {
    role: 'servicios',
    emoji: '🔧',
    title: 'Servicios',
    headline:
      'Posiciona tu consultorio deportivo en el centro del mapa. Genera confianza y pacientes.',
    plans: [
      {
        name: 'Free Servicios',
        monthlyPrice: 'Gratis',
        annualPrice: 'Gratis',
        benefits: [
          'Perfil profesional',
          'Listado directorio',
          'Recibir consultas',
          'Hasta 10 clientes',
        ],
        ctaText: 'Registrarse',
        icon: 'basic',
      },
      {
        name: 'Servicio Pro',
        monthlyPrice: 109000,
        annualPrice: 89000,
        badge: 'RECOMENDADO',
        whatsappAi: WHATSAPP_IA_INCLUIDO,
        benefits: [
          'Hasta 50 clientes',
          'Agenda online + pagos integrados',
          'Reportes',
          'WhatsApp IA: confirmaciones y seguimiento',
          'Reseñas verificadas',
        ],
        ctaText: 'Ser Pro',
        popular: true,
        icon: 'pro',
      },
      {
        name: 'Agencia',
        monthlyPrice: 249000,
        annualPrice: 209000,
        whatsappAi: WHATSAPP_IA_INCLUIDO,
        benefits: [
          'Múltiples profesionales',
          'Marca blanca',
          'Integraciones',
          'WhatsApp IA a gran escala',
          'Soporte dedicado',
        ],
        ctaText: 'Ser Agencia',
        icon: 'enterprise',
      },
    ],
    showAddOns: true,
  },
  organizadores: {
    role: 'organizadores',
    emoji: '🏆',
    title: 'Organizadores',
    headline:
      'Hoy los torneos se crean desde una escuela con el adicional Torneos. Si organizas por tu cuenta, únete a la lista de espera o pide el piloto.',
    monthlyOnly: true,
    plans: [
      {
        name: 'Adicional Torneos (escuelas)',
        monthlyPrice: 49000,
        annualPrice: 49000,
        badge: 'DISPONIBLE HOY',
        whatsappAi: null,
        benefits: [
          'Inscripción de escuelas por enlace',
          'Categorías y precios por fase',
          'Cobro de inscripciones con comprobante',
          'Fixture de liga o copa',
          'Goleadores y tabla pública',
        ],
        ctaText: 'Activarlo en mi escuela',
        popular: true,
        icon: 'pro',
      },
      {
        name: 'Organizador independiente',
        monthlyPrice: 'Gratis',
        annualPrice: 'Gratis',
        priceFromLabel: 'Piloto gratis 1 mes',
        whatsappAi: null,
        benefits: [
          'Lista de espera para organizadores sin escuela',
          'Piloto acompañado de un mes, sin costo',
          'Boletería con QR y check-in: próximamente',
          'Plan por evento: próximamente',
        ],
        ctaText: 'Unirme a la lista de espera',
        icon: 'demo',
        isDemo: true,
        whatsappMessage:
          'Hola SportMaps, organizo torneos y quiero entrar a la lista de espera / piloto gratis de 1 mes para organizadores.',
      },
    ],
    showAddOns: false,
  },
  eventos: {
    role: 'eventos',
    emoji: '🎪',
    title: 'Organizadores de Eventos',
    headline:
      'Hoy los eventos y torneos se crean desde una escuela con el adicional Torneos. Para organizadores independientes: lista de espera y piloto gratis de un mes.',
    monthlyOnly: true,
    plans: [
      {
        name: 'Escuela con adicional Torneos',
        monthlyPrice: 49000,
        annualPrice: 49000,
        badge: 'DISPONIBLE HOY',
        whatsappAi: null,
        benefits: [
          'Inscripción de escuelas por enlace',
          'Categorías y precios por fase',
          'Cobro de inscripciones con comprobante',
          'Fixture de liga o copa, goleadores y tabla pública',
        ],
        ctaText: 'Activarlo en mi escuela',
        popular: true,
        icon: 'pro',
      },
      {
        name: 'Organizador independiente',
        monthlyPrice: 'Gratis',
        annualPrice: 'Gratis',
        priceFromLabel: 'Piloto gratis 1 mes',
        whatsappAi: null,
        benefits: [
          'Lista de espera para organizadores sin escuela',
          'Piloto acompañado de un mes, sin costo',
          'Plan por evento: próximamente',
          'Boletería con QR y check-in: próximamente',
        ],
        ctaText: 'Unirme a la lista de espera',
        icon: 'demo',
        isDemo: true,
        whatsappMessage:
          'Hola SportMaps, organizo eventos deportivos y quiero entrar a la lista de espera / piloto gratis de 1 mes para organizadores.',
      },
    ],
    showAddOns: false,
  },
};

// =============================================================================
// Sub-components
// =============================================================================

function FreeStartBannerView({
  banner,
  onClick,
}: {
  banner: FreeStartBanner;
  onClick: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="max-w-4xl mx-auto mb-10"
    >
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 rounded-2xl border border-sport-success/30 bg-sport-success/5 px-6 py-5">
        <div className="flex items-center gap-3 text-center md:text-left">
          <div className="w-10 h-10 rounded-full bg-sport-success/10 flex items-center justify-center shrink-0">
            <Sparkles className="w-5 h-5 text-sport-success" />
          </div>
          <div>
            <p className="font-semibold text-foreground">{banner.title}</p>
            <p className="text-sm text-muted-foreground">{banner.description}</p>
          </div>
        </div>
        <Button
          onClick={onClick}
          className="bg-sport-success hover:bg-sport-success/90 text-white font-semibold rounded-xl shrink-0"
        >
          {banner.ctaText}
        </Button>
      </div>
    </motion.div>
  );
}

function CustomTierBlock({ tier }: { tier: CustomTier }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="max-w-6xl mx-auto mt-8"
    >
      <div className="rounded-2xl bg-gradient-to-r from-sport-primary/10 via-sport-accent/5 to-transparent border border-sport-primary/30 p-6 md:p-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <h4 className="text-xl md:text-2xl font-bold text-foreground">{tier.name}</h4>
              {tier.badge && (
                <Badge className="bg-sport-primary/10 text-sport-primary text-xs">
                  {tier.badge}
                </Badge>
              )}
              <span className="text-sport-accent font-bold">{tier.priceLabel}</span>
            </div>
            <p className="text-sm md:text-base text-muted-foreground mb-3">
              {tier.description}
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 text-sm">
              {tier.benefits.map((b) => (
                <li key={b} className="flex items-start gap-2 text-muted-foreground">
                  <Check className="w-4 h-4 text-sport-primary shrink-0 mt-0.5" />
                  {b}
                </li>
              ))}
            </ul>
          </div>
          <Button
            onClick={() => openWhatsapp(tier.whatsappMessage)}
            size="lg"
            className="bg-sport-primary hover:bg-sport-primary/90 text-white font-bold rounded-xl shrink-0"
          >
            <MessageCircle className="w-4 h-4 mr-2" />
            {tier.ctaText}
          </Button>
        </div>
      </div>
    </motion.div>
  );
}

function ComparisonBlock({ data }: { data: ClupikComparison }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="max-w-4xl mx-auto mt-12"
    >
      <div className="rounded-2xl border border-sport-accent/30 bg-sport-accent/5 p-6 md:p-8 text-center">
        <h4 className="text-lg md:text-xl font-bold text-foreground mb-3">{data.title}</h4>
        <p className="text-sm md:text-base text-muted-foreground mb-5 max-w-2xl mx-auto">
          {data.body}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
          <div className="text-center">
            <p className="text-xs text-muted-foreground uppercase tracking-wide">Competencia</p>
            <p className="text-2xl font-bold text-muted-foreground line-through">
              {data.competitorPrice}
            </p>
          </div>
          <div className="text-center">
            <p className="text-xs text-sport-success uppercase tracking-wide font-semibold">
              SportMaps
            </p>
            <p className="text-3xl font-bold text-sport-success">{data.ourPrice}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function AddOnsSection() {
  return (
    <div className="max-w-3xl mx-auto mt-12">
      {/* Quién cobra qué. SportMaps no cobra el asistente (gratis en todos los
          planes); Meta factura la entrega del mensaje directamente a la escuela,
          y solo si pasa de los mensajes gratis del mes. */}
      <div className="rounded-xl border border-sport-success/30 bg-sport-success/5 p-5">
        <p className="text-sm font-semibold text-foreground mb-2 flex items-center gap-2">
          <MessageCircle className="w-4 h-4 text-sport-success" />
          WhatsApp IA gratis en todos los planes
        </p>
        <p className="text-sm text-muted-foreground">
          <strong className="text-foreground">SportMaps no te cobra el asistente</strong>: leer
          los comprobantes que envían las familias, extraer el monto y la referencia, cruzarlos
          contra el cobro y responder por ti viene incluido en todos los planes, también en los
          gratis. Sin paquetes ni cupos de conversaciones.
        </p>
        <p className="text-sm text-muted-foreground mt-2">
          <strong className="text-foreground">Solo pagas a Meta si te excedes</strong>, y se lo
          pagas directo a Meta, no a través nuestro. WhatsApp incluye 1.000 mensajes de servicio
          gratis al mes por número; si te pasas, Meta cobra el excedente a la tarjeta que
          registras al conectar tu número — en Colombia, alrededor de $3 por mensaje. Ves tu
          consumo en vivo desde la plataforma.
        </p>
      </div>
    </div>
  );
}

function WhatsappBundleCtaBlock({ cta }: { cta: WhatsappBundleCta }) {
  return (
    <div className="max-w-4xl mx-auto mt-8 text-center">
      <button
        onClick={() => openWhatsapp(cta.message)}
        className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-sport-success/40 bg-sport-success/5 text-sport-success hover:bg-sport-success/10 transition-colors text-sm font-medium"
      >
        <MessageCircle className="w-4 h-4" />
        {cta.title}
        <span aria-hidden>→</span>
      </button>
    </div>
  );
}

// =============================================================================
// Main component
// =============================================================================
export function RolePricingSection({ config, onCTA }: RolePricingSectionProps) {
  const [isAnnual, setIsAnnual] = useState(false);
  const { trackBillingToggle, trackPlanClick, trackPricingView } = useAnalytics();

  const oneTime = !!config.oneTimePricing;

  useEffect(() => {
    trackPricingView(config.role);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [config.role]);

  const handleToggle = () => {
    const newIsAnnual = !isAnnual;
    trackBillingToggle({
      role: config.role,
      from: isAnnual ? 'annual' : 'monthly',
      to: newIsAnnual ? 'annual' : 'monthly',
    });
    setIsAnnual(newIsAnnual);
  };

  const handlePlanClick = (plan: RolePlan) => {
    if (plan.isDemo) {
      const message =
        plan.whatsappMessage ||
        `Hola SportMaps, soy de ${config.title} y quiero una demo personalizada.`;
      openWhatsapp(message);
      return;
    }
    if (plan.whatsappMessage && (plan.monthlyPrice === 'A medida' || plan.priceFromLabel)) {
      openWhatsapp(plan.whatsappMessage);
      return;
    }
    const displayPrice = isAnnual ? plan.annualPrice : plan.monthlyPrice;
    trackPlanClick({
      role: config.role,
      plan_name: plan.name,
      billing_period: isAnnual || oneTime ? 'annual' : 'monthly',
      price: displayPrice,
    });
    onCTA(plan.name);
  };

  return (
    <section className="py-16 md:py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-10">
          <span className="text-4xl mb-3 block">{config.emoji}</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Planes para <span className="text-sport-primary">{config.title}</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">{config.headline}</p>

          {/* Toggle: hide for one-time pricing (Eventos) */}
          {!oneTime && !config.monthlyOnly && (
            <div className="flex items-center justify-center gap-3">
              <span
                className={`text-sm font-medium transition-colors ${
                  !isAnnual ? 'text-foreground' : 'text-muted-foreground'
                }`}
              >
                Mensual
              </span>
              <button
                onClick={handleToggle}
                className="relative w-14 h-7 bg-muted rounded-full transition-colors hover:bg-sport-primary/20"
                aria-label="Toggle billing period"
              >
                <div
                  className={`absolute top-1 w-5 h-5 bg-sport-primary rounded-full transition-all duration-300 ${
                    isAnnual ? 'left-8' : 'left-1'
                  }`}
                />
              </button>
              <span
                className={`text-sm font-medium transition-colors ${
                  isAnnual ? 'text-foreground' : 'text-muted-foreground'
                }`}
              >
                Anual
              </span>
              <Badge className="bg-sport-primary text-white text-xs px-2 py-0.5">
                Ahorra hasta 13%
              </Badge>
            </div>
          )}
          {oneTime && (
            <p className="text-sm text-muted-foreground italic">
              Precio único por evento. Sin suscripción mensual.
            </p>
          )}
        </div>

        {/* Free Start banner (Escuelas only) */}
        {config.freeStart && (
          <FreeStartBannerView
            banner={config.freeStart}
            onClick={() => onCTA('Free Start')}
          />
        )}

        {/* Lo que no cambia de plan a plan */}
        {/* Entrenadores, bienestar y organizadores quedan fuera: hoy no tienen
            WhatsApp IA ni cobro propio, así que la lista no les aplica. */}
        {['escuelas', 'servicios'].includes(config.role) && (
          <IncludedInAllPlans role={config.role} />
        )}

        {/* Plans Grid */}
        <div
          className={`grid gap-6 mx-auto ${
            config.plans.length === 1
              ? 'max-w-md'
              : config.plans.length === 2
              ? 'md:grid-cols-2 max-w-4xl'
              : 'md:grid-cols-3 max-w-6xl'
          }`}
        >
          {config.plans.map((plan, index) => {
            const Icon = iconMap[plan.icon];
            const displayPrice = isAnnual ? plan.annualPrice : plan.monthlyPrice;
            const annualSavings = computeAnnualSavings(plan);

            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative p-6 md:p-8 rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${
                  plan.popular
                    ? 'bg-gradient-to-br from-sport-primary/10 to-sport-accent/10 border-sport-primary/40 shadow-lg shadow-sport-primary/10'
                    : plan.isDemo
                    ? 'bg-gradient-to-br from-sport-success/5 to-transparent border-sport-success/30'
                    : 'bg-card border-border hover:border-sport-primary/30'
                }`}
              >
                {(plan.badge || plan.popular) && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-sport-primary to-sport-accent text-white px-4 py-1 rounded-full text-xs font-bold shadow-lg whitespace-nowrap">
                    {plan.badge ?? 'RECOMENDADO'}
                  </div>
                )}

                {/* Plan Header */}
                <div className="mb-6">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                      plan.isDemo ? 'bg-sport-success/10' : 'bg-sport-primary/10'
                    }`}
                  >
                    <Icon
                      className={`w-6 h-6 ${
                        plan.isDemo ? 'text-sport-success' : 'text-sport-primary'
                      }`}
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">{plan.name}</h3>
                </div>

                {/* Price */}
                <div className="mb-6 min-h-[60px]">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={oneTime ? 'once' : isAnnual ? 'annual' : 'monthly'}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="flex items-baseline gap-1 flex-wrap"
                    >
                      {plan.priceFromLabel ? (
                        <span className="text-2xl md:text-3xl font-bold text-sport-accent">
                          {plan.priceFromLabel}
                        </span>
                      ) : (
                        <span className="text-3xl md:text-4xl font-bold text-sport-accent">
                          {formatPrice(displayPrice)}
                        </span>
                      )}
                      {typeof displayPrice === 'number' && !plan.priceFromLabel && (
                        <span className="text-muted-foreground">
                          {oneTime ? '/evento' : '/mes'}
                        </span>
                      )}
                    </motion.div>
                  </AnimatePresence>

                  {isAnnual && annualSavings && !oneTime && (
                    <p className="text-xs text-sport-success font-medium mt-1">
                      ✨ Ahorras {formatThousands(annualSavings)} al año
                    </p>
                  )}
                </div>

                {/* Anchor */}
                {plan.anchor && (
                  <p className="text-xs text-sport-primary font-medium mb-4 italic">
                    {plan.anchor}
                  </p>
                )}

                {/* WhatsApp IA badge — en todos los planes, incluso los gratis,
                    salvo los pilotos (whatsappAi: null) */}
                {plan.whatsappAi !== null && (
                  <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-sport-success/10 px-3 py-1 text-xs font-semibold text-sport-success">
                    <MessageCircle className="w-3.5 h-3.5" />
                    {plan.whatsappAi ?? WHATSAPP_IA_INCLUIDO}
                  </div>
                )}

                {/* Benefits */}
                <ul className="space-y-3 mb-6">
                  {plan.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3 text-sm">
                      <Check className="w-5 h-5 text-sport-success flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button
                  onClick={() => handlePlanClick(plan)}
                  className={`w-full py-5 font-bold rounded-xl transition-all hover:scale-[1.02] ${
                    plan.isDemo
                      ? 'bg-sport-success hover:bg-sport-success/90 text-white'
                      : plan.popular
                      ? 'bg-sport-primary hover:bg-sport-primary/90 text-white'
                      : 'bg-muted hover:bg-muted/80 text-foreground'
                  }`}
                >
                  {plan.isDemo && <MessageCircle className="w-4 h-4 mr-2" />}
                  {plan.ctaText}
                </Button>
              </motion.div>
            );
          })}
        </div>

        {/* Custom tier wide block (Escuelas) */}
        {config.customTier && <CustomTierBlock tier={config.customTier} />}

        {/* WhatsApp bundle CTA (Eventos) */}
        {config.whatsappBundle && <WhatsappBundleCtaBlock cta={config.whatsappBundle} />}

        {/* Comparison block (Escuelas vs Clupik) */}
        {config.comparison && <ComparisonBlock data={config.comparison} />}

        {/* WhatsApp IA: gratis + qué cobra Meta */}
        {config.showAddOns && <AddOnsSection />}
      </div>
    </section>
  );
}
