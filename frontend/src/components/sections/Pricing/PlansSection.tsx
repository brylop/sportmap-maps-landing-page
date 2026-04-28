import { Sparkles, User, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import {
  RolePricingSection,
  rolePricingConfigs,
} from '@/components/common/cards/RolePricingSection';

const SALES_WHATSAPP = '573128463555';

interface PlansSectionProps {
  selectedClient: string;
  onPlanSelect?: (planName: string, category: string) => void;
}

/**
 * PlansSection — wrapper que reutiliza RolePricingSection (single source of truth para precios v3.0).
 *
 * Casos especiales:
 *  - `atletas` / `padres` / `default` no tienen pricing comercial. Renderizamos un
 *    bloque que vende el valor de unirse gratis y empuja al usuario al motor viral.
 */
export function PlansSection({ selectedClient, onPlanSelect }: PlansSectionProps) {
  const handleCTA = (planName: string) => {
    if (onPlanSelect) {
      onPlanSelect(planName, selectedClient);
      return;
    }
    const message = `Hola SportMaps, estoy interesado en el plan ${planName} (${selectedClient}).`;
    window.open(
      `https://wa.me/${SALES_WHATSAPP}?text=${encodeURIComponent(message)}`,
      '_blank'
    );
  };

  const config = rolePricingConfigs[selectedClient];
  if (config) {
    return <RolePricingSection config={config} onCTA={handleCTA} />;
  }

  // Atletas / Padres / default: pricing libre, página producto
  return <AtletasFreeSection selectedClient={selectedClient} />;
}

function AtletasFreeSection({ selectedClient }: { selectedClient: string }) {
  const isPadres = selectedClient === 'padres';

  return (
    <section className="py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 max-w-3xl mx-auto">
          <span className="text-4xl mb-3 block">{isPadres ? '👨‍👩‍👧' : '👟'}</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {isPadres ? (
              <>
                Para <span className="text-sport-primary">Padres y Tutores</span>
              </>
            ) : (
              <>
                Para <span className="text-sport-primary">Atletas</span>
              </>
            )}
          </h2>
          <p className="text-muted-foreground">
            {isPadres
              ? 'Acceso gratis al progreso de tu hijo, pagos digitales y comunicación con coaches y escuelas.'
              : 'Tu carrera deportiva en una sola app. Gratis para siempre, sin tarjeta de crédito.'}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <FreeForeverCard
            icon={User}
            badge="Atleta ID"
            title="Tu pasaporte deportivo"
            description="Historial portable, perfil verificado, eventos cercanos y descuentos en marcas aliadas."
            benefits={[
              'Perfil deportivo portable',
              'Inscripción a eventos sin fricción',
              'Acceso a rutas y mapa SportMaps',
              'Estadísticas y video highlights',
              'Conexión con scouts y patrocinadores',
            ]}
            ctaText="Crear Atleta ID gratis"
          />
          <FreeForeverCard
            icon={Users}
            badge="Padre/Tutor"
            title="Conectado con la academia"
            description="Mira el progreso de tu hijo, paga matrícula y comunícate con su coach desde una sola app."
            benefits={[
              'Acceso al progreso del hijo',
              'Pago de matrícula y mensualidad',
              'Comunicación directa con coach',
              'Calendario de eventos y prácticas',
              'Notificaciones de asistencia',
            ]}
            ctaText="Crear cuenta de Padre"
          />
        </div>
      </div>
    </section>
  );
}

interface FreeForeverCardProps {
  icon: typeof User;
  badge: string;
  title: string;
  description: string;
  benefits: string[];
  ctaText: string;
}

function FreeForeverCard({
  icon: Icon,
  badge,
  title,
  description,
  benefits,
  ctaText,
}: FreeForeverCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="rounded-2xl border border-sport-success/30 bg-gradient-to-br from-sport-success/5 to-transparent p-6 md:p-8"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="w-12 h-12 rounded-xl bg-sport-success/10 flex items-center justify-center">
          <Icon className="w-6 h-6 text-sport-success" />
        </div>
        <span className="text-xs font-bold uppercase tracking-wide text-sport-success bg-sport-success/10 px-3 py-1 rounded-full">
          {badge}
        </span>
      </div>
      <h3 className="text-2xl font-bold text-foreground mb-1">{title}</h3>
      <p className="text-sm text-muted-foreground mb-5">{description}</p>
      <p className="text-3xl font-bold text-sport-success mb-1">Gratis siempre</p>
      <p className="text-xs text-muted-foreground mb-6">Sin tarjeta de crédito · Sin permanencia</p>
      <ul className="space-y-2 mb-6">
        {benefits.map((b) => (
          <li key={b} className="flex items-start gap-2 text-sm text-muted-foreground">
            <Sparkles className="w-4 h-4 text-sport-success shrink-0 mt-0.5" />
            {b}
          </li>
        ))}
      </ul>
      <Button className="w-full bg-sport-success hover:bg-sport-success/90 text-white font-bold py-5 rounded-xl">
        {ctaText}
      </Button>
    </motion.div>
  );
}
