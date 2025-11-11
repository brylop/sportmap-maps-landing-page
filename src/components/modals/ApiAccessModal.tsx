import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ApiAccessForm } from "@/components/forms/ApiAccessForm";

interface ApiAccessModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ApiAccessModal({ isOpen, onClose }: ApiAccessModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader className="sr-only">
          <DialogTitle>Solicitar Acceso a API</DialogTitle>
          <DialogDescription>
            Completa el formulario para obtener acceso a nuestra API SportMaps
          </DialogDescription>
        </DialogHeader>
        <ApiAccessForm onClose={onClose} />
      </DialogContent>
    </Dialog>
  );
}
