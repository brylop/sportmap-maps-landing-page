import { Video, Activity, Lock } from "lucide-react";

export function BienestarModule() {
  return (
    <section className="bg-sport-card rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 mb-6 sm:mb-8 shadow-elegant">
      <h2 className="text-2xl sm:text-3xl font-bold text-sport-text mb-3 sm:mb-4">Bienestar & Salud</h2>
      <p className="text-sm sm:text-base text-sport-text/80 mb-4 sm:mb-6">
        Módulo de servicios profesionales: fisioterapia, psicología deportiva y entrenamiento online. Teleconsulta segura, historial y recomendaciones post-sesión.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
        <div className="p-4 sm:p-6 border border-sport-border rounded-xl sm:rounded-2xl">
          <div className="flex items-center gap-3 mb-2 sm:mb-3">
            <Video className="w-4 h-4 sm:w-5 sm:h-5 text-sport-wellness" />
            <h6 className="font-bold text-sport-text text-sm sm:text-base">Teleconsulta</h6>
          </div>
          <p className="text-sport-text/70 text-xs sm:text-sm">Video/WebRTC, notas clínicas básicas, seguimiento y ejercicios guiados.</p>
        </div>
        
        <div className="p-4 sm:p-6 border border-sport-border rounded-xl sm:rounded-2xl">
          <div className="flex items-center gap-3 mb-2 sm:mb-3">
            <Activity className="w-4 h-4 sm:w-5 sm:h-5 text-sport-wellness" />
            <h6 className="font-bold text-sport-text text-sm sm:text-base">Integraciones</h6>
          </div>
          <p className="text-sport-text/70 text-xs sm:text-sm">Wearables (pasos, sueño, FC) para planes y alertas personalizadas.</p>
        </div>
        
        <div className="p-4 sm:p-6 border border-sport-border rounded-xl sm:rounded-2xl">
          <div className="flex items-center gap-3 mb-2 sm:mb-3">
            <Lock className="w-4 h-4 sm:w-5 sm:h-5 text-sport-wellness" />
            <h6 className="font-bold text-sport-text text-sm sm:text-base">Privacidad</h6>
          </div>
          <p className="text-sport-text/70 text-xs sm:text-sm">Seguridad y consentimiento explícito; datos sensibles cifrados.</p>
        </div>
      </div>
    </section>
  );
}