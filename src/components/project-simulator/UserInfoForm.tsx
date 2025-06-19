'use client';

import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useSimulatorStore } from '@/lib/store/simulator-store';

type UserInfoFormProps = {
  userKey: 'user1' | 'user2';
  title: string;
};

// On reprend les types du store
type ProfessionalStatus = 'cdi' | 'cdd' | 'freelance' | 'public' | 'other';

const statusOptions: { value: ProfessionalStatus; label: string }[] = [
  { value: 'cdi', label: 'CDI' },
  { value: 'cdd', label: 'CDD' },
  { value: 'freelance', label: 'Indépendant / Entrepreneur' },
  { value: 'public', label: 'Fonctionnaire' },
  { value: 'other', label: 'Autre' },
];

export function UserInfoForm({ userKey, title }: UserInfoFormProps) {
  const { [userKey]: userInfo, updateUserInfo } = useSimulatorStore();

  const handleStatusChange = (value: string) => {
    updateUserInfo(userKey, { status: value as ProfessionalStatus });
  };

  const handleIncomeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateUserInfo(userKey, { income: Number(e.target.value) });
  };

  return (
    <div className="space-y-4 rounded-lg border p-4">
      <h4 className="font-semibold">{title}</h4>
      <div className="space-y-2">
        <Label htmlFor={`status-${userKey}`}>Situation professionnelle</Label>
        <Select onValueChange={handleStatusChange} value={userInfo.status ?? undefined}>
          <SelectTrigger id={`status-${userKey}`}>
            <SelectValue placeholder="Sélectionnez..." />
          </SelectTrigger>
          <SelectContent>
            {statusOptions.map((opt) => (
              <SelectItem key={opt.value} value={opt.value}>
                {opt.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-2">
        <Label htmlFor={`income-${userKey}`}>Revenus nets mensuels (avant impôts)</Label>
        <div className="relative">
          <Input
            id={`income-${userKey}`}
            type="number"
            value={userInfo.income || ''}
            onChange={handleIncomeChange}
            placeholder="2500"
            className="pr-8"
          />
          <span className="absolute inset-y-0 right-3 flex items-center text-sm text-muted-foreground">€</span>
        </div>
      </div>
    </div>
  );
} 