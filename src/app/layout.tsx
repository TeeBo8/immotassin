import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { Header } from '@/components/layout/Header'; // Importer le Header
import { Footer } from '@/components/layout/Footer'; // Importer le Footer

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  title: 'Christopher Tassin - Courtier Immobilier à Bordeaux',
  description: 'Obtenez la meilleure simulation pour votre prêt immobilier avec un expert dédié à votre projet.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={cn('min-h-screen bg-background font-sans antialiased', inter.variable)}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
