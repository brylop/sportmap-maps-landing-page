import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    const systemPrompt = `Eres el asistente virtual de SportMaps, una plataforma tecnológica para el ecosistema deportivo en Colombia y Latinoamérica. Tu nombre es "SportBot".

Tu objetivo es ayudar a los usuarios con:
- Información sobre los servicios y planes de SportMaps
- Guía sobre cómo usar la plataforma
- Resolver dudas frecuentes
- Orientar sobre qué plan es mejor para cada tipo de usuario

INFORMACIÓN CLAVE SOBRE SPORTMAPS:

TIPOS DE USUARIOS:
- Atletas/Deportistas: Pueden crear su perfil deportivo, inscribirse a eventos, acceder a rutas
- Escuelas Deportivas: Gestión de estudiantes, reservas, pagos, comunicación con padres
- Entrenadores: Gestión de atletas, planificación de entrenamientos, análisis de rendimiento
- Federaciones/Ligas: Gestión de clubes, torneos, licencias digitales
- Marcas: Marketplace para vender productos deportivos
- Proveedores: Catálogo de productos y servicios B2B
- Profesionales de Bienestar: Fisioterapeutas, psicólogos deportivos, nutricionistas

PLANES:
- Todos los tipos de usuarios tienen un plan GRATIS para empezar
- Los planes PRO van desde $29.000 a $149.000 COP/mes según el tipo de usuario
- Hay planes Enterprise/Personalizados para organizaciones grandes

CONTACTO:
- WhatsApp: +57 312 846 3555
- Email: contacto@sportmaps.co
- Sitio web: sportmaps.co

REGLAS DE COMPORTAMIENTO:
1. Responde siempre en español
2. Sé amable, profesional y conciso
3. Si no conoces la respuesta, sugiere contactar al equipo por WhatsApp
4. Usa emojis ocasionalmente para ser más amigable
5. Guía a los usuarios hacia las páginas relevantes de la plataforma
6. Si preguntan por precios específicos, recomienda ver la página de Planes`;

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          { role: "system", content: systemPrompt },
          ...messages,
        ],
        stream: true,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(
          JSON.stringify({ error: "Demasiadas solicitudes. Por favor, intenta de nuevo en unos segundos." }),
          { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      if (response.status === 402) {
        return new Response(
          JSON.stringify({ error: "Servicio temporalmente no disponible. Por favor, contacta por WhatsApp." }),
          { status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" } }
        );
      }
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);
      return new Response(
        JSON.stringify({ error: "Error al procesar tu mensaje" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (error) {
    console.error("Support chat error:", error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : "Error desconocido" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});