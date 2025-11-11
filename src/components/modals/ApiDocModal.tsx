import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Code2, Copy, CheckCircle2, Terminal, Book, Zap, Database, Shield, ArrowRight } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

interface ApiDocModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ApiDocModal({ isOpen, onClose }: ApiDocModalProps) {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const copyToClipboard = (code: string, id: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(id);
    toast.success("Código copiado al portapapeles");
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const endpoints = [
    {
      method: "GET",
      path: "/api/athletes/:id",
      description: "Obtener perfil de deportista",
      color: "sport-info",
      example: `// Ejemplo de uso
const response = await fetch('https://api.sportmaps.ai/athletes/123', {
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  }
});

const athlete = await response.json();
console.log(athlete);`,
      response: `{
  "id": "123",
  "name": "Juan Pérez",
  "sport": "Fútbol",
  "stats": {
    "matches": 45,
    "goals": 23,
    "assists": 12
  }
}`
    },
    {
      method: "POST",
      path: "/api/schools/search",
      description: "Buscar escuelas deportivas",
      color: "sport-accent",
      example: `// Búsqueda con filtros
const response = await fetch('https://api.sportmaps.ai/schools/search', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    sport: "Tenis",
    location: "Madrid",
    priceRange: { min: 20, max: 50 }
  })
});

const schools = await response.json();`,
      response: `{
  "results": [
    {
      "id": "456",
      "name": "Academia Rafa Nadal",
      "rating": 4.8,
      "pricePerHour": 45
    }
  ]
}`
    },
    {
      method: "POST",
      path: "/api/nutrition/ai-plan",
      description: "Generar plan nutricional con IA",
      color: "sport-highlight",
      example: `// Generar plan personalizado
const response = await fetch('https://api.sportmaps.ai/nutrition/ai-plan', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    athleteId: "123",
    goal: "muscle_gain",
    restrictions: ["lactose_free"]
  })
});

const plan = await response.json();`,
      response: `{
  "planId": "789",
  "dailyCalories": 2800,
  "macros": {
    "protein": "35%",
    "carbs": "45%",
    "fats": "20%"
  },
  "meals": [...]
}`
    },
    {
      method: "GET",
      path: "/api/analytics/performance",
      description: "Análisis de rendimiento deportivo",
      color: "sport-primary",
      example: `// Obtener métricas de rendimiento
const response = await fetch('https://api.sportmaps.ai/analytics/performance?athleteId=123&period=30d', {
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY'
  }
});

const analytics = await response.json();`,
      response: `{
  "period": "30d",
  "metrics": {
    "avgSpeed": "24.5 km/h",
    "distance": "450 km",
    "improvement": "+15%"
  }
}`
    }
  ];

  const quickstart = `# Instalación rápida

npm install @sportmaps/sdk

# Configuración
import SportMaps from '@sportmaps/sdk';

const client = new SportMaps({
  apiKey: process.env.SPORTMAPS_API_KEY,
  environment: 'production'
});

// Tu primer request
const athlete = await client.athletes.get('123');
console.log(athlete);`;

  const webhooks = `# Configurar Webhooks

// Recibir notificaciones en tiempo real
const webhook = await client.webhooks.create({
  url: 'https://tuapp.com/webhooks/sportmaps',
  events: [
    'athlete.updated',
    'match.completed',
    'booking.confirmed'
  ]
});

// Handler de ejemplo (Node.js/Express)
app.post('/webhooks/sportmaps', (req, res) => {
  const event = req.body;
  
  switch(event.type) {
    case 'athlete.updated':
      // Manejar actualización
      break;
    case 'match.completed':
      // Procesar resultado
      break;
  }
  
  res.status(200).send('OK');
});`;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-3 text-2xl">
            <div className="w-10 h-10 rounded-xl bg-gradient-tech-primary flex items-center justify-center">
              <Code2 className="w-6 h-6 text-white" />
            </div>
            Documentación API SportMaps
          </DialogTitle>
        </DialogHeader>

        <Tabs defaultValue="endpoints" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="endpoints" className="flex items-center gap-2">
              <Database className="w-4 h-4" />
              Endpoints
            </TabsTrigger>
            <TabsTrigger value="quickstart" className="flex items-center gap-2">
              <Zap className="w-4 h-4" />
              Quick Start
            </TabsTrigger>
            <TabsTrigger value="webhooks" className="flex items-center gap-2">
              <Terminal className="w-4 h-4" />
              Webhooks
            </TabsTrigger>
          </TabsList>

          <TabsContent value="endpoints" className="space-y-6 mt-6">
            {/* API Info */}
            <div className="bg-sport-card rounded-xl p-6 border border-sport-border">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-sport-primary/10 flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-sport-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Autenticación</h3>
                  <p className="text-sport-text-secondary text-sm mb-3">
                    Todas las peticiones requieren una API Key válida en el header de autorización.
                  </p>
                  <code className="bg-sport-background px-3 py-1 rounded text-sm text-sport-primary">
                    Authorization: Bearer YOUR_API_KEY
                  </code>
                </div>
              </div>
            </div>

            {/* Endpoints List */}
            <div className="space-y-4">
              {endpoints.map((endpoint, index) => (
                <div key={index} className="bg-sport-card rounded-xl border border-sport-border overflow-hidden">
                  <div className="p-4 border-b border-sport-border">
                    <div className="flex items-center gap-3 flex-wrap">
                      <Badge 
                        className={`bg-${endpoint.color} text-white`}
                        style={{ backgroundColor: `hsl(var(--${endpoint.color}))` }}
                      >
                        {endpoint.method}
                      </Badge>
                      <code className="text-sport-text font-mono text-sm">{endpoint.path}</code>
                      <span className="text-sport-text-secondary text-sm ml-auto">{endpoint.description}</span>
                    </div>
                  </div>
                  
                  <div className="p-4 space-y-4">
                    {/* Request Example */}
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-semibold text-sport-text">Request</span>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => copyToClipboard(endpoint.example, `req-${index}`)}
                          className="h-8"
                        >
                          {copiedCode === `req-${index}` ? (
                            <CheckCircle2 className="w-4 h-4 text-sport-success" />
                          ) : (
                            <Copy className="w-4 h-4" />
                          )}
                        </Button>
                      </div>
                      <pre className="bg-sport-background rounded-lg p-4 overflow-x-auto text-xs">
                        <code>{endpoint.example}</code>
                      </pre>
                    </div>

                    {/* Response Example */}
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-semibold text-sport-text">Response</span>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => copyToClipboard(endpoint.response, `res-${index}`)}
                          className="h-8"
                        >
                          {copiedCode === `res-${index}` ? (
                            <CheckCircle2 className="w-4 h-4 text-sport-success" />
                          ) : (
                            <Copy className="w-4 h-4" />
                          )}
                        </Button>
                      </div>
                      <pre className="bg-sport-background rounded-lg p-4 overflow-x-auto text-xs">
                        <code>{endpoint.response}</code>
                      </pre>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="quickstart" className="space-y-6 mt-6">
            <div className="bg-sport-card rounded-xl p-6 border border-sport-border">
              <div className="flex items-center gap-3 mb-4">
                <Book className="w-6 h-6 text-sport-primary" />
                <h3 className="font-bold text-lg">Guía de Inicio Rápido</h3>
              </div>
              
              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-semibold text-sport-text">Instalación y Configuración</span>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => copyToClipboard(quickstart, 'quickstart')}
                      className="h-8"
                    >
                      {copiedCode === 'quickstart' ? (
                        <CheckCircle2 className="w-4 h-4 text-sport-success" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </Button>
                  </div>
                  <pre className="bg-sport-background rounded-lg p-4 overflow-x-auto text-sm">
                    <code>{quickstart}</code>
                  </pre>
                </div>

                {/* Features */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                  {[
                    { icon: Zap, title: "Rápido", desc: "Integración en minutos" },
                    { icon: Shield, title: "Seguro", desc: "Encriptación end-to-end" },
                    { icon: Database, title: "Escalable", desc: "Soporta millones de requests" },
                    { icon: Terminal, title: "Developer-friendly", desc: "SDK en múltiples lenguajes" }
                  ].map((feature, i) => (
                    <div key={i} className="flex items-start gap-3 p-4 bg-sport-background rounded-lg">
                      <div className="w-10 h-10 rounded-lg bg-sport-primary/10 flex items-center justify-center flex-shrink-0">
                        <feature.icon className="w-5 h-5 text-sport-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-sport-text">{feature.title}</h4>
                        <p className="text-sm text-sport-text-secondary">{feature.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="webhooks" className="space-y-6 mt-6">
            <div className="bg-sport-card rounded-xl p-6 border border-sport-border">
              <div className="flex items-center gap-3 mb-4">
                <Terminal className="w-6 h-6 text-sport-accent" />
                <h3 className="font-bold text-lg">Webhooks en Tiempo Real</h3>
              </div>
              
              <p className="text-sport-text-secondary mb-4">
                Recibe notificaciones automáticas cuando ocurren eventos importantes en la plataforma.
              </p>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-semibold text-sport-text">Configuración de Webhooks</span>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => copyToClipboard(webhooks, 'webhooks')}
                    className="h-8"
                  >
                    {copiedCode === 'webhooks' ? (
                      <CheckCircle2 className="w-4 h-4 text-sport-success" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </Button>
                </div>
                <pre className="bg-sport-background rounded-lg p-4 overflow-x-auto text-sm">
                  <code>{webhooks}</code>
                </pre>
              </div>

              {/* Eventos disponibles */}
              <div className="mt-6">
                <h4 className="font-semibold mb-3 text-sport-text">Eventos Disponibles</h4>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    "athlete.created", "athlete.updated", "match.started", "match.completed",
                    "booking.confirmed", "booking.cancelled", "payment.success", "payment.failed"
                  ].map((event, i) => (
                    <code key={i} className="bg-sport-background px-3 py-2 rounded text-xs text-sport-primary">
                      {event}
                    </code>
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        {/* Footer CTA */}
        <div className="bg-gradient-to-r from-sport-primary/10 to-sport-accent/10 rounded-xl p-6 border border-sport-primary/20 mt-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h4 className="font-bold text-sport-text mb-1">¿Necesitas tu API Key?</h4>
              <p className="text-sm text-sport-text-secondary">Solicita acceso a nuestra API en minutos</p>
            </div>
            <Button className="bg-sport-primary hover:bg-sport-primary/90">
              Solicitar Acceso
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
