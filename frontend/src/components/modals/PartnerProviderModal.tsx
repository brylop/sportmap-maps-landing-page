import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { PartnerProviderForm } from "../forms/PartnerProviderForm";

interface PartnerProviderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function PartnerProviderModal({ isOpen, onClose }: PartnerProviderModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Únete como Proveedor</DialogTitle>
        </DialogHeader>
        <PartnerProviderForm onSuccess={onClose} />
      </DialogContent>
    </Dialog>
  );
}