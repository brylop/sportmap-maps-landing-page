import { Users, School, ShoppingBag, Award } from "lucide-react";
import { AnimatedCounter } from "./AnimatedCounter";

export function StatsSection() {
  const stats = [
    {
      icon: Users,
      value: 15000,
      suffix: "+",
      label: "Deportistas registrados",
      color: "sport-primary"
    },
    {
      icon: School,
      value: 500,
      suffix: "+",
      label: "Escuelas deportivas",
      color: "sport-accent"
    },
    {
      icon: ShoppingBag,
      value: 2500,
      suffix: "+",
      label: "Productos disponibles",
      color: "sport-highlight"
    },
    {
      icon: Award,
      value: 98,
      suffix: "%",
      label: "Satisfacción de usuarios",
      color: "sport-wellness"
    }
  ];

  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-sport-text mb-4">
            Resultados que hablan por sí solos
          </h2>
          <p className="text-lg text-sport-text/70 max-w-2xl mx-auto">
            Miles de deportistas ya confían en SportMaps para gestionar su carrera deportiva
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="group text-center p-6 rounded-2xl bg-sport-card border border-sport-border hover:shadow-hover transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-${stat.color} to-${stat.color}/70 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl sm:text-4xl font-bold text-sport-text mb-2">
                <AnimatedCounter end={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-sport-text/70 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}