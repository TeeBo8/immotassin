'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

import { useSimulatorStore } from '@/lib/store/simulator-store';
import { Step1ProjectType } from './Step1ProjectType';
// Importer le nouveau composant d'étape
import { Step2Situation } from './Step2Situation';
import { Step3Professional } from './Step3Professional';
import { Step4Charges } from './Step4Charges';
import { Step5Deposit } from './Step5Deposit';

// Placeholders pour chaque étape. On les remplira plus tard.
const Step6 = () => <div>Contenu de l&apos;étape 6: Formulaire de contact</div>;

const TOTAL_STEPS = 6;

export function ProjectSimulator() {
  // On récupère la situation et le setter depuis le store
  const { step, nextStep, prevStep, projectType, situation, user1, user2, personalDeposit } = useSimulatorStore();

  const progressValue = (step / TOTAL_STEPS) * 100;

  const isStep3Valid = () => {
    if (!user1.status || user1.income <= 0) return false;
    if (situation === 'duo' && (!user2.status || user2.income <= 0)) return false;
    return true;
  };

  // L'étape 4 (charges) est valide même à 0
  // L'étape 5 (apport) nécessite un montant pour être valide
  const isStep5Valid = () => personalDeposit >= 0; // On accepte 0 comme apport valide

  return (
    <Card className="w-full max-w-[600px] shadow-lg">
      <CardHeader>
        <CardTitle>Estimez votre projet immobilier à Bordeaux</CardTitle>
        <CardDescription>Répondez à quelques questions pour obtenir une première simulation.</CardDescription>
        <Progress value={progressValue} className="mt-4" />
      </CardHeader>
      <CardContent className="min-h-[250px] flex items-center justify-center w-full">
        {step === 1 && <Step1ProjectType />}
        {step === 2 && <Step2Situation />}
        {step === 3 && <Step3Professional />}
        {step === 4 && <Step4Charges />}
        {step === 5 && <Step5Deposit />}
        {step === 6 && <Step6 />}
      </CardContent>
      <CardFooter className="flex justify-between">
        {step > 1 ? (
          <Button variant="outline" onClick={prevStep}>
            Précédent
          </Button>
        ) : (
          <div />
        )}
        <Button
          onClick={nextStep}
          // La logique de désactivation devient plus intelligente
          disabled={
            (step === 1 && !projectType) ||
            (step === 2 && !situation) ||
            (step === 3 && !isStep3Valid()) ||
            (step === 5 && !isStep5Valid()) // Ajout de la validation pour l'étape 5
          }
        >
          {step === TOTAL_STEPS ? 'Obtenir ma simulation' : 'Suivant'}
        </Button>
      </CardFooter>
    </Card>
  );
} 