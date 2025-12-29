import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ServiciosRegistroForm } from "@/components/forms/ServiciosRegistroForm";

interface ServiciosRegistroModalProps {
  isOpen: boolean;
  onClose: () => void;
  planSelected?: string;
}

export function ServiciosRegistroModal({ isOpen, onClose, planSelected }: ServiciosRegistroModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            Registra tu Servicio
            {planSelected && <span className="text-sport-primary ml-2">- Plan {planSelected}</span>}
          </DialogTitle>
        </DialogHeader>
        <ServiciosRegistroForm onSuccess={onClose} planSelected={planSelected} />
      </DialogContent>
    </Dialog>
  );
}