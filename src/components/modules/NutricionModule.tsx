import { RotateCcw, UserCheck } from "lucide-react";

export function NutricionModule() {
  return (
    <section className="bg-sport-card rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 mb-6 sm:mb-8 shadow-elegant">
      <h2 className="text-2xl sm:text-3xl font-bold text-sport-text mb-3 sm:mb-4">Nutrición & Suplementos</h2>
      <p className="text-sm sm:text-base text-sport-text/80 mb-4 sm:mb-6">
        Tienda especializada con suscripción mensual ("Plan Base", "Rendimiento", "Recuperación"). Registro sanitario verificado y contenido educativo por edad y disciplina.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        <div className="p-4 sm:p-6 border border-sport-border rounded-xl sm:rounded-2xl">
          <div className="flex items-center gap-3 mb-2 sm:mb-3">
            <RotateCcw className="w-4 h-4 sm:w-5 sm:h-5 text-sport-nutrition" />
            <h6 className="font-bold text-sport-text text-sm sm:text-base">Suscripciones</h6>
          </div>
          <p className="text-sport-text/70 text-xs sm:text-sm">Entrega automática cada 30 días; pausar/cambiar en 1 clic; descuentos por fidelidad.</p>
        </div>
        
        <div className="p-4 sm:p-6 border border-sport-border rounded-xl sm:rounded-2xl">
          <div className="flex items-center gap-3 mb-2 sm:mb-3">
            <UserCheck className="w-4 h-4 sm:w-5 sm:h-5 text-sport-nutrition" />
            <h6 className="font-bold text-sport-text text-sm sm:text-base">Asesoría</h6>
          </div>
          <p className="text-sport-text/70 text-xs sm:text-sm">Chat con nutricionistas, planes personalizados y contraindicaciones visibles.</p>
        </div>
      </div>
    </section>
  );
}