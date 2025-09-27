import { DynamicBackground } from "./DynamicBackground";

export function HowItWorksSection() {
  return (
    <section className="relative py-20 sm:py-32 overflow-hidden">
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Tech Section Header */}
        <div className="text-center mb-16 space-y-6">
          <div className="inline-flex items-center gap-3 glass-effect px-6 py-3 rounded-full border border-sport-primary/30">
            <div className="w-2 h-2 bg-sport-primary rounded-full animate-tech-pulse" />
            <span className="text-sm font-semibold text-sport-primary uppercase tracking-wider">
              Tecnología Avanzada
            </span>
            <div className="w-2 h-2 bg-sport-accent rounded-full animate-tech-pulse" style={{ animationDelay: '0.5s' }} />
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white max-w-5xl mx-auto leading-tight">
            Ecosistema deportivo 
            <span className="bg-gradient-tech-hero bg-clip-text text-transparent"> inteligente</span>
            <br />
            <span className="text-white/90 text-3xl sm:text-4xl lg:text-5xl">
              Gestión completa del ciclo deportivo
            </span>
          </h2>

          <p className="text-xl text-white/80 max-w-4xl mx-auto leading-relaxed">
            Desde la búsqueda de academias deportivas hasta la gestión de equipamiento y bienestar, 
            <span className="text-sport-accent font-semibold"> SportMaps Tech </span> 
            simplifica procesos complejos conectando atletas, entrenadores, proveedores y servicios especializados 
            <span className="text-sport-highlight font-semibold"> en tiempo real.</span>
          </p>
        </div>

        {/* Tech Feature Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {[
            {
              title: "🏃‍♂️ Atletas & Familias",
              subtitle: "AI-Powered Recommendations",
              features: [
                "Búsqueda inteligente de academias",
                "Comparación automatizada de programas",
                "Gestión digital de inscripciones",
                "Seguimiento de progreso con IA",
                "Planes nutricionales personalizados",
                "Predicción de rendimiento deportivo"
              ],
              color: "sport-primary",
              gradient: "gradient-tech-primary",
              icon: "🤖"
            },
            {
              title: "🏫 Academias & Entrenadores", 
              subtitle: "Smart Management System",
              features: [
                "Dashboard de gestión de estudiantes",
                "Programación automática de entrenamientos",
                "Comunicación multi-canal con padres",
                "Reportes de rendimiento en tiempo real",
                "Certificaciones digitales blockchain",
                "Analytics predictivos de estudiantes"
              ],
              color: "sport-accent",
              gradient: "gradient-tech-glow",
              icon: "📊"
            },
            {
              title: "🛒 Proveedores & Servicios",
              subtitle: "Ecosystem Marketplace",
              features: [
                "Catálogo inteligente de equipamiento",
                "Servicios de bienestar integrados",
                "Suplementos certificados con QR",
                "Logística automatizada con IA",
                "Análisis de mercado en tiempo real",
                "Predicción de demanda de productos"
              ],
              color: "sport-highlight",
              gradient: "gradient-tech-card",
              icon: "🚀"
            }
          ].map((section, index) => (
            <div 
              key={index} 
              className="group bg-sport-background/80 backdrop-blur-sm rounded-3xl p-8 border border-white/20 hover:border-sport-primary/50 shadow-tech-lg hover:shadow-tech-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-glow-primary"
            >
              {/* Card Header */}
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-12 h-12 bg-${section.gradient} rounded-2xl flex items-center justify-center text-2xl shadow-glow-primary group-hover:scale-110 transition-transform duration-300`}>
                    {section.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-1">
                      {section.title}
                    </h3>
                    <p className="text-sm text-white/70 font-mono">{section.subtitle}</p>
                  </div>
                </div>
              </div>

              {/* Features List */}
              <ul className="space-y-4">
                {section.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3 group/item">
                    <div className={`w-2 h-2 rounded-full bg-${section.color} mt-2 flex-shrink-0 group-hover/item:animate-tech-pulse transition-all duration-300`} />
                    <span className="text-white/80 text-sm leading-relaxed group-hover/item:text-white transition-colors duration-300">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Tech Badge */}
              <div className="mt-6 pt-4 border-t border-white/20 flex items-center gap-2 text-xs text-sport-accent font-mono">
                <div className="w-1 h-1 bg-sport-accent rounded-full animate-tech-pulse" />
                <span>TECH ENABLED</span>
                <div className="ml-auto w-6 h-px bg-gradient-tech-primary" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}