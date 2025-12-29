import { SEO } from "@/components/SEO";
import { TechHeader } from "@/components/TechHeader";
import { SportMapsFooter } from "@/components/SportMapsFooter";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { 
  Search, BookOpen, Video, MessageCircle,
  FileText, HelpCircle, ArrowRight, Mail,
  Phone, ChevronRight
} from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { ChatBotModal } from "@/components/modals/ChatBotModal";

const CentroAyuda = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isChatOpen, setIsChatOpen] = useState(false);

  const categories = [
    {
      icon: BookOpen,
      title: "Primeros Pasos",
      description: "Guías para comenzar a usar SportMaps",
      articles: 12,
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Video,
      title: "Tutoriales en Video",
      description: "Aprende visualmente cómo usar cada función",
      articles: 24,
      color: "from-sport-primary to-sport-accent"
    },
    {
      icon: FileText,
      title: "Documentación",
      description: "Guías detalladas de todas las funcionalidades",
      articles: 45,
      color: "from-emerald-500 to-emerald-600"
    },
    {
      icon: HelpCircle,
      title: "Preguntas Frecuentes",
      description: "Respuestas a las dudas más comunes",
      articles: 30,
      color: "from-amber-500 to-amber-600"
    }
  ];

  const popularArticles = [
    { title: "¿Cómo crear mi primera clase?", category: "Primeros Pasos" },
    { title: "Configurar pagos y facturación", category: "Administración" },
    { title: "Agregar estudiantes a mi academia", category: "Gestión" },
    { title: "Generar reportes de asistencia", category: "Reportes" },
    { title: "Integrar calendario con Google", category: "Integraciones" },
    { title: "Configurar notificaciones", category: "Configuración" }
  ];

  const faqs = [
    {
      question: "¿Cómo puedo recuperar mi contraseña?",
      answer: "Ve a la página de inicio de sesión y haz clic en '¿Olvidaste tu contraseña?'. Recibirás un email con instrucciones."
    },
    {
      question: "¿Puedo usar SportMaps en mi celular?",
      answer: "Sí, SportMaps es completamente responsive y funciona en cualquier dispositivo móvil a través del navegador."
    },
    {
      question: "¿Cómo contacto al soporte técnico?",
      answer: "Puedes contactarnos por WhatsApp, email o a través del chat en vivo disponible en la plataforma."
    },
    {
      question: "¿Ofrecen capacitación para mi equipo?",
      answer: "Sí, ofrecemos sesiones de capacitación personalizadas para equipos. Contáctanos para más información."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Centro de Ayuda | SportMaps - Soporte y Documentación"
        description="Encuentra respuestas a tus preguntas, tutoriales, guías y documentación para aprovechar al máximo SportMaps."
        keywords="ayuda sportmaps, soporte sportmaps, tutoriales, documentación, preguntas frecuentes"
      />
      <TechHeader onSectionClick={() => {}} activeSection="" />
      
      {/* Hero Section with Search */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-sport-primary/10 via-transparent to-sport-accent/10" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              ¿En qué podemos <span className="text-sport-primary">ayudarte</span>?
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Busca en nuestra base de conocimiento o explora las categorías.
            </p>
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Buscar artículos, tutoriales, guías..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-4 py-6 text-lg rounded-xl bg-background border-border"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full bg-card/50 backdrop-blur border-border/50 hover:border-sport-primary/50 transition-all cursor-pointer group hover:-translate-y-1">
                  <CardContent className="p-6 text-center">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                      <category.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{category.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{category.description}</p>
                    <span className="text-xs text-sport-primary font-medium">{category.articles} artículos</span>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Articles */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Artículos Populares</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {popularArticles.map((article, index) => (
              <motion.div
                key={article.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Card className="bg-card/50 backdrop-blur border-border/50 hover:border-sport-primary/50 transition-colors cursor-pointer group">
                  <CardContent className="p-4 flex items-center justify-between">
                    <div>
                      <p className="font-medium group-hover:text-sport-primary transition-colors">{article.title}</p>
                      <span className="text-xs text-muted-foreground">{article.category}</span>
                    </div>
                    <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-sport-primary group-hover:translate-x-1 transition-all" />
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Preguntas Frecuentes</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="bg-card/50 backdrop-blur border-border/50">
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-2 flex items-start gap-3">
                      <HelpCircle className="w-5 h-5 text-sport-primary shrink-0 mt-0.5" />
                      {faq.question}
                    </h3>
                    <p className="text-muted-foreground ml-8">{faq.answer}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">¿No Encontraste lo que Buscabas?</h2>
            <p className="text-muted-foreground">Nuestro equipo de soporte está listo para ayudarte.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="bg-card/50 backdrop-blur border-border/50 text-center hover:border-sport-primary/50 transition-colors">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-xl bg-sport-primary/10 flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-6 h-6 text-sport-primary" />
                </div>
                <h3 className="font-semibold mb-2">Chat en Vivo</h3>
                <p className="text-sm text-muted-foreground mb-4">Respuesta inmediata de nuestro equipo</p>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => setIsChatOpen(true)}
                >
                  Iniciar Chat
                </Button>
              </CardContent>
            </Card>
            <Card className="bg-card/50 backdrop-blur border-border/50 text-center hover:border-sport-primary/50 transition-colors">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-xl bg-sport-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-6 h-6 text-sport-primary" />
                </div>
                <h3 className="font-semibold mb-2">Email</h3>
                <p className="text-sm text-muted-foreground mb-4">contacto@sportmaps.co</p>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => window.location.href = 'mailto:contacto@sportmaps.co?subject=Consulta desde Centro de Ayuda'}
                >
                  Enviar Email
                </Button>
              </CardContent>
            </Card>
            <Card className="bg-card/50 backdrop-blur border-border/50 text-center hover:border-sport-primary/50 transition-colors">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-xl bg-sport-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-6 h-6 text-sport-primary" />
                </div>
                <h3 className="font-semibold mb-2">WhatsApp</h3>
                <p className="text-sm text-muted-foreground mb-4">+57 312 846 3555</p>
                <Button 
                  variant="outline" 
                  size="sm"
                  onClick={() => window.open('https://wa.me/573128463555?text=' + encodeURIComponent('Hola, me gustaría contactarlos para más información'), '_blank')}
                >
                  Contactar
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <SportMapsFooter />
      <WhatsAppButton />
      <ChatBotModal isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />
    </div>
  );
};

export default CentroAyuda;
