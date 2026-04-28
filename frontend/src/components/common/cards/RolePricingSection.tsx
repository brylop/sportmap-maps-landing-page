import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Check,
  Zap,
  Star,
  Crown,
  MessageCircle,
  ChevronDown,
  ChevronUp,
  Sparkles,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useAnalytics } from '@/hooks/useAnalytics';

const SALES_WHATSAPP = '573128463555';

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
  /** Conversaciones WhatsApp AI incluidas. Se pinta como benefit destacado. */
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
  /** Mostrar add-ons WhatsApp AI colapsables */
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

const ADDONS = [
  { name: 'Boost', extra: '+500 conversaciones', price: 39000 },
  { name: 'Scale', extra: '+4.000 conversaciones', price: 79000 },
  { name: 'Power', extra: '+15.000 conversaciones', price: 149000 },
];

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
        'Hasta 20 alumnos, gestión básica y onboarding guiado. Sin tarjeta de crédito.',
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
          'Cobros: Wompi + transferencia manual',
          'App para padres (consulta básica)',
          'Reportes financieros esenciales',
          'Soporte por WhatsApp',
        ],
        ctaText: 'Empezar Start',
        icon: 'basic',
      },
      {
        name: 'Escuela Pro',
        monthlyPrice: 159000,
        annualPrice: 139000,
        badge: 'MÁS ELEGIDO',
        anchor: 'Menos de lo que cobras por una matrícula al mes',
        whatsappAi: '500 conversaciones AI/mes',
        benefits: [
          'Hasta 300 alumnos',
          'Portal interactivo para padres',
          'WhatsApp AI: cobranza + recordatorios',
          'Pagos: Wompi + transferencia manual',
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
        whatsappAi: '4.000 conversaciones AI/mes',
        benefits: [
          'Hasta 800 alumnos',
          'Multi-sede + roles avanzados',
          'WhatsApp AI a gran escala',
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
      title: 'Compará lado a lado',
      body:
        'Lo mismo en Clupik te cuesta $520.000/mes ($200k plan + $245k app marca propia + $75k Mercado Pago). SportMaps Pro te incluye todo por $159.000/mes.',
      competitorPrice: '$520.000/mes',
      ourPrice: '$159.000/mes',
    },
  },
  entrenadores: {
    role: 'entrenadores',
    emoji: '🏃',
    title: 'Entrenadores',
    headline:
      'Convierte tu pasión en un negocio escalable con agenda y pagos en un solo lugar.',
    plans: [
      {
        name: 'Free Coach',
        monthlyPrice: 'Gratis',
        annualPrice: 'Gratis',
        benefits: [
          'Perfil verificado',
          'Recibir mensajes',
          'Hasta 5 clientes',
          'Directorio público',
        ],
        ctaText: 'Crear Perfil',
        icon: 'basic',
      },
      {
        name: 'Coach Pro',
        monthlyPrice: 99000,
        annualPrice: 79000,
        badge: 'RECOMENDADO',
        anchor: 'El costo de 2 sesiones, gestiona tus 50 clientes',
        whatsappAi: '200 conversaciones AI/mes',
        benefits: [
          'Hasta 50 clientes',
          'Agenda online y pagos integrados',
          'Rutinas digitales',
          'WhatsApp AI: agendamiento + recordatorios',
          'Reportes de cartera',
        ],
        ctaText: 'Ser Pro',
        popular: true,
        icon: 'pro',
      },
      {
        name: 'Coach Elite',
        monthlyPrice: 199000,
        annualPrice: 169000,
        whatsappAi: '1.000 conversaciones AI/mes',
        benefits: [
          'Clientes ilimitados',
          'Web personal + marketing ads',
          'WhatsApp AI a gran escala',
          'Analítica avanzada',
          'Soporte prioritario',
        ],
        ctaText: 'Ser Elite',
        icon: 'enterprise',
      },
    ],
    showAddOns: true,
  },
  bienestar: {
    role: 'bienestar',
    emoji: '❤️',
    title: 'Bienestar',
    headline:
      'Salud y prevención en un solo lugar. Conecta con atletas que buscan tu especialidad.',
    plans: [
      {
        name: 'Free Wellness',
        monthlyPrice: 'Gratis',
        annualPrice: 'Gratis',
        benefits: [
          'Perfil profesional',
          'Listado en mapa SportMaps',
          'Recibir solicitudes',
          'Hasta 5 pacientes/mes',
        ],
        ctaText: 'Registrarse',
        icon: 'basic',
      },
      {
        name: 'Wellness Pro',
        monthlyPrice: 149000,
        annualPrice: 119000,
        badge: 'RECOMENDADO',
        anchor: 'Reemplaza Doctoralia + agenda + cobranza',
        whatsappAi: '300 conversaciones AI/mes',
        benefits: [
          'Profesional individual',
          'Agenda inteligente y telemedicina',
          'Historia clínica digital',
          'WhatsApp AI: confirmaciones y citas',
          'Pagos integrados',
        ],
        ctaText: 'Ser Pro',
        popular: true,
        icon: 'pro',
      },
      {
        name: 'Clínica',
        monthlyPrice: 379000,
        annualPrice: 319000,
        whatsappAi: '1.500 conversaciones AI/mes',
        benefits: [
          'Multi-profesional / multi-sede',
          'Integración HIS y facturación salud',
          'WhatsApp AI a gran escala',
          'Roles por especialidad',
          'Soporte dedicado',
        ],
        ctaText: 'Ser Clínica',
        icon: 'enterprise',
      },
    ],
    showAddOns: true,
  },
  federaciones: {
    role: 'federaciones',
    emoji: '🏆',
    title: 'Federaciones',
    headline:
      'El mapa estratégico del deporte nacional. Control, censo y analítica para federaciones.',
    plans: [
      {
        name: 'Demo personalizada',
        monthlyPrice: 'A medida',
        annualPrice: 'A medida',
        benefits: [
          'Hablamos directo por WhatsApp con Sebastián, Director Comercial.',
          'Respuesta en menos de 2 horas en horario hábil.',
          'Demo en vivo de 30 minutos sobre tus clubes y procesos.',
          'Cotización con descuentos para liga / federación piloto.',
        ],
        ctaText: 'Contactar ahora',
        icon: 'demo',
        isDemo: true,
        whatsappMessage:
          'Hola Sebastián, soy de una federación / liga deportiva y quiero una demo personalizada de SportMaps.',
      },
      {
        name: 'Federación Pro',
        monthlyPrice: 549000,
        annualPrice: 469000,
        badge: 'PROFESIONAL',
        anchor: 'Gestiona tu liga completa por menos que un torneo manual',
        whatsappAi: '1.000 conversaciones AI/mes',
        benefits: [
          'Hasta 30 clubes',
          'Torneos online y carnetización nacional',
          'Módulo de arbitraje',
          'WhatsApp AI: comunicaciones masivas',
          'Rankings digitales',
        ],
        ctaText: 'Ser Pro',
        popular: true,
        icon: 'pro',
      },
      {
        name: 'Nacional',
        monthlyPrice: 'A medida',
        annualPrice: 'A medida',
        priceFromLabel: 'Desde $1.200.000',
        whatsappAi: 'WhatsApp AI ilimitado',
        benefits: [
          'Clubes ilimitados',
          'Censo nacional y multi-región',
          'API gobierno',
          'Soporte dedicado 24/7',
          'SLA institucional',
        ],
        ctaText: 'Cotizar',
        icon: 'enterprise',
        whatsappMessage:
          'Hola SportMaps, soy de una federación nacional y quiero cotizar el plan Nacional.',
      },
    ],
    showAddOns: true,
  },
  marcas: {
    role: 'marcas',
    emoji: '🎽',
    title: 'Marcas',
    headline:
      'Publicidad con precisión quirúrgica. Conecta tu marca con el atleta ideal mediante IA.',
    plans: [
      {
        name: 'Partner',
        monthlyPrice: 'Gratis',
        annualPrice: 'Gratis',
        benefits: [
          'Perfil de marca verificado',
          'Listado en directorio',
          'Página de productos',
          'Contacto directo con atletas',
        ],
        ctaText: 'Registrar Marca',
        icon: 'basic',
      },
      {
        name: 'Marketplace Pro',
        monthlyPrice: 199000,
        annualPrice: 169000,
        badge: 'MÁS ELEGIDO',
        anchor: 'Llega a 10.000+ atletas conectados en SportMaps',
        benefits: [
          'Catálogo + sponsoring',
          'Pasarela de pagos integrada',
          'Logística de envíos',
          'Analytics de ventas',
          'Promoción cruzada en escuelas',
        ],
        ctaText: 'Vender',
        popular: true,
        icon: 'pro',
      },
      {
        name: 'Sponsor Elite',
        monthlyPrice: 549000,
        annualPrice: 469000,
        benefits: [
          'Todo en Marketplace Pro',
          'Categorías exclusivas',
          'Ads segmentados con IA',
          'Patrocinio de eventos',
          'Banner principal + campañas custom',
        ],
        ctaText: 'Cotizar',
        icon: 'enterprise',
      },
    ],
    showAddOns: false,
  },
  proveedores: {
    role: 'proveedores',
    emoji: '📦',
    title: 'Proveedores',
    headline:
      'Tu inventario frente a los ojos de quienes realmente lo necesitan. Marketplace nicho.',
    plans: [
      {
        name: 'Free Proveedor',
        monthlyPrice: 'Gratis',
        annualPrice: 'Gratis',
        benefits: [
          'Perfil empresa',
          'Listado directorio',
          'Recibir solicitudes',
          'Contacto directo',
        ],
        ctaText: 'Registrar Empresa',
        icon: 'basic',
      },
      {
        name: 'Proveedor Pro',
        monthlyPrice: 149000,
        annualPrice: 119000,
        badge: 'RECOMENDADO',
        benefits: [
          'Tienda integrada',
          'Catálogo de productos',
          'Cotizaciones online',
          'CRM básico',
          'Clientes ilimitados',
        ],
        ctaText: 'Ser Pro',
        popular: true,
        icon: 'pro',
      },
      {
        name: 'Enterprise',
        monthlyPrice: 399000,
        annualPrice: 339000,
        benefits: [
          'Multi-sede',
          'API integraciones',
          'Facturación electrónica',
          'Soporte 24/7',
          'Gerente de cuenta',
        ],
        ctaText: 'Cotizar',
        icon: 'enterprise',
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
        whatsappAi: '200 conversaciones AI/mes',
        benefits: [
          'Hasta 50 clientes',
          'Agenda online + pagos integrados',
          'Reportes',
          'WhatsApp AI: confirmaciones y seguimiento',
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
        whatsappAi: '800 conversaciones AI/mes',
        benefits: [
          'Múltiples profesionales',
          'Marca blanca',
          'Integraciones',
          'WhatsApp AI a gran escala',
          'Soporte dedicado',
        ],
        ctaText: 'Ser Agencia',
        icon: 'enterprise',
      },
    ],
    showAddOns: true,
  },
  eventos: {
    role: 'eventos',
    emoji: '🎪',
    title: 'Organizadores de Eventos',
    headline:
      'Organiza eventos deportivos sin caos. Link único, inscripciones automáticas, sin comisión.',
    oneTimePricing: true,
    plans: [
      {
        name: 'Evento Pequeño',
        monthlyPrice: 35000,
        annualPrice: 35000,
        benefits: [
          'Hasta 100 atletas',
          'Página pública del evento',
          'Link único compartible',
          'Inscripciones automáticas',
          'Pin en el mapa SportMaps',
        ],
        ctaText: 'Crear Evento',
        icon: 'basic',
      },
      {
        name: 'Evento Mediano',
        monthlyPrice: 99000,
        annualPrice: 99000,
        badge: 'MÁS ELEGIDO',
        benefits: [
          'Hasta 500 atletas',
          'Categorías simples',
          'Validación de pagos',
          'Soporte estándar',
          'Recordatorios por WhatsApp',
        ],
        ctaText: 'Crear Evento Pro',
        popular: true,
        icon: 'pro',
      },
      {
        name: 'Evento Grande',
        monthlyPrice: 349000,
        annualPrice: 349000,
        benefits: [
          'Atletas ilimitados',
          'Prioridad en mapa',
          'Soporte prioritario',
          'Configuración personalizada',
          'Branding del organizador',
        ],
        ctaText: 'Contactar Ventas',
        icon: 'enterprise',
      },
    ],
    whatsappBundle: {
      title: '¿Más eventos al año? Pregúntanos por bundle de 5 o 10 eventos',
      message:
        'Hola SportMaps, organizo varios eventos al año y quiero cotizar un bundle (5 o 10 eventos).',
    },
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

function AddOnsSection({ role }: { role: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="max-w-4xl mx-auto mt-12">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-3 px-5 py-4 rounded-xl border border-border bg-card hover:border-sport-primary/40 transition-colors"
      >
        <span className="flex items-center gap-3 text-left">
          <MessageCircle className="w-5 h-5 text-sport-primary shrink-0" />
          <span className="text-sm md:text-base font-semibold text-foreground">
            ¿Necesitas más conversaciones IA? Add-ons disponibles
          </span>
        </span>
        {open ? (
          <ChevronUp className="w-5 h-5 text-muted-foreground" />
        ) : (
          <ChevronDown className="w-5 h-5 text-muted-foreground" />
        )}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden"
          >
            <div className="grid sm:grid-cols-3 gap-4 mt-4">
              {ADDONS.map((addon) => (
                <div
                  key={addon.name}
                  className="rounded-xl border border-border bg-card p-5 hover:border-sport-primary/40 transition-colors"
                >
                  <p className="text-xs text-sport-primary font-bold uppercase tracking-wide mb-1">
                    {addon.name}
                  </p>
                  <p className="text-sm text-muted-foreground mb-3">{addon.extra}</p>
                  <p className="text-xl font-bold text-sport-accent">
                    {formatPrice(addon.price)}{' '}
                    <span className="text-sm text-muted-foreground font-normal">/mes</span>
                  </p>
                </div>
              ))}
            </div>
            <p className="text-xs text-muted-foreground text-center mt-4">
              Los add-ons se suman al plan que ya tienes activo. Activación en menos de 24 h.
            </p>
            <div className="text-center mt-3">
              <Button
                variant="outline"
                size="sm"
                onClick={() =>
                  openWhatsapp(
                    `Hola SportMaps, quiero activar un add-on de WhatsApp AI para mi plan ${role}.`
                  )
                }
              >
                Activar add-on por WhatsApp
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
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
          {!oneTime && (
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

        {/* Plans Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
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

                {/* WhatsApp AI badge */}
                {plan.whatsappAi && (
                  <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-sport-success/10 px-3 py-1 text-xs font-semibold text-sport-success">
                    <MessageCircle className="w-3.5 h-3.5" />
                    {plan.whatsappAi}
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

        {/* WhatsApp AI add-ons collapsible */}
        {config.showAddOns && <AddOnsSection role={config.role} />}
      </div>
    </section>
  );
}
