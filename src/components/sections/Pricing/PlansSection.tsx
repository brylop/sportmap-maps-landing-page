import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Check, Building2, Users, Dumbbell, Megaphone, Trophy, ShoppingBag, Wrench } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
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

// --- DATA DEFINITIONS (Sin cambios en tus datos originales) ---
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

// --- HELPER COMPONENTS ---

function PlanCard({ plan, index }: { plan: PlanTier; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className={`relative p-5 rounded-xl border h-full flex flex-col ${
        plan.popular
          ? 'bg-gradient-to-br from-sport-primary/10 to-sport-accent/10 border-sport-primary/30 shadow-glow-primary'
          : 'bg-sport-card border-sport-border hover:border-sport-border/60'
      }`}
    >
      {plan.popular && (
        <Badge className="absolute -top-2 right-3 bg-sport-primary text-white text-xs">
          Popular
        </Badge>
      )}
      <h4 className="text-lg font-bold text-sport-text-primary">{plan.name}</h4>
      <div className="my-3">
        <span className="text-3xl font-bold text-sport-primary">${plan.price}</span>
        <span className="text-sport-text-secondary text-sm">/mes</span>
      </div>
      <p className="text-sm text-sport-text-primary font-medium mb-4 min-h-[40px]">{plan.ideal}</p>
      
      <div className="border-t border-sport-border/30 my-4" />

      <ul className="space-y-3 flex-grow">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2 text-sport-text-secondary text-sm">
            <Check className="w-4 h-4 text-sport-success flex-shrink-0 mt-0.5" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      
      <div className="mt-6">
        <Button 
          className={`w-full ${plan.popular ? 'bg-sport-primary hover:bg-sport-primary/90' : 'bg-sport-surface border border-sport-border hover:bg-sport-border/20 text-sport-text-primary'}`}
          variant={plan.popular ? 'default' : 'outline'}
        >
          {plan.price === '0' ? 'Empezar Gratis' : 'Seleccionar Plan'}
        </Button>
      </div>
    </motion.div>
  );
}

function PlanGroup({ 
  plans, 
  note 
}: { 
  plans: PlanTier[]; 
  note?: string;
}) {
  return (
    <div className="animate-fade-in">
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {plans.map((plan, index) => (
          <PlanCard key={plan.name} plan={plan} index={index} />
        ))}
      </div>
      {note && (
        <p className="mt-6 text-center text-sm text-sport-text-secondary italic bg-sport-surface/50 p-2 rounded-lg inline-block">
          {note}
        </p>
      )}
    </div>
  );
}

// --- MAIN COMPONENT ---

export function PlansSection({ onPlanClick }: PlansSectionProps) {
  // Definimos las pestañas disponibles
  const tabs = [
    { id: 'schools', label: 'Escuelas', icon: Building2 },
    { id: 'trainers', label: 'Entrenadores', icon: Users },
    { id: 'athletes', label: 'Atletas', icon: Dumbbell },
    { id: 'brands', label: 'Marcas', icon: Megaphone },
    { id: 'federations', label: 'Federaciones', icon: Trophy },
    { id: 'providers', label: 'Proveedores', icon: ShoppingBag },
    { id: 'services', label: 'Servicios', icon: Wrench },
  ];

  const [activeTab, setActiveTab] = useState('schools');

  return (
    <section id="pricing" className="py-20 md:py-28 px-4 bg-sport-surface relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-sport-primary/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-sport-text-primary mb-6">
            Planes flexibles para tu crecimiento
          </h2>
          <p className="text-sport-text-secondary max-w-2xl mx-auto mb-8 text-lg">
            Selecciona tu perfil para ver los planes diseñados específicamente para ti. 
            Sin costes ocultos.
          </p>

          {/* TABS NAVIGATION */}
          <div className="flex flex-wrap justify-center gap-2 mb-12 p-2 bg-sport-card/50 backdrop-blur-sm rounded-2xl border border-sport-border/50 inline-flex">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-sport-primary text-white shadow-lg shadow-sport-primary/25 scale-105'
                    : 'text-sport-text-secondary hover:text-sport-text-primary hover:bg-sport-surface'
                }`}
              >
                <tab.icon className={`w-4 h-4 ${activeTab === tab.id ? 'text-white' : 'text-sport-text-muted'}`} />
                {tab.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* DYNAMIC CONTENT AREA */}
        <div className="min-h-[500px] flex flex-col items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="w-full"
            >
              {activeTab === 'schools' && (
                <PlanGroup 
                  plans={schoolPlans} 
                  note="Todas las escuelas incluyen usuarios ilimitados de atletas y familias." 
                />
              )}

              {activeTab === 'trainers' && (
                <PlanGroup plans={trainerPlans} />
              )}

              {activeTab === 'athletes' && (
                <PlanGroup 
                  plans={athletePlans} 
                  note="El acceso básico suele estar incluido en el plan de tu escuela." 
                />
              )}

              {activeTab === 'federations' && (
                <PlanGroup 
                  plans={federationPlans} 
                  note="Diseñamos contratos Enterprise a medida para grandes federaciones." 
                />
              )}

              {activeTab === 'providers' && (
                <PlanGroup 
                  plans={providerPlans} 
                  note="Uniformes, equipamiento, suplementos y tech." 
                />
              )}
              
              {activeTab === 'services' && (
                <PlanGroup 
                  plans={servicePlans} 
                  note="Fotografía, fisioterapia, arbitraje, logística y más." 
                />
              )}

              {activeTab === 'brands' && (
                <div className="max-w-4xl mx-auto">
                   <Card className="bg-gradient-to-br from-sport-primary/10 to-sport-accent/5 border-sport-primary/20 overflow-hidden">
                    <div className="absolute top-0 right-0 p-32 bg-sport-primary/10 blur-[80px] rounded-full pointer-events-none" />
                    <CardContent className="p-8 md:p-12 relative z-10">
                      <div className="grid md:grid-cols-2 gap-10 items-center">
                        <div>
                          <Badge className="mb-4 bg-sport-accent/20 text-sport-accent hover:bg-sport-accent/30">Partnerships</Badge>
                          <h3 className="text-2xl md:text-3xl font-bold text-sport-text-primary mb-4">
                            Sin fee fijo, solo pagas por resultados
                          </h3>
                          <p className="text-sport-text-secondary mb-6">
                            Conecta con miles de atletas y escuelas segmentados por deporte y ubicación. 
                            Tu marca en el momento exacto de la decisión de compra.
                          </p>
                          <ul className="space-y-3 mb-8">
                            <li className="flex items-center gap-3 text-sport-text-primary">
                              <div className="p-1 rounded-full bg-sport-success/20"><Check className="w-4 h-4 text-sport-success" /></div>
                              Perfil de marca verificado
                            </li>
                            <li className="flex items-center gap-3 text-sport-text-primary">
                              <div className="p-1 rounded-full bg-sport-success/20"><Check className="w-4 h-4 text-sport-success" /></div>
                              Módulo de Patrocinios Inteligentes (AI)
                            </li>
                            <li className="flex items-center gap-3 text-sport-text-primary">
                              <div className="p-1 rounded-full bg-sport-success/20"><Check className="w-4 h-4 text-sport-success" /></div>
                              Campañas hiper-segmentadas
                            </li>
                          </ul>
                          <Button onClick={onPlanClick} size="lg" className="bg-gradient-tech-primary shadow-lg shadow-sport-primary/20">
                            Hablar con Partnerships
                          </Button>
                        </div>
                        <div className="bg-sport-background/50 p-6 rounded-2xl border border-sport-border backdrop-blur-sm">
                           <div className="text-center space-y-2">
                             <div className="text-sm text-sport-text-secondary uppercase tracking-wider font-semibold">Modelo de Negocio</div>
                             <div className="text-4xl font-bold text-sport-primary">15–25%</div>
                             <div className="text-sport-text-primary font-medium">Comisión sobre inversión</div>
                             <p className="text-xs text-sport-text-secondary pt-4 border-t border-sport-border mt-4">
                               Solo cobramos si tu campaña genera impacto real.
                             </p>
                           </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Footer Guarantee */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 p-8 rounded-3xl bg-sport-card/50 border border-sport-border backdrop-blur-sm"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-full bg-sport-success/10 text-sport-success">
                <Shield className="w-8 h-8" />
              </div>
              <div>
                <strong className="block text-lg text-sport-text-primary">Garantía SportMaps</strong>
                <span className="text-sport-text-secondary">Transparencia total en cada transacción</span>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-sm text-sport-text-secondary">
              <span className="flex items-center gap-2"><Check className="w-4 h-4 text-sport-success" /> Sin contratos de permanencia</span>
              <span className="flex items-center gap-2"><Check className="w-4 h-4 text-sport-success" /> Sin cargos por usuario extra</span>
              <span className="flex items-center gap-2"><Check className="w-4 h-4 text-sport-success" /> Sin tarifas ocultas</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}