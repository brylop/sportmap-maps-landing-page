import { SEO } from "@/components/SEO";
import { TechHeader } from "@/components/TechHeader";
import { SportMapsFooter } from "@/components/SportMapsFooter";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Clock, ArrowRight, Bookmark, TrendingUp,
  Cpu, Users, Trophy
} from "lucide-react";
import { motion } from "framer-motion";

const Blog = () => {
  const featuredPost = {
    title: "El Futuro de la Tecnología Deportiva en Latinoamérica",
    excerpt: "Exploramos las tendencias que están transformando la industria del deporte y cómo las organizaciones pueden prepararse para el cambio.",
    category: "Tendencias",
    readTime: "8 min",
    date: "28 Dic 2025",
    image: "bg-gradient-to-br from-sport-primary to-sport-accent"
  };

  const posts = [
    {
      title: "5 Claves para Digitalizar tu Escuela Deportiva",
      excerpt: "Guía práctica para implementar tecnología en tu academia y mejorar la experiencia de estudiantes y padres.",
      category: "Guías",
      readTime: "5 min",
      date: "25 Dic 2025",
      icon: Users
    },
    {
      title: "Cómo la IA está Revolucionando el Entrenamiento",
      excerpt: "Descubre cómo la inteligencia artificial puede optimizar planes de entrenamiento y análisis de rendimiento.",
      category: "Tecnología",
      readTime: "6 min",
      date: "22 Dic 2025",
      icon: Cpu
    },
    {
      title: "Gestión de Torneos: Mejores Prácticas",
      excerpt: "Todo lo que necesitas saber para organizar competencias exitosas con herramientas digitales.",
      category: "Organización",
      readTime: "7 min",
      date: "18 Dic 2025",
      icon: Trophy
    },
    {
      title: "Métricas Clave para Medir el Éxito de tu Academia",
      excerpt: "Los indicadores más importantes que todo director deportivo debe monitorear.",
      category: "Análisis",
      readTime: "4 min",
      date: "15 Dic 2025",
      icon: TrendingUp
    }
  ];

  const categories = [
    "Todos",
    "Tendencias",
    "Guías",
    "Tecnología",
    "Organización",
    "Análisis"
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Blog de Tecnología Deportiva | SportMaps"
        description="Artículos, guías y tendencias sobre tecnología deportiva, gestión de academias, entrenamiento y digitalización del deporte en Latinoamérica."
        keywords="blog deportivo, tecnología deportiva, gestión academias deportivas, digitalización deporte, tendencias deporte"
      />
      <TechHeader onSectionClick={() => {}} activeSection="" />
      
      {/* Hero Section */}
      <section className="pt-32 pb-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-sport-primary/5 via-transparent to-sport-accent/5" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Blog de <span className="text-sport-primary">Tecnología</span> Deportiva
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Insights, guías y tendencias para transformar tu organización deportiva.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category, index) => (
              <Button
                key={category}
                variant={index === 0 ? "default" : "outline"}
                size="sm"
                className={index === 0 ? "bg-sport-primary hover:bg-sport-primary/90" : ""}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className="overflow-hidden bg-card/50 backdrop-blur border-border/50">
              <CardContent className="p-0">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className={`${featuredPost.image} aspect-video lg:aspect-auto min-h-[300px] flex items-center justify-center`}>
                    <div className="text-center text-white p-8">
                      <Bookmark className="w-16 h-16 mx-auto mb-4 opacity-50" />
                      <span className="text-sm font-medium">Artículo Destacado</span>
                    </div>
                  </div>
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="flex items-center gap-4 mb-4">
                      <Badge variant="secondary" className="bg-sport-primary/10 text-sport-primary">
                        {featuredPost.category}
                      </Badge>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="w-4 h-4" />
                        {featuredPost.readTime}
                      </div>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">{featuredPost.title}</h2>
                    <p className="text-muted-foreground mb-6">{featuredPost.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">{featuredPost.date}</span>
                      <Button className="bg-sport-primary hover:bg-sport-primary/90">
                        Leer Artículo
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Últimos Artículos</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {posts.map((post, index) => (
              <motion.div
                key={post.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full bg-card/50 backdrop-blur border-border/50 hover:border-sport-primary/50 transition-colors cursor-pointer group">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-sport-primary/10 flex items-center justify-center shrink-0 group-hover:bg-sport-primary/20 transition-colors">
                        <post.icon className="w-6 h-6 text-sport-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <Badge variant="secondary" className="text-xs">
                            {post.category}
                          </Badge>
                          <div className="flex items-center gap-1 text-xs text-muted-foreground">
                            <Clock className="w-3 h-3" />
                            {post.readTime}
                          </div>
                        </div>
                        <h3 className="text-lg font-semibold mb-2 group-hover:text-sport-primary transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mb-3">{post.excerpt}</p>
                        <span className="text-xs text-muted-foreground">{post.date}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Ver Todos los Artículos
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-gradient-to-r from-sport-primary/10 to-sport-accent/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Mantente Actualizado
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Suscríbete a nuestro newsletter y recibe las últimas novedades en tecnología deportiva.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="tu@email.com"
              className="flex-1 px-4 py-3 rounded-lg bg-background border border-border focus:border-sport-primary focus:outline-none"
            />
            <Button className="bg-sport-primary hover:bg-sport-primary/90">
              Suscribirse
            </Button>
          </div>
        </div>
      </section>

      <SportMapsFooter />
      <WhatsAppButton />
    </div>
  );
};

export default Blog;
