import { ThreeScene } from "@/components/ThreeScene";

export function NetworkSection() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 my-16">
      <header className="text-center mb-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-sport-text-primary mb-4">
          Red de Conexiones SportMaps
        </h2>
        <p className="text-lg text-sport-text-secondary max-w-2xl mx-auto">
          Explora cómo conectamos escuelas, entrenadores y deportistas en un ecosistema integrado
        </p>
      </header>
      <ThreeScene />
    </div>
  );
}
