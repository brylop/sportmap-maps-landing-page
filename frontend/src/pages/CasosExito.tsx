import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { TechHeader } from "@/components/TechHeader";
import { SportMapsFooter } from "@/components/SportMapsFooter";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  TrendingUp, Users, Trophy,
  ArrowRight, Building2, School
} from "lucide-react";
import { motion } from "framer-motion";

const CORTE = "Fuente: datos de la plataforma SportMaps, corte 14 oct 2026.";

const CasosExito = () => {
  // Casos REALES. Cifras de la base de producción al 14 oct 2026; los clientes
  // autorizaron ser nombrados. No agregar cifras ni citas que no estén en la base.
  const cases = [
    {
      icon: Trophy,
      category: "Club de voleibol",
      name: "Dynasty Volley Club",
      location: "Bogotá, Colombia · en SportMaps desde el 28 jul 2026",
      summary:
        "Primer club en conectar el asistente de WhatsApp a su propio número. La IA lee los comprobantes que mandan las familias y deja cada pago listo para que el club lo apruebe con un toque. Emite su facturación electrónica DIAN desde la plataforma.",
      stats: [
        { value: "502", label: "Deportistas activos" },
        { value: "$117,6 M", label: "En 756 pagos registrados" },
        { value: "455", label: "Comprobantes leídos por la IA" },
        { value: "334", label: "Facturas aceptadas por la DIAN" }
      ],
      href: "/blog/caso-dynasty-volley-club-cobros-whatsapp-ia-facturacion",
      color: "from-sport-primary to-sport-accent"
    },
    {
      icon: Building2,
      category: "Gimnasio",
      name: "GYM RM",
      location: "Colombia · en SportMaps desde el 16 may 2026",
      summary:
        "Conectó sus torniquetes ZKTeco a SportMaps: cada entrada queda registrada y el acceso se bloquea automáticamente cuando hay mora. Es el piloto de la tienda en línea.",
      stats: [
        { value: "12.181", label: "Accesos por torniquete ZKTeco" },
        { value: "128", label: "Deportistas activos" },
        { value: "$24,2 M", label: "En 315 pagos registrados" }
      ],
      href: "/blog/caso-gym-rm-control-de-acceso-torniquetes-zkteco",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: School,
      category: "Club deportivo",
      name: "Club Deportivo Besser",
      location: "Bogotá, Colombia · en SportMaps desde el 5 sep 2026",
      summary:
        "Empezó importando 69 atletas. Envía el informe mensual del atleta a las familias, tiene activos los correos automáticos de cobro desde el 5 de octubre y usa el catálogo de artículos escolares.",
      stats: [
        { value: "78", label: "Deportistas activos" },
        { value: "720", label: "Asistencias registradas" },
        { value: "69", label: "Atletas importados al empezar" }
      ],
      href: "/blog/escuelas-que-usan-sportmaps-en-bogota-casos-reales",
      color: "from-emerald-500 to-emerald-600"
    }
  ];

  // Qué hace cada escuela en la plataforma (sin citas atribuidas).
  const whatTheyDo = [
    {
      name: "Dreamers Gymnastics",
      role: "Gimnasia · Bogotá",
      text: "Controla la entrada con torniquetes ZKTeco (2.278 accesos) y maneja un banco de horas por niveles."
    },
    {
      name: "Carmel Club",
      role: "Club deportivo",
      text: "Registra la asistencia de sus 100 deportistas: lleva 1.549 asistencias en la plataforma."
    },
    {
      name: "Monster's Volley Club",
      role: "Voleibol · Bogotá",
      text: "125 deportistas. Es el piloto del módulo de contabilidad: ingresos, egresos y cierre de mes."
    }
  ];

  const platformStats = [
    { value: "1.111", label: "Deportistas activos" },
    { value: "$184 M", label: "En 1.194 pagos registrados" },
    { value: "$52,4 M", label: "Gestionados el mes pasado" },
    { value: "459", label: "Comprobantes leídos por la IA" },
    { value: "334", label: "Facturas aceptadas por la DIAN" },
    { value: "14.459", label: "Accesos por torniquete" },
    { value: "5.029", label: "Asistencias registradas" },
    { value: "42 s", label: "Mediana de respuesta a comprobantes por WhatsApp" }
  ];

  const posts = [
    {
      title: "Caso Dynasty Volley Club: cobros, WhatsApp IA y facturación DIAN",
      href: "/blog/caso-dynasty-volley-club-cobros-whatsapp-ia-facturacion"
    },
    {
      title: "Caso GYM RM: control de acceso con torniquetes ZKTeco",
      href: "/blog/caso-gym-rm-control-de-acceso-torniquetes-zkteco"
    },
    {
      title: "Escuelas que usan SportMaps en Bogotá: casos reales con cifras",
      href: "/blog/escuelas-que-usan-sportmaps-en-bogota-casos-reales"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Casos de éxito: escuelas reales con cifras reales"
        description="Dynasty Volley Club, GYM RM, Besser y otras escuelas de Colombia que usan SportMaps: 1.111 deportistas activos, $184 millones en pagos y 334 facturas DIAN. Cifras reales con corte al 14 oct 2026."
        keywords="casos de éxito sportmaps, Dynasty Volley Club, GYM RM, Club Deportivo Besser, software escuelas deportivas Bogotá, torniquetes ZKTeco, comprobantes de pago con IA"
        url="https://sportmaps.co/casos-exito"
        canonical="https://sportmaps.co/casos-exito"
      />
      <TechHeader onSectionClick={() => {}} activeSection="" />

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-sport-primary/10 via-transparent to-sport-accent/10" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 bg-sport-success/10 border border-sport-success/20 rounded-full px-4 py-2 mb-6">
              <Trophy className="w-4 h-4 text-sport-success" />
              <span className="text-sm text-sport-success font-medium">Casos reales</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Escuelas reales, <span className="text-sport-primary">cifras reales</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Clubes y escuelas de Colombia que cobran, registran asistencia y
              controlan el acceso con SportMaps. Todos los números salen de la
              plataforma, con corte al 14 de octubre de 2026.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Cases */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="space-y-12">
            {cases.map((caseStudy, index) => (
              <motion.div
                key={caseStudy.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <Card className="overflow-hidden bg-card/50 backdrop-blur border-border/50">
                  <CardContent className="p-0">
                    <div className="grid lg:grid-cols-2 gap-0">
                      <div className="p-8 lg:p-12">
                        <div className="flex items-center gap-3 mb-4">
                          <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${caseStudy.color} flex items-center justify-center`}>
                            <caseStudy.icon className="w-5 h-5 text-white" />
                          </div>
                          <span className="text-sm font-medium text-muted-foreground">{caseStudy.category}</span>
                        </div>
                        <h3 className="text-2xl font-bold mb-2">{caseStudy.name}</h3>
                        <p className="text-muted-foreground mb-6">{caseStudy.location}</p>
                        <p className="text-lg mb-8">{caseStudy.summary}</p>
                        <Button asChild className="bg-sport-primary hover:bg-sport-primary/90">
                          <Link to={caseStudy.href}>
                            Leer caso completo
                            <ArrowRight className="ml-2 w-4 h-4" />
                          </Link>
                        </Button>
                      </div>
                      <div className={`bg-gradient-to-br ${caseStudy.color} p-8 lg:p-12 flex flex-col justify-center`}>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
                          {caseStudy.stats.map((stat) => (
                            <div key={stat.label} className="text-center text-white">
                              <div className="text-4xl font-bold mb-1">{stat.value}</div>
                              <div className="text-white/80 text-sm">{stat.label}</div>
                            </div>
                          ))}
                        </div>
                        <p className="text-white/70 text-xs text-center mt-6">{CORTE}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Qué hace cada escuela */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Qué hacen <span className="text-sport-primary">otras escuelas</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Cada escuela usa la parte de SportMaps que resuelve su problema más urgente.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {whatTheyDo.map((school, index) => (
              <motion.div
                key={school.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full bg-card/50 backdrop-blur border-border/50">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <Users className="w-5 h-5 text-sport-primary" />
                      <p className="font-semibold">{school.name}</p>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">{school.role}</p>
                    <p className="text-muted-foreground">{school.text}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SportMaps en números */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4">
              <TrendingUp className="w-5 h-5 text-sport-primary" />
              <h2 className="text-3xl md:text-4xl font-bold">
                SportMaps en <span className="text-sport-primary">números</span>
              </h2>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {platformStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-4xl font-bold text-sport-primary mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
          <p className="text-sm text-muted-foreground text-center mt-10">{CORTE}</p>
        </div>
      </section>

      {/* Casos completos en el blog */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
            Lee los casos completos
          </h2>
          <div className="space-y-4">
            {posts.map((post) => (
              <Link
                key={post.href}
                to={post.href}
                className="flex items-center justify-between gap-4 rounded-lg border border-border/50 bg-card/50 p-5 hover:border-sport-primary/50 transition-colors"
              >
                <span className="font-medium">{post.title}</span>
                <ArrowRight className="w-4 h-4 shrink-0 text-sport-primary" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-sport-primary/10 to-sport-accent/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ¿Quieres organizar tu escuela así?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Empieza gratis con Free Start (hasta 20 alumnos) y el asistente de WhatsApp incluido.
          </p>
          <Button asChild size="lg" className="bg-sport-primary hover:bg-sport-primary/90">
            <Link to="/planes">
              Ver planes
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </section>

      <SportMapsFooter />
      <WhatsAppButton />
    </div>
  );
};

export default CasosExito;
