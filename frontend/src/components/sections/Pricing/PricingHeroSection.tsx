import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, School, Dumbbell } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface PricingHeroSectionProps {
  onPlanClick: () => void;
}

function formatPrice(price: number): string {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(price);
}

const heroPlans = [
  {
    name: 'Escuelas',
    icon: School,
    monthlyPrice: 89000,
    annualPrice: 71200,
    features: ['Recaudo Automático', 'Vitrina en el Mapa', 'App para Padres'],
    popular: true,
  },
  {
    name: 'Entrenadores',
    icon: Dumbbell,
    monthlyPrice: 29000,
    annualPrice: 23200,
    features: ['Agenda Inteligente', 'Cobros Adelantados', 'Perfil Verificado'],
    popular: false,
  },
];

export function PricingHeroSection({ onPlanClick }: PricingHeroSectionProps) {
  const [isAnnual, setIsAnnual] = useState(false);
  
  return (
    <section className="py-16 md:py-24 px-4">
      <div className="container mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold text-sport-text-primary mb-6"
        >
          La Gestión Deportiva que No Te Cobra por Crecer
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-lg md:text-xl text-sport-text-secondary mb-8 max-w-3xl mx-auto"
        >
          Mindbody: $500/mes reales. ClassPass: pierde 60% margen.{' '}
          <strong className="text-sport-primary">SportMaps: desde {formatPrice(23200)}/mes, todo incluido.</strong>
        </motion.p>

        {/* Toggle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="flex items-center justify-center gap-3 mb-10"
        >
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
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {heroPlans.map((plan, index) => {
            const displayPrice = isAnnual ? plan.annualPrice : plan.monthlyPrice;
            
            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className={`relative p-6 rounded-2xl border ${
                  plan.popular
                    ? 'bg-gradient-to-br from-sport-primary/10 to-sport-accent/10 border-sport-primary/30'
                    : 'bg-sport-card border-sport-border'
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-sport-primary text-white text-xs font-semibold rounded-full">
                    Más popular
                  </span>
                )}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-sport-primary/10 flex items-center justify-center">
                    <plan.icon className="w-5 h-5 text-sport-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-sport-text-primary">{plan.name}</h3>
                </div>
                <div className="mb-4">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={isAnnual ? 'annual' : 'monthly'}
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                    >
                      <span className="text-3xl font-bold text-sport-primary">{formatPrice(displayPrice)}</span>
                      <span className="text-sport-text-secondary">/mes</span>
                    </motion.div>
                  </AnimatePresence>
                </div>
                <ul className="space-y-2 mb-6 text-left">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sport-text-secondary text-sm">
                      <Check className="w-4 h-4 text-sport-success flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  onClick={onPlanClick}
                  variant={plan.popular ? 'default' : 'outline'}
                  className="w-full"
                >
                  Empezar gratis 14 días
                </Button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
