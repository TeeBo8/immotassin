'use client';

import { useSimulatorStore } from '@/lib/store/simulator-store';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

type ProjectType = 'purchase' | 'investment' | 'buyout' | 'curiosity';

// On peut ajouter des icônes plus tard
const projectTypes: { id: ProjectType; label: string }[] = [
  { id: 'purchase', label: 'Achat Résidence Principale' },
  { id: 'investment', label: 'Investissement Locatif' },
  { id: 'buyout', label: 'Rachat de Crédit' },
  { id: 'curiosity', label: 'Juste pour voir' },
];

export function Step1ProjectType() {
  const { projectType, setProjectType } = useSimulatorStore();

  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-center">Quel est votre projet ?</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projectTypes.map((type) => (
          <Card
            key={type.id}
            onClick={() => setProjectType(type.id)}
            className={cn(
              'cursor-pointer transition-all duration-200 hover:shadow-md hover:border-primary',
              projectType === type.id && 'border-2 border-primary shadow-lg'
            )}
          >
            <CardContent className="p-6 flex items-center justify-center">
              <span className="font-medium text-center">{type.label}</span>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
} 