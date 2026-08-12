🏆 SportMaps Ecosystem v1.3

> **Plataforma SaaS integral para la gestión y conexión del ecosistema deportivo**

![React](https://img.shields.io/badge/React-18.3-61DAFB?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-06B6D4?style=flat-square&logo=tailwindcss)
![Vite](https://img.shields.io/badge/Vite-5.0-646CFF?style=flat-square&logo=vite)
![Status](https://img.shields.io/badge/Status-Stable-success?style=flat-square)
![License](https://img.shields.io/badge/License-MIT-blue?style=flat-square)

---

## 📋 Descripción

**SportMaps** es un ecosistema digital integral que conecta los 4 actores principales del mundo deportivo:

| Actor | Descripción |
|-------|-------------|
| 🏃 **Deportistas** | Atletas que buscan academias, entrenadores y equipamiento |
| 🏫 **Academias** | Escuelas deportivas que gestionan estudiantes y programas |
| 🏭 **Proveedores** | Marcas y empresas de equipamiento deportivo |
| 👨‍🏫 **Entrenadores** | Profesionales que ofrecen servicios de coaching |

### Funcionalidades Core

- 🛒 **Marketplace** - Tienda de equipamiento con matching inteligente
- 📊 **SaaS de Gestión** - Herramientas para academias y entrenadores
- 🤝 **Red Social** - Conexión entre actores del ecosistema
- 🎯 **Patrocinios IA** - Sistema de matching marca-deportista (SponsorMatch)

---

## 🏗️ Arquitectura del Proyecto

El proyecto sigue los principios de **Domain-Driven Design (DDD)** y **Atomic Design** para máxima escalabilidad y mantenibilidad.

```
📦 src/
├── 📂 components/
│   ├── 📂 common/                    # 🔷 Componentes Atómicos Reutilizables
│   │   └── 📂 cards/
│   │       ├── PricingCard.tsx       # Tarjeta de planes de precio
│   │       ├── StepCard.tsx          # Tarjeta de pasos/procesos
│   │       ├── TestimonialCard.tsx   # Tarjeta de testimonios
│   │       ├── PainPointCard.tsx     # Tarjeta de puntos de dolor
│   │       └── index.ts              # Barrel export
│   │
│   ├── 📂 ui/                        # 🎨 Design System (shadcn/ui)
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── dialog.tsx
│   │   └── ... (50+ componentes base)
│   │
│   ├── 📂 sections/                  # 📄 Secciones de Landing (DDD)
│   │   ├── 📂 Pricing/
│   │   │   ├── PricingHeroSection.tsx
│   │   │   ├── PlansSection.tsx
│   │   │   ├── ComparisonSection.tsx
│   │   │   └── index.ts
│   │   ├── 📂 ValueProp/
│   │   │   ├── PainPointsSection.tsx
│   │   │   ├── SponsorshipsSection.tsx
│   │   │   └── index.ts
│   │   ├── 📂 CTA/
│   │   │   └── CTAFinalSection.tsx
│   │   ├── 📂 Testimonials/
│   │   │   └── TestimonialsSection.tsx
│   │   ├── HomeContent.tsx           # Composición principal
│   │   ├── NetworkSection.tsx        # Visualización 3D de red
│   │   └── index.ts                  # Barrel export
│   │
│   ├── 📂 modules/                   # 🧩 Módulos de Negocio
│   │   ├── EcosistemaModule.tsx      # Vista del ecosistema
│   │   ├── EscuelasModule.tsx        # Gestión de academias
│   │   ├── TiendaModule.tsx          # Marketplace
│   │   ├── NutricionModule.tsx       # Planes nutricionales
│   │   ├── BienestarModule.tsx       # Bienestar deportivo
│   │   ├── UneteModule.tsx           # Registro de partners
│   │   └── AcercaModule.tsx          # Información corporativa
│   │
│   ├── 📂 modals/                    # 💬 Sistema de Modales
│   │   ├── ContactModal.tsx          # Formulario de contacto
│   │   ├── JoinTechModal.tsx         # Unirse al equipo tech
│   │   ├── ApiAccessModal.tsx        # Solicitar acceso API
│   │   ├── ApiDocModal.tsx           # Documentación API
│   │   ├── PartnerSchoolModal.tsx    # Registro escuelas
│   │   ├── PartnerProviderModal.tsx  # Registro proveedores
│   │   └── PartnerTrainerModal.tsx   # Registro entrenadores
│   │
│   ├── 📂 forms/                     # 📝 Formularios Especializados
│   │   ├── ContactForm.tsx
│   │   ├── JoinTechForm.tsx
│   │   ├── ApiAccessForm.tsx
│   │   ├── PartnerSchoolForm.tsx
│   │   ├── PartnerProviderForm.tsx
│   │   └── PartnerTrainerForm.tsx
│   │
│   ├── 📂 layout/                    # 🖼️ Componentes de Layout
│   │   ├── PageLayout.tsx            # Layout principal
│   │   └── index.ts
│   │
│   └── 📄 [Componentes Standalone]
│       ├── TechHeader.tsx            # Header principal
│       ├── TechHeroSection.tsx       # Hero con terminal
│       ├── ParallaxHero.tsx          # Efecto parallax
│       ├── ThreeScene.tsx            # Escena 3D React Three Fiber
│       ├── AnimatedSection.tsx       # Wrapper de animaciones
│       ├── TestimonialsCarousel.tsx  # Carrusel de testimonios
│       ├── StatsSection.tsx          # Métricas animadas
│       ├── SEO.tsx                   # Meta tags dinámicos
│       ├── SEOFooter.tsx             # Footer SEO-optimizado
│       └── WhatsAppButton.tsx        # Botón flotante WhatsApp
│
├── 📂 hooks/                         # 🪝 Custom Hooks
│   ├── usePageNavigation.ts          # Navegación SPA
│   ├── use-mobile.tsx                # Detección responsive
│   └── use-toast.ts                  # Sistema de notificaciones
│
├── 📂 pages/                         # 📱 Páginas/Rutas
│   ├── Index.tsx                     # Landing principal
│   ├── Auth.tsx                      # Autenticación
│   ├── Admin.tsx                     # Panel administrativo
│   ├── Deportistas.tsx               # Vista deportistas
│   ├── Escuelas.tsx                  # Vista escuelas
│   ├── Equipamiento.tsx              # Marketplace
│   ├── Bienestar.tsx                 # Bienestar
│   └── NotFound.tsx                  # 404
│
├── 📂 integrations/                  # 🔌 Integraciones Externas
│   └── 📂 supabase/
│       ├── client.ts                 # Cliente Supabase
│       └── types.ts                  # Tipos auto-generados
│
├── 📂 lib/                           # 🛠️ Utilidades
│   ├── utils.ts                      # Helpers generales
│   └── supabase.ts                   # Config Supabase
│
└── 📂 assets/                        # 🖼️ Assets Estáticos
    └── [imágenes optimizadas]
```

### Filosofía de Arquitectura

| Capa | Propósito | Ejemplo |
|------|-----------|---------|
| **common/** | Átomos reutilizables sin lógica de negocio | `PricingCard`, `StepCard` |
| **ui/** | Design System base (shadcn) | `Button`, `Dialog`, `Input` |
| **sections/** | Secciones de página con dominio específico | `PricingHeroSection` |
| **modules/** | Módulos de negocio completos | `EcosistemaModule` |
| **modals/** | Interfaces flotantes y formularios | `ContactModal` |
| **layout/** | Estructuras de página | `PageLayout` |

---

## ✨ Características Técnicas

### 🧠 Smart Matching (SponsorMatch)
Sistema de IA que conecta deportistas con marcas patrocinadoras basado en afinidad.

```typescript
// Flujo de patrocinios inteligentes
1. Usuario publica necesidad → "Uniformes para 50 niños"
2. IA matchea sponsors     → Adidas (92% afinidad)
3. Smart contract          → Escrow + Verificación
4. Distribución            → 93% usuario / 7% plataforma
```

### 🌐 Interactive Node Network
Visualización 3D del ecosistema usando **React Three Fiber**.

```typescript
// ThreeScene.tsx - Red de nodos interactiva
<Canvas>
  <OrbitControls />
  <NetworkNodes connections={ecosystemData} />
  <ParticleField />
</Canvas>
```

### 💰 Dynamic Pricing Tables
Sistema de planes configurables con comparativas en tiempo real.

```typescript
// Planes: Starter ($19) | Pro ($49) | Elite ($99)
// Todos incluyen: 14 días gratis, sin tarjeta
```

### 👥 Multi-tenant Roles
Selector de perspectiva que adapta la UI según el rol del usuario.

```typescript
type UserRole = 'deportista' | 'escuela' | 'proveedor' | 'entrenador';
```

---

## 🚀 Instalación

### Requisitos Previos

- Node.js **v18+**
- npm o bun
- Git

### Pasos de Instalación

```bash
# 1. Clonar el repositorio
git clone https://github.com/sportmaps/sportmaps-ecosystem.git

# 2. Entrar al directorio
cd sportmaps-ecosystem

# 3. Instalar dependencias
npm install

# 4. Ejecutar en desarrollo
npm run dev

# 5. Build de producción
npm run build

# 6. Preview del build
npm run preview
```

### Variables de Entorno

```env
VITE_SUPABASE_URL=<tu-supabase-url>
VITE_SUPABASE_PUBLISHABLE_KEY=<tu-anon-key>
```

---

## 🎨 Sistema de Diseño

### Modo Visual
- **Dark Mode por defecto** - Fondo oscuro profesional
- **Gradientes neón** - Acentos en verde (#00F5A0) y azul (#00D9F5)
- **Glassmorphism** - Transparencias con backdrop-blur

### Paleta de Colores

| Token | Color | Uso |
|-------|-------|-----|
| `sport-primary` | `#00F5A0` | CTAs, enlaces activos |
| `sport-accent` | `#00D9F5` | Acentos secundarios |
| `sport-background` | `#0A0F1C` | Fondo principal |
| `sport-card` | `#111827` | Tarjetas y surfaces |
| `sport-highlight` | `#F97316` | Alertas, warnings |
| `sport-success` | `#22C55E` | Estados exitosos |

### Tipografía
- **Display:** Space Grotesk (headlines)
- **Body:** Inter (texto general)

---

## 📦 Stack Tecnológico

| Categoría | Tecnología |
|-----------|------------|
| **Framework** | React 18 + TypeScript |
| **Build Tool** | Vite 5 |
| **Styling** | Tailwind CSS 3.4 |
| **UI Components** | shadcn/ui + Radix |
| **Animations** | Framer Motion |
| **3D Graphics** | React Three Fiber + Three.js |
| **State** | TanStack Query |
| **Forms** | React Hook Form + Zod |
| **Backend** | Supabase (Auth + DB + Edge Functions) |
| **Routing** | React Router DOM v6 |

---

## 📂 Scripts Disponibles

```bash
npm run dev        # Servidor de desarrollo
npm run build      # Build de producción
npm run preview    # Preview del build
npm run lint       # Linting con ESLint
```

---

## 🌐 Despliegue

El proyecto está configurado para despliegue automático en Vercel con:

- ✅ SSL automático
- ✅ CDN global
- ✅ Preview deployments
- ✅ Custom domains

---

## 🤝 Contacto

| Canal | Enlace |
|-------|--------|
| 📧 Email | spoortmaps@gmail.com |
| 🌐 Web | [sportmaps.co](https://sportmaps.co) |
| 📱 WhatsApp | +57 320 268 3539 |
| 🐦 Twitter | [@spoort_maps](https://twitter.com/spoort_maps) |
| 📸 Instagram | [@spoortmaps](https://instagram.com/spoortmaps) |

---

## 📄 Licencia

Este proyecto está bajo la licencia **MIT**. Ver [LICENSE](LICENSE) para más detalles.

---

<div align="center">

**Hecho con 💚 por el equipo SportMaps**

*Conectando el futuro del deporte digital*

