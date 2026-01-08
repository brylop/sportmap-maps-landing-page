-- Actualizar políticas RLS para permitir inserciones públicas en formularios

-- Eliminar políticas restrictivas existentes
DROP POLICY IF EXISTS "Anyone can insert join applications" ON public.join_applications;
DROP POLICY IF EXISTS "Anyone can insert contact messages" ON public.contact_messages;

-- Crear políticas más permisivas para formularios públicos
CREATE POLICY "Public can insert join applications" ON public.join_applications
    FOR INSERT WITH CHECK (TRUE);

CREATE POLICY "Public can insert contact messages" ON public.contact_messages
    FOR INSERT WITH CHECK (TRUE);

-- Opcional: Permitir lectura pública de las categorías deportivas
DROP POLICY IF EXISTS "Anyone can view sports categories" ON public.sports_categories;
CREATE POLICY "Public can view sports categories" ON public.sports_categories
    FOR SELECT USING (TRUE);