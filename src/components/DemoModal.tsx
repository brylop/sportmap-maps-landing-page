import { useState, useEffect } from "react";
import { X, ExternalLink } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DEMO_HTML = `
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>SportMaps - Demo Interactivo</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    .gradient-bg { background: linear-gradient(135deg, #0B5394, #22B14C, #FF6F3C); }
  </style>
</head>
<body class="bg-gray-50">
  <div class="min-h-screen">
    <!-- Header -->
    <header class="bg-white shadow-lg">
      <div class="max-w-7xl mx-auto px-4 py-4">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-3">
            <div class="w-8 h-8 gradient-bg rounded-full"></div>
            <h1 class="text-2xl font-bold text-gray-800">SportMaps</h1>
          </div>
          <nav class="hidden md:flex space-x-8">
            <a href="#" class="text-gray-600 hover:text-blue-600">Inicio</a>
            <a href="#" class="text-gray-600 hover:text-blue-600">Explorar</a>
            <a href="#" class="text-gray-600 hover:text-blue-600">Escuelas</a>
            <a href="#" class="text-gray-600 hover:text-blue-600">Tienda</a>
          </nav>
          <button class="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold">
            Registrarse
          </button>
        </div>
      </div>
    </header>

    <!-- Hero Section -->
    <section class="gradient-bg text-white py-20">
      <div class="max-w-4xl mx-auto text-center px-4">
        <h2 class="text-5xl font-bold mb-6">El Futuro del Deporte Digital</h2>
        <p class="text-xl mb-8 opacity-90">
          Conectamos atletas, padres, entrenadores y escuelas deportivas en Colombia
        </p>
        <div class="flex gap-4 justify-center">
          <button class="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100">
            Explorar Escuelas
          </button>
          <button class="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10">
            Ver Tienda
          </button>
        </div>
      </div>
    </section>

    <!-- Features Grid -->
    <section class="py-16 max-w-7xl mx-auto px-4">
      <h3 class="text-3xl font-bold text-center mb-12">Nuestro Ecosistema</h3>
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div class="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
          <div class="w-12 h-12 bg-blue-600 rounded-lg mb-4 flex items-center justify-center">
            <span class="text-white font-bold">🏫</span>
          </div>
          <h4 class="font-bold mb-2">Escuelas Deportivas</h4>
          <p class="text-gray-600">Encuentra la mejor escuela para tu deporte favorito</p>
        </div>
        
        <div class="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
          <div class="w-12 h-12 bg-green-600 rounded-lg mb-4 flex items-center justify-center">
            <span class="text-white font-bold">🛒</span>
          </div>
          <h4 class="font-bold mb-2">Tienda Especializada</h4>
          <p class="text-gray-600">Equipamiento y accesorios deportivos de calidad</p>
        </div>
        
        <div class="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
          <div class="w-12 h-12 bg-orange-600 rounded-lg mb-4 flex items-center justify-center">
            <span class="text-white font-bold">💊</span>
          </div>
          <h4 class="font-bold mb-2">Nutrición Deportiva</h4>
          <p class="text-gray-600">Suplementos y planes nutricionales personalizados</p>
        </div>
        
        <div class="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
          <div class="w-12 h-12 bg-purple-600 rounded-lg mb-4 flex items-center justify-center">
            <span class="text-white font-bold">❤️</span>
          </div>
          <h4 class="font-bold mb-2">Bienestar</h4>
          <p class="text-gray-600">Fisioterapia y psicología deportiva</p>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="bg-gray-100 py-16">
      <div class="max-w-4xl mx-auto text-center px-4">
        <h3 class="text-3xl font-bold mb-4">¿Listo para comenzar?</h3>
        <p class="text-xl text-gray-600 mb-8">
          Únete a miles de deportistas que ya forman parte de SportMaps
        </p>
        <button class="gradient-bg text-white px-8 py-4 rounded-full font-semibold text-lg hover:opacity-90">
          Crear Cuenta Gratis
        </button>
      </div>
    </section>
  </div>
</body>
</html>
`;

export function DemoModal({ isOpen, onClose }: DemoModalProps) {
  const [blobUrl, setBlobUrl] = useState<string | null>(null);

  useEffect(() => {
    if (isOpen && !blobUrl) {
      const blob = new Blob([DEMO_HTML], { type: 'text/html' });
      const url = URL.createObjectURL(blob);
      setBlobUrl(url);
    }

    return () => {
      if (blobUrl) {
        URL.revokeObjectURL(blobUrl);
        setBlobUrl(null);
      }
    };
  }, [isOpen, blobUrl]);

  const openInNewTab = () => {
    if (blobUrl) {
      window.open(blobUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[95vw] max-h-[95vh] h-[95vh] p-0 bg-gray-900">
        <DialogHeader className="flex flex-row items-center justify-between p-4 border-b border-gray-700">
          <DialogTitle className="text-white flex items-center gap-2">
            ✨ Demo Interactivo
          </DialogTitle>
          <div className="flex items-center gap-2">
            <Button
              onClick={openInNewTab}
              size="sm"
              variant="outline"
              className="text-gray-300 border-gray-600 hover:bg-gray-800"
            >
              <ExternalLink className="w-4 h-4 mr-1" />
              Abrir en pestaña
            </Button>
            <Button
              onClick={onClose}
              size="sm"
              variant="ghost"
              className="text-gray-300 hover:bg-gray-800"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
        </DialogHeader>
        
        <div className="flex-1 overflow-hidden">
          {blobUrl && (
            <iframe
              src={blobUrl}
              title="SportMaps Demo"
              className="w-full h-full border-0"
              sandbox="allow-scripts allow-same-origin"
            />
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}