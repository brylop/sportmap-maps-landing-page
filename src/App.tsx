import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { ChatBotButton } from "@/components/ChatBotButton";
import Index from "./pages/Index";
import Deportistas from "./pages/Deportistas";
import Escuelas from "./pages/Escuelas";
import Equipamiento from "./pages/Equipamiento";
import Bienestar from "./pages/Bienestar";
import Entrenadores from "./pages/Entrenadores";
import Federaciones from "./pages/Federaciones";
import SobreNosotros from "./pages/SobreNosotros";
import CasosExito from "./pages/CasosExito";
import Blog from "./pages/Blog";
import CentroAyuda from "./pages/CentroAyuda";
import Partners from "./pages/Partners";
import TratamientoDatos from "./pages/TratamientoDatos";
import Auth from "./pages/Auth";
import Admin from "./pages/Admin";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";
import StyleGuide from "./pages/StyleGuide";
import NotFound from "./pages/NotFound";
import Planes from "./pages/Planes";
import Marcas from "./pages/Marcas";
import Proveedores from "./pages/Proveedores";
import Servicios from "./pages/Servicios";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="system" storageKey="sportmaps-ui-theme">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/deportistas" element={<Deportistas />} />
            <Route path="/escuelas" element={<Escuelas />} />
            <Route path="/equipamiento" element={<Equipamiento />} />
            <Route path="/bienestar" element={<Bienestar />} />
            <Route path="/entrenadores" element={<Entrenadores />} />
            <Route path="/federaciones" element={<Federaciones />} />
            <Route path="/sobre-nosotros" element={<SobreNosotros />} />
            <Route path="/casos-exito" element={<CasosExito />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/ayuda" element={<CentroAyuda />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/tratamiento-datos" element={<TratamientoDatos />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/privacidad" element={<PrivacyPolicy />} />
            <Route path="/terminos" element={<TermsConditions />} />
            <Route path="/style-guide" element={<StyleGuide />} />
            <Route path="/planes" element={<Planes />} />
            <Route path="/marcas" element={<Marcas />} />
            <Route path="/proveedores" element={<Proveedores />} />
            <Route path="/servicios" element={<Servicios />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          {/* Floating buttons - global */}
          <WhatsAppButton />
          <ChatBotButton />
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
