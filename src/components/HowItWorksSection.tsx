export function HowItWorksSection() {
  return (
    <section className="py-16 sm:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Label */}
        <div className="flex items-center gap-2 mb-4">
          <div className="w-8 h-0.5 bg-sport-accent"></div>
          <span className="text-sm font-semibold text-sport-accent uppercase tracking-wider">
            Cómo funciona
          </span>
        </div>

        {/* Main Title */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-sport-text mb-6 max-w-4xl">
          Ecosistema deportivo integral: 
          <span className="text-sport-primary"> gestión completa del ciclo deportivo</span>
        </h2>

        {/* Description */}
        <p className="text-lg text-sport-text/70 mb-12 max-w-3xl leading-relaxed">
          Desde la búsqueda de escuelas deportivas hasta la gestión de equipamiento y bienestar, 
          SportMaps simplifica procesos complejos en el mundo deportivo, conectando atletas, 
          entrenadores, proveedores y servicios especializados en tiempo real.
        </p>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Atletas y Familias",
              features: [
                "Búsqueda de escuelas deportivas",
                "Comparación de programas",
                "Gestión de inscripciones",
                "Seguimiento de progreso",
                "Planes nutricionales personalizados"
              ],
              color: "sport-primary"
            },
            {
              title: "Escuelas y Entrenadores", 
              features: [
                "Gestión de estudiantes",
                "Programación de entrenamientos",
                "Comunicación con padres",
                "Reportes de rendimiento",
                "Certificaciones digitales"
              ],
              color: "sport-accent"
            },
            {
              title: "Proveedores y Servicios",
              features: [
                "Catálogo de equipamiento",
                "Servicios de bienestar",
                "Suplementos certificados",
                "Logística integrada",
                "Análisis de mercado"
              ],
              color: "sport-highlight"
            }
          ].map((section, index) => (
            <div key={index} className="bg-sport-card rounded-2xl p-6 shadow-elegant border border-sport-border">
              <h3 className={`text-xl font-bold mb-4 text-${section.color}`}>
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <div className={`w-2 h-2 rounded-full bg-${section.color} mt-2 flex-shrink-0`}></div>
                    <span className="text-sport-text/80 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}