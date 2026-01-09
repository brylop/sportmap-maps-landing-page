import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, Zap, Star, Crown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

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
        name: 'Starter',
        monthlyPrice: 'Gratis',
        annualPrice: 'Gratis',
        benefits: [
          'Perfil público verificado',
          'Hasta 10 alumnos',
          'Mensajes de contacto básicos'
        ],
        ctaText: 'Empezar Gratis',
        icon: 'basic'
      },
      {
        name: 'Profesional',
        monthlyPrice: 89000,
        annualPrice: 71200,
        annualBilled: 854400,
        savings: 213600,
        benefits: [
          'Recaudo Automático: Reduce mora 30%',
          'Vitrina 24/7 en el mapa',
          'App para Padres integrada',
          'Alumnos ilimitados'
        ],
        ctaText: 'Comenzar 14 días gratis',
        popular: true,
        icon: 'pro'
      },
      {
        name: 'Enterprise',
        monthlyPrice: 'A medida',
        annualPrice: 'A medida',
        benefits: [
          'Todo en Profesional',
          'Múltiples sedes',
          'API e integraciones',
          'Gerente de cuenta dedicado'
        ],
        ctaText: 'Contactar Ventas',
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
        name: 'Básico',
        monthlyPrice: 'Gratis',
        annualPrice: 'Gratis',
        benefits: [
          'Perfil verificado público',
          'Hasta 5 clientes',
          'Recibir mensajes de contacto'
        ],
        ctaText: 'Crear Perfil Gratis',
        icon: 'basic'
      },
      {
        name: 'Pro',
        monthlyPrice: 29000,
        annualPrice: 23200,
        annualBilled: 278400,
        savings: 69600,
        benefits: [
          'Agenda Inteligente sin cruces',
          'Cobra por Adelantado online',
          'Reseñas verificadas destacadas',
          'Clientes ilimitados'
        ],
        ctaText: 'Comenzar 14 días gratis',
        popular: true,
        icon: 'pro'
      },
      {
        name: 'Top Trainer',
        monthlyPrice: 'A medida',
        annualPrice: 'A medida',
        benefits: [
          'Todo en Pro',
          'Web personal con tu marca',
          'Marketing y ads incluidos',
          'Soporte legal y seguros'
        ],
        ctaText: 'Contactar Ventas',
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
          'Perfil público verificado',
          'Acceso a rutas básicas'
        ],
        ctaText: 'Crear Perfil Gratis',
        icon: 'basic'
      },
      {
        name: 'Premium',
        monthlyPrice: 9900,
        annualPrice: 7900,
        annualBilled: 94800,
        savings: 24000,
        benefits: [
          'Todo en un Mapa ilimitado',
          'Beneficios Club SportMaps',
          'Entrenamiento IA y progreso',
          'Descuentos en marcas aliadas'
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
          'Visibilidad para scouts',
          'Agente digital',
          'Conexión con patrocinadores'
        ],
        ctaText: 'Contactar',
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
          'Perfil de marca básico',
          'Listado en directorio',
          'Contacto directo con atletas'
        ],
        ctaText: 'Registrar Marca',
        icon: 'basic'
      },
      {
        name: 'Marketplace',
        monthlyPrice: 499000,
        annualPrice: 399200,
        annualBilled: 4790400,
        savings: 1197600,
        benefits: [
          'SponsorMatch IA incluido',
          'Publicidad Geolocalizada',
          'Métricas de impacto real',
          'Pasarela de pagos integrada'
        ],
        ctaText: 'Comenzar 14 días gratis',
        popular: true,
        icon: 'pro'
      },
      {
        name: 'Sponsor Elite',
        monthlyPrice: 'A medida',
        annualPrice: 'A medida',
        benefits: [
          'Todo en Marketplace',
          'Campañas custom',
          'Banner principal',
          'Eventos exclusivos'
        ],
        ctaText: 'Contactar Ventas',
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
          'Perfil verificado',
          'Gestión básica de clubes',
          'Hasta 10 clubes afiliados'
        ],
        ctaText: 'Registrar Liga',
        icon: 'basic'
      },
      {
        name: 'Federación Pro',
        monthlyPrice: 1990000,
        annualPrice: 1592000,
        annualBilled: 19104000,
        savings: 4776000,
        benefits: [
          'Censo en Tiempo Real',
          'Gestión de Licencias digital',
          'Data para decisiones',
          'Clubes ilimitados'
        ],
        ctaText: 'Comenzar 14 días gratis',
        popular: true,
        icon: 'pro'
      },
      {
        name: 'Nacional',
        monthlyPrice: 'A medida',
        annualPrice: 'A medida',
        benefits: [
          'Todo en Pro',
          'Multi-región',
          'API gobierno',
          'Soporte 24/7 dedicado'
        ],
        ctaText: 'Contactar Ventas',
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
          'Perfil de empresa',
          'Listado en directorio',
          'Recibir solicitudes básicas'
        ],
        ctaText: 'Registrar Empresa',
        icon: 'basic'
      },
      {
        name: 'Pro',
        monthlyPrice: 79000,
        annualPrice: 63200,
        annualBilled: 758400,
        savings: 189600,
        benefits: [
          'Tráfico Calificado directo',
          'Tienda en el Mapa',
          'Comisiones competitivas',
          'CRM básico integrado'
        ],
        ctaText: 'Comenzar 14 días gratis',
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
          'Gerente de cuenta'
        ],
        ctaText: 'Contactar Ventas',
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
          'Listado en directorio',
          'Hasta 10 clientes/mes'
        ],
        ctaText: 'Registrarse Gratis',
        icon: 'basic'
      },
      {
        name: 'Pro',
        monthlyPrice: 49000,
        annualPrice: 39200,
        annualBilled: 470400,
        savings: 117600,
        benefits: [
          'Flujo constante de pacientes',
          'Perfil Especialista destacado',
          'Historial deportivo integrado',
          'Clientes ilimitados'
        ],
        ctaText: 'Comenzar 14 días gratis',
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
          'Integraciones custom'
        ],
        ctaText: 'Contactar Ventas',
        icon: 'enterprise'
      }
    ]
  }
};

export function RolePricingSection({ config, onCTA }: RolePricingSectionProps) {
  const [isAnnual, setIsAnnual] = useState(false);
  
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
              onClick={() => setIsAnnual(!isAnnual)}
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
                className={`relative p-6 md:p-8 rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${
                  plan.popular
                    ? 'bg-gradient-to-br from-sport-primary/10 to-sport-accent/10 border-sport-primary/40 shadow-lg shadow-sport-primary/10'
                    : 'bg-card border-border hover:border-sport-primary/30'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-sport-primary to-sport-accent text-white px-4 py-1 rounded-full text-xs font-bold shadow-lg">
                    RECOMENDADO
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
                  onClick={() => onCTA(plan.name)}
                  className={`w-full py-5 font-bold rounded-xl transition-all hover:scale-[1.02] ${
                    plan.popular
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
