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
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>SportMaps - Demo Interactivo</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    .gradient-bg { 
      background: linear-gradient(135deg, #38e07b, #22B14C); 
    }
    .page { display: none; }
    .page.active { display: block; }
    .module { display: none; }
    .module.active { display: block; }
    .module-card {
      transition: all 0.3s ease;
      cursor: pointer;
    }
    .module-card:hover {
      transform: translateY(-4px);
      box-shadow: 0 10px 30px rgba(0,0,0,0.15);
    }
  </style>
</head>
<body class="bg-gray-50">
  <!-- LOGIN PAGE -->
  <div id="login-page" class="page active min-h-screen bg-gradient-to-br from-blue-600 via-green-500 to-green-600 flex items-center justify-center p-4">
    <div class="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8">
      <div class="text-center mb-8">
        <div class="w-16 h-16 gradient-bg rounded-full mx-auto mb-4 flex items-center justify-center">
          <span class="text-white text-2xl font-bold">🗺️</span>
        </div>
        <h1 class="text-3xl font-bold text-gray-800 mb-2">SportMaps</h1>
        <p class="text-gray-600">Bienvenido de nuevo</p>
      </div>
      
      <form id="login-form" class="space-y-6">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">Correo electrónico</label>
          <input 
            type="email" 
            id="email"
            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            placeholder="correo@ejemplo.com"
            required>
        </div>
        
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">Contraseña</label>
          <input 
            type="password" 
            id="password"
            class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            placeholder="********"
            required>
        </div>
        
        <div class="flex items-center">
          <input type="checkbox" id="remember" class="w-4 h-4 text-green-600 rounded">
          <label for="remember" class="ml-2 text-sm text-gray-600">Recordarme</label>
        </div>
        
        <button 
          type="submit"
          class="w-full gradient-bg text-white py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">
          Iniciar Sesión
        </button>
      </form>
      
      <div class="mt-6 text-center">
        <a href="#" class="text-sm text-green-600 hover:underline">¿Olvidaste tu contraseña?</a>
        <p class="mt-4 text-sm text-gray-600">
          ¿No tienes cuenta? <a href="#" class="text-green-600 hover:underline">Crear una</a>
        </p>
      </div>
    </div>
  </div>

  <!-- MAIN PAGE -->
  <div id="main-page" class="page min-h-screen">
    <!-- Header -->
    <header class="bg-white shadow-lg sticky top-0 z-50">
      <div class="max-w-7xl mx-auto px-4 py-4">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-3">
            <div class="w-8 h-8 gradient-bg rounded-full flex items-center justify-center">
              <span class="text-white font-bold text-sm">🗺️</span>
            </div>
            <h1 class="text-2xl font-bold text-gray-800">SportMaps</h1>
          </div>
          
          <!-- Desktop Navigation -->
          <nav class="hidden md:flex space-x-8">
            <button onclick="showModule('ecosistema')" class="nav-btn text-gray-600 hover:text-green-600 transition-colors">Ecosistema</button>
            <button onclick="showModule('escuelas')" class="nav-btn text-gray-600 hover:text-green-600 transition-colors">Escuelas</button>
            <button onclick="showModule('tienda')" class="nav-btn text-gray-600 hover:text-green-600 transition-colors">Tienda</button>
            <button onclick="showModule('nutricion')" class="nav-btn text-gray-600 hover:text-green-600 transition-colors">Nutrición</button>
            <button onclick="showModule('bienestar')" class="nav-btn text-gray-600 hover:text-green-600 transition-colors">Bienestar</button>
          </nav>
          
          <div class="flex items-center gap-4">
            <div class="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
              <span class="text-white text-sm font-bold">U</span>
            </div>
            <span class="hidden md:block text-sm font-medium">Usuario Demo</span>
          </div>
        </div>
        
        <!-- Mobile Navigation -->
        <div class="md:hidden mt-4 flex flex-wrap gap-2">
          <button onclick="showModule('ecosistema')" class="nav-btn-mobile px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Ecosistema</button>
          <button onclick="showModule('escuelas')" class="nav-btn-mobile px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">Escuelas</button>
          <button onclick="showModule('tienda')" class="nav-btn-mobile px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">Tienda</button>
          <button onclick="showModule('nutricion')" class="nav-btn-mobile px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">Nutrición</button>
          <button onclick="showModule('bienestar')" class="nav-btn-mobile px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">Bienestar</button>
        </div>
      </div>
    </header>

    <!-- Ecosistema Module -->
    <div id="ecosistema-module" class="module active">
      <!-- Hero Section -->
      <section class="gradient-bg text-white py-16 md:py-20">
        <div class="max-w-6xl mx-auto text-center px-4">
          <h2 class="text-4xl md:text-6xl font-bold mb-6">El Futuro del Deporte Digital</h2>
          <p class="text-lg md:text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Conectamos atletas, padres, entrenadores y escuelas deportivas en un ecosistema integrado
          </p>
          
          <!-- Search Bar -->
          <div class="max-w-2xl mx-auto mb-8">
            <div class="relative">
              <input 
                type="text" 
                placeholder="Buscar escuelas, entrenadores, productos..."
                class="w-full px-6 py-4 rounded-full text-gray-800 text-lg shadow-lg focus:outline-none focus:ring-4 focus:ring-white/30">
              <button class="absolute right-2 top-2 bg-green-500 text-white p-2 rounded-full hover:bg-green-600">
                <span>🔍</span>
              </button>
            </div>
          </div>
          
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <button onclick="showModule('escuelas')" class="bg-white text-green-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
              Explorar Escuelas
            </button>
            <button onclick="showModule('tienda')" class="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors">
              Ver Tienda
            </button>
          </div>
        </div>
      </section>

      <!-- Stats Section -->
      <section class="py-12 bg-white">
        <div class="max-w-7xl mx-auto px-4">
          <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div class="text-center">
              <div class="text-3xl md:text-4xl font-bold text-green-600 mb-2">1,247</div>
              <div class="text-sm md:text-base text-gray-600">Escuelas</div>
            </div>
            <div class="text-center">
              <div class="text-3xl md:text-4xl font-bold text-blue-600 mb-2">15,892</div>
              <div class="text-sm md:text-base text-gray-600">Productos</div>
            </div>
            <div class="text-center">
              <div class="text-3xl md:text-4xl font-bold text-orange-600 mb-2">89,543</div>
              <div class="text-sm md:text-base text-gray-600">Usuarios</div>
            </div>
            <div class="text-center">
              <div class="text-3xl md:text-4xl font-bold text-purple-600 mb-2">$2.1M</div>
              <div class="text-sm md:text-base text-gray-600">GMV Mensual</div>
            </div>
          </div>
        </div>
      </section>

      <!-- Modules Grid -->
      <section class="py-16 max-w-7xl mx-auto px-4">
        <h3 class="text-3xl md:text-4xl font-bold text-center mb-4">Nuestro Ecosistema</h3>
        <p class="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Un solo perfil, un carrito unificado, múltiples experiencias deportivas
        </p>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div class="module-card bg-white p-6 rounded-2xl shadow-lg" onclick="showModule('escuelas')">
            <div class="w-12 h-12 bg-blue-600 rounded-xl mb-4 flex items-center justify-center">
              <span class="text-white font-bold text-xl">🏫</span>
            </div>
            <h4 class="font-bold text-lg mb-2">Escuelas & Entrenadores</h4>
            <p class="text-gray-600 text-sm mb-4">Búsqueda avanzada, reservas, reseñas verificadas</p>
            <div class="text-green-600 font-semibold text-sm">Explorar →</div>
          </div>
          
          <div class="module-card bg-white p-6 rounded-2xl shadow-lg" onclick="showModule('tienda')">
            <div class="w-12 h-12 bg-green-600 rounded-xl mb-4 flex items-center justify-center">
              <span class="text-white font-bold text-xl">🛒</span>
            </div>
            <h4 class="font-bold text-lg mb-2">Tienda Especializada</h4>
            <p class="text-gray-600 text-sm mb-4">Catálogo especializado, fulfillment 24-48h</p>
            <div class="text-green-600 font-semibold text-sm">Ver tienda →</div>
          </div>
          
          <div class="module-card bg-white p-6 rounded-2xl shadow-lg" onclick="showModule('nutricion')">
            <div class="w-12 h-12 bg-orange-600 rounded-xl mb-4 flex items-center justify-center">
              <span class="text-white font-bold text-xl">💊</span>
            </div>
            <h4 class="font-bold text-lg mb-2">Nutrición Deportiva</h4>
            <p class="text-gray-600 text-sm mb-4">Suscripciones y planes personalizados</p>
            <div class="text-green-600 font-semibold text-sm">Ver planes →</div>
          </div>
          
          <div class="module-card bg-white p-6 rounded-2xl shadow-lg" onclick="showModule('bienestar')">
            <div class="w-12 h-12 bg-purple-600 rounded-xl mb-4 flex items-center justify-center">
              <span class="text-white font-bold text-xl">❤️</span>
            </div>
            <h4 class="font-bold text-lg mb-2">Bienestar & Salud</h4>
            <p class="text-gray-600 text-sm mb-4">Fisioterapia y psicología deportiva</p>
            <div class="text-green-600 font-semibold text-sm">Consultar →</div>
          </div>
        </div>
      </section>
    </div>

    <!-- Escuelas Module -->
    <div id="escuelas-module" class="module">
      <section class="py-16 max-w-7xl mx-auto px-4">
        <div class="bg-white rounded-3xl p-8 shadow-lg mb-8">
          <h2 class="text-3xl font-bold mb-4">Marketplace de Escuelas</h2>
          <p class="text-gray-600 mb-6">
            Implementación: fichas verificadas, agenda por franjas, cobro por reserva (8–15%), wallet para escuelas, y KYC básico.
          </p>
          
          <div class="grid md:grid-cols-3 gap-6">
            <div class="p-6 border border-gray-200 rounded-2xl">
              <div class="flex items-center gap-3 mb-3">
                <span class="text-blue-600 text-xl">🔍</span>
                <h6 class="font-bold">Búsqueda/Match</h6>
              </div>
              <p class="text-gray-600 text-sm">Filtro por ciudad/edad/nivel; ranking con reputación, cercanía y precio.</p>
            </div>
            
            <div class="p-6 border border-gray-200 rounded-2xl">
              <div class="flex items-center gap-3 mb-3">
                <span class="text-green-600 text-xl">📅</span>
                <h6 class="font-bold">Reservas & Pagos</h6>
              </div>
              <p class="text-gray-600 text-sm">Calendario con cupos; pago anticipado; reembolsos y políticas.</p>
            </div>
            
            <div class="p-6 border border-gray-200 rounded-2xl">
              <div class="flex items-center gap-3 mb-3">
                <span class="text-purple-600 text-xl">🛡️</span>
                <h6 class="font-bold">Verificación</h6>
              </div>
              <p class="text-gray-600 text-sm">Documentos/seguros; control de credenciales y reseñas auditadas.</p>
            </div>
          </div>
        </div>
        
        <!-- Featured Schools -->
        <h3 class="text-2xl font-bold mb-6">Escuelas Destacadas</h3>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div class="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div class="h-48 bg-gradient-to-r from-green-400 to-blue-500"></div>
            <div class="p-6">
              <h4 class="font-bold mb-2">Academia de Fútbol Elite</h4>
              <p class="text-gray-600 text-sm mb-3">Entrenador: Carlos Valderrama</p>
              <div class="flex items-center gap-2 mb-3">
                <span class="text-yellow-500">⭐⭐⭐⭐⭐</span>
                <span class="text-sm text-gray-600">(124 reseñas)</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="font-bold text-green-600">$45.000/sesión</span>
                <button class="bg-green-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-green-600">
                  Ver disponibilidad
                </button>
              </div>
            </div>
          </div>
          
          <div class="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div class="h-48 bg-gradient-to-r from-orange-400 to-red-500"></div>
            <div class="p-6">
              <h4 class="font-bold mb-2">Basketball Pro Training</h4>
              <p class="text-gray-600 text-sm mb-3">Entrenador: Juan Pablo Ángel</p>
              <div class="flex items-center gap-2 mb-3">
                <span class="text-yellow-500">⭐⭐⭐⭐⭐</span>
                <span class="text-sm text-gray-600">(89 reseñas)</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="font-bold text-green-600">$55.000/sesión</span>
                <button class="bg-green-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-green-600">
                  Ver disponibilidad
                </button>
              </div>
            </div>
          </div>
          
          <div class="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div class="h-48 bg-gradient-to-r from-purple-400 to-pink-500"></div>
            <div class="p-6">
              <h4 class="font-bold mb-2">Yoga & Mindfulness</h4>
              <p class="text-gray-600 text-sm mb-3">Instructora: María González</p>
              <div class="flex items-center gap-2 mb-3">
                <span class="text-yellow-500">⭐⭐⭐⭐⭐</span>
                <span class="text-sm text-gray-600">(156 reseñas)</span>
              </div>
              <div class="flex justify-between items-center">
                <span class="font-bold text-green-600">$35.000/sesión</span>
                <button class="bg-green-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-green-600">
                  Ver disponibilidad
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

    <!-- Tienda Module -->
    <div id="tienda-module" class="module">
      <section class="py-16 max-w-7xl mx-auto px-4">
        <div class="bg-white rounded-3xl p-8 shadow-lg mb-8">
          <h2 class="text-3xl font-bold mb-4">Tienda Especializada</h2>
          <p class="text-gray-600 mb-6">
            E-commerce B2C especializado con catálogo curado, fulfillment express y experiencia mobile-first.
          </p>
          
          <div class="grid md:grid-cols-3 gap-6">
            <div class="p-6 border border-gray-200 rounded-2xl">
              <div class="flex items-center gap-3 mb-3">
                <span class="text-blue-600 text-xl">📦</span>
                <h6 class="font-bold">Catálogo Curado</h6>
              </div>
              <p class="text-gray-600 text-sm">Productos verificados, reviews auténticas, comparativas técnicas.</p>
            </div>
            
            <div class="p-6 border border-gray-200 rounded-2xl">
              <div class="flex items-center gap-3 mb-3">
                <span class="text-green-600 text-xl">🚚</span>
                <h6 class="font-bold">Fulfillment Express</h6>
              </div>
              <p class="text-gray-600 text-sm">Entrega en 24-48h, seguimiento en tiempo real, devoluciones fáciles.</p>
            </div>
            
            <div class="p-6 border border-gray-200 rounded-2xl">
              <div class="flex items-center gap-3 mb-3">
                <span class="text-purple-600 text-xl">🎯</span>
                <h6 class="font-bold">Recomendaciones IA</h6>
              </div>
              <p class="text-gray-600 text-sm">Algoritmo que sugiere productos según deporte, nivel y historial.</p>
            </div>
          </div>
        </div>
        
        <!-- Featured Products -->
        <h3 class="text-2xl font-bold mb-6">Productos Destacados</h3>
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div class="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div class="h-48 bg-gradient-to-r from-blue-400 to-blue-600 flex items-center justify-center">
              <span class="text-white text-4xl">⚽</span>
            </div>
            <div class="p-4">
              <h4 class="font-bold mb-2">Balón Nike Premier</h4>
              <p class="text-gray-600 text-sm mb-3">Balón profesional FIFA approved</p>
              <div class="flex justify-between items-center">
                <span class="font-bold text-green-600">$89.900</span>
                <button class="bg-green-500 text-white px-3 py-1 rounded text-sm hover:bg-green-600">
                  Agregar
                </button>
              </div>
            </div>
          </div>
          
          <div class="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div class="h-48 bg-gradient-to-r from-orange-400 to-orange-600 flex items-center justify-center">
              <span class="text-white text-4xl">🏀</span>
            </div>
            <div class="p-4">
              <h4 class="font-bold mb-2">Spalding NBA Official</h4>
              <p class="text-gray-600 text-sm mb-3">Balón oficial de la NBA</p>
              <div class="flex justify-between items-center">
                <span class="font-bold text-green-600">$129.900</span>
                <button class="bg-green-500 text-white px-3 py-1 rounded text-sm hover:bg-green-600">
                  Agregar
                </button>
              </div>
            </div>
          </div>
          
          <div class="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div class="h-48 bg-gradient-to-r from-purple-400 to-purple-600 flex items-center justify-center">
              <span class="text-white text-4xl">👟</span>
            </div>
            <div class="p-4">
              <h4 class="font-bold mb-2">Adidas Ultraboost</h4>
              <p class="text-gray-600 text-sm mb-3">Zapatillas de running premium</p>
              <div class="flex justify-between items-center">
                <span class="font-bold text-green-600">$349.900</span>
                <button class="bg-green-500 text-white px-3 py-1 rounded text-sm hover:bg-green-600">
                  Agregar
                </button>
              </div>
            </div>
          </div>
          
          <div class="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div class="h-48 bg-gradient-to-r from-green-400 to-green-600 flex items-center justify-center">
              <span class="text-white text-4xl">🥤</span>
            </div>
            <div class="p-4">
              <h4 class="font-bold mb-2">Botella Hidratación</h4>
              <p class="text-gray-600 text-sm mb-3">Botella inteligente 750ml</p>
              <div class="flex justify-between items-center">
                <span class="font-bold text-green-600">$45.900</span>
                <button class="bg-green-500 text-white px-3 py-1 rounded text-sm hover:bg-green-600">
                  Agregar
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>

    <!-- Nutrición Module -->
    <div id="nutricion-module" class="module">
      <section class="py-16 max-w-7xl mx-auto px-4">
        <div class="bg-white rounded-3xl p-8 shadow-lg mb-8">
          <h2 class="text-3xl font-bold mb-4">Nutrición Deportiva</h2>
          <p class="text-gray-600 mb-6">
            Suscripciones personalizadas de suplementos, planes nutricionales y seguimiento profesional.
          </p>
          
          <div class="grid md:grid-cols-3 gap-6">
            <div class="p-6 border border-gray-200 rounded-2xl">
              <div class="flex items-center gap-3 mb-3">
                <span class="text-orange-600 text-xl">🔬</span>
                <h6 class="font-bold">Planes Personalizados</h6>
              </div>
              <p class="text-gray-600 text-sm">Algoritmo nutricional basado en deporte, objetivos y biometría.</p>
            </div>
            
            <div class="p-6 border border-gray-200 rounded-2xl">
              <div class="flex items-center gap-3 mb-3">
                <span class="text-green-600 text-xl">📦</span>
                <h6 class="font-bold">Suscripciones</h6>
              </div>
              <p class="text-gray-600 text-sm">Entrega automática mensual de suplementos personalizados.</p>
            </div>
            
            <div class="p-6 border border-gray-200 rounded-2xl">
              <div class="flex items-center gap-3 mb-3">
                <span class="text-blue-600 text-xl">👨‍⚕️</span>
                <h6 class="font-bold">Seguimiento Pro</h6>
              </div>
              <p class="text-gray-600 text-sm">Consultas con nutricionistas deportivos certificados.</p>
            </div>
          </div>
        </div>
        
        <!-- Nutrition Plans -->
        <h3 class="text-2xl font-bold mb-6">Planes de Nutrición</h3>
        <div class="grid md:grid-cols-3 gap-6">
          <div class="bg-white rounded-2xl shadow-lg p-6 border-2 border-green-200">
            <div class="text-center mb-6">
              <div class="w-16 h-16 bg-green-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span class="text-green-600 text-2xl">🥗</span>
              </div>
              <h4 class="text-xl font-bold mb-2">Plan Básico</h4>
              <div class="text-3xl font-bold text-green-600 mb-2">$49.900</div>
              <div class="text-gray-600 text-sm">por mes</div>
            </div>
            
            <ul class="space-y-3 mb-6">
              <li class="flex items-center gap-2">
                <span class="text-green-500">✓</span>
                <span class="text-sm">Plan nutricional básico</span>
              </li>
              <li class="flex items-center gap-2">
                <span class="text-green-500">✓</span>
                <span class="text-sm">3 suplementos/mes</span>
              </li>
              <li class="flex items-center gap-2">
                <span class="text-green-500">✓</span>
                <span class="text-sm">App de seguimiento</span>
              </li>
            </ul>
            
            <button class="w-full bg-green-500 text-white py-3 rounded-lg font-semibold hover:bg-green-600">
              Elegir Plan
            </button>
          </div>
          
          <div class="bg-white rounded-2xl shadow-lg p-6 border-2 border-blue-500 relative">
            <div class="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <span class="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">Más Popular</span>
            </div>
            
            <div class="text-center mb-6">
              <div class="w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span class="text-blue-600 text-2xl">💪</span>
              </div>
              <h4 class="text-xl font-bold mb-2">Plan Pro</h4>
              <div class="text-3xl font-bold text-blue-600 mb-2">$89.900</div>
              <div class="text-gray-600 text-sm">por mes</div>
            </div>
            
            <ul class="space-y-3 mb-6">
              <li class="flex items-center gap-2">
                <span class="text-blue-500">✓</span>
                <span class="text-sm">Plan nutricional personalizado</span>
              </li>
              <li class="flex items-center gap-2">
                <span class="text-blue-500">✓</span>
                <span class="text-sm">6 suplementos/mes</span>
              </li>
              <li class="flex items-center gap-2">
                <span class="text-blue-500">✓</span>
                <span class="text-sm">Consulta mensual con nutricionista</span>
              </li>
              <li class="flex items-center gap-2">
                <span class="text-blue-500">✓</span>
                <span class="text-sm">Análisis de rendimiento</span>
              </li>
            </ul>
            
            <button class="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600">
              Elegir Plan
            </button>
          </div>
          
          <div class="bg-white rounded-2xl shadow-lg p-6 border-2 border-purple-200">
            <div class="text-center mb-6">
              <div class="w-16 h-16 bg-purple-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span class="text-purple-600 text-2xl">🏆</span>
              </div>
              <h4 class="text-xl font-bold mb-2">Plan Elite</h4>
              <div class="text-3xl font-bold text-purple-600 mb-2">$149.900</div>
              <div class="text-gray-600 text-sm">por mes</div>
            </div>
            
            <ul class="space-y-3 mb-6">
              <li class="flex items-center gap-2">
                <span class="text-purple-500">✓</span>
                <span class="text-sm">Todo del Plan Pro</span>
              </li>
              <li class="flex items-center gap-2">
                <span class="text-purple-500">✓</span>
                <span class="text-sm">Suplementos ilimitados</span>
              </li>
              <li class="flex items-center gap-2">
                <span class="text-purple-500">✓</span>
                <span class="text-sm">Consultas ilimitadas</span>
              </li>
              <li class="flex items-center gap-2">
                <span class="text-purple-500">✓</span>
                <span class="text-sm">Coach personal asignado</span>
              </li>
            </ul>
            
            <button class="w-full bg-purple-500 text-white py-3 rounded-lg font-semibold hover:bg-purple-600">
              Elegir Plan
            </button>
          </div>
        </div>
      </section>
    </div>

    <!-- Bienestar Module -->
    <div id="bienestar-module" class="module">
      <section class="py-16 max-w-7xl mx-auto px-4">
        <div class="bg-white rounded-3xl p-8 shadow-lg mb-8">
          <h2 class="text-3xl font-bold mb-4">Bienestar & Salud Deportiva</h2>
          <p class="text-gray-600 mb-6">
            Servicios de fisioterapia, psicología deportiva y teleconsulta especializada para atletas.
          </p>
          
          <div class="grid md:grid-cols-3 gap-6">
            <div class="p-6 border border-gray-200 rounded-2xl">
              <div class="flex items-center gap-3 mb-3">
                <span class="text-blue-600 text-xl">🏥</span>
                <h6 class="font-bold">Fisioterapia</h6>
              </div>
              <p class="text-gray-600 text-sm">Prevención y tratamiento de lesiones deportivas.</p>
            </div>
            
            <div class="p-6 border border-gray-200 rounded-2xl">
              <div class="flex items-center gap-3 mb-3">
                <span class="text-purple-600 text-xl">🧠</span>
                <h6 class="font-bold">Psicología Deportiva</h6>
              </div>
              <p class="text-gray-600 text-sm">Fortalecimiento mental y gestión de presión competitiva.</p>
            </div>
            
            <div class="p-6 border border-gray-200 rounded-2xl">
              <div class="flex items-center gap-3 mb-3">
                <span class="text-green-600 text-xl">📱</span>
                <h6 class="font-bold">Teleconsulta</h6>
              </div>
              <p class="text-gray-600 text-sm">Consultas virtuales con especialistas certificados.</p>
            </div>
          </div>
        </div>
        
        <!-- Services -->
        <h3 class="text-2xl font-bold mb-6">Servicios Disponibles</h3>
        <div class="grid md:grid-cols-2 gap-6">
          <div class="bg-white rounded-2xl shadow-lg p-6">
            <div class="flex items-center gap-4 mb-4">
              <div class="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                <span class="text-blue-600 text-xl">🏥</span>
              </div>
              <div>
                <h4 class="font-bold text-lg">Fisioterapia Deportiva</h4>
                <p class="text-gray-600 text-sm">Especialista en lesiones deportivas</p>
              </div>
            </div>
            
            <div class="space-y-3 mb-6">
              <div class="flex justify-between">
                <span class="text-sm">Consulta inicial</span>
                <span class="font-semibold">$80.000</span>
              </div>
              <div class="flex justify-between">
                <span class="text-sm">Sesión de tratamiento</span>
                <span class="font-semibold">$65.000</span>
              </div>
              <div class="flex justify-between">
                <span class="text-sm">Plan mensual (4 sesiones)</span>
                <span class="font-semibold text-green-600">$220.000</span>
              </div>
            </div>
            
            <button class="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600">
              Agendar Cita
            </button>
          </div>
          
          <div class="bg-white rounded-2xl shadow-lg p-6">
            <div class="flex items-center gap-4 mb-4">
              <div class="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                <span class="text-purple-600 text-xl">🧠</span>
              </div>
              <div>
                <h4 class="font-bold text-lg">Psicología Deportiva</h4>
                <p class="text-gray-600 text-sm">Fortalecimiento mental y rendimiento</p>
              </div>
            </div>
            
            <div class="space-y-3 mb-6">
              <div class="flex justify-between">
                <span class="text-sm">Consulta individual</span>
                <span class="font-semibold">$90.000</span>
              </div>
              <div class="flex justify-between">
                <span class="text-sm">Sesión grupal</span>
                <span class="font-semibold">$45.000</span>
              </div>
              <div class="flex justify-between">
                <span class="text-sm">Programa mensual</span>
                <span class="font-semibold text-green-600">$280.000</span>
              </div>
            </div>
            
            <button class="w-full bg-purple-500 text-white py-3 rounded-lg font-semibold hover:bg-purple-600">
              Agendar Cita
            </button>
          </div>
        </div>
      </section>
    </div>
  </div>

  <script>
    // Login functionality
    document.getElementById('login-form').addEventListener('submit', function(e) {
      e.preventDefault();
      
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      
      if (email && password) {
        // Simple validation - any email and password will work
        document.getElementById('login-page').classList.remove('active');
        document.getElementById('main-page').classList.add('active');
        showModule('ecosistema');
      } else {
        alert('Por favor completa todos los campos');
      }
    });

    // Module navigation
    function showModule(moduleName) {
      // Hide all modules
      const modules = document.getElementsByClassName('module');
      for (let module of modules) {
        module.classList.remove('active');
      }
      
      // Show selected module
      const selectedModule = document.getElementById(moduleName + '-module');
      if (selectedModule) {
        selectedModule.classList.add('active');
      }
      
      // Update navigation buttons
      updateNavButtons(moduleName);
    }

    function updateNavButtons(activeModule) {
      // Desktop nav
      const navButtons = document.getElementsByClassName('nav-btn');
      for (let btn of navButtons) {
        btn.classList.remove('text-green-600', 'font-semibold');
        btn.classList.add('text-gray-600');
      }
      
      // Mobile nav
      const mobileNavButtons = document.getElementsByClassName('nav-btn-mobile');
      for (let btn of mobileNavButtons) {
        btn.classList.remove('bg-green-100', 'text-green-800');
        btn.classList.add('bg-gray-100', 'text-gray-800');
      }
      
      // Highlight active button
      const activeDesktopBtn = Array.from(navButtons).find(btn => 
        btn.textContent.toLowerCase().includes(activeModule.toLowerCase()) ||
        (activeModule === 'ecosistema' && btn.textContent.toLowerCase().includes('ecosistema'))
      );
      
      const activeMobileBtn = Array.from(mobileNavButtons).find(btn => 
        btn.textContent.toLowerCase().includes(activeModule.toLowerCase()) ||
        (activeModule === 'ecosistema' && btn.textContent.toLowerCase().includes('ecosistema'))
      );
      
      if (activeDesktopBtn) {
        activeDesktopBtn.classList.remove('text-gray-600');
        activeDesktopBtn.classList.add('text-green-600', 'font-semibold');
      }
      
      if (activeMobileBtn) {
        activeMobileBtn.classList.remove('bg-gray-100', 'text-gray-800');
        activeMobileBtn.classList.add('bg-green-100', 'text-green-800');
      }
    }

    // Initialize with ecosistema module
    document.addEventListener('DOMContentLoaded', function() {
      showModule('ecosistema');
    });
  </script>
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