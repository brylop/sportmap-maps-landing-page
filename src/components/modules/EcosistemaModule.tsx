import { School, Store, Pill, Heart } from "lucide-react";
import { ModuleCard } from "@/components/ModuleCard";
import { MetricCard } from "@/components/MetricCard";
import { Badge } from "@/components/ui/badge";

interface EcosistemaModuleProps {
  onModuleClick: (moduleId: string) => void;
}

export function EcosistemaModule({ onModuleClick }: EcosistemaModuleProps) {
  const modules = [
    {
      id: "escuelas",
      icon: School,
      title: "Escuelas & Entrenadores",
      description: "Búsqueda avanzada, reservas, reseñas verificadas.",
      color: "primary"
    },
    {
      id: "tienda",
      icon: Store,
      title: "Tienda",
      description: "Catálogo especializado, fulfillment 24–48h.",
      color: "highlight"
    },
    {
      id: "nutricion",
      icon: Pill,
      title: "Nutrición",
      description: "Suscripciones y planes personalizados.",
      color: "nutrition"
    },
    {
      id: "bienestar",
      icon: Heart,
      title: "Bienestar",
      description: "Fisioterapia/psicología y teleconsulta.",
      color: "wellness"
    }
  ];

  return (
    <section className="bg-sport-card rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 mb-6 sm:mb-8 shadow-elegant">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between flex-wrap gap-3 sm:gap-4 mb-4 sm:mb-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-sport-text">Ecosistema Integrado</h2>
        <Badge className="bg-sport-accent text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-sm sm:text-base w-fit">
          MVP → Fase 1: Escuelas
        </Badge>
      </div>
      
      <p className="text-sm sm:text-base text-sport-text/80 mb-4 sm:mb-6 leading-relaxed">
        El ecosistema se orquesta sobre <strong>un solo perfil</strong> y <strong>un carrito/checkout unificado</strong>.
        Módulos: 1) Marketplace de Escuelas/Entrenadores, 2) Tienda (e-commerce), 3) Nutrición & Suscripciones,
        4) Bienestar/Salud. Un <em>motor de recomendaciones</em> (IA) sugiere clases y productos según edad, nivel y hábitos.
        La pasarela de pago (Stripe/PSE) y el sistema de reservas comparten cuentas y facturación.
      </p>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6 sm:mb-8">
        <MetricCard value="1,247" label="Escuelas" />
        <MetricCard value="15,892" label="Productos" />
        <MetricCard value="89,543" label="Usuarios" />
        <MetricCard value="$2.1M" label="GMV Mensual" />
      </div>

      <h5 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6 text-sport-text">Módulos (haz clic para navegar)</h5>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {modules.map((module) => (
          <ModuleCard
            key={module.id}
            icon={module.icon}
            title={module.title}
            description={module.description}
            color={module.color}
            onClick={() => onModuleClick(module.id)}
          />
        ))}
      </div>
    </section>
  );
}