import { motion } from 'framer-motion';
import { Shield, Check, Building2, Users, Dumbbell, Megaphone, Trophy, ShoppingBag, Wrench } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface PlansSectionProps {
  onPlanClick: () => void;
}

interface PlanTier {
  name: string;
  price: string;
  ideal: string;
  features: string[];
  popular?: boolean;
}

const schoolPlans: PlanTier[] = [
  {
    name: 'Free',
    price: '0',
    ideal: 'Escuelas que empiezan a digitalizarse',
    features: ['Agenda básica', 'Reservas limitadas', '1 sede', 'Comunicaciones simples'],
  },
  {
    name: 'Pro',
    price: '29',
    ideal: 'Academias con 1–3 sedes',
    features: ['Operación completa', 'Pagos online', 'App atletas/familias', 'Reportes básicos'],
    popular: true,
  },
  {
    name: 'Plus',
    price: '59',
    ideal: 'Redes de clubes y academias grandes',
    features: ['Todo Pro', 'BI avanzado', 'Patrocinios inteligentes', 'Multi-sede ilimitada', 'API básica'],
  },
];

const trainerPlans: PlanTier[] = [
  {
    name: 'Free',
    price: '0',
    ideal: 'Empezar sin riesgo',
    features: ['Agenda personal', 'Lista de atletas', 'Recordatorios básicos'],
  },
  {
    name: 'Pro',
    price: '15',
    ideal: 'Gestión profesional',
    features: ['Agenda avanzada', 'Cobros online', 'Grupos', 'Reportes de ingresos'],
    popular: true,
  },
  {
    name: 'Plus',
    price: '29',
    ideal: 'Escalar tu marca',
    features: ['Todo Pro', 'Analíticas de rendimiento', 'Marca personal en SportMaps'],
  },
];

const athletePlans: PlanTier[] = [
  {
    name: 'Free',
    price: '0',
    ideal: 'Acceso básico incluido',
    features: ['Ver horarios', 'Reservar', 'Pagar', 'Notificaciones'],
  },
  {
    name: 'Pro',
    price: '3',
    ideal: 'Seguimiento avanzado',
    features: ['Historial de entrenos', 'Retos', 'Ranking', 'Contenido exclusivo'],
    popular: true,
  },
  {
    name: 'Plus',
    price: '7',
    ideal: 'Máximo rendimiento',
    features: ['Recomendaciones IA', 'Métricas de progreso', 'Beneficios con marcas'],
  },
];

const federationPlans: PlanTier[] = [
  {
    name: 'Free',
    price: '0',
    ideal: 'Panel básico',
    features: ['Panel de lectura', 'Comunicación simple'],
  },
  {
    name: 'Pro',
    price: '99',
    ideal: 'Gestión multi-club',
    features: ['Panel multi-club', 'Reportes agregados', 'Comunicación masiva'],
    popular: true,
  },
  {
    name: 'Enterprise',
    price: '199+',
    ideal: 'Grandes ligas',
    features: ['BI avanzado', 'Integraciones propias', 'Soporte dedicado'],
  },
];

const providerPlans: PlanTier[] = [
  {
    name: 'Free',
    price: '0',
    ideal: 'Empezar a vender',
    features: ['Catálogo limitado', 'Perfil visible', 'Pedidos manuales'],
  },
  {
    name: 'Pro',
    price: '29 + 5-10%',
    ideal: 'Ventas online',
    features: ['Catálogo completo', 'Pedidos y pagos online', 'Cupones', 'Reportes básicos'],
    popular: true,
  },
  {
    name: 'Plus',
    price: '79 + 3-7%',
    ideal: 'Escalar ventas',
    features: ['Todo Pro', 'Productos destacados', 'Campañas', 'Analytics avanzado'],
  },
];

const servicePlans: PlanTier[] = [
  {
    name: 'Free',
    price: '0',
    ideal: 'Perfil básico',
    features: ['Perfil visible', 'Agenda simple', 'Reservas limitadas/mes'],
  },
  {
    name: 'Pro',
    price: '15 + 5-10%',
    ideal: 'Gestión completa',
    features: ['Agenda completa', 'Pagos online', 'Reseñas', 'Mensajes con clientes'],
    popular: true,
  },
  {
    name: 'Plus',
    price: '39 + comisión',
    ideal: 'Prioridad y eventos',
    features: ['Todo Pro', 'Prioridad en listados', 'Acceso a eventos grandes', 'Analytics'],
  },
];

function PlanCard({ plan, index }: { plan: PlanTier; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className={`relative p-5 rounded-xl border ${
        plan.popular
          ? 'bg-gradient-to-br from-sport-primary/10 to-sport-accent/10 border-sport-primary/30'
          : 'bg-sport-card border-sport-border'
      }`}
    >
      {plan.popular && (
        <Badge className="absolute -top-2 right-3 bg-sport-primary text-white text-xs">
          Popular
        </Badge>
      )}
      <h4 className="text-lg font-bold text-sport-text-primary">{plan.name}</h4>
      <div className="my-2">
        <span className="text-2xl font-bold text-sport-primary">${plan.price}</span>
        <span className="text-sport-text-secondary text-sm">/mes</span>
      </div>
      <p className="text-xs text-sport-text-secondary mb-3">{plan.ideal}</p>
      <ul className="space-y-1.5">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2 text-sport-text-secondary text-xs">
            <Check className="w-3.5 h-3.5 text-sport-success flex-shrink-0 mt-0.5" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

function PlanSection({ 
  title, 
  icon: Icon, 
  plans, 
  note 
}: { 
  title: string; 
  icon: React.ElementType; 
  plans: PlanTier[]; 
  note?: string;
}) {
  return (
    <div className="mb-12">
      <div className="flex items-center gap-2 mb-4">
        <Icon className="w-5 h-5 text-sport-primary" />
        <h3 className="text-xl font-bold text-sport-text-primary">{title}</h3>
      </div>
      <div className="grid md:grid-cols-3 gap-4">
        {plans.map((plan, index) => (
          <PlanCard key={plan.name} plan={plan} index={index} />
        ))}
      </div>
      {note && (
        <p className="mt-3 text-xs text-sport-text-secondary italic">{note}</p>
      )}
    </div>
  );
}

export function PlansSection({ onPlanClick }: PlansSectionProps) {
  return (
    <section className="py-16 md:py-24 px-4 bg-sport-surface">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-sport-text-primary mb-4">
            Planes simples para todo tu ecosistema deportivo
          </h2>
          <p className="text-sport-text-secondary max-w-2xl mx-auto mb-6">
            Escuelas, entrenadores, atletas, marcas, proveedores y staff. 
            Empieza gratis y escala solo cuando lo necesites.
          </p>
          <div className="flex flex-wrap justify-center gap-3 text-sm">
            <Badge variant="outline" className="border-sport-success text-sport-success">
              Free: arranca sin riesgo
            </Badge>
            <Badge variant="outline" className="border-sport-primary text-sport-primary">
              Pro: opera día a día
            </Badge>
            <Badge variant="outline" className="border-sport-accent text-sport-accent">
              Plus: escala con IA
            </Badge>
          </div>
        </motion.div>

        {/* Schools */}
        <PlanSection 
          title="Escuelas Deportivas" 
          icon={Building2} 
          plans={schoolPlans}
          note="Todas las escuelas incluyen usuarios ilimitados de atletas y familias. Sin costes ocultos."
        />

        {/* Trainers */}
        <PlanSection 
          title="Entrenadores Independientes" 
          icon={Users} 
          plans={trainerPlans}
        />

        {/* Athletes */}
        <PlanSection 
          title="Atletas y Familias" 
          icon={Dumbbell} 
          plans={athletePlans}
          note="El acceso básico suele estar incluido en el plan de tu escuela. Pro/Plus son opcionales."
        />

        {/* Brands Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex items-center gap-2 mb-4">
            <Megaphone className="w-5 h-5 text-sport-primary" />
            <h3 className="text-xl font-bold text-sport-text-primary">Marcas y Patrocinadores</h3>
          </div>
          <Card className="bg-gradient-to-br from-sport-primary/5 to-sport-accent/5 border-sport-primary/20">
            <CardContent className="p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-sport-text-primary mb-2">Sin fee fijo, solo pagas por resultados</h4>
                  <ul className="space-y-2 text-sm text-sport-text-secondary">
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-sport-success" />
                      Perfil de marca
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-sport-success" />
                      Módulo de Patrocinios Inteligentes
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-sport-success" />
                      Campañas segmentadas por deporte, ciudad y tipo
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col justify-center">
                  <p className="text-sport-text-secondary text-sm mb-3">
                    <strong className="text-sport-primary">Modelo:</strong> Comisión 15–25% sobre inversión en campañas
                  </p>
                  <Button onClick={onPlanClick} variant="outline" size="sm">
                    Hablar con partnerships
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Federations */}
        <PlanSection 
          title="Federaciones y Ligas" 
          icon={Trophy} 
          plans={federationPlans}
          note="Diseñamos contratos Enterprise a medida para grandes federaciones y ligas."
        />

        {/* Providers */}
        <PlanSection 
          title="Proveedores de Productos" 
          icon={ShoppingBag} 
          plans={providerPlans}
          note="Uniformes, equipamiento, suplementos y tech."
        />

        {/* Services */}
        <PlanSection 
          title="Personal de Servicios" 
          icon={Wrench} 
          plans={servicePlans}
          note="Fotografía, fisioterapia, arbitraje, logística y más."
        />

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 p-6 rounded-2xl bg-sport-accent/10 border border-sport-accent/30"
        >
          <div className="flex items-center justify-center gap-2 mb-3">
            <Shield className="w-5 h-5 text-sport-accent" />
            <strong className="text-sport-text-primary">Todo incluido, sin sorpresas</strong>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm text-sport-text-secondary text-center">
            <div>✓ Sin contratos de permanencia</div>
            <div>✓ Sin cargos extra por usuarios</div>
            <div>✓ Sin tarifas ocultas</div>
            <div>✓ Comisiones solo donde hay valor</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
