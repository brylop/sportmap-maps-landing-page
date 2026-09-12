import React, { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ChatBotButton } from "@/components/ChatBotButton";
import { PageLoader } from "@/components/PageLoader";

// Code-splitting por ruta: cada página es su propio chunk, cargado solo
// cuando se visita. El bundle inicial pasó de 1.6 MB a un core compartido +
// el chunk de la ruta que se esté viendo (ver auditoría SEO/AEO 2026-08-25).
// El prerender (scripts/prerender.mjs) sigue funcionando igual: Puppeteer
// espera a que la página termine de cargar antes de capturar el HTML, así
// que el chunk lazy ya está resuelto en el HTML estático que se sirve.
const Index = lazy(() => import("./pages/Index"));
const SobreNosotros = lazy(() => import("./pages/SobreNosotros"));
const CasosExito = lazy(() => import("./pages/CasosExito"));
const Blog = lazy(() => import("./pages/Blog"));
const CentroAyuda = lazy(() => import("./pages/CentroAyuda"));
const TratamientoDatos = lazy(() => import("./pages/TratamientoDatos"));
const Auth = lazy(() => import("./pages/Auth"));
const Admin = lazy(() => import("./pages/Admin"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
import RedireccionPolitica from "./pages/RedireccionPolitica";
const TermsConditions = lazy(() => import("./pages/TermsConditions"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Planes = lazy(() => import("./pages/Planes"));
const Eventos = lazy(() => import("./pages/Eventos"));
const Organizadores = lazy(() => import("./pages/Organizadores"));
const Escuelas = lazy(() => import("./pages/Escuelas"));
const Entrenadores = lazy(() => import("./pages/Entrenadores"));
const Deportistas = lazy(() => import("./pages/Deportistas"));
const Marcas = lazy(() => import("./pages/Marcas"));
const Proveedores = lazy(() => import("./pages/Proveedores"));
const Servicios = lazy(() => import("./pages/Servicios"));
const Federaciones = lazy(() => import("./pages/Federaciones"));
const Bienestar = lazy(() => import("./pages/Bienestar"));
const Equipamiento = lazy(() => import("./pages/Equipamiento"));
const Partners = lazy(() => import("./pages/Partners"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const Comparar = lazy(() => import("./pages/Comparar"));
const Calculadora = lazy(() => import("./pages/Calculadora"));
const HelpArticle = lazy(() => import("./pages/HelpArticle"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="system" storageKey="sportmaps-ui-theme">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/sobre-nosotros" element={<SobreNosotros />} />
              <Route path="/casos-exito" element={<CasosExito />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              <Route path="/comparar/:competidor" element={<Comparar />} />
              <Route path="/calculadora" element={<Calculadora />} />
              <Route path="/ayuda" element={<CentroAyuda />} />
              <Route path="/ayuda/:slug" element={<HelpArticle />} />
              <Route path="/tratamiento-datos" element={<RedireccionPolitica />} />
              <Route path="/auth" element={<Auth />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/privacidad" element={<RedireccionPolitica />} />
              <Route path="/terminos" element={<TermsConditions />} />
              <Route path="/planes" element={<Planes />} />
              <Route path="/eventos" element={<Eventos />} />
              <Route path="/organizadores" element={<Organizadores />} />
              <Route path="/escuelas" element={<Escuelas />} />
              <Route path="/entrenadores" element={<Entrenadores />} />
              <Route path="/deportistas" element={<Deportistas />} />
              <Route path="/marcas" element={<Marcas />} />
              <Route path="/proveedores" element={<Proveedores />} />
              <Route path="/servicios" element={<Servicios />} />
              <Route path="/federaciones" element={<Federaciones />} />
              <Route path="/bienestar" element={<Bienestar />} />
              <Route path="/equipamiento" element={<Equipamiento />} />
              <Route path="/partners" element={<Partners />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
          {/* Floating buttons - global */}
          <WhatsAppButton />
          <ChatBotButton />
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
