import { Package, Truck, Sparkles } from "lucide-react";

export function TiendaModule() {
  return (
    <section className="bg-sport-card rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 mb-6 sm:mb-8 shadow-elegant">
      <h2 className="text-2xl sm:text-3xl font-bold text-sport-text mb-3 sm:mb-4">Tienda (E-commerce Deportivo)</h2>
      <p className="text-sm sm:text-base text-sport-text/80 mb-4 sm:mb-6">
        Catálogo curado por deporte; integraciones con proveedores (dropship/stock mixto); promociones basadas en calendario de torneos; checkout compartido con reservas.
      </p>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
        <div className="p-4 sm:p-6 border border-sport-border rounded-xl sm:rounded-2xl">
          <div className="flex items-center gap-3 mb-2 sm:mb-3">
            <Package className="w-4 h-4 sm:w-5 sm:h-5 text-sport-primary" />
            <h6 className="font-bold text-sport-text text-sm sm:text-base">Catálogo</h6>
          </div>
          <p className="text-sport-text/70 text-xs sm:text-sm">Ropa, equipamiento, accesorios. Variantes por talla/edad. Bundles por disciplina.</p>
        </div>
        
        <div className="p-4 sm:p-6 border border-sport-border rounded-xl sm:rounded-2xl">
          <div className="flex items-center gap-3 mb-2 sm:mb-3">
            <Truck className="w-4 h-4 sm:w-5 sm:h-5 text-sport-primary" />
            <h6 className="font-bold text-sport-text text-sm sm:text-base">Fulfillment</h6>
          </div>
          <p className="text-sport-text/70 text-xs sm:text-sm">SLA 24–48h, seguimiento, devoluciones 30 días. Facturación unificada.</p>
        </div>
        
        <div className="p-4 sm:p-6 border border-sport-border rounded-xl sm:rounded-2xl">
          <div className="flex items-center gap-3 mb-2 sm:mb-3">
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-sport-primary" />
            <h6 className="font-bold text-sport-text text-sm sm:text-base">Recomendaciones</h6>
          </div>
          <p className="text-sport-text/70 text-xs sm:text-sm">IA sugiere tallas y kits según edad, deporte y reservas recientes.</p>
        </div>
      </div>
    </section>
  );
}