import { Handshake, GraduationCap, Megaphone } from "lucide-react";

export function UneteModule() {
  return (
    <section className="bg-sport-card rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 mb-6 sm:mb-8 shadow-elegant">
      <h2 className="text-2xl sm:text-3xl font-bold text-sport-text mb-4 sm:mb-6">Únete al Ecosistema</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
        <div className="p-4 sm:p-6 border border-sport-border rounded-xl sm:rounded-2xl">
          <div className="flex items-center gap-3 mb-2 sm:mb-3">
            <Handshake className="w-4 h-4 sm:w-5 sm:h-5 text-sport-accent" />
            <h6 className="font-bold text-sport-text text-sm sm:text-base">Servicios para Escuelas Deportivas</h6>
          </div>
          <p className="text-sport-text/70 text-xs sm:text-sm">Plataforma de gestión completa para automatizar reservas, pagos, membresías y comunicación con estudiantes.</p>
        </div>
        
        <div className="p-4 sm:p-6 border border-sport-border rounded-xl sm:rounded-2xl">
          <div className="flex items-center gap-3 mb-2 sm:mb-3">
            <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5 text-sport-accent" />
            <h6 className="font-bold text-sport-text text-sm sm:text-base">Escuelas/Aliados</h6>
          </div>
          <p className="text-sport-text/70 text-xs sm:text-sm">Onboarding en 48h, herramientas de agenda/cobros y visibilidad preferente.</p>
        </div>
        
        <div className="p-4 sm:p-6 border border-sport-border rounded-xl sm:rounded-2xl">
          <div className="flex items-center gap-3 mb-2 sm:mb-3">
            <Megaphone className="w-4 h-4 sm:w-5 sm:h-5 text-sport-accent" />
            <h6 className="font-bold text-sport-text text-sm sm:text-base">Marcas</h6>
          </div>
          <p className="text-sport-text/70 text-xs sm:text-sm">Catálogo con data de intención, activaciones y bundles por deporte/edad.</p>
        </div>
      </div>
    </section>
  );
}