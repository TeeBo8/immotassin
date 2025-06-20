import Link from 'next/link';

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
      <p className="text-xs text-muted-foreground">
        © {currentYear} Christopher Tassin. Tous droits réservés.
      </p>
      <nav className="sm:ml-auto flex gap-4 sm:gap-6">
        {/* Liens placeholders pour la suite */}
        <Link href="/mentions-legales" className="text-xs hover:underline underline-offset-4">
          Mentions Légales
        </Link>
        <Link href="/confidentialite" className="text-xs hover:underline underline-offset-4">
          Politique de Confidentialité
        </Link>
      </nav>
    </footer>
  );
} 