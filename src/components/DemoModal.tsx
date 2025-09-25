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
  <title>SportMaps - Demo Completo</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet">
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
    
    body { font-family: 'Inter', sans-serif; }
    
    .gradient-bg { 
      background: linear-gradient(135deg, #38e07b, #22B14C); 
    }
    
    .card-shadow { 
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06); 
    }
    
    .card-shadow:hover { 
      box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05); 
    }
    
    .calendar-day {
      @apply w-10 h-10 flex items-center justify-center rounded-lg cursor-pointer transition-all;
    }
    
    .calendar-day.available {
      @apply bg-green-50 text-gray-700 hover:bg-green-100;
    }
    
    .calendar-day.selected {
      @apply bg-green-500 text-white;
    }
    
    .calendar-day.unavailable {
      @apply bg-gray-100 text-gray-400 cursor-not-allowed;
    }
    
    .time-slot {
      @apply px-4 py-2 border border-gray-300 rounded-lg cursor-pointer transition-all;
    }
    
    .time-slot.available {
      @apply hover:border-green-500 hover:bg-green-50;
    }
    
    .time-slot.selected {
      @apply bg-green-500 text-white border-green-500;
    }
    
    .time-slot.booked {
      @apply bg-gray-100 text-gray-400 cursor-not-allowed;
    }

    .page {
      display: none;
    }

    .page.active {
      display: block;
    }
  </style>
</head>
<body class="bg-gray-50">

  <!-- Login Page -->
  <div id="login-page" class="page active min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-blue-50">
    <div class="max-w-md w-full space-y-8 p-8">
      <div class="text-center">
        <div class="flex items-center justify-center gap-3 mb-6">
          <div class="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
            <i class="fas fa-map-location-dot text-white"></i>
          </div>
          <h1 class="text-3xl font-bold text-gray-900">SportMaps</h1>
        </div>
        <h2 class="text-xl font-semibold text-gray-900">Bienvenido de nuevo</h2>
        <p class="text-gray-600">Inicia sesión para continuar</p>
      </div>
      
      <form class="mt-8 space-y-6" onsubmit="return false;">
        <div class="space-y-4">
          <div>
            <input type="email" placeholder="correo@ejemplo.com" 
                   class="w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent">
          </div>
          <div>
            <input type="password" placeholder="********" 
                   class="w-full px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent">
          </div>
          <div class="flex items-center justify-between">
            <label class="flex items-center">
              <input type="checkbox" class="w-4 h-4 text-green-600 border-gray-300 rounded focus:ring-green-500">
              <span class="ml-2 text-sm text-gray-600">Recordarme</span>
            </label>
            <a href="#" class="text-sm text-green-600 hover:text-green-500">Olvidé mi contraseña</a>
          </div>
        </div>
        
        <button type="button" onclick="showPage('explore-page')" 
                class="w-full bg-green-500 text-black py-3 px-4 rounded-lg font-semibold hover:bg-green-600 transition-colors">
          Iniciar Sesión
        </button>
        
        <div class="text-center">
          <span class="text-gray-600">¿No tienes una cuenta? </span>
          <a href="#" class="text-green-600 hover:text-green-500 font-semibold">Crear una</a>
        </div>
      </form>
    </div>
  </div>

  <!-- Explore Page -->
  <div id="explore-page" class="page min-h-screen bg-gray-50">
    <!-- Header -->
    <header class="bg-white shadow-sm border-b">
      <div class="max-w-7xl mx-auto px-4 py-4">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-3">
            <div class="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
              <i class="fas fa-map-location-dot text-white text-sm"></i>
            </div>
            <h1 class="text-2xl font-bold text-gray-900">SportMaps</h1>
          </div>
          
          <div class="flex-1 max-w-lg mx-8">
            <div class="relative">
              <input type="text" placeholder="Buscar clases, deportes, entrenadores..." 
                     class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500">
              <i class="fas fa-search absolute left-3 top-3 text-gray-400"></i>
            </div>
          </div>
          
          <nav class="hidden md:flex items-center gap-6">
            <a href="#" class="text-gray-600 hover:text-green-600">Inicio</a>
            <a href="#" class="text-green-600 font-semibold">Explorar</a>
            <a href="#" class="text-gray-600 hover:text-green-600">Tienda</a>
            <a href="#" class="text-gray-600 hover:text-green-600">Bienestar</a>
            <div class="w-8 h-8 bg-gray-300 rounded-full"></div>
          </nav>
        </div>
      </div>
    </header>

    <main class="max-w-7xl mx-auto px-4 py-8">
      <!-- Filters -->
      <div class="bg-white rounded-lg p-6 mb-8 card-shadow">
        <h3 class="font-semibold text-gray-900 mb-4">Filtros de búsqueda</h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Deporte</label>
            <div class="flex flex-wrap gap-2">
              <span class="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm cursor-pointer">Fútbol</span>
              <span class="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm cursor-pointer">Baloncesto</span>
              <span class="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm cursor-pointer">Yoga</span>
              <span class="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm cursor-pointer">Atletismo</span>
            </div>
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Ubicación</label>
            <div class="relative">
              <input type="text" placeholder="Bogotá, Colombia" 
                     class="w-full pl-8 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500">
              <i class="fas fa-map-marker-alt absolute left-2 top-3 text-gray-400"></i>
            </div>
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Edad</label>
            <select class="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500">
              <option>Todas</option>
              <option>4-7 años</option>
              <option selected>8-12 años</option>
              <option>13-17 años</option>
              <option>Adultos</option>
            </select>
          </div>
        </div>
      </div>

      <!-- Classes Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <!-- Class Card 1 -->
        <div class="bg-white rounded-lg overflow-hidden card-shadow">
          <img src="https://images.unsplash.com/photo-1553778263-73a83bab9b0c?w=400&h=200&fit=crop" 
               alt="Academia de Fútbol" class="w-full h-48 object-cover">
          <div class="p-6">
            <h3 class="font-bold text-xl mb-2">Academia de Fútbol Juvenil</h3>
            <p class="text-gray-600 mb-2">Prof. Carlos Valderrama</p>
            <div class="flex items-center mb-3">
              <div class="flex text-yellow-400">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
              </div>
              <span class="ml-2 text-sm text-gray-600">4.8 (124 reseñas)</span>
            </div>
            <p class="text-gray-600 text-sm mb-4">Entrenamiento técnico y táctico para jóvenes futbolistas. Enfoque en fundamentos y trabajo en equipo.</p>
            <div class="flex flex-wrap gap-2 mb-4">
              <span class="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs">Fútbol</span>
              <span class="px-2 py-1 bg-green-100 text-green-800 rounded text-xs">Sub-12</span>
              <span class="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">Bogotá</span>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-2xl font-bold text-green-600">$45.000<span class="text-sm text-gray-500">/sesión</span></span>
              <button onclick="selectClass('Academia de Fútbol Juvenil', 'Carlos Valderrama', '45.000')" 
                      class="bg-green-500 text-black px-6 py-2 rounded-lg font-semibold hover:bg-green-600 transition-colors">
                Ver disponibilidad
              </button>
            </div>
          </div>
        </div>

        <!-- Class Card 2 -->
        <div class="bg-white rounded-lg overflow-hidden card-shadow">
          <img src="https://images.unsplash.com/photo-1546519638-68e109498ffc?w=400&h=200&fit=crop" 
               alt="Baloncesto Elite" class="w-full h-48 object-cover">
          <div class="p-6">
            <h3 class="font-bold text-xl mb-2">Entrenamiento de Baloncesto Elite</h3>
            <p class="text-gray-600 mb-2">Prof. Juan Pablo Ángel</p>
            <div class="flex items-center mb-3">
              <div class="flex text-yellow-400">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star-half-alt"></i>
              </div>
              <span class="ml-2 text-sm text-gray-600">4.6 (89 reseñas)</span>
            </div>
            <p class="text-gray-600 text-sm mb-4">Desarrollo de habilidades avanzadas en baloncesto. Técnica de tiro, manejo del balón y estrategias de juego.</p>
            <div class="flex flex-wrap gap-2 mb-4">
              <span class="px-2 py-1 bg-orange-100 text-orange-800 rounded text-xs">Baloncesto</span>
              <span class="px-2 py-1 bg-green-100 text-green-800 rounded text-xs">Sub-12</span>
              <span class="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">Bogotá</span>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-2xl font-bold text-green-600">$50.000<span class="text-sm text-gray-500">/sesión</span></span>
              <button onclick="selectClass('Entrenamiento de Baloncesto Elite', 'Juan Pablo Ángel', '50.000')" 
                      class="bg-green-500 text-black px-6 py-2 rounded-lg font-semibold hover:bg-green-600 transition-colors">
                Ver disponibilidad
              </button>
            </div>
          </div>
        </div>

        <!-- Class Card 3 -->
        <div class="bg-white rounded-lg overflow-hidden card-shadow">
          <img src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=200&fit=crop" 
               alt="Yoga para niños" class="w-full h-48 object-cover">
          <div class="p-6">
            <h3 class="font-bold text-xl mb-2">Yoga y Mindfulness Infantil</h3>
            <p class="text-gray-600 mb-2">Prof. María Fernanda López</p>
            <div class="flex items-center mb-3">
              <div class="flex text-yellow-400">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
              </div>
              <span class="ml-2 text-sm text-gray-600">4.9 (67 reseñas)</span>
            </div>
            <p class="text-gray-600 text-sm mb-4">Sesiones de yoga adaptadas para niños. Mejora la flexibilidad, concentración y bienestar emocional.</p>
            <div class="flex flex-wrap gap-2 mb-4">
              <span class="px-2 py-1 bg-purple-100 text-purple-800 rounded text-xs">Yoga</span>
              <span class="px-2 py-1 bg-green-100 text-green-800 rounded text-xs">8-12 años</span>
              <span class="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">Bogotá</span>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-2xl font-bold text-green-600">$35.000<span class="text-sm text-gray-500">/sesión</span></span>
              <button onclick="selectClass('Yoga y Mindfulness Infantil', 'María Fernanda López', '35.000')" 
                      class="bg-green-500 text-black px-6 py-2 rounded-lg font-semibold hover:bg-green-600 transition-colors">
                Ver disponibilidad
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>

  <!-- Booking Page -->
  <div id="booking-page" class="page min-h-screen bg-gray-50">
    <!-- Header -->
    <header class="bg-white shadow-sm border-b">
      <div class="max-w-7xl mx-auto px-4 py-4">
        <div class="flex items-center justify-between">
          <button onclick="showPage('explore-page')" class="flex items-center gap-2 text-gray-600 hover:text-gray-900">
            <i class="fas fa-arrow-left"></i>
            <span>Volver a explorar</span>
          </button>
          <div class="flex items-center gap-3">
            <div class="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
              <i class="fas fa-map-location-dot text-white text-sm"></i>
            </div>
            <h1 class="text-2xl font-bold text-gray-900">SportMaps</h1>
          </div>
          <div class="w-8 h-8 bg-gray-300 rounded-full"></div>
        </div>
      </div>
    </header>

    <main class="max-w-4xl mx-auto px-4 py-8">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <!-- Class Details -->
        <div class="bg-white rounded-lg p-6 card-shadow">
          <img id="booking-image" src="https://images.unsplash.com/photo-1553778263-73a83bab9b0c?w=600&h=300&fit=crop" 
               alt="Clase seleccionada" class="w-full h-64 object-cover rounded-lg mb-6">
          
          <h1 id="booking-title" class="text-3xl font-bold mb-4">Academia de Fútbol Juvenil</h1>
          
          <div class="space-y-4">
            <div class="flex items-center gap-3">
              <i class="fas fa-user-tie text-green-500"></i>
              <span id="booking-instructor">Prof. Carlos Valderrama</span>
            </div>
            <div class="flex items-center gap-3">
              <i class="fas fa-star text-yellow-400"></i>
              <span>4.8 (124 reseñas)</span>
            </div>
            <div class="flex items-center gap-3">
              <i class="fas fa-map-marker-alt text-green-500"></i>
              <span>Cancha Deportiva El Campín, Bogotá</span>
            </div>
            <div class="flex items-center gap-3">
              <i class="fas fa-dollar-sign text-green-500"></i>
              <span class="text-2xl font-bold text-green-600">$<span id="booking-price">45.000</span>/sesión</span>
            </div>
          </div>
          
          <div class="mt-6 p-4 bg-gray-50 rounded-lg">
            <h3 class="font-semibold mb-2">Descripción completa</h3>
            <p class="text-gray-600">Entrenamiento técnico y táctico diseñado específicamente para jóvenes futbolistas. Nos enfocamos en desarrollar los fundamentos del fútbol, el trabajo en equipo y las habilidades individuales. Las sesiones incluyen ejercicios de técnica, táctica básica y juegos dirigidos.</p>
          </div>
        </div>

        <!-- Booking Form -->
        <div class="bg-white rounded-lg p-6 card-shadow">
          <h2 class="text-2xl font-bold mb-6">Selecciona fecha y hora</h2>
          
          <!-- Calendar -->
          <div class="mb-6">
            <h3 class="font-semibold mb-4">Fecha disponible</h3>
            <div class="grid grid-cols-7 gap-1 text-center text-sm">
              <div class="p-2 text-gray-500">Dom</div>
              <div class="p-2 text-gray-500">Lun</div>
              <div class="p-2 text-gray-500">Mar</div>
              <div class="p-2 text-gray-500">Mié</div>
              <div class="p-2 text-gray-500">Jue</div>
              <div class="p-2 text-gray-500">Vie</div>
              <div class="p-2 text-gray-500">Sáb</div>
              
              <div class="calendar-day unavailable">26</div>
              <div class="calendar-day unavailable">27</div>
              <div class="calendar-day available" onclick="selectDate(this, '28')">28</div>
              <div class="calendar-day unavailable">29</div>
              <div class="calendar-day available" onclick="selectDate(this, '30')">30</div>
              <div class="calendar-day unavailable">31</div>
              <div class="calendar-day unavailable">1</div>
            </div>
            <p class="text-sm text-gray-500 mt-2">Martes y Jueves disponibles</p>
          </div>

          <!-- Time Slots -->
          <div class="mb-6">
            <h3 class="font-semibold mb-4">Hora disponible</h3>
            <div id="time-slots" class="grid grid-cols-2 gap-3">
              <div class="time-slot booked">9:00 AM<br><small class="text-xs">Reservado</small></div>
              <div class="time-slot available" onclick="selectTime(this, '10:30 AM')">10:30 AM</div>
              <div class="time-slot available" onclick="selectTime(this, '4:00 PM')">4:00 PM</div>
              <div class="time-slot available" onclick="selectTime(this, '5:30 PM')">5:30 PM</div>
            </div>
          </div>

          <!-- Booking Summary -->
          <div class="border-t pt-4">
            <div class="space-y-2 mb-4">
              <div class="flex justify-between">
                <span>Fecha seleccionada:</span>
                <span id="selected-date" class="font-semibold">-</span>
              </div>
              <div class="flex justify-between">
                <span>Hora seleccionada:</span>
                <span id="selected-time" class="font-semibold">-</span>
              </div>
              <div class="flex justify-between text-lg font-bold">
                <span>Total:</span>
                <span class="text-green-600">$<span id="total-price">45.000</span></span>
              </div>
            </div>
            
            <button id="confirm-booking" onclick="confirmBooking()" disabled
                    class="w-full bg-gray-300 text-gray-500 py-3 rounded-lg font-semibold cursor-not-allowed">
              Confirmar Reserva
            </button>
          </div>
        </div>
      </div>
    </main>
  </div>

  <!-- Dashboard Page -->
  <div id="dashboard-page" class="page min-h-screen bg-gray-50">
    <!-- Header -->
    <header class="bg-white shadow-sm border-b">
      <div class="max-w-7xl mx-auto px-4 py-4">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-3">
            <div class="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
              <i class="fas fa-map-location-dot text-white text-sm"></i>
            </div>
            <h1 class="text-2xl font-bold text-gray-900">SportMaps</h1>
          </div>
          
          <nav class="hidden md:flex items-center gap-6">
            <a href="#" onclick="showPage('explore-page')" class="text-gray-600 hover:text-green-600">Explorar</a>
            <a href="#" class="text-green-600 font-semibold">Mi Dashboard</a>
            <a href="#" class="text-gray-600 hover:text-green-600">Tienda</a>
            <a href="#" class="text-gray-600 hover:text-green-600">Bienestar</a>
            <div class="w-8 h-8 bg-green-200 rounded-full flex items-center justify-center">
              <span class="text-green-800 font-semibold text-sm">S</span>
            </div>
          </nav>
        </div>
      </div>
    </header>

    <main class="max-w-7xl mx-auto px-4 py-8">
      <!-- Welcome Section -->
      <div class="mb-8">
        <h1 class="text-3xl font-bold text-gray-900 mb-2">¡Hola, Sofia! 👋</h1>
        <p class="text-gray-600">Aquí tienes un resumen de tus actividades deportivas</p>
      </div>

      <!-- Summary Cards -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div class="bg-white rounded-lg p-6 card-shadow">
          <div class="flex items-center gap-4">
            <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <i class="fas fa-calendar-check text-green-600 text-xl"></i>
            </div>
            <div>
              <h3 class="font-semibold text-gray-900">Próxima actividad</h3>
              <p class="text-sm text-gray-600" id="next-activity">Clase de Fútbol Sub-12</p>
              <p class="text-xs text-green-600 font-semibold" id="next-activity-time">Mañana 10:30-11:30</p>
            </div>
          </div>
        </div>

        <div class="bg-white rounded-lg p-6 card-shadow">
          <div class="flex items-center gap-4">
            <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <i class="fas fa-calendar-week text-blue-600 text-xl"></i>
            </div>
            <div>
              <h3 class="font-semibold text-gray-900">Esta semana</h3>
              <p class="text-2xl font-bold text-blue-600">3</p>
              <p class="text-xs text-gray-600">actividades programadas</p>
            </div>
          </div>
        </div>

        <div class="bg-white rounded-lg p-6 card-shadow">
          <div class="flex items-center gap-4">
            <div class="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
              <i class="fas fa-star text-yellow-600 text-xl"></i>
            </div>
            <div>
              <h3 class="font-semibold text-gray-900">Puntos SportMaps</h3>
              <p class="text-2xl font-bold text-yellow-600">1,250</p>
              <p class="text-xs text-gray-600">¡Sigue así!</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Upcoming Activities -->
      <div class="bg-white rounded-lg p-6 card-shadow mb-8">
        <h2 class="text-xl font-bold mb-4">Mis Próximas Actividades</h2>
        <div class="space-y-4">
          <div class="flex items-center gap-4 p-4 border border-green-200 rounded-lg bg-green-50">
            <img src="https://images.unsplash.com/photo-1553778263-73a83bab9b0c?w=80&h=80&fit=crop" 
                 alt="Fútbol" class="w-16 h-16 rounded-lg object-cover">
            <div class="flex-1">
              <h3 class="font-semibold" id="dashboard-class-title">Academia de Fútbol Juvenil</h3>
              <p class="text-sm text-gray-600">Prof. <span id="dashboard-instructor">Carlos Valderrama</span></p>
              <p class="text-sm text-green-600 font-semibold" id="dashboard-schedule">Mañana 10:30 - 11:30 AM</p>
            </div>
            <div class="flex gap-2">
              <span class="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs">Fútbol</span>
              <span class="px-2 py-1 bg-green-100 text-green-800 rounded text-xs">Sub-12</span>
            </div>
          </div>

          <div class="flex items-center gap-4 p-4 border border-gray-200 rounded-lg">
            <img src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=80&h=80&fit=crop" 
                 alt="Yoga" class="w-16 h-16 rounded-lg object-cover">
            <div class="flex-1">
              <h3 class="font-semibold">Yoga y Mindfulness Infantil</h3>
              <p class="text-sm text-gray-600">Prof. María Fernanda López</p>
              <p class="text-sm text-gray-600">Jueves 4:00 - 5:00 PM</p>
            </div>
            <div class="flex gap-2">
              <span class="px-2 py-1 bg-purple-100 text-purple-800 rounded text-xs">Yoga</span>
              <span class="px-2 py-1 bg-green-100 text-green-800 rounded text-xs">8-12 años</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Recommendations -->
      <div class="bg-white rounded-lg p-6 card-shadow">
        <h2 class="text-xl font-bold mb-4">Recomendaciones para ti</h2>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div class="text-center p-4 border border-gray-200 rounded-lg hover:border-green-500 hover:bg-green-50 cursor-pointer transition-all">
            <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
              <i class="fas fa-futbol text-blue-600"></i>
            </div>
            <h4 class="font-semibold text-sm">Fútbol Avanzado</h4>
          </div>
          
          <div class="text-center p-4 border border-gray-200 rounded-lg hover:border-green-500 hover:bg-green-50 cursor-pointer transition-all">
            <div class="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
              <i class="fas fa-om text-purple-600"></i>
            </div>
            <h4 class="font-semibold text-sm">Yoga</h4>
          </div>
          
          <div class="text-center p-4 border border-gray-200 rounded-lg hover:border-green-500 hover:bg-green-50 cursor-pointer transition-all">
            <div class="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-2">
              <i class="fas fa-running text-red-600"></i>
            </div>
            <h4 class="font-semibold text-sm">Atletismo</h4>
          </div>
          
          <div class="text-center p-4 border border-gray-200 rounded-lg hover:border-green-500 hover:bg-green-50 cursor-pointer transition-all">
            <div class="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-2">
              <i class="fas fa-tshirt text-gray-600"></i>
            </div>
            <h4 class="font-semibold text-sm">Equipamiento</h4>
          </div>
        </div>
      </div>
    </main>
  </div>

  <script>
    let selectedClass = {};
    let selectedDate = null;
    let selectedTime = null;

    function showPage(pageId) {
      document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
      });
      document.getElementById(pageId).classList.add('active');
    }

    function selectClass(title, instructor, price) {
      selectedClass = { title, instructor, price };
      document.getElementById('booking-title').textContent = title;
      document.getElementById('booking-instructor').textContent = 'Prof. ' + instructor;
      document.getElementById('booking-price').textContent = price;
      document.getElementById('total-price').textContent = price;
      
      // Update image based on class
      let imageSrc = "https://images.unsplash.com/photo-1553778263-73a83bab9b0c?w=600&h=300&fit=crop";
      if (title.includes('Baloncesto')) {
        imageSrc = "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=600&h=300&fit=crop";
      } else if (title.includes('Yoga')) {
        imageSrc = "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&h=300&fit=crop";
      }
      document.getElementById('booking-image').src = imageSrc;
      
      showPage('booking-page');
    }

    function selectDate(element, date) {
      document.querySelectorAll('.calendar-day').forEach(day => {
        day.classList.remove('selected');
      });
      element.classList.add('selected');
      selectedDate = date;
      document.getElementById('selected-date').textContent = 'Marzo ' + date;
      checkBookingComplete();
    }

    function selectTime(element, time) {
      document.querySelectorAll('.time-slot').forEach(slot => {
        slot.classList.remove('selected');
      });
      element.classList.add('selected');
      selectedTime = time;
      document.getElementById('selected-time').textContent = time;
      checkBookingComplete();
    }

    function checkBookingComplete() {
      const confirmBtn = document.getElementById('confirm-booking');
      if (selectedDate && selectedTime) {
        confirmBtn.disabled = false;
        confirmBtn.className = 'w-full bg-green-500 text-black py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors cursor-pointer';
        confirmBtn.textContent = 'Confirmar Reserva';
      }
    }

    function confirmBooking() {
      if (selectedDate && selectedTime) {
        // Update dashboard with booking info
        document.getElementById('dashboard-class-title').textContent = selectedClass.title;
        document.getElementById('dashboard-instructor').textContent = selectedClass.instructor;
        document.getElementById('dashboard-schedule').textContent = 'Marzo ' + selectedDate + ' ' + selectedTime;
        document.getElementById('next-activity').textContent = selectedClass.title;
        document.getElementById('next-activity-time').textContent = 'Marzo ' + selectedDate + ' ' + selectedTime;
        
        showPage('dashboard-page');
      }
    }
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