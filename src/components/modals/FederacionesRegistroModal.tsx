import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { FederacionesRegistroForm } from "@/components/forms/FederacionesRegistroForm";

interface FederacionesRegistroModalProps {
  isOpen: boolean;
  onClose: () => void;
  planSelected?: string;
}

export function FederacionesRegistroModal({ isOpen, onClose, planSelected }: FederacionesRegistroModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            Registra tu Federación / Liga
            {planSelected && <span className="text-sport-primary ml-2">- Plan {planSelected}</span>}
          </DialogTitle>
        </DialogHeader>
        <FederacionesRegistroForm onSuccess={onClose} planSelected={planSelected} />
      </DialogContent>
    </Dialog>
  );
}