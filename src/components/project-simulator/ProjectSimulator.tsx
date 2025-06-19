'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { useSimulatorStore } from '@/lib/store/simulator-store';
import { submitSimulation } from '@/app/actions';

import { Step1ProjectType } from './Step1ProjectType';
import { Step2Situation } from './Step2Situation';
import { Step3Professional } from './Step3Professional';
import { Step4Charges } from './Step4Charges';
import { Step5Deposit } from './Step5Deposit';
import { Step6Contact } from './Step6Contact';

const TOTAL_STEPS = 6;

function calculateBorrowingCapacity(data: ReturnType<typeof useSimulatorStore.getState>) {
  const totalIncome = data.user1.income + (data.situation === 'duo' ? data.user2.income : 0);
  const maxMonthlyPayment = (totalIncome * 0.35) - data.monthlyCharges;
  
  if (maxMonthlyPayment <= 0) return 0;

  const estimatedCapacity = maxMonthlyPayment * 240;
  return Math.floor(estimatedCapacity / 1000) * 1000;
}

export function ProjectSimulator() {
  const state = useSimulatorStore();
  const { step, nextStep, prevStep } = state;
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [borrowingCapacity, setBorrowingCapacity] = useState(0);

  const handleFormSubmit = async () => {
    const capacity = calculateBorrowingCapacity(state);
    setBorrowingCapacity(capacity);
    
    await submitSimulation(state);
    
    setIsSubmitted(true);
  };

  const isStepValid = () => {
    const { projectType, situation, user1, user2, contact, rgpdConsent } = state;
    if (step === 1 && !projectType) return false;
    if (step === 2 && !situation) return false;
    if (step === 3) {
      if (!user1.status || user1.income <= 0) return false;
      if (situation === 'duo' && (!user2.status || user2.income <= 0)) return false;
    }
    if (step === 6) {
      if (!contact.name || !contact.email.includes('@') || !contact.phone || !rgpdConsent) return false;
    }
    return true;
  };

  if (isSubmitted) {
    return (
      <Card className="w-full max-w-[600px] shadow-lg text-center">
        <CardHeader>
          <CardTitle>Merci, {state.contact.name} !</CardTitle>
          <CardDescription>Votre simulation a bien été envoyée.</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">Votre capacité d&apos;emprunt estimée est de :</p>
          <p className="text-4xl font-bold my-4">{borrowingCapacity.toLocaleString('fr-FR')} €</p>
          <p className="text-sm">
            Ceci est une première estimation. <strong>Christopher Tassin va vous contacter très prochainement</strong> pour affiner votre projet avec vous.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-[600px] shadow-lg">
      <CardHeader>
        <CardTitle>Estimez votre projet immobilier à Bordeaux</CardTitle>
        <CardDescription>Répondez à quelques questions pour obtenir une première simulation.</CardDescription>
        <Progress value={(step / TOTAL_STEPS) * 100} className="mt-4" />
      </CardHeader>
      <CardContent className="min-h-[320px] flex items-center justify-center w-full">
        {step === 1 && <Step1ProjectType />}
        {step === 2 && <Step2Situation />}
        {step === 3 && <Step3Professional />}
        {step === 4 && <Step4Charges />}
        {step === 5 && <Step5Deposit />}
        {step === 6 && <Step6Contact />}
      </CardContent>
      <CardFooter className="flex justify-between">
        {step > 1 ? (<Button variant="outline" onClick={prevStep}>Précédent</Button>) : (<div />)}
        {step < TOTAL_STEPS ? (
          <Button onClick={nextStep} disabled={!isStepValid()}>Suivant</Button>
        ) : (
          <Button onClick={handleFormSubmit} disabled={!isStepValid()}>Voir mon estimation</Button>
        )}
      </CardFooter>
    </Card>
  );
} 