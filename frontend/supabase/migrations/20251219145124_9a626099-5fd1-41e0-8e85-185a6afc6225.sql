-- =====================================================
-- ACTUALIZACIÓN DE POLÍTICAS RLS CON has_role()
-- =====================================================

-- Eliminar políticas existentes que no usan has_role() correctamente
DROP POLICY IF EXISTS "Admins can view all partner applications" ON public.partner_applications;
DROP POLICY IF EXISTS "Admins can view contact messages" ON public.contact_messages;
DROP POLICY IF EXISTS "Admins can update contact messages" ON public.contact_messages;
DROP POLICY IF EXISTS "Admins can delete contact messages" ON public.contact_messages;
DROP POLICY IF EXISTS "Admins and HR can view applications" ON public.join_applications;
DROP POLICY IF EXISTS "Admins and HR can update applications" ON public.join_applications;
DROP POLICY IF EXISTS "Admins and HR can delete applications" ON public.join_applications;

-- =====================================================
-- PARTNER_APPLICATIONS - Solo Admin/HR pueden ver
-- =====================================================
CREATE POLICY "Admin or HR can view partner applications"
ON public.partner_applications FOR SELECT
USING (
  has_role(auth.uid(), 'admin'::app_role) 
  OR has_role(auth.uid(), 'hr'::app_role)
);

-- =====================================================
-- CONTACT_MESSAGES - Solo Admin/HR pueden ver/gestionar
-- =====================================================
CREATE POLICY "Admin or HR can view contact messages"
ON public.contact_messages FOR SELECT
USING (
  has_role(auth.uid(), 'admin'::app_role) 
  OR has_role(auth.uid(), 'hr'::app_role)
);

CREATE POLICY "Admin can update contact messages"
ON public.contact_messages FOR UPDATE
USING (has_role(auth.uid(), 'admin'::app_role));

CREATE POLICY "Admin can delete contact messages"
ON public.contact_messages FOR DELETE
USING (has_role(auth.uid(), 'admin'::app_role));

-- =====================================================
-- JOIN_APPLICATIONS - Solo Admin/HR pueden ver/gestionar
-- =====================================================
CREATE POLICY "Admin or HR can view join applications"
ON public.join_applications FOR SELECT
USING (
  has_role(auth.uid(), 'admin'::app_role) 
  OR has_role(auth.uid(), 'hr'::app_role)
);

CREATE POLICY "Admin or HR can update join applications"
ON public.join_applications FOR UPDATE
USING (
  has_role(auth.uid(), 'admin'::app_role) 
  OR has_role(auth.uid(), 'hr'::app_role)
);

CREATE POLICY "Admin or HR can delete join applications"
ON public.join_applications FOR DELETE
USING (
  has_role(auth.uid(), 'admin'::app_role) 
  OR has_role(auth.uid(), 'hr'::app_role)
);