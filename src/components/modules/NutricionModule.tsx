import { Apple, RotateCcw, UserCheck, CheckCircle, BookOpen, Pill } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function NutricionModule() {
  return (
    <section className="bg-sport-card hover:shadow-hover transition-all duration-300 cursor-pointer border-l-4 border-l-green-500 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 mb-6 sm:mb-8 shadow-elegant">
      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 rounded-xl bg-green-500 flex items-center justify-center">
          <Apple className="w-6 h-6 text-white" />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-sport-text">Nutrición & Suplementos</h2>
            <Badge variant="secondary" className="bg-green-100 text-green-600 border-green-200">
              Certificado
            </Badge>
          </div>
          <p className="text-sm sm:text-base text-sport-text/80">
            Planes nutricionales personalizados y suplementos certificados. Suscripciones automáticas con asesoría profesional incluida.
          </p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-6">
        <div className="p-4 sm:p-6 border border-green-200 bg-green-50/30 rounded-xl sm:rounded-2xl hover:bg-green-50/50 transition-colors">
          <div className="flex items-center gap-3 mb-2 sm:mb-3">
            <RotateCcw className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" />
            <h6 className="font-bold text-sport-text text-sm sm:text-base">Planes Flexibles</h6>
          </div>
          <p className="text-sport-text/70 text-xs sm:text-sm mb-3">Suscripciones mensuales adaptables: Base, Rendimiento y Recuperación con entrega automática.</p>
          <div className="flex flex-wrap gap-2">
            <Badge variant="outline" className="text-xs border-green-300 text-green-600">30 días</Badge>
            <Badge variant="outline" className="text-xs border-green-300 text-green-600">Cancelación fácil</Badge>
          </div>
        </div>
        
        <div className="p-4 sm:p-6 border border-green-200 bg-green-50/30 rounded-xl sm:rounded-2xl hover:bg-green-50/50 transition-colors">
          <div className="flex items-center gap-3 mb-2 sm:mb-3">
            <UserCheck className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" />
            <h6 className="font-bold text-sport-text text-sm sm:text-base">Asesoría Experta</h6>
          </div>
          <p className="text-sport-text/70 text-xs sm:text-sm mb-3">Nutricionistas certificados disponibles 24/7 para chat personalizado y planes únicos.</p>
          <div className="flex flex-wrap gap-2">
            <Badge variant="outline" className="text-xs border-green-300 text-green-600">Chat 24/7</Badge>
            <Badge variant="outline" className="text-xs border-green-300 text-green-600">Planes únicos</Badge>
          </div>
        </div>

        <div className="p-4 sm:p-6 border border-green-200 bg-green-50/30 rounded-xl sm:rounded-2xl hover:bg-green-50/50 transition-colors">
          <div className="flex items-center gap-3 mb-2 sm:mb-3">
            <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" />
            <h6 className="font-bold text-sport-text text-sm sm:text-base">Calidad Certificada</h6>
          </div>
          <p className="text-sport-text/70 text-xs sm:text-sm mb-3">Todos los productos cuentan con registro INVIMA y certificación internacional.</p>
          <div className="flex flex-wrap gap-2">
            <Badge variant="outline" className="text-xs border-green-300 text-green-600">INVIMA</Badge>
            <Badge variant="outline" className="text-xs border-green-300 text-green-600">ISO Certified</Badge>
          </div>
        </div>
      </div>

      <div className="bg-green-50/20 rounded-xl p-4 border border-green-200">
        <h3 className="font-semibold text-sport-text mb-3 flex items-center gap-2">
          <Pill className="w-4 h-4 text-green-500" />
          Beneficios incluidos:
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-sport-text/80">
          <div className="flex items-center gap-2">
            <BookOpen className="w-3 h-3 text-green-500" />
            Contenido educativo por disciplina
          </div>
          <div className="flex items-center gap-2">
            <UserCheck className="w-3 h-3 text-green-500" />
            Evaluación nutricional inicial
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-3 h-3 text-green-500" />
            Seguimiento de resultados
          </div>
          <div className="flex items-center gap-2">
            <RotateCcw className="w-3 h-3 text-green-500" />
            Ajustes automáticos del plan
          </div>
        </div>
      </div>
    </section>
  );
}