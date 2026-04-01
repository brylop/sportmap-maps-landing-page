import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Zap, Star, Crown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useAnalytics } from '@/hooks/useAnalytics';

export interface RolePlan {
  name: string;
  monthlyPrice: number | 'Gratis' | 'A medida';
  annualPrice: number | 'Gratis' | 'A medida';
  annualBilled?: number;
  savings?: number;
  benefits: string[];
  ctaText: string;
  popular?: boolean;
  icon: 'basic' | 'pro' | 'enterprise';
  badge?: string | null;
  anchor?: string | null;
}

export interface RolePricingConfig {
  role: string;
  emoji: string;
  title: string;
  headline: string;
  plans: RolePlan[];
}

interface RolePricingSectionProps {
  config: RolePricingConfig;
  onCTA: (planName: string) => void;
}

function formatPrice(price: number | 'Gratis' | 'A medida'): string {
  if (price === 'Gratis') return 'Gratis';
  if (price === 'A medida') return 'A medida';
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(price);
}

const iconMap = {
  basic: Zap,
  pro: Star,
  enterprise: Crown
};

// Configuraciones de precios por rol
export const rolePricingConfigs: Record<string, RolePricingConfig> = {
  escuelas: {
    role: 'escuelas',
    emoji: '🏫',
    title: 'Escuelas',
    headline: 'Gestiona tu academia, no tu papeleo. El software que paga su propia inversión.',
    plans: [
      {
        name: 'Start',
        monthlyPrice: 'Gratis',
        annualPrice: 'Gratis',
        badge: null,
        anchor: null,
        benefits: [
          'Hasta 20 alumnos',
          'Gestión de equipos',
          'Control de asistencia',
          'Registro de pagos manual',
          'Onboarding guiado',
          'Gestión de matrículas e inscripciones'
        ],
        ctaText: 'Empezar Gratis',
        icon: 'basic'
      },
      {
        name: 'Escuela Pro',
        monthlyPrice: 99000,
        annualPrice: 79000,
        annualBilled: 948000,
        savings: 240000,
        badge: 'MÁS ELEGIDO',
        anchor: 'Menos de lo que cobras por 1 alumno al mes',
        benefits: [
          'Alumnos ilimitados',
          'Portal interactivo para Padres',
          'Pagos: Wompi + transferencia manual',
          'Recordatorios automáticos WhatsApp, Email',
          'Control de ingresos y egresos',
          'Reportes financieros y operativos',
          'Soporte prioritario'
        ],
        ctaText: 'Empezar ahora',
        popular: true,
        icon: 'pro'
      },
      {
        name: 'Elite Club',
        monthlyPrice: 'A medida',
        annualPrice: 'A medida',
        badge: null,
        anchor: null,
        benefits: [
          'Todo en Escuela Pro',
          'Multi-sede integral',
          'Roles avanzados por sede',
          'API e integraciones',
          'Migración de datos VIP',
          'Gerente de cuenta dedicado'
        ],
        ctaText: 'Cotizar',
        icon: 'enterprise'
      }
    ]
  },
  entrenadores: {
    role: 'entrenadores',
    emoji: '🏃',
    title: 'Entrenadores',
    headline: 'Convierte tu pasión en un negocio escalable con agenda y pagos en un solo lugar.',
    plans: [
      {
        name: 'Coach Básico',
        monthlyPrice: 'Gratis',
        annualPrice: 'Gratis',
        benefits: [
          'Perfil verificado',
          'Recibir mensajes',
          'Hasta 5 clientes',
          'Directorio público'
        ],
        ctaText: 'Crear Perfil',
        icon: 'basic'
      },
      {
        name: 'Coach Pro',
        monthlyPrice: 69000,
        annualPrice: 49000,
        annualBilled: 588000,
        savings: 240000,
        benefits: [
          'Todo en Básico',
          'Agenda online',
          'Pagos integrados',
          'Rutinas digitales',
          'Clientes ilimitados'
        ],
        ctaText: 'Ser Pro',
        popular: true,
        icon: 'pro'
      },
      {
        name: 'Top Trainer',
        monthlyPrice: 'A medida',
        annualPrice: 'A medida',
        benefits: [
          'Todo en Pro',
          'Web personal',
          'Marketing ads',
          'Soporte legal',
          'Seguro profesional'
        ],
        ctaText: 'Cotizar',
        icon: 'enterprise'
      }
    ]
  },
  atletas: {
    role: 'atletas',
    emoji: '👟',
    title: 'Atletas',
    headline: 'Tu mapa deportivo personal. Encuentra, entrena y ahorra con la comunidad SportMaps.',
    plans: [
      {
        name: 'Atleta ID',
        monthlyPrice: 'Gratis',
        annualPrice: 'Gratis',
        benefits: [
          'Historial deportivo digital',
          'Inscripción a eventos',
          'Perfil público verificado',
          'Acceso a rutas básicas'
        ],
        ctaText: 'Crear Perfil',
        icon: 'basic'
      },
      {
        name: 'Premium',
        monthlyPrice: 39000,
        annualPrice: 29000,
        annualBilled: 348000,
        savings: 120000,
        benefits: [
          'Todo en Atleta ID',
          'Estadísticas avanzadas',
          'Descuentos en marcas',
          'Video highlights',
          'Soporte prioritario'
        ],
        ctaText: 'Ser Premium',
        popular: true,
        icon: 'pro'
      },
      {
        name: 'Pro Career',
        monthlyPrice: 'A medida',
        annualPrice: 'A medida',
        benefits: [
          'Todo en Premium',
          'Visibilidad scouts',
          'Agente digital',
          'Asesoría legal',
          'Conexión patrocinadores'
        ],
        ctaText: 'Cotizar',
        icon: 'enterprise'
      }
    ]
  },
  marcas: {
    role: 'marcas',
    emoji: '🎽',
    title: 'Marcas',
    headline: 'Publicidad con precisión quirúrgica. Conecta tu marca con el atleta ideal mediante IA.',
    plans: [
      {
        name: 'Partner',
        monthlyPrice: 'Gratis',
        annualPrice: 'Gratis',
        benefits: [
          'Perfil de marca',
          'Listado directorio',
          'Página de productos',
          'Contacto directo'
        ],
        ctaText: 'Registrar Marca',
        icon: 'basic'
      },
      {
        name: 'Marketplace',
        monthlyPrice: 109000,
        annualPrice: 89000,
        annualBilled: 1068000,
        savings: 240000,
        benefits: [
          'Todo en Partner',
          'Venta productos',
          'Pasarela pagos',
          'Logística envíos',
          'Analytics ventas'
        ],
        ctaText: 'Vender',
        popular: true,
        icon: 'pro'
      },
      {
        name: 'Sponsor',
        monthlyPrice: 'A medida',
        annualPrice: 'A medida',
        benefits: [
          'Todo en Marketplace',
          'Ads segmentados',
          'Patrocinio eventos',
          'Banner principal',
          'Campañas custom'
        ],
        ctaText: 'Cotizar',
        icon: 'enterprise'
      }
    ]
  },
  federaciones: {
    role: 'federaciones',
    emoji: '🏆',
    title: 'Federaciones',
    headline: 'El mapa estratégico del deporte nacional. Control, censo y analítica para federaciones.',
    plans: [
      {
        name: 'Liga',
        monthlyPrice: 'Gratis',
        annualPrice: 'Gratis',
        benefits: [
          'Gestión básica clubes',
          'Calendario torneos',
          'Rankings locales',
          'Soporte básico'
        ],
        ctaText: 'Registrar Liga',
        icon: 'basic'
      },
      {
        name: 'Federación Pro',
        monthlyPrice: 189000,
        annualPrice: 149000,
        annualBilled: 1788000,
        savings: 480000,
        benefits: [
          'Torneos online',
          'Ligas y clubes ilimitados',
          'Carnetización nacional',
          'Módulo de arbitraje'
        ],
        ctaText: 'Ser Pro',
        popular: true,
        icon: 'pro'
      },
      {
        name: 'Nacional',
        monthlyPrice: 'A medida',
        annualPrice: 'A medida',
        benefits: [
          'Control censo',
          'Delegaciones multi-región',
          'API gobierno',
          'Soporte dedicado 24/7'
        ],
        ctaText: 'Cotizar',
        icon: 'enterprise'
      }
    ]
  },
  proveedores: {
    role: 'proveedores',
    emoji: '📦',
    title: 'Proveedores',
    headline: 'Tu inventario frente a los ojos de quienes realmente lo necesitan. Marketplace nicho.',
    plans: [
      {
        name: 'Proveedor',
        monthlyPrice: 'Gratis',
        annualPrice: 'Gratis',
        benefits: [
          'Perfil empresa',
          'Listado directorio',
          'Recibir solicitudes',
          'Contacto directo'
        ],
        ctaText: 'Registrar Empresa',
        icon: 'basic'
      },
      {
        name: 'Proveedor Pro',
        monthlyPrice: 89000,
        annualPrice: 69000,
        annualBilled: 828000,
        savings: 240000,
        benefits: [
          'Todo en Proveedor',
          'Catálogo productos',
          'Cotizaciones online',
          'CRM básico',
          'Clientes ilimitados'
        ],
        ctaText: 'Ser Pro',
        popular: true,
        icon: 'pro'
      },
      {
        name: 'Enterprise',
        monthlyPrice: 'A medida',
        annualPrice: 'A medida',
        benefits: [
          'Todo en Pro',
          'API integraciones',
          'Facturación electrónica',
          'Soporte 24/7',
          'Gerente cuenta'
        ],
        ctaText: 'Cotizar',
        icon: 'enterprise'
      }
    ]
  },
  bienestar: {
    role: 'bienestar',
    emoji: '❤️',
    title: 'Bienestar',
    headline: 'Salud y prevención en un solo lugar. Conecta con atletas que buscan tu especialidad.',
    plans: [
      {
        name: 'Salud ID',
        monthlyPrice: 'Gratis',
        annualPrice: 'Gratis',
        benefits: [
          'Perfil profesional',
          'Listado en mapa',
          'Recibir solicitudes',
          'Hasta 5 pacientes/mes'
        ],
        ctaText: 'Registrarse',
        icon: 'basic'
      },
      {
        name: 'Consultorio Pro',
        monthlyPrice: 89000,
        annualPrice: 69000,
        annualBilled: 828000,
        savings: 240000,
        benefits: [
          'Todo en Salud ID',
          'Agenda inteligente',
          'Historia clínica',
          'Telemedicina',
          'Pacientes ilimitados'
        ],
        ctaText: 'Ser Pro',
        popular: true,
        icon: 'pro'
      },
      {
        name: 'Clínica',
        monthlyPrice: 'A medida',
        annualPrice: 'A medida',
        benefits: [
          'Todo en Pro',
          'Múltiples especialistas',
          'Integración HIS',
          'Facturación salud',
          'Soporte dedicado'
        ],
        ctaText: 'Cotizar',
        icon: 'enterprise'
      }
    ]
  },
  servicios: {
    role: 'servicios',
    emoji: '🔧',
    title: 'Servicios',
    headline: 'Posiciona tu consultorio deportivo en el centro del mapa. Genera confianza y pacientes.',
    plans: [
      {
        name: 'Freelance',
        monthlyPrice: 'Gratis',
        annualPrice: 'Gratis',
        benefits: [
          'Perfil profesional',
          'Listado directorio',
          'Recibir consultas',
          'Hasta 10 clientes'
        ],
        ctaText: 'Registrarse',
        icon: 'basic'
      },
      {
        name: 'Servicio Pro',
        monthlyPrice: 69000,
        annualPrice: 49000,
        annualBilled: 588000,
        savings: 240000,
        benefits: [
          'Todo en Freelance',
          'Agenda online',
          'Pagos integrados',
          'Clientes ilimitados',
          'Reportes'
        ],
        ctaText: 'Ser Pro',
        popular: true,
        icon: 'pro'
      },
      {
        name: 'Agencia',
        monthlyPrice: 'A medida',
        annualPrice: 'A medida',
        benefits: [
          'Todo en Pro',
          'Múltiples profesionales',
          'Marca blanca',
          'Integraciones',
          'Soporte dedicado'
        ],
        ctaText: 'Cotizar',
        icon: 'enterprise'
      }
    ]
  },
  eventos: {
    role: 'eventos',
    emoji: '🎪',
    title: 'Organizadores de Eventos',
    headline: 'Organiza eventos deportivos sin caos. Link único, inscripciones automáticas, sin comisión.',
    plans: [
      {
        name: 'Evento Pequeño',
        monthlyPrice: 25000,
        annualPrice: 25000,
        benefits: [
          'Página pública del evento',
          'Link único compartible',
          'Inscripciones automáticas',
          'Pin en el mapa SportMaps'
        ],
        ctaText: 'Crear Evento',
        icon: 'basic'
      },
      {
        name: 'Evento Mediano',
        monthlyPrice: 79000,
        annualPrice: 129000,
        annualBilled: 129000,
        savings: 0,
        benefits: [
          'Todo en Pequeño',
          'Más inscritos permitidos',
          'Categorías simples',
          'Validación de pagos',
          'Soporte estándar'
        ],
        ctaText: 'Crear Evento Pro',
        popular: true,
        icon: 'pro'
      },
      {
        name: 'Evento Grande',
        monthlyPrice: 299000,
        annualPrice: 299000,
        benefits: [
          'Todo en Mediano',
          'Alto volumen de inscritos',
          'Prioridad en mapa',
          'Soporte prioritario',
          'Configuración personalizada'
        ],
        ctaText: 'Contactar Ventas',
        icon: 'enterprise'
      }
    ]
  }
};

export function RolePricingSection({ config, onCTA }: RolePricingSectionProps) {
  const [isAnnual, setIsAnnual] = useState(false);
  const { trackBillingToggle, trackPlanClick, trackPricingView } = useAnalytics();

  // Track section view on mount
  useEffect(() => {
    trackPricingView(config.role);
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
    const displayPrice = isAnnual ? plan.annualPrice : plan.monthlyPrice;
    trackPlanClick({
      role: config.role,
      plan_name: plan.name,
      billing_period: isAnnual ? 'annual' : 'monthly',
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

          {/* Toggle */}
          <div className="flex items-center justify-center gap-3">
            <span className={`text-sm font-medium transition-colors ${!isAnnual ? 'text-foreground' : 'text-muted-foreground'}`}>
              Mensual
            </span>
            <button
              onClick={handleToggle}
              className="relative w-14 h-7 bg-muted rounded-full transition-colors hover:bg-sport-primary/20"
              aria-label="Toggle billing period"
            >
              <div className={`absolute top-1 w-5 h-5 bg-sport-primary rounded-full transition-all duration-300 ${isAnnual ? 'left-8' : 'left-1'}`} />
            </button>
            <span className={`text-sm font-medium transition-colors ${isAnnual ? 'text-foreground' : 'text-muted-foreground'}`}>
              Anual
            </span>
            <Badge className="bg-sport-primary text-white text-xs px-2 py-0.5">
              2 meses gratis
            </Badge>
          </div>
        </div>

        {/* Plans Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {config.plans.map((plan, index) => {
            const Icon = iconMap[plan.icon];
            const displayPrice = isAnnual ? plan.annualPrice : plan.monthlyPrice;

            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative p-6 md:p-8 rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${plan.popular
                  ? 'bg-gradient-to-br from-sport-primary/10 to-sport-accent/10 border-sport-primary/40 shadow-lg shadow-sport-primary/10'
                  : 'bg-card border-border hover:border-sport-primary/30'
                  }`}
              >
                {(plan.badge || plan.popular) && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-sport-primary to-sport-accent text-white px-4 py-1 rounded-full text-xs font-bold shadow-lg whitespace-nowrap">
                    {plan.badge ?? "RECOMENDADO"}
                  </div>
                )}

                {/* Plan Header */}
                <div className="mb-6">
                  <div className="w-12 h-12 rounded-xl bg-sport-primary/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-sport-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">{plan.name}</h3>
                </div>

                {/* Price */}
                <div className="mb-6">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={isAnnual ? 'annual' : 'monthly'}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="flex items-baseline gap-1"
                    >
                      <span className="text-3xl md:text-4xl font-bold text-sport-accent">
                        {formatPrice(displayPrice)}
                      </span>
                      {typeof displayPrice === 'number' && (
                        <span className="text-muted-foreground">/mes</span>
                      )}
                    </motion.div>
                  </AnimatePresence>

                  {isAnnual && plan.annualBilled && (
                    <p className="text-xs text-muted-foreground mt-1">
                      Facturado anualmente ({formatPrice(plan.annualBilled)} / año)
                    </p>
                  )}
                </div>

                {/* Anchor de valor — solo si el plan lo tiene */}
                {plan.anchor && (
                  <p className="text-xs text-sport-primary font-medium mb-6 italic">
                    {plan.anchor}
                  </p>
                )}
                {!plan.anchor && <div className="mb-6" />}

                {/* Benefits */}
                <ul className="space-y-3 mb-6">
                  {plan.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm">
                      <Check className="w-5 h-5 text-sport-success flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>

                {/* Savings Message */}
                {isAnnual && plan.savings && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="text-center text-xs text-sport-success font-medium mb-4 bg-sport-success/10 rounded-lg py-2 px-3"
                  >
                    ✨ Ahorra {formatPrice(plan.savings)} al año
                  </motion.p>
                )}

                {/* CTA */}
                <Button
                  onClick={() => handlePlanClick(plan)}
                  className={`w-full py-5 font-bold rounded-xl transition-all hover:scale-[1.02] ${plan.popular
                    ? 'bg-sport-primary hover:bg-sport-primary/90 text-white'
                    : 'bg-muted hover:bg-muted/80 text-foreground'
                    }`}
                >
                  {plan.ctaText}
                </Button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
