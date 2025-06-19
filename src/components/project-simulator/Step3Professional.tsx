'use client';

import { useSimulatorStore } from '@/lib/store/simulator-store';
import { UserInfoForm } from './UserInfoForm';

export function Step3Professional() {
  const { situation } = useSimulatorStore();

  return (
    <div className="w-full space-y-4">
      <h3 className="text-xl font-semibold text-center">Votre situation professionnelle</h3>
      <div className="space-y-6">
        <UserInfoForm userKey="user1" title="Emprunteur 1" />
        {situation === 'duo' && (
          <UserInfoForm userKey="user2" title="Emprunteur 2 (Co-emprunteur)" />
        )}
      </div>
    </div>
  );
} 