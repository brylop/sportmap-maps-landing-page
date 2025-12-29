import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { DemoRequestForm } from "@/components/forms/DemoRequestForm";

interface DemoRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
  source?: string;
}

export function DemoRequestModal({ isOpen, onClose, source = "modal" }: DemoRequestModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-card border-border">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            🚀 Agenda tu Demo Personalizada
          </DialogTitle>
          <DialogDescription>
            Descubre cómo SportMaps puede transformar la gestión de tu organización deportiva con una demostración gratuita.
          </DialogDescription>
        </DialogHeader>
        <DemoRequestForm onSuccess={onClose} source={source} />
      </DialogContent>
    </Dialog>
  );
}