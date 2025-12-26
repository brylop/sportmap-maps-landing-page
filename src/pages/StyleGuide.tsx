import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Check, Copy, ArrowLeft } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "@/hooks/use-toast";

interface ColorSwatchProps {
  name: string;
  cssVar: string;
  hex: string;
  description: string;
}

function ColorSwatch({ name, cssVar, hex, description }: ColorSwatchProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    toast({ title: "Copiado", description: `${text} copiado al portapapeles` });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="group relative">
      <div 
        className="h-24 rounded-xl mb-3 border border-sport-border shadow-tech-sm transition-all hover:shadow-tech-md cursor-pointer"
        style={{ backgroundColor: `hsl(var(${cssVar}))` }}
        onClick={() => copyToClipboard(hex)}
      >
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          {copied ? <Check className="w-6 h-6 text-white drop-shadow-lg" /> : <Copy className="w-6 h-6 text-white drop-shadow-lg" />}
        </div>
      </div>
      <div className="space-y-1">
        <p className="font-semibold text-sport-text-primary">{name}</p>
        <p className="text-xs text-sport-text-muted font-mono">{cssVar}</p>
        <p className="text-xs text-sport-text-muted">{hex}</p>
        <p className="text-xs text-sport-text-secondary">{description}</p>
      </div>
    </div>
  );
}

export default function StyleGuide() {
  const brandColors = [
    { name: "Primary Green", cssVar: "--sport-primary", hex: "#248223", description: "Color principal de marca" },
    { name: "Accent Orange", cssVar: "--sport-accent", hex: "#FB9F1E", description: "CTAs y precios destacados" },
    { name: "Navy Background", cssVar: "--sport-background", hex: "#0B1121", description: "Fondos oscuros (dark mode)" },
    { name: "Success", cssVar: "--sport-success", hex: "#2D8A2B", description: "Estados exitosos" },
    { name: "Warning", cssVar: "--sport-warning", hex: "#FB9F1E", description: "Alertas y advertencias" },
    { name: "Highlight", cssVar: "--sport-highlight", hex: "#FF3333", description: "Elementos destacados" },
  ];

  const semanticColors = [
    { name: "Background", cssVar: "--background", hex: "#FFFFFF / #0B1121", description: "Fondo principal" },
    { name: "Foreground", cssVar: "--foreground", hex: "#0B1121 / #FAFAFA", description: "Texto principal" },
    { name: "Card", cssVar: "--card", hex: "#FFFFFF / #1E293B", description: "Tarjetas y contenedores" },
    { name: "Muted", cssVar: "--muted", hex: "#F1F5F9 / #334155", description: "Elementos secundarios" },
    { name: "Border", cssVar: "--border", hex: "#E2E8F0 / #334155", description: "Bordes y divisores" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-sport-border bg-background/95 backdrop-blur">
        <div className="container mx-auto px-4 py-4 flex items-center gap-4">
          <Link to="/" className="flex items-center gap-2 text-sport-text-muted hover:text-sport-primary transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span>Volver</span>
          </Link>
          <div className="flex-1">
            <h1 className="text-2xl font-bold text-sport-text-primary">🎨 SportMaps Style Guide</h1>
            <p className="text-sport-text-secondary text-sm">Sistema de Diseño Oficial v1.0</p>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 space-y-16">
        
        {/* Brand Colors */}
        <section>
          <div className="mb-8">
            <Badge className="mb-2 bg-sport-primary">Colores de Marca</Badge>
            <h2 className="text-3xl font-bold mb-2">Paleta Principal</h2>
            <p className="text-sport-text-secondary max-w-2xl">
              Estos son los colores oficiales de SportMaps. Haz clic en cualquier color para copiar su código hexadecimal.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {brandColors.map((color) => (
              <ColorSwatch key={color.name} {...color} />
            ))}
          </div>
        </section>

        {/* Semantic Colors */}
        <section>
          <div className="mb-8">
            <Badge variant="outline" className="mb-2">Colores Semánticos</Badge>
            <h2 className="text-3xl font-bold mb-2">Sistema de Tokens</h2>
            <p className="text-sport-text-secondary max-w-2xl">
              Colores que se adaptan automáticamente al modo claro/oscuro.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {semanticColors.map((color) => (
              <ColorSwatch key={color.name} {...color} />
            ))}
          </div>
        </section>

        {/* Typography */}
        <section>
          <div className="mb-8">
            <Badge className="mb-2 bg-sport-accent">Tipografía</Badge>
            <h2 className="text-3xl font-bold mb-2">Poppins Font Family</h2>
            <p className="text-sport-text-secondary max-w-2xl">
              Fuente principal para toda la interfaz. Pesos: 300-800.
            </p>
          </div>
          <Card>
            <CardContent className="p-8 space-y-6">
              <div className="space-y-4">
                <div className="flex items-baseline gap-4 border-b border-sport-border pb-4">
                  <span className="text-xs text-sport-text-muted w-24">H1 / 48px</span>
                  <h1 className="text-5xl font-bold">SportMaps Ecosistema</h1>
                </div>
                <div className="flex items-baseline gap-4 border-b border-sport-border pb-4">
                  <span className="text-xs text-sport-text-muted w-24">H2 / 36px</span>
                  <h2 className="text-4xl font-bold">Gestión Deportiva</h2>
                </div>
                <div className="flex items-baseline gap-4 border-b border-sport-border pb-4">
                  <span className="text-xs text-sport-text-muted w-24">H3 / 24px</span>
                  <h3 className="text-2xl font-semibold">Planes y Precios</h3>
                </div>
                <div className="flex items-baseline gap-4 border-b border-sport-border pb-4">
                  <span className="text-xs text-sport-text-muted w-24">Body / 16px</span>
                  <p className="text-base">Digitaliza tu escuela deportiva. Gestiona matrículas, cobros automáticos y comunicación.</p>
                </div>
                <div className="flex items-baseline gap-4">
                  <span className="text-xs text-sport-text-muted w-24">Small / 14px</span>
                  <p className="text-sm text-sport-text-secondary">Texto secundario para descripciones y etiquetas.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Buttons */}
        <section>
          <div className="mb-8">
            <Badge className="mb-2 bg-sport-primary">Componentes</Badge>
            <h2 className="text-3xl font-bold mb-2">Botones</h2>
            <p className="text-sport-text-secondary max-w-2xl">
              Variantes de botones para diferentes contextos de UI.
            </p>
          </div>
          <Card>
            <CardContent className="p-8">
              <div className="flex flex-wrap gap-4 items-center">
                <Button>Primary Default</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="destructive">Destructive</Button>
                <Button className="bg-sport-accent hover:bg-sport-accent/90">CTA Orange</Button>
                <Button className="bg-sport-primary hover:bg-sport-primary/90">Brand Green</Button>
                <Button variant="outline" className="rounded-full">Rounded Full</Button>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Cards */}
        <section>
          <div className="mb-8">
            <Badge variant="outline" className="mb-2">Componentes</Badge>
            <h2 className="text-3xl font-bold mb-2">Tarjetas</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="hover-lift">
              <CardHeader>
                <CardTitle>Card Default</CardTitle>
                <CardDescription>Con hover-lift effect</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sport-text-secondary">Contenido de ejemplo para mostrar el estilo de tarjeta estándar.</p>
              </CardContent>
            </Card>
            
            <Card className="border-sport-primary/50 shadow-glow-primary">
              <CardHeader>
                <CardTitle className="text-sport-primary">Card Destacada</CardTitle>
                <CardDescription>Con glow verde de marca</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sport-text-secondary">Tarjeta con borde y sombra del color primario verde.</p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-sport-primary to-sport-secondary text-white border-0">
              <CardHeader>
                <CardTitle className="text-white">Card Gradient</CardTitle>
                <CardDescription className="text-white/80">Fondo gradiente de marca</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-white/90">Tarjeta con gradiente verde para secciones destacadas.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Inputs */}
        <section>
          <div className="mb-8">
            <Badge variant="outline" className="mb-2">Formularios</Badge>
            <h2 className="text-3xl font-bold mb-2">Inputs</h2>
          </div>
          <Card>
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-6 max-w-2xl">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Input Default</label>
                  <Input placeholder="Escribe aquí..." />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Input Disabled</label>
                  <Input placeholder="No editable" disabled />
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Badges */}
        <section>
          <div className="mb-8">
            <Badge variant="outline" className="mb-2">Componentes</Badge>
            <h2 className="text-3xl font-bold mb-2">Badges</h2>
          </div>
          <Card>
            <CardContent className="p-8">
              <div className="flex flex-wrap gap-3">
                <Badge>Default</Badge>
                <Badge variant="secondary">Secondary</Badge>
                <Badge variant="outline">Outline</Badge>
                <Badge variant="destructive">Destructive</Badge>
                <Badge className="bg-sport-primary">Primary Green</Badge>
                <Badge className="bg-sport-accent">Accent Orange</Badge>
                <Badge className="bg-sport-success">Success</Badge>
                <Badge className="bg-sport-info">Info</Badge>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Shadows */}
        <section>
          <div className="mb-8">
            <Badge variant="outline" className="mb-2">Efectos</Badge>
            <h2 className="text-3xl font-bold mb-2">Sombras</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-card p-6 rounded-2xl shadow-tech-sm text-center">
              <p className="font-medium">shadow-tech-sm</p>
            </div>
            <div className="bg-card p-6 rounded-2xl shadow-tech-md text-center">
              <p className="font-medium">shadow-tech-md</p>
            </div>
            <div className="bg-card p-6 rounded-2xl shadow-tech-lg text-center">
              <p className="font-medium">shadow-tech-lg</p>
            </div>
            <div className="bg-card p-6 rounded-2xl shadow-glow-primary text-center">
              <p className="font-medium">shadow-glow-primary</p>
            </div>
          </div>
        </section>

        {/* Usage Guide */}
        <section className="bg-muted rounded-3xl p-8">
          <h2 className="text-2xl font-bold mb-4">📘 Guía de Uso Rápido</h2>
          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div>
              <h3 className="font-semibold mb-2">Colores de Marca</h3>
              <code className="block bg-background p-3 rounded-lg text-xs">
                className="bg-sport-primary"<br/>
                className="text-sport-accent"<br/>
                className="border-sport-primary"
              </code>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Sombras y Efectos</h3>
              <code className="block bg-background p-3 rounded-lg text-xs">
                className="shadow-tech-lg"<br/>
                className="shadow-glow-primary"<br/>
                className="hover-lift"
              </code>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Botón CTA (Naranja)</h3>
              <code className="block bg-background p-3 rounded-lg text-xs">
                className="bg-sport-accent hover:bg-sport-accent/90"
              </code>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Tarjeta Destacada</h3>
              <code className="block bg-background p-3 rounded-lg text-xs">
                className="border-sport-primary/50 shadow-glow-primary"
              </code>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-sport-border py-8 mt-16">
        <div className="container mx-auto px-4 text-center text-sport-text-muted text-sm">
          <p>SportMaps Design System • Última actualización: Diciembre 2025</p>
        </div>
      </footer>
    </div>
  );
}
