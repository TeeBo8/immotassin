import { ProjectSimulator } from '@/components/project-simulator/ProjectSimulator';
// Importer les icônes nécessaires pour les nouvelles sections
import { CheckCircle2, Calculator, CalendarCheck, FileText, Handshake } from 'lucide-react';

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

      {/* Section "À Propos" - Le Visage Humain */}
      <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-slate-100 px-3 py-1 text-sm">
                Votre Expert Dédié
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                Christopher Tassin, plus qu&apos;un courtier, votre partenaire immobilier à Bordeaux.
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-lg">
                Fatigué des plateformes impersonnelles et des conseillers qui changent tout le temps ? Ma mission est simple : vous offrir un accompagnement sur-mesure, transparent et entièrement dédié à la réussite de votre projet. Je suis votre unique interlocuteur, de la première simulation jusqu&apos;à la signature chez le notaire.
              </p>
              <ul className="grid gap-2 py-4">
                <li className="flex items-center">
                  <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                  Expertise 100% locale sur le marché de Bordeaux et sa région.
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                  Un seul interlocuteur pour un suivi simplifié et réactif.
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="mr-2 h-4 w-4 text-primary" />
                  Accès aux meilleures conditions auprès de tout le réseau bancaire.
                </li>
              </ul>
            </div>
            <div className="flex items-center justify-center">
              {/* Placeholder pour la photo de Christopher */}
              <div className="bg-slate-200 w-full max-w-sm aspect-square rounded-full flex items-center justify-center">
                <span className="text-muted-foreground">Photo de Christopher Tassin</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section du Simulateur - Le coeur de l'action */}
      <section id="simulator" className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6 flex justify-center">
          <ProjectSimulator />
        </div>
      </section>

      {/* Section "Processus" - La Clarté */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-slate-100 px-3 py-1 text-sm">
                La Clarté Avant Tout
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Un processus simple en 4 étapes</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                De votre première idée à la remise des clés, je vous accompagne avec une méthode claire et efficace.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-4 lg:gap-16 mt-12">
            <div className="grid gap-1 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground mb-4">
                <Calculator className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-bold">1. Simulation</h3>
              <p className="text-sm text-muted-foreground">
                Utilisez notre outil pour obtenir une première estimation claire de votre capacité d&apos;emprunt.
              </p>
            </div>
            <div className="grid gap-1 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground mb-4">
                <CalendarCheck className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-bold">2. Rendez-vous</h3>
              <p className="text-sm text-muted-foreground">
                Nous affinons ensemble votre projet lors d&apos;un premier échange pour définir la meilleure stratégie.
              </p>
            </div>
            <div className="grid gap-1 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground mb-4">
                <FileText className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-bold">3. Montage du dossier</h3>
              <p className="text-sm text-muted-foreground">
                Je vous aide à rassembler les pièces et je présente votre dossier optimisé aux banques.
              </p>
            </div>
            <div className="grid gap-1 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground mb-4">
                <Handshake className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-bold">4. Offre de prêt</h3>
              <p className="text-sm text-muted-foreground">
                Nous analysons ensemble les offres reçues et vous signez la meilleure proposition. C&apos;est gagné !
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
