import { motion } from "framer-motion";
import { ShoppingBag, Package, Truck, Sparkles, Clock, ShoppingCart, Award, TrendingUp, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import ropaTechImg from "@/assets/tienda-ropa-tech.jpg";
import accesoriosImg from "@/assets/tienda-accesorios.jpg";
import ofertasExclusivas from "@/assets/tienda-ofertas-exclusivas.jpg";

export function TiendaModule() {
  const features = [
    { icon: Package, title: "Catálogo Premium", description: "Más de 50,000 productos especializados.", badges: ["Marcas oficiales", "Precios mayorista"], color: "accent", stats: "50K+ productos" },
    { icon: Truck, title: "Entrega Express", description: "Entrega garantizada en 24-48h.", badges: ["Seguimiento GPS", "Cambios gratis"], color: "primary", stats: "24-48h entrega" },
    { icon: Sparkles, title: "IA Personalizada", description: "Recomendaciones inteligentes.", badges: ["Tallas precisas", "Kits completos"], color: "accent", stats: "98% precisión" }
  ];

  const categories = [
    { icon: Award, name: "Equipamiento profesional", image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=400&h=300&fit=crop" },
    { icon: Clock, name: "Ropa deportiva tech", image: ropaTechImg },
    { icon: Package, name: "Accesorios", image: accesoriosImg },
    { icon: Sparkles, name: "Ofertas exclusivas", image: ofertasExclusivas }
  ];

  const stats = [
    { icon: ShoppingCart, value: "15K+", label: "Productos/Mes" },
    { icon: Star, value: "4.8", label: "Rating" },
    { icon: TrendingUp, value: "95%", label: "Satisfacción" }
  ];

  return (
    <section className="min-h-screen py-8 sm:py-12">
      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="card-premium p-8 sm:p-12 mb-8 relative overflow-hidden border-l-4 border-l-sport-accent">
        <div className="absolute top-0 right-0 w-72 h-72 bg-sport-accent/10 rounded-full -translate-y-36 translate-x-36" />
        <div className="relative z-10">
          <div className="flex items-center gap-4 mb-6">
            <motion.div className="w-16 h-16 rounded-2xl bg-sport-accent flex items-center justify-center glow-accent" whileHover={{ scale: 1.1 }}>
              <ShoppingBag className="w-8 h-8 text-white" />
            </motion.div>
            <div>
              <div className="flex items-center gap-3 mb-2">
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground">Tienda Deportiva</h2>
                <Badge className="bg-sport-accent text-white border-0">24-48h</Badge>
              </div>
              <p className="text-muted-foreground">E-commerce deportivo más completo de Colombia.</p>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {stats.map((stat) => (
              <div key={stat.label} className="glass-effect rounded-xl p-4 text-center">
                <stat.icon className="w-8 h-8 mx-auto mb-2 text-sport-accent" />
                <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                <div className="text-xs text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {features.map((feature, index) => (
          <motion.div key={feature.title} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.15 }} whileHover={{ y: -8 }} className="card-premium p-8">
            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-4 ${feature.color === 'accent' ? 'bg-sport-accent glow-accent' : 'bg-sport-primary glow-primary'}`}>
              <feature.icon className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">{feature.title}</h3>
            <div className="text-2xl font-bold text-sport-accent mb-2">{feature.stats}</div>
            <p className="text-muted-foreground text-sm mb-4">{feature.description}</p>
            <div className="flex flex-wrap gap-2">
              {feature.badges.map((badge) => (
                <Badge key={badge} variant="outline" className="border-sport-accent/40 text-sport-accent">{badge}</Badge>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="card-premium p-8">
        <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
          <ShoppingCart className="w-8 h-8 text-sport-accent" />
          Categorías Destacadas
        </h3>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <motion.div key={category.name} whileHover={{ y: -8, scale: 1.03 }} className="group relative overflow-hidden rounded-2xl cursor-pointer border border-white/10">
              <div className="aspect-[4/3] relative">
                <img src={category.image} alt={category.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <category.icon className="w-6 h-6 text-sport-accent mb-2" />
                  <p className="text-white font-semibold text-sm">{category.name}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Button size="lg" className="bg-sport-accent hover:bg-sport-accent/90 text-white px-8 rounded-full glow-accent">
            <ShoppingCart className="w-5 h-5 mr-2" />
            Explorar Tienda
          </Button>
        </div>
      </motion.div>
    </section>
  );
}