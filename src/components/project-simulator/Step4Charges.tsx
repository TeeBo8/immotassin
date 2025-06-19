'use client';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useSimulatorStore } from '@/lib/store/simulator-store';

export function Step4Charges() {
  const { monthlyCharges, setMonthlyCharges } = useSimulatorStore();

  return (
    <div className="w-full max-w-sm space-y-4">
      <h3 className="text-xl font-semibold text-center">Avez-vous des charges mensuelles ?</h3>
      <div className="space-y-2">
        <Label htmlFor="monthly-charges">
          Total de vos mensualités de crédits en cours (auto, conso...)
        </Label>
        <div className="relative">
          <Input
            id="monthly-charges"
            type="number"
            value={monthlyCharges || ''}
            onChange={(e) => setMonthlyCharges(Number(e.target.value))}
            placeholder="0"
            className="pr-8"
          />
          <span className="absolute inset-y-0 right-3 flex items-center text-sm text-muted-foreground">€</span>
        </div>
      </div>
    </div>
  );
} 