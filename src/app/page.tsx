import { ProjectSimulator } from '@/components/project-simulator/ProjectSimulator';

export default function HomePage() {
  return (
    <div className="w-full">
      {/* Section Héros - L'accroche principale */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-50">
        <div className="container px-4 md:px-6 text-center">
          <div className="space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              Votre projet immobilier à Bordeaux, simplifié.
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Obtenez le meilleur taux pour votre achat en étant accompagné par un expert unique et dédié.
              Commencez par une simulation gratuite en 2 minutes.
            </p>
          </div>
        </div>
      </section>

      {/* Section du Simulateur - Le coeur de l'action */}
      <section id="simulator" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6 flex justify-center">
          <ProjectSimulator />
        </div>
      </section>

      {/* D'autres sections pourront venir ici (A propos, Témoignages, etc.) */}
    </div>
  );
}
