import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Politique de Confidentialité - Christopher Tassin',
};

export default function ConfidentialitePage() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6 md:py-16">
      <div className="prose prose-slate max-w-4xl mx-auto">
        <h1>Politique de Confidentialité</h1>
        <p>Dernière mise à jour : 20/06/2025</p>

        <h2>1. Collecte des données personnelles</h2>
        <p>
          Dans le cadre de l&apos;utilisation du simulateur de prêt immobilier, nous collectons les données suivantes :
        </p>
        <ul>
          <li>Informations de contact : Nom, email, numéro de téléphone.</li>
          <li>Informations sur le projet : Type de projet, situation d&apos;achat.</li>
          <li>Informations financières : Revenus, charges, apport personnel.</li>
        </ul>

        <h2>2. Utilisation des données</h2>
        <p>
          Vos données sont collectées dans le but unique de :
        </p>
        <ul>
          <li>Vous fournir une simulation de capacité d&apos;emprunt.</li>
          <li>Vous recontacter pour discuter et affiner votre projet immobilier.</li>
          <li>Constituer votre dossier de demande de prêt si vous décidez de poursuivre avec nos services.</li>
        </ul>
        <p>
          Vos données ne seront jamais vendues ou partagées à des tiers sans votre consentement explicite.
        </p>

        <h2>3. Durée de conservation</h2>
        <p>
          Vos données sont conservées pendant la durée nécessaire à l&apos;étude de votre projet et seront supprimées sur simple demande de votre part.
        </p>

        <h2>4. Vos droits</h2>
        <p>
          Conformément à la loi &quot;Informatique et Libertés&quot; et au RGPD, vous disposez d&apos;un droit d&apos;accès, de rectification, de suppression et d&apos;opposition aux données personnelles vous concernant. Vous pouvez exercer ce droit en nous contactant à l&apos;adresse email : christopher.tassin@bpfinancement.fr.
        </p>
      </div>
    </div>
  );
} 