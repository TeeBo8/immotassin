'use client';

import { useSimulatorStore } from '@/lib/store/simulator-store';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { User, Users } from 'lucide-react'; // Nos nouvelles icônes !

const situations = [
  { id: 'solo', label: 'Seul(e)', icon: <User className="w-10 h-10 mb-2" /> },
  { id: 'duo', label: 'À deux', icon: <Users className="w-10 h-10 mb-2" /> },
];

export function Step2Situation() {
  const { situation, setSituation } = useSimulatorStore();

  return (
    <div className="w-full space-y-4">
      <h3 className="text-xl font-semibold text-center">Vous achetez...</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {situations.map((item) => (
          <Card
            key={item.id}
            onClick={() => setSituation(item.id as 'solo' | 'duo')}
            className={cn(
              'cursor-pointer transition-all duration-200 hover:shadow-md hover:border-primary',
              situation === item.id && 'border-2 border-primary shadow-lg'
            )}
          >
            <CardContent className="p-6 flex flex-col items-center justify-center">
              {item.icon}
              <span className="font-medium text-center">{item.label}</span>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
} 