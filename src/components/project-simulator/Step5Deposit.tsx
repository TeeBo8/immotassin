'use client';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useSimulatorStore } from '@/lib/store/simulator-store';

export function Step5Deposit() {
  const { personalDeposit, setPersonalDeposit } = useSimulatorStore();

  return (
    <div className="w-full max-w-sm space-y-4">
      <h3 className="text-xl font-semibold text-center">Quel est votre apport personnel ?</h3>
      <div className="space-y-2">
        <Label htmlFor="personal-deposit">
          Montant de votre épargne dédiée au projet
        </Label>
        <div className="relative">
          <Input
            id="personal-deposit"
            type="number"
            value={personalDeposit || ''}
            onChange={(e) => setPersonalDeposit(Number(e.target.value))}
            placeholder="20000"
            className="pr-8"
          />
          <span className="absolute inset-y-0 right-3 flex items-center text-sm text-muted-foreground">€</span>
        </div>
      </div>
    </div>
  );
} 