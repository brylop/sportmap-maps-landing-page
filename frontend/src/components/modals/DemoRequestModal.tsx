import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
        <Tabs defaultValue="calendario" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="calendario">Agendar directamente</TabsTrigger>
            <TabsTrigger value="formulario">Dejar mis datos</TabsTrigger>
          </TabsList>
          <TabsContent value="calendario">
            <iframe
              src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ3waQ9dDmKLH6aP9rI3ctce8WUn9lgOVuW_SMh4ma4Z2_fOULJ2UShRe8u3-oDqhoEBr9uC5I6p?gv=true"
              style={{ border: 0 }}
              width="100%"
              height="600"
              frameBorder={0}
              title="Agendar demo en Google Calendar"
            />
          </TabsContent>
          <TabsContent value="formulario">
            <DemoRequestForm onSuccess={onClose} source={source} />
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}