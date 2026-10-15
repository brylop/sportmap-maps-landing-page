import { postImage } from "@/lib/blog-images";
import { useState } from "react";
import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { TechHeader } from "@/components/TechHeader";
import { SportMapsFooter } from "@/components/SportMapsFooter";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, ArrowRight, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import { blogPosts, type BlogCategory } from "@/lib/blog-posts";

const CATEGORIES: ("Todos" | BlogCategory)[] = [
  "Todos",
  "Cobros y pagos",
  "WhatsApp IA",
  "Por deporte",
  "Por ciudad",
  "Para familias",
  "Casos de éxito",
  "Producto",
  "Comparativas",
  "Tecnología",
  "Guías",
  "Organización",
  "Análisis",
];

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState<"Todos" | BlogCategory>(
    "Todos"
  );

  // Ordenar por fecha descendente
  const sorted = [...blogPosts].sort((a, b) =>
    b.isoDate.localeCompare(a.isoDate)
  );

  const filtered =
    activeCategory === "Todos"
      ? sorted
      : sorted.filter((p) => p.category === activeCategory);

  const [featured, ...rest] = filtered;

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Blog: guías para escuelas deportivas, entrenadores y familias"
        description="Artículos, guías y tendencias sobre tecnología deportiva, gestión de academias, entrenamiento y digitalización del deporte en Latinoamérica."
        keywords="blog deportivo, tecnología deportiva, gestión academias deportivas, digitalización deporte, tendencias deporte"
        url="https://sportmaps.co/blog"
        canonical="https://sportmaps.co/blog"
      />
      <TechHeader onSectionClick={() => {}} activeSection="blog" />

      <main className="pt-24 pb-16">
        {/* Hero */}
        <section className="container mx-auto px-4 text-center mb-12">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Blog <span className="text-sport-primary">SportMaps</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
          >
            Casos reales, comparativas honestas y la opinión sin filtro del
            equipo sobre cómo se digitaliza el deporte en Latam.
          </motion.p>
        </section>

        {/* Category filter */}
        <section className="container mx-auto px-4 mb-10">
          <div className="flex flex-wrap justify-center gap-2">
            {CATEGORIES.map((cat) => (
              <Button
                key={cat}
                variant={activeCategory === cat ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveCategory(cat)}
                className={
                  activeCategory === cat
                    ? "bg-sport-primary hover:bg-sport-primary/90"
                    : ""
                }
              >
                {cat}
              </Button>
            ))}
          </div>
        </section>

        {/* Featured post */}
        {featured && (
          <section className="container mx-auto px-4 mb-12">
            <Link to={`/blog/${featured.slug}`} className="group block">
              <Card className="overflow-hidden hover:border-sport-primary/40 transition-all duration-300 hover:-translate-y-1">
                <div className="grid md:grid-cols-2">
                  <div className={`aspect-[16/9] md:aspect-auto md:min-h-[280px] bg-gradient-to-br ${featured.heroGradient} overflow-hidden`}>
                    <img
                      src={postImage(featured, 1000)}
                      alt=""
                      loading="eager"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <CardContent className="p-8 md:p-10 flex flex-col justify-center">
                    <Badge className="mb-3 w-fit bg-sport-primary/10 text-sport-primary border-sport-primary/30">
                      {featured.category}
                    </Badge>
                    <h2 className="text-2xl md:text-3xl font-bold mb-3 group-hover:text-sport-primary transition-colors">
                      {featured.title}
                    </h2>
                    <p className="text-muted-foreground mb-4 line-clamp-3">
                      {featured.excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-5">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        {featured.date}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5" />
                        {featured.readTime}
                      </span>
                    </div>
                    <span className="inline-flex items-center gap-2 text-sport-primary font-semibold group-hover:gap-3 transition-all">
                      Leer artículo
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </CardContent>
                </div>
              </Card>
            </Link>
          </section>
        )}

        {/* Grid */}
        <section className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {rest.map((post, idx) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
              >
                <Link to={`/blog/${post.slug}`} className="group block h-full">
                  <Card className="h-full overflow-hidden hover:border-sport-primary/40 transition-all duration-300 hover:-translate-y-1 flex flex-col">
                    <div className={`aspect-[16/9] bg-gradient-to-br ${post.heroGradient} overflow-hidden shrink-0`}>
                      <img
                        src={postImage(post, 640)}
                        alt=""
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <CardContent className="p-6 flex-1 flex flex-col">
                      <Badge variant="outline" className="mb-3 w-fit text-xs">
                        {post.category}
                      </Badge>
                      <h3 className="text-lg font-bold mb-2 group-hover:text-sport-primary transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-3 flex-1">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <span>{post.date}</span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {post.readTime}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-muted-foreground py-12">
              No hay posts en esta categoría todavía.
            </p>
          )}
        </section>
      </main>

      <SportMapsFooter />
      <WhatsAppButton />
    </div>
  );
};

export default Blog;
