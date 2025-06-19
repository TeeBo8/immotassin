'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

import { useSimulatorStore } from '@/lib/store/simulator-store';
import { Step1ProjectType } from './Step1ProjectType';

// Placeholders pour chaque étape. On les remplira plus tard.
const Step2 = () => <div>Contenu de l&apos;étape 2: Votre Situation</div>;
const Step3 = () => <div>Contenu de l&apos;étape 3: Situation Pro</div>;
const Step4 = () => <div>Contenu de l&apos;étape 4: Revenus & Charges</div>;
const Step5 = () => <div>Contenu de l&apos;étape 5: Apport</div>;
const Step6 = () => <div>Contenu de l&apos;étape 6: Formulaire de contact</div>;

const TOTAL_STEPS = 6;

export function ProjectSimulator() {
  const { step, nextStep, prevStep, projectType } = useSimulatorStore();

  const progressValue = (step / TOTAL_STEPS) * 100;

  return (
    <Card className="w-full max-w-[600px] shadow-lg">
      <CardHeader>
        <CardTitle>Estimez votre projet immobilier à Bordeaux</CardTitle>
        <CardDescription>Répondez à quelques questions pour obtenir une première simulation.</CardDescription>
        <Progress value={progressValue} className="mt-4" />
      </CardHeader>
      <CardContent className="min-h-[250px] flex items-center">
        {step === 1 && <Step1ProjectType />}
        {step === 2 && <Step2 />}
        {step === 3 && <Step3 />}
        {step === 4 && <Step4 />}
        {step === 5 && <Step5 />}
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
        <Button onClick={nextStep} disabled={step === 1 && !projectType}>
          {step === TOTAL_STEPS ? 'Obtenir ma simulation' : 'Suivant'}
        </Button>
      </CardFooter>
    </Card>
  );
} 