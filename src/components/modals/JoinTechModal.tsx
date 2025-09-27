import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { JoinTechForm } from "@/components/forms/JoinTechForm";

interface JoinTechModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function JoinTechModal({ isOpen, onClose }: JoinTechModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="sr-only">Únete a SportMaps Tech</DialogTitle>
        </DialogHeader>
        <JoinTechForm onClose={onClose} />
      </DialogContent>
    </Dialog>
  );
}