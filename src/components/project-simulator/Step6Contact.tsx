'use client';

import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useSimulatorStore } from '@/lib/store/simulator-store';

export function Step6Contact() {
  const { contact, rgpdConsent, updateContactInfo, setRgpdConsent } = useSimulatorStore();

  return (
    <div className="w-full space-y-4">
      <h3 className="text-xl font-semibold text-center">Votre simulation est prête !</h3>
      <p className="text-center text-sm text-muted-foreground">
        Recevez votre résultat et soyez recontacté par votre expert bordelais.
      </p>
      <div className="space-y-3 pt-4">
        <div className="space-y-1">
          <Label htmlFor="name">Nom complet</Label>
          <Input id="name" value={contact.name} onChange={(e) => updateContactInfo({ name: e.target.value })} />
        </div>
        <div className="space-y-1">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" value={contact.email} onChange={(e) => updateContactInfo({ email: e.target.value })} />
        </div>
        <div className="space-y-1">
          <Label htmlFor="phone">Téléphone</Label>
          <Input id="phone" type="tel" value={contact.phone} onChange={(e) => updateContactInfo({ phone: e.target.value })} />
        </div>
        <div className="flex items-center space-x-2 pt-2">
          <Checkbox id="rgpd" checked={rgpdConsent} onCheckedChange={(checked) => setRgpdConsent(Boolean(checked))} />
          <Label htmlFor="rgpd" className="text-xs leading-snug text-muted-foreground">
            J&apos;accepte que mes informations soient utilisées pour me recontacter dans le cadre de ma demande de prêt immobilier.
          </Label>
        </div>
      </div>
    </div>
  );
} 