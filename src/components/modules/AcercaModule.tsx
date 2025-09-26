export function AcercaModule() {
  return (
    <section className="bg-sport-card rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 mb-6 sm:mb-8 shadow-elegant">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-sport-text mb-4 sm:mb-6">Nuestra Misión</h2>
          <p className="text-lg sm:text-xl text-sport-text mb-4 sm:mb-6 leading-relaxed">
            Hacer el deporte más accesible y seguro, conectando formación, equipamiento y salud en un solo lugar.
          </p>
          <p className="text-sm sm:text-base text-sport-text/80 leading-relaxed">
            Atendemos a familias, jóvenes deportistas y aficionados. Para proveedores, ofrecemos un canal digital con herramientas de gestión y acceso a una audiencia calificada.
          </p>
        </div>
        <div className="text-center">
          <img 
            className="w-full max-w-sm sm:max-w-md mx-auto rounded-xl sm:rounded-2xl shadow-elegant" 
            src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1170&auto=format&fit=crop" 
            alt="Equipo SportMaps"
          />
        </div>
      </div>
    </section>
  );
}