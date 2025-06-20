'use client';

import { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { sendContactMessage } from '@/app/actions';

export function ContactForm() {
  const [status, setStatus] = useState<{
    success?: boolean;
    error?: string;
    errors?: Record<string, string[] | undefined>;
  } | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus(null);

    const formData = new FormData(event.currentTarget);
    const result = await sendContactMessage(formData);

    if (result.success) {
      setStatus({ success: true });
      (event.target as HTMLFormElement).reset();
    } else {
      setStatus({ 
        success: false, 
        error: 'error' in result ? result.error : undefined, 
        errors: 'errors' in result ? result.errors : undefined 
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {status?.success && <p className="text-green-600">Votre message a bien été envoyé !</p>}
      {status?.error && <p className="text-red-600">{status.error}</p>}
      
      <div className="space-y-2">
        <Label htmlFor="name">Nom</Label>
        <Input id="name" name="name" required />
        {status?.errors?.name && <p className="text-red-600 text-sm">{status.errors.name[0]}</p>}
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" name="email" type="email" required />
        {status?.errors?.email && <p className="text-red-600 text-sm">{status.errors.email[0]}</p>}
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">Votre Message</Label>
        <Textarea id="message" name="message" required />
        {status?.errors?.message && <p className="text-red-600 text-sm">{status.errors.message[0]}</p>}
      </div>
      <Button type="submit" className="w-full">
        Envoyer le message
      </Button>
    </form>
  );
}

export function ContactModal({ open, onOpenChange }: { open: boolean, onOpenChange: (open: boolean) => void }) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Contactez-moi</DialogTitle>
          <DialogDescription>
            Remplissez ce formulaire et je vous répondrai dans les plus brefs délais.
          </DialogDescription>
        </DialogHeader>
        <ContactForm />
      </DialogContent>
    </Dialog>
  );
} 