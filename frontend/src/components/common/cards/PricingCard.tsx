import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

export interface PricingPlan {
  name: string;
  price: number;
  features: string[];
  popular?: boolean;
}

interface PricingCardProps {
  plan: PricingPlan;
  index: number;
  onPlanClick: () => void;
  variant?: 'compact' | 'full';
}

export function PricingCard({ plan, index, onPlanClick, variant = 'full' }: PricingCardProps) {
  const isCompact = variant === 'compact';
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.15 }}
      className={`relative p-6 rounded-2xl border ${
        plan.popular
          ? `bg-gradient-to-br from-sport-primary/10 to-sport-accent/10 border-sport-primary/30 ${!isCompact ? 'scale-105' : ''}`
          : 'bg-sport-card border-sport-border'
      }`}
    >
      {plan.popular && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-sport-primary text-white text-xs font-semibold rounded-full">
          Más popular
        </span>
      )}
      <h3 className="text-xl font-bold text-sport-text-primary mb-2">{plan.name}</h3>
      <div className={isCompact ? 'mb-4' : 'mb-6'}>
        <span className="text-4xl font-bold text-sport-primary">${plan.price}</span>
        <span className="text-sport-text-secondary">/mes</span>
      </div>
      <ul className={`space-y-${isCompact ? '2' : '3'} ${isCompact ? 'mb-6 text-left' : 'mb-6'}`}>
        {plan.features.map((feature) => (
          <li key={feature} className={`flex items-center gap-2 text-sport-text-secondary ${isCompact ? '' : 'text-sm'}`}>
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
        {isCompact ? 'Empezar gratis 14 días' : '14 días gratis'}
      </Button>
    </motion.div>
  );
}
