import { GraduationCap, Search, Calendar, Shield, Star, MapPin, Users } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function EscuelasModule() {
  return (
    <section className="bg-sport-card hover:shadow-hover transition-all duration-300 cursor-pointer border-l-4 border-l-blue-500 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 mb-6 sm:mb-8 shadow-elegant">
      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 rounded-xl bg-blue-500 flex items-center justify-center">
          <GraduationCap className="w-6 h-6 text-white" />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-sport-text">Escuelas & Entrenadores</h2>
            <Badge variant="secondary" className="bg-blue-100 text-blue-600 border-blue-200">
              Verificados
            </Badge>
          </div>
          <p className="text-sm sm:text-base text-sport-text/80">
            Conecta con las mejores escuelas deportivas de Colombia. Búsqueda avanzada, reservas garantizadas y entrenadores certificados para impulsar tu potencial.
          </p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-6">
        <div className="p-4 sm:p-6 border border-blue-200 bg-blue-50/30 rounded-xl sm:rounded-2xl hover:bg-blue-50/50 transition-colors">
          <div className="flex items-center gap-3 mb-2 sm:mb-3">
            <Search className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500" />
            <h6 className="font-bold text-sport-text text-sm sm:text-base">Búsqueda Inteligente</h6>
          </div>
          <p className="text-sport-text/70 text-xs sm:text-sm mb-3">Encuentra la escuela perfecta con filtros por ubicación, disciplina, nivel y presupuesto.</p>
          <div className="flex flex-wrap gap-2">
            <Badge variant="outline" className="text-xs border-blue-300 text-blue-600">Geolocalización</Badge>
            <Badge variant="outline" className="text-xs border-blue-300 text-blue-600">Comparar precios</Badge>
          </div>
        </div>
        
        <div className="p-4 sm:p-6 border border-blue-200 bg-blue-50/30 rounded-xl sm:rounded-2xl hover:bg-blue-50/50 transition-colors">
          <div className="flex items-center gap-3 mb-2 sm:mb-3">
            <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500" />
            <h6 className="font-bold text-sport-text text-sm sm:text-base">Reservas Seguras</h6>
          </div>
          <p className="text-sport-text/70 text-xs sm:text-sm mb-3">Sistema de reservas en tiempo real con pago protegido y cancelación flexible.</p>
          <div className="flex flex-wrap gap-2">
            <Badge variant="outline" className="text-xs border-blue-300 text-blue-600">Pago seguro</Badge>
            <Badge variant="outline" className="text-xs border-blue-300 text-blue-600">Reembolso</Badge>
          </div>
        </div>
        
        <div className="p-4 sm:p-6 border border-blue-200 bg-blue-50/30 rounded-xl sm:rounded-2xl hover:bg-blue-50/50 transition-colors">
          <div className="flex items-center gap-3 mb-2 sm:mb-3">
            <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500" />
            <h6 className="font-bold text-sport-text text-sm sm:text-base">Calidad Garantizada</h6>
          </div>
          <p className="text-sport-text/70 text-xs sm:text-sm mb-3">Todas las escuelas están verificadas con documentación completa y seguros vigentes.</p>
          <div className="flex flex-wrap gap-2">
            <Badge variant="outline" className="text-xs border-blue-300 text-blue-600">Certificados</Badge>
            <Badge variant="outline" className="text-xs border-blue-300 text-blue-600">Seguros</Badge>
          </div>
        </div>
      </div>

      <div className="bg-blue-50/20 rounded-xl p-4 border border-blue-200">
        <h3 className="font-semibold text-sport-text mb-3 flex items-center gap-2">
          <Users className="w-4 h-4 text-blue-500" />
          Lo que incluye:
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-sport-text/80">
          <div className="flex items-center gap-2">
            <Star className="w-3 h-3 text-blue-500" />
            Reseñas verificadas de estudiantes
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-3 h-3 text-blue-500" />
            Ubicaciones georeferenciadas
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-3 h-3 text-blue-500" />
            Horarios flexibles y personalizados
          </div>
          <div className="flex items-center gap-2">
            <Shield className="w-3 h-3 text-blue-500" />
            Garantía de satisfacción 100%
          </div>
        </div>
      </div>
    </section>
  );
}