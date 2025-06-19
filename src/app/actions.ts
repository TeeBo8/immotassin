'use server';

import { useSimulatorStore } from '@/lib/store/simulator-store';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// Cette fonction sera appelée par notre formulaire.
// Elle reçoit l'état complet du store au moment de la soumission.
export async function submitSimulation(data: ReturnType<typeof useSimulatorStore.getState>) {
  try {
    const emailHtml = `
      <h1>Nouveau Lead Immobilier !</h1>
      <p>Un nouveau prospect a complété le simulateur sur votre site.</p>
      <h2>Coordonnées :</h2>
      <ul>
        <li><strong>Nom :</strong> ${data.contact.name}</li>
        <li><strong>Email :</strong> ${data.contact.email}</li>
        <li><strong>Téléphone :</strong> ${data.contact.phone}</li>
      </ul>
      <h2>Détails du projet :</h2>
      <ul>
        <li><strong>Type de projet :</strong> ${data.projectType}</li>
        <li><strong>Situation :</strong> ${data.situation}</li>
        <li><strong>Charges mensuelles :</strong> ${data.monthlyCharges} €</li>
        <li><strong>Apport personnel :</strong> ${data.personalDeposit} €</li>
      </ul>
      <h3>Emprunteur 1 :</h3>
      <ul>
        <li><strong>Statut :</strong> ${data.user1.status}</li>
        <li><strong>Revenus :</strong> ${data.user1.income} €</li>
      </ul>
      ${data.situation === 'duo' ? `
      <h3>Emprunteur 2 :</h3>
      <ul>
        <li><strong>Statut :</strong> ${data.user2.status}</li>
        <li><strong>Revenus :</strong> ${data.user2.income} €</li>
      </ul>` : ''}
    `;

    await resend.emails.send({
      from: 'Lead Notifier <onboarding@resend.dev>', // Doit être un domaine vérifié sur Resend
      to: ['t.leture@gmail.com'], // Email temporaire pour test - à remplacer par celui de Christopher plus tard
      subject: '🔥 Nouveau Lead Immobilier - ' + data.contact.name,
      html: emailHtml,
    });

    return { success: true };
  } catch (error) {
    console.error(error);
    return { success: false, error: 'Une erreur est survenue.' };
  }
} 