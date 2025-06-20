import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Mentions Légales - Christopher Tassin',
};

export default function MentionsLegalesPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-16">
      <div className="prose prose-slate max-w-4xl mx-auto">
        <h1>Mentions Légales</h1>

        <h2>1. Éditeur du site</h2>
        <p>
          <strong>Nom :</strong> Christopher Tassin <br />
          <strong>Statut :</strong> [ ] <br />
          <strong>Adresse :</strong> [ ] <br />
          <strong>Email :</strong> christopher.tassin@bpfinancement.fr <br />
          <strong>Téléphone :</strong> 06 13 57 51 91 <br />
          <strong>N° SIRET :</strong> [ ] <br />
          <strong>N° ORIAS :</strong> [ ]
        </p>

        <h2>2. Directeur de la publication</h2>
        <p>
          Le directeur de la publication est M. Christopher Tassin.
        </p>

        <h2>3. Hébergement</h2>
        <p>
          Le site est hébergé par Vercel Inc., dont le siège social est situé au 340 S Lemon Ave #4133, Walnut, CA 91789, USA.
        </p>

        <h2>4. Propriété intellectuelle</h2>
        <p>
          L&apos;ensemble de ce site relève de la législation française et internationale sur le droit d&apos;auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
        </p>
      </div>
    </div>
  );
} 