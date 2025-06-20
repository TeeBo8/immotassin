'use client'; // Le header devient un composant client pour gérer l'état de la modale

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MountainIcon } from 'lucide-react'; // Une icône simple pour le logo
import { ContactModal } from './ContactModal'; // Importer la nouvelle modale

export function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <header className="px-4 lg:px-6 h-16 flex items-center bg-background border-b sticky top-0 z-50">
        <Link href="/" className="flex items-center justify-center font-bold">
          <MountainIcon className="h-6 w-6 mr-2" />
          <span>Christopher Tassin</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6 items-center">
          <Link
            href="/#simulator"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            Simulateur
          </Link>
          <Link
            href="/#about"
            className="text-sm font-medium hover:underline underline-offset-4"
          >
            À propos
          </Link>
          <Button onClick={() => setIsModalOpen(true)}>Me Contacter</Button>
        </nav>
      </header>
      <ContactModal open={isModalOpen} onOpenChange={setIsModalOpen} />
    </>
  );
} 