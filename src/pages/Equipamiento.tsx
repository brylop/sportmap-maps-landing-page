import { ArrowLeft, ShoppingCart, Truck, Shield, Star, Filter, Search, Package, Award, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TechBackground } from "@/components/TechBackground";
import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { SEOFooter } from "@/components/SEOFooter";

export default function Equipamiento() {
  return (
    <div className="min-h-screen bg-sport-background text-sport-text-primary">
      <SEO 
        title="Equipamiento Deportivo - Tienda Online"
        description="Encuentra el mejor equipamiento deportivo con entrega express. Productos originales de marcas reconocidas para fútbol, baloncesto, tenis, natación y más."
        url="https://sportmaps.co/equipamiento"
        canonical="https://sportmaps.co/equipamiento"
        keywords="equipamiento deportivo Colombia, tienda deportiva, productos deportivos, marcas deportivas, fútbol, baloncesto, tenis"
      />
      <TechBackground />
      
      {/* Header */}
      <header className="relative z-10 border-b border-sport-border bg-sport-surface/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center gap-4">
          <Link to="/">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="w-5 h-5" />
            </Button>
          </Link>
          <div>
            <h1 className="text-2xl font-bold text-sport-primary">Equipamiento Deportivo</h1>
            <p className="text-sm text-sport-text-secondary">Todo lo que necesitas para tu práctica deportiva</p>
          </div>
        </div>
      </header>

      <main className="relative z-10 container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-sport-primary to-sport-accent bg-clip-text text-transparent">
            Equipamiento de calidad profesional
          </h2>
          <p className="text-xl text-sport-text-secondary max-w-3xl mx-auto mb-8">
            Encuentra el mejor equipamiento deportivo con entrega express, garantía total y precios competitivos
          </p>
          
          {/* Search Section */}
          <div className="max-w-2xl mx-auto flex gap-4 mb-8">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-sport-text-muted" />
              <Input 
                className="pl-10" 
                placeholder="Buscar productos, marcas o categorías..."
              />
            </div>
            <Button variant="outline">
              <Filter className="w-4 h-4 mr-2" />
              Filtros
            </Button>
            <Button variant="secondary">
              <ShoppingCart className="w-4 h-4 mr-2" />
              Carrito (0)
            </Button>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border-sport-border bg-sport-card text-center">
              <CardContent className="pt-6">
                <Truck className="w-8 h-8 text-sport-primary mx-auto mb-4" />
                <h3 className="font-bold mb-2">Entrega Express</h3>
                <p className="text-sm text-sport-text-secondary">Recibe tu pedido en 24-48h con seguimiento en tiempo real</p>
              </CardContent>
            </Card>
            
            <Card className="border-sport-border bg-sport-card text-center">
              <CardContent className="pt-6">
                <Shield className="w-8 h-8 text-sport-accent mx-auto mb-4" />
                <h3 className="font-bold mb-2">Garantía Total</h3>
                <p className="text-sm text-sport-text-secondary">30 días para cambios y devoluciones sin preguntas</p>
              </CardContent>
            </Card>
            
            <Card className="border-sport-border bg-sport-card text-center">
              <CardContent className="pt-6">
                <Award className="w-8 h-8 text-sport-highlight mx-auto mb-4" />
                <h3 className="font-bold mb-2">Marcas Oficiales</h3>
                <p className="text-sm text-sport-text-secondary">Solo productos originales de marcas reconocidas mundialmente</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Categories */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold mb-6">Categorías destacadas</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              { name: "Fútbol", icon: "⚽", count: "2,500+" },
              { name: "Baloncesto", icon: "🏀", count: "1,800+" },
              { name: "Tenis", icon: "🎾", count: "1,200+" },
              { name: "Natación", icon: "🏊", count: "900+" },
              { name: "Running", icon: "🏃", count: "3,200+" },
              { name: "Gimnasios", icon: "💪", count: "2,100+" }
            ].map((category, index) => (
              <Card key={index} className="border-sport-border bg-sport-card hover:shadow-hover transition-all duration-300 cursor-pointer text-center">
                <CardContent className="pt-4">
                  <div className="text-3xl mb-2">{category.icon}</div>
                  <h4 className="font-semibold text-sm mb-1">{category.name}</h4>
                  <p className="text-xs text-sport-text-secondary">{category.count} productos</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Featured Products */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold mb-6">Productos destacados</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                name: "Nike Air Zoom Mercurial",
                category: "Fútbol",
                price: "$450.000",
                originalPrice: "$520.000",
                rating: 4.8,
                reviews: 124,
                image: "👟",
                badge: "Oferta"
              },
              {
                name: "Adidas Tango Street Ball",
                category: "Fútbol",
                price: "$85.000",
                originalPrice: null,
                rating: 4.6,
                reviews: 89,
                image: "⚽",
                badge: "Nuevo"
              },
              {
                name: "Wilson Pro Staff Tennis",
                category: "Tenis",
                price: "$320.000",
                originalPrice: null,
                rating: 4.9,
                reviews: 156,
                image: "🎾",
                badge: "Best Seller"
              },
              {
                name: "Spalding NBA Basketball",
                category: "Baloncesto",
                price: "$95.000",
                originalPrice: "$110.000",
                rating: 4.7,
                reviews: 203,
                image: "🏀",
                badge: "Oferta"
              }
            ].map((product, index) => (
              <Card key={index} className="border-sport-border bg-sport-card hover:shadow-hover transition-all duration-300 cursor-pointer">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <div className="text-4xl">{product.image}</div>
                    <Badge variant={product.badge === "Oferta" ? "destructive" : "secondary"} className="text-xs">
                      {product.badge}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <Badge variant="outline" className="text-xs mb-2">{product.category}</Badge>
                  <h4 className="font-semibold mb-2 text-sm">{product.name}</h4>
                  <div className="flex items-center gap-1 mb-2">
                    <Star className="w-3 h-3 fill-current text-yellow-400" />
                    <span className="text-xs text-sport-text-secondary">{product.rating} ({product.reviews})</span>
                  </div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="font-bold text-sport-primary">{product.price}</span>
                    {product.originalPrice && (
                      <span className="text-xs text-sport-text-secondary line-through">{product.originalPrice}</span>
                    )}
                  </div>
                  <Button size="sm" className="w-full">
                    <ShoppingCart className="w-3 h-3 mr-1" />
                    Agregar al carrito
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Special Features */}
        <section className="mb-12">
          <h3 className="text-2xl font-bold mb-6">¿Por qué elegir SportMaps Store?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-sport-border bg-sport-card">
              <CardHeader>
                <Package className="w-8 h-8 text-sport-primary mb-2" />
                <CardTitle>Catálogo Premium</CardTitle>
                <CardDescription>
                  Más de 50,000 productos especializados por deporte con precios competitivos
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-sport-text-secondary">
                  <li>• Marcas oficiales verificadas</li>
                  <li>• Precios mayoristas</li>
                  <li>• Productos exclusivos</li>
                  <li>• Nuevos lanzamientos</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border-sport-border bg-sport-card">
              <CardHeader>
                <Clock className="w-8 h-8 text-sport-accent mb-2" />
                <CardTitle>Entrega Express</CardTitle>
                <CardDescription>
                  Entrega garantizada en 24-48h con seguimiento GPS en tiempo real
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-sport-text-secondary">
                  <li>• Seguimiento en tiempo real</li>
                  <li>• Cambios gratuitos</li>
                  <li>• Empaque especializado</li>
                  <li>• Entrega programada</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border-sport-border bg-sport-card">
              <CardHeader>
                <Star className="w-8 h-8 text-sport-highlight mb-2" />
                <CardTitle>IA Personalizada</CardTitle>
                <CardDescription>
                  Recomendaciones inteligentes basadas en tu deporte y nivel
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-sport-text-secondary">
                  <li>• Tallas precisas automáticas</li>
                  <li>• Kits completos sugeridos</li>
                  <li>• Ofertas personalizadas</li>
                  <li>• Comparación inteligente</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-sport-card rounded-3xl p-8 border border-sport-border">
          <h3 className="text-2xl font-bold mb-4">¿Necesitas ayuda para elegir?</h3>
          <p className="text-sport-text-secondary mb-6 max-w-2xl mx-auto">
            Nuestros expertos en equipamiento deportivo están aquí para ayudarte a encontrar lo que necesitas
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="default">
              Chat con un experto
            </Button>
            <Button size="lg" variant="outline">
              Ver guía de compras
            </Button>
          </div>
        </section>
      </main>
      <SEOFooter />
    </div>
  );
}