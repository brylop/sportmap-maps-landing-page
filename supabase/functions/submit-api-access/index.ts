import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

// HTML escape function to prevent XSS
function escapeHtml(text: string): string {
  const map: { [key: string]: string } = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, company, usageType, projectDescription, endpoints } = await req.json();

    // Validate required fields
    if (!name || !email || !company || !usageType || !projectDescription || !endpoints) {
      return new Response(
        JSON.stringify({ error: "Todos los campos son requeridos" }),
        { 
          status: 400, 
          headers: { ...corsHeaders, "Content-Type": "application/json" }
        }
      );
    }

    // Escape all inputs to prevent XSS
    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeCompany = escapeHtml(company);
    const safeUsageType = escapeHtml(usageType);
    const safeProjectDescription = escapeHtml(projectDescription);
    const safeEndpoints = escapeHtml(endpoints);

    // Send email using Resend
    const emailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "SportMaps <onboarding@resend.dev>",
        to: ["spoortmaps@gmail.com"],
        subject: `Nueva Solicitud de Acceso a API - ${safeName}`,
        html: `
          <h2>Nueva Solicitud de Acceso a API</h2>
          <p><strong>Nombre:</strong> ${safeName}</p>
          <p><strong>Email:</strong> ${safeEmail}</p>
          <p><strong>Empresa/Organización:</strong> ${safeCompany}</p>
          <p><strong>Tipo de Uso:</strong> ${safeUsageType}</p>
          <p><strong>Descripción del Proyecto:</strong></p>
          <p>${safeProjectDescription}</p>
          <p><strong>Endpoints de Interés:</strong></p>
          <p>${safeEndpoints}</p>
          <hr>
          <p style="color: #666; font-size: 12px;">Este mensaje fue enviado desde el formulario de solicitud de API en SportMaps</p>
        `,
      }),
    });

    if (!emailResponse.ok) {
      const errorText = await emailResponse.text();
      console.error("Resend API error:", errorText);
      throw new Error(`Failed to send email: ${errorText}`);
    }

    return new Response(
      JSON.stringify({ message: "Solicitud enviada exitosamente" }),
      { 
        status: 200, 
        headers: { ...corsHeaders, "Content-Type": "application/json" }
      }
    );
  } catch (error) {
    console.error("Error:", error);
    const errorMessage = error instanceof Error ? error.message : "Error desconocido";
    return new Response(
      JSON.stringify({ error: errorMessage }),
      { 
        status: 500, 
        headers: { ...corsHeaders, "Content-Type": "application/json" }
      }
    );
  }
});
