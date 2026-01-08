-- Add admin policies for user_roles table management
-- Admins can assign new roles to users
CREATE POLICY "Admins can assign roles" ON public.user_roles
  FOR INSERT
  WITH CHECK (has_role(auth.uid(), 'admin'));

-- Admins can modify existing role assignments
CREATE POLICY "Admins can modify roles" ON public.user_roles
  FOR UPDATE
  USING (has_role(auth.uid(), 'admin'));

-- Admins can revoke user roles
CREATE POLICY "Admins can revoke roles" ON public.user_roles
  FOR DELETE
  USING (has_role(auth.uid(), 'admin'));