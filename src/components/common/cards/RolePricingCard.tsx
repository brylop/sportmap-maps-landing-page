import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export interface RolePricingData {
  role: 'escuelas' | 'entrenadores' | 'atletas' | 'marcas' | 'federaciones' | 'proveedores' | 'servicios';
  emoji: string;
  title: string;
  headline: string;
  monthlyPrice: number;
  annualPrice: number;
  annualBilled: number;
  savings: number;
  benefits: string[];
  ctaText?: string;
}

interface RolePricingCardProps {
  data: RolePricingData;
  onCTA: () => void;
  className?: string;
}

export const rolePricingContent: Record<string, RolePricingData> = {
  escuelas: {
    role: 'escuelas',
    emoji: '🏫',
    title: 'ESCUELAS',
    headline: 'Gestiona tu academia, no tu papeleo. El software que paga su propia inversión.',
    monthlyPrice: 89000,
    annualPrice: 71200,
    annualBilled: 854400,
    savings: 213600,
    benefits: [
      'Recaudo Automático: Olvídate de cobrar por WhatsApp; automatiza mensualidades y reduce mora 30%.',
      'Vitrina 24/7: Aparece en el mapa frente a miles de padres que buscan clases en tu zona.',
      'App para Padres: Mejora profesionalismo con canal directo de asistencia y progreso.'
    ],
    ctaText: 'Comenzar prueba gratis'
  },
  entrenadores: {
    role: 'entrenadores',
    emoji: '🏃',
    title: 'ENTRENADORES',
    headline: 'Convierte tu pasión en un negocio escalable con agenda y pagos en un solo lugar.',
    monthlyPrice: 29000,
    annualPrice: 23200,
    annualBilled: 278400,
    savings: 69600,
    benefits: [
      'Agenda Inteligente: Clientes reservan según tu disponibilidad real, sin cruces.',
      'Cobra por Adelantado: Asegura ingreso con pagos online antes de la sesión.',
      'Posicionamiento Pro: Reputación con reseñas verificadas que te hacen resaltar.'
    ],
    ctaText: 'Crear mi perfil'
  },
  atletas: {
    role: 'atletas',
    emoji: '👟',
    title: 'ATLETAS',
    headline: 'Tu mapa deportivo personal. Encuentra, entrena y ahorra con la comunidad SportMaps.',
    monthlyPrice: 9900,
    annualPrice: 7900,
    annualBilled: 94800,
    savings: 24000,
    benefits: [
      'Todo en un Mapa: Encuentra escuelas fútbol, rutas ciclismo, patinaje artístico.',
      'Beneficios Club SportMaps: Descuentos exclusivos en marcas y tiendas aliadas.',
      'Entrenamiento IA: Registra rutas, conecta atletas, analiza progreso con IA.'
    ],
    ctaText: 'Unirme ahora'
  },
  marcas: {
    role: 'marcas',
    emoji: '🎽',
    title: 'MARCAS',
    headline: 'Publicidad con precisión quirúrgica. Conecta tu marca con el atleta ideal mediante IA.',
    monthlyPrice: 499000,
    annualPrice: 399200,
    annualBilled: 4790400,
    savings: 1197600,
    benefits: [
      'SponsorMatch IA: Encuentra atleta/academia que conecta con tu audiencia.',
      'Publicidad Geolocalizada: Tu marca donde entrenan tus clientes, sin desperdicio.',
      'Métricas Impacto: Dashboard real de interacciones con tu marca deportiva.'
    ],
    ctaText: 'Ver demo SponsorMatch'
  },
  federaciones: {
    role: 'federaciones',
    emoji: '🏆',
    title: 'FEDERACIONES',
    headline: 'El mapa estratégico del deporte nacional. Control, censo y analítica para federaciones.',
    monthlyPrice: 1990000,
    annualPrice: 1592000,
    annualBilled: 19104000,
    savings: 4776000,
    benefits: [
      'Censo Tiempo Real: Visualiza geográficamente afiliados y zonas expansión.',
      'Gestión Licencias: Digitaliza burocracia y centraliza documentación deportistas.',
      'Data Decisiones: Reportes automáticos crecimiento para entes gubernamentales.'
    ],
    ctaText: 'Solicitar demo'
  },
  proveedores: {
    role: 'proveedores',
    emoji: '📦',
    title: 'PROVEEDORES',
    headline: 'Tu inventario frente a los ojos de quienes realmente lo necesitan. Marketplace nicho.',
    monthlyPrice: 79000,
    annualPrice: 63200,
    annualBilled: 758400,
    savings: 189600,
    benefits: [
      'Tráfico Calificado: Vende a deportistas que necesitan tu equipo HOY.',
      'Tienda en el Mapa: Atletas encuentran tus productos en punto más cercano.',
      'Comisión Competitiva: Marketplace nicho con comisiones más bajas que gigantes.'
    ],
    ctaText: 'Registrar mi tienda'
  },
  servicios: {
    role: 'servicios',
    emoji: '🔧',
    title: 'SERVICIOS',
    headline: 'Posiciona tu consultorio deportivo en el centro del mapa. Genera confianza y pacientes.',
    monthlyPrice: 49000,
    annualPrice: 39200,
    annualBilled: 470400,
    savings: 117600,
    benefits: [
      'Flujo Pacientes: Leads constantes de deportistas buscando servicios cerca.',
      'Perfil Especialista: Muestra certificaciones y casos éxito para confianza inmediata.',
      'Historial Integrado: Conoce nivel actividad paciente desde su perfil SportMaps.'
    ],
    ctaText: 'Registrar mi servicio'
  }
};

function formatPrice(price: number): string {
  return new Intl.NumberFormat('es-CO', {
    style: 'currency',
    currency: 'COP',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(price);
}

export function RolePricingCard({ data, onCTA, className = '' }: RolePricingCardProps) {
  const [isAnnual, setIsAnnual] = useState(false);
  
  const displayPrice = isAnnual ? data.annualPrice : data.monthlyPrice;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`relative p-6 md:p-8 rounded-2xl border bg-gradient-to-br from-sport-primary/5 to-sport-accent/5 border-sport-primary/30 ${className}`}
    >
      {/* Header */}
      <div className="text-center mb-6">
        <span className="text-4xl mb-2 block">{data.emoji}</span>
        <h3 className="text-xl font-bold text-sport-primary mb-2">{data.title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">{data.headline}</p>
      </div>
      
      {/* Toggle */}
      <div className="flex items-center justify-center gap-3 mb-6">
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
      
      {/* Price */}
      <div className="text-center mb-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={isAnnual ? 'annual' : 'monthly'}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
          >
            <span className="text-4xl md:text-5xl font-bold text-sport-accent">
              {formatPrice(displayPrice)}
            </span>
            <span className="text-muted-foreground">/mes</span>
          </motion.div>
        </AnimatePresence>
        
        {isAnnual && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xs text-muted-foreground mt-2"
          >
            Facturado anualmente ({formatPrice(data.annualBilled)} / año)
          </motion.p>
        )}
      </div>
      
      {/* Benefits */}
      <ul className="space-y-4 mb-6">
        {data.benefits.map((benefit, index) => (
          <li key={index} className="flex items-start gap-3 text-sm">
            <Check className="w-5 h-5 text-sport-success flex-shrink-0 mt-0.5" />
            <span className="text-muted-foreground">{benefit}</span>
          </li>
        ))}
      </ul>
      
      {/* Annual savings message */}
      {isAnnual && (
        <motion.p
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="text-center text-sm text-sport-success font-medium mb-4 bg-sport-success/10 rounded-lg py-2 px-3"
        >
          ✨ Asegura tu crecimiento todo el año y ahorra {formatPrice(data.savings)}
        </motion.p>
      )}
      
      {/* CTA Button */}
      <Button
        onClick={onCTA}
        className="w-full bg-sport-primary hover:bg-sport-primary/90 text-white py-6 text-lg font-bold rounded-xl"
      >
        {data.ctaText || 'Comenzar ahora'}
      </Button>
    </motion.div>
  );
}
