import { Heart, Video, Activity, Lock, Calendar, Brain, Monitor } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function BienestarModule() {
  return (
    <section className="bg-sport-card hover:shadow-hover transition-all duration-300 cursor-pointer border-l-4 border-l-red-500 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 mb-6 sm:mb-8 shadow-elegant">
      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 rounded-xl bg-red-500 flex items-center justify-center">
          <Heart className="w-6 h-6 text-white" />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-sport-text">Bienestar & Salud</h2>
            <Badge variant="secondary" className="bg-red-100 text-red-600 border-red-200">
              Teleconsulta
            </Badge>
          </div>
          <p className="text-sm sm:text-base text-sport-text/80">
            Cuidado integral del deportista con profesionales certificados. Fisioterapia, psicología deportiva y monitoreo 24/7 para máximo rendimiento.
          </p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-6">
        <div className="p-4 sm:p-6 border border-red-200 bg-red-50/30 rounded-xl sm:rounded-2xl hover:bg-red-50/50 transition-colors">
          <div className="flex items-center gap-3 mb-2 sm:mb-3">
            <Video className="w-4 h-4 sm:w-5 sm:h-5 text-red-500" />
            <h6 className="font-bold text-sport-text text-sm sm:text-base">Consulta Virtual</h6>
          </div>
          <p className="text-sport-text/70 text-xs sm:text-sm mb-3">Conexión directa con especialistas certificados desde casa con videollamada HD y historial médico.</p>
          <div className="flex flex-wrap gap-2">
            <Badge variant="outline" className="text-xs border-red-300 text-red-600">HD Video</Badge>
            <Badge variant="outline" className="text-xs border-red-300 text-red-600">Historial</Badge>
          </div>
        </div>
        
        <div className="p-4 sm:p-6 border border-red-200 bg-red-50/30 rounded-xl sm:rounded-2xl hover:bg-red-50/50 transition-colors">
          <div className="flex items-center gap-3 mb-2 sm:mb-3">
            <Activity className="w-4 h-4 sm:w-5 sm:h-5 text-red-500" />
            <h6 className="font-bold text-sport-text text-sm sm:text-base">Monitoreo Inteligente</h6>
          </div>
          <p className="text-sport-text/70 text-xs sm:text-sm mb-3">Integración con dispositivos wearables para seguimiento de métricas vitales y prevención de lesiones.</p>
          <div className="flex flex-wrap gap-2">
            <Badge variant="outline" className="text-xs border-red-300 text-red-600">Wearables</Badge>
            <Badge variant="outline" className="text-xs border-red-300 text-red-600">Alertas IA</Badge>
          </div>
        </div>
        
        <div className="p-4 sm:p-6 border border-red-200 bg-red-50/30 rounded-xl sm:rounded-2xl hover:bg-red-50/50 transition-colors">
          <div className="flex items-center gap-3 mb-2 sm:mb-3">
            <Lock className="w-4 h-4 sm:w-5 sm:h-5 text-red-500" />
            <h6 className="font-bold text-sport-text text-sm sm:text-base">Máxima Seguridad</h6>
          </div>
          <p className="text-sport-text/70 text-xs sm:text-sm mb-3">Protección total de datos médicos con encriptación avanzada y cumplimiento normativo.</p>
          <div className="flex flex-wrap gap-2">
            <Badge variant="outline" className="text-xs border-red-300 text-red-600">Encriptado</Badge>
            <Badge variant="outline" className="text-xs border-red-300 text-red-600">HIPAA</Badge>
          </div>
        </div>
      </div>

      <div className="bg-red-50/20 rounded-xl p-4 border border-red-200">
        <h3 className="font-semibold text-sport-text mb-3 flex items-center gap-2">
          <Monitor className="w-4 h-4 text-red-500" />
          Servicios especializados:
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-sport-text/80">
          <div className="flex items-center gap-2">
            <Heart className="w-3 h-3 text-red-500" />
            Fisioterapia deportiva especializada
          </div>
          <div className="flex items-center gap-2">
            <Brain className="w-3 h-3 text-red-500" />
            Psicología del rendimiento deportivo
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-3 h-3 text-red-500" />
            Planes de recuperación personalizados
          </div>
          <div className="flex items-center gap-2">
            <Activity className="w-3 h-3 text-red-500" />
            Análisis biomecánico avanzado
          </div>
        </div>
      </div>
    </section>
  );
}