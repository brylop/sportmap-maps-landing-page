import { Search, Calendar, Shield } from "lucide-react";

export function EscuelasModule() {
  return (
    <section className="bg-sport-card rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 mb-6 sm:mb-8 shadow-elegant">
      <h2 className="text-2xl sm:text-3xl font-bold text-sport-text mb-3 sm:mb-4">Marketplace de Escuelas</h2>
      <p className="text-sm sm:text-base text-sport-text/80 mb-4 sm:mb-6">
        Implementación: fichas verificadas, agenda por franjas, cobro por reserva (8–15%), wallet para escuelas, y KYC básico. KPIs: tasa de conversión a reserva, ocupación por franja, NPS.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
        <div className="p-4 sm:p-6 border border-sport-border rounded-xl sm:rounded-2xl">
          <div className="flex items-center gap-3 mb-2 sm:mb-3">
            <Search className="w-4 h-4 sm:w-5 sm:h-5 text-sport-primary" />
            <h6 className="font-bold text-sport-text text-sm sm:text-base">Búsqueda/Match</h6>
          </div>
          <p className="text-sport-text/70 text-xs sm:text-sm">Filtro por ciudad/edad/nivel; ranking con reputación, cercanía y precio.</p>
        </div>
        
        <div className="p-4 sm:p-6 border border-sport-border rounded-xl sm:rounded-2xl">
          <div className="flex items-center gap-3 mb-2 sm:mb-3">
            <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-sport-primary" />
            <h6 className="font-bold text-sport-text text-sm sm:text-base">Reservas & Pagos</h6>
          </div>
          <p className="text-sport-text/70 text-xs sm:text-sm">Calendario con cupos; pago anticipado; reembolsos y políticas.</p>
        </div>
        
        <div className="p-4 sm:p-6 border border-sport-border rounded-xl sm:rounded-2xl">
          <div className="flex items-center gap-3 mb-2 sm:mb-3">
            <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-sport-primary" />
            <h6 className="font-bold text-sport-text text-sm sm:text-base">Verificación</h6>
          </div>
          <p className="text-sport-text/70 text-xs sm:text-sm">Documentos/seguros; control de credenciales y reseñas auditadas.</p>
        </div>
      </div>
    </section>
  );
}