import { ShoppingBag, Package, Truck, Sparkles, Clock, ShoppingCart, Award } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function TiendaModule() {
  return (
    <section className="bg-sport-card hover:shadow-hover transition-all duration-300 cursor-pointer border-l-4 border-l-purple-500 rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 mb-6 sm:mb-8 shadow-elegant">
      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 rounded-xl bg-purple-500 flex items-center justify-center">
          <ShoppingBag className="w-6 h-6 text-white" />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-sport-text">Tienda Deportiva</h2>
            <Badge variant="secondary" className="bg-purple-100 text-purple-600 border-purple-200">
              24-48h
            </Badge>
          </div>
          <p className="text-sm sm:text-base text-sport-text/80">
            El e-commerce deportivo más completo de Colombia. Equipamiento profesional, ropa deportiva y accesorios con entrega express y garantía total.
          </p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 mb-6">
        <div className="p-4 sm:p-6 border border-purple-200 bg-purple-50/30 rounded-xl sm:rounded-2xl hover:bg-purple-50/50 transition-colors">
          <div className="flex items-center gap-3 mb-2 sm:mb-3">
            <Package className="w-4 h-4 sm:w-5 sm:h-5 text-purple-500" />
            <h6 className="font-bold text-sport-text text-sm sm:text-base">Catálogo Premium</h6>
          </div>
          <p className="text-sport-text/70 text-xs sm:text-sm mb-3">Más de 50,000 productos especializados por deporte, marca y categoría con precios competitivos.</p>
          <div className="flex flex-wrap gap-2">
            <Badge variant="outline" className="text-xs border-purple-300 text-purple-600">Marcas oficiales</Badge>
            <Badge variant="outline" className="text-xs border-purple-300 text-purple-600">Precios mayorista</Badge>
          </div>
        </div>
        
        <div className="p-4 sm:p-6 border border-purple-200 bg-purple-50/30 rounded-xl sm:rounded-2xl hover:bg-purple-50/50 transition-colors">
          <div className="flex items-center gap-3 mb-2 sm:mb-3">
            <Truck className="w-4 h-4 sm:w-5 sm:h-5 text-purple-500" />
            <h6 className="font-bold text-sport-text text-sm sm:text-base">Entrega Express</h6>
          </div>
          <p className="text-sport-text/70 text-xs sm:text-sm mb-3">Entrega garantizada en 24-48h con seguimiento en tiempo real y devoluciones gratuitas.</p>
          <div className="flex flex-wrap gap-2">
            <Badge variant="outline" className="text-xs border-purple-300 text-purple-600">Seguimiento GPS</Badge>
            <Badge variant="outline" className="text-xs border-purple-300 text-purple-600">Cambios gratis</Badge>
          </div>
        </div>
        
        <div className="p-4 sm:p-6 border border-purple-200 bg-purple-50/30 rounded-xl sm:rounded-2xl hover:bg-purple-50/50 transition-colors">
          <div className="flex items-center gap-3 mb-2 sm:mb-3">
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-purple-500" />
            <h6 className="font-bold text-sport-text text-sm sm:text-base">IA Personalizada</h6>
          </div>
          <p className="text-sport-text/70 text-xs sm:text-sm mb-3">Recomendaciones inteligentes basadas en tu deporte, nivel y historial de compras.</p>
          <div className="flex flex-wrap gap-2">
            <Badge variant="outline" className="text-xs border-purple-300 text-purple-600">Tallas precisas</Badge>
            <Badge variant="outline" className="text-xs border-purple-300 text-purple-600">Kits completos</Badge>
          </div>
        </div>
      </div>

      <div className="bg-purple-50/20 rounded-xl p-4 border border-purple-200">
        <h3 className="font-semibold text-sport-text mb-3 flex items-center gap-2">
          <ShoppingCart className="w-4 h-4 text-purple-500" />
          Categorías destacadas:
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-sport-text/80">
          <div className="flex items-center gap-2">
            <Award className="w-3 h-3 text-purple-500" />
            Equipamiento profesional certificado
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-3 h-3 text-purple-500" />
            Ropa deportiva de alta tecnología
          </div>
          <div className="flex items-center gap-2">
            <Package className="w-3 h-3 text-purple-500" />
            Accesorios y complementos
          </div>
          <div className="flex items-center gap-2">
            <Sparkles className="w-3 h-3 text-purple-500" />
            Ofertas exclusivas para miembros
          </div>
        </div>
      </div>
    </section>
  );
}