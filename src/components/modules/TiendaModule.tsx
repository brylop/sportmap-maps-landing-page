import { motion } from "framer-motion";
import { ShoppingBag, Package, Truck, Sparkles, Clock, ShoppingCart, Award, TrendingUp, Shield, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function TiendaModule() {
  const features = [
    {
      icon: Package,
      title: "Catálogo Premium",
      description: "Más de 50,000 productos especializados por deporte, marca y categoría con precios competitivos.",
      badges: ["Marcas oficiales", "Precios mayorista"],
      color: "sport-highlight",
      stats: "50K+ productos"
    },
    {
      icon: Truck,
      title: "Entrega Express",
      description: "Entrega garantizada en 24-48h con seguimiento en tiempo real y devoluciones gratuitas.",
      badges: ["Seguimiento GPS", "Cambios gratis"],
      color: "sport-primary",
      stats: "24-48h entrega"
    },
    {
      icon: Sparkles,
      title: "IA Personalizada",
      description: "Recomendaciones inteligentes basadas en tu deporte, nivel y historial de compras.",
      badges: ["Tallas precisas", "Kits completos"],
      color: "sport-accent",
      stats: "98% precisión"
    }
  ];

  const categories = [
    { icon: Award, name: "Equipamiento profesional certificado", image: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=400&h=300&fit=crop" },
    { icon: Clock, name: "Ropa deportiva de alta tecnología", image: "https://images.unsplash.com/photo-1556906781-9cba4a6ea6e0?w=400&h=300&fit=crop" },
    { icon: Package, name: "Accesorios y complementos", image: "https://images.unsplash.com/photo-1523380744952-b5643e5b7ec6?w=400&h=300&fit=crop" },
    { icon: Sparkles, name: "Ofertas exclusivas para miembros", image: "https://images.unsplash.com/photo-1524505089958-c6c4f8e03927?w=400&h=300&fit=crop" }
  ];

  const stats = [
    { icon: ShoppingCart, value: "15K+", label: "Productos Vendidos/Mes" },
    { icon: Star, value: "4.8", label: "Rating Promedio" },
    { icon: TrendingUp, value: "95%", label: "Satisfacción Cliente" }
  ];

  return (
    <section className="min-h-screen py-8 sm:py-12">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-sport-card rounded-3xl p-8 sm:p-12 mb-8 shadow-elegant relative overflow-hidden border-l-4 border-l-sport-highlight"
      >
        <div className="absolute top-0 right-0 w-72 h-72 bg-sport-highlight/10 rounded-full -translate-y-36 translate-x-36" />
        <div className="absolute bottom-0 left-0 w-56 h-56 bg-sport-primary/10 rounded-full translate-y-28 -translate-x-28" />
        
        <div className="relative z-10">
          <div className="flex items-center gap-4 mb-6">
            <motion.div 
              className="w-16 h-16 rounded-2xl bg-gradient-to-br from-sport-highlight to-sport-highlight/70 flex items-center justify-center shadow-glow-primary"
              whileHover={{ scale: 1.1, rotate: 10 }}
            >
              <ShoppingBag className="w-8 h-8 text-white" />
            </motion.div>
            <div>
              <div className="flex items-center gap-3 mb-2">
                <h2 className="text-3xl sm:text-4xl font-bold text-sport-text">Tienda Deportiva</h2>
                <Badge className="bg-sport-highlight text-white">24-48h</Badge>
              </div>
              <p className="text-base sm:text-lg text-sport-text/80">
                El e-commerce deportivo más completo de Colombia. Equipamiento profesional, ropa deportiva y accesorios con entrega express y garantía total.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-sport-background/60 backdrop-blur-sm rounded-xl p-4 text-center"
              >
                <stat.icon className="w-8 h-8 mx-auto mb-2 text-sport-highlight" />
                <div className="text-2xl font-bold text-sport-text">{stat.value}</div>
                <div className="text-xs text-sport-text/70">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="bg-sport-card rounded-3xl p-8 shadow-elegant hover:shadow-hover transition-all duration-300"
          >
            <motion.div 
              className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-4`}
              style={{ background: `linear-gradient(135deg, hsl(var(--${feature.color})), hsl(var(--${feature.color})) 70%)` }}
              whileHover={{ scale: 1.1, rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <feature.icon className="w-8 h-8 text-white" />
            </motion.div>

            <div className="mb-3">
              <h3 className="text-xl font-bold text-sport-text mb-2">{feature.title}</h3>
              <div className="text-2xl font-bold text-sport-highlight mb-2">{feature.stats}</div>
            </div>

            <p className="text-sport-text/70 text-sm mb-4 leading-relaxed">{feature.description}</p>

            <div className="flex flex-wrap gap-2">
              {feature.badges.map((badge, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.5 + idx * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                >
                  <Badge variant="outline" className="border-sport-highlight/30 text-sport-highlight">
                    {badge}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Categories Grid */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-sport-card rounded-3xl p-8 shadow-elegant"
      >
        <h3 className="text-2xl sm:text-3xl font-bold text-sport-text mb-6 flex items-center gap-3">
          <ShoppingCart className="w-8 h-8 text-sport-highlight" />
          Categorías Destacadas
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.03 }}
              className="group relative overflow-hidden rounded-2xl cursor-pointer"
            >
              <div className="aspect-[4/3] relative">
                <img 
                  src={category.image} 
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <category.icon className="w-6 h-6 text-white mb-2" />
                  <p className="text-white font-semibold text-sm leading-tight">{category.name}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          whileHover={{ scale: 1.05 }}
        >
          <Button size="lg" className="bg-gradient-tech-primary text-white px-8 rounded-full hover:shadow-glow-primary">
            <ShoppingCart className="w-5 h-5 mr-2" />
            Explorar Tienda Completa
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
