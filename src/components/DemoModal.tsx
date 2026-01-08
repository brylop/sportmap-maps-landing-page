import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { DemoRequestForm } from "@/components/forms/DemoRequestForm";

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function DemoModal({ isOpen, onClose }: DemoModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-card border-border">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            🚀 Comienza tu Prueba Gratis
          </DialogTitle>
          <DialogDescription>
            Completa el formulario y te contactaremos para activar tu cuenta de prueba de 14 días sin costo.
          </DialogDescription>
        </DialogHeader>
        <DemoRequestForm onSuccess={onClose} source="demo_modal" />
      </DialogContent>
    </Dialog>
  );
}