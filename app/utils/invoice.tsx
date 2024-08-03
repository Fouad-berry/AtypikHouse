import { PDFDocument, rgb } from 'pdf-lib';
import { Order } from '../types';

// URL d'un logo de test accessible publiquement
const logoUrl = '/images/logo_atypikhouse.png';
export async function generateInvoice(order: Order) {
  try {
    const pdfDoc = await PDFDocument.create();
    const page = pdfDoc.addPage([600, 800]);
    const { width, height } = page.getSize();

    // Charger le logo
    console.log('Loading logo...');
    const logoImageBytes = await fetch(logoUrl).then(res => {
      if (!res.ok) {
        throw new Error('Failed to load logo image');
      }
      return res.arrayBuffer();
    });
    const logoImage = await pdfDoc.embedPng(logoImageBytes);
    const logoDims = logoImage.scale(0.09);

    // Ajouter le logo en haut à gauche
    page.drawImage(logoImage, {
      x: 50,
      y: height - logoDims.height - 50,
      width: logoDims.width,
      height: logoDims.height,
    });

    // Ajouter les informations de l'entreprise
    page.drawText(`AtypikHouse`, {
      x: 50,
      y: height - logoDims.height - 70,
      size: 15,
      color: rgb(0, 0, 0),
    });

    page.drawText(`2 All. des Arcades, 60350 Pierrefonds`, {
      x: 50,
      y: height - logoDims.height - 90,
      size: 10,
      color: rgb(0, 0, 0),
    });

    page.drawText(`Téléphone: +(33) 0695933701`, {
      x: 50,
      y: height - logoDims.height - 105,
      size: 10,
      color: rgb(0, 0, 0),
    });

    page.drawText(`Email: grace.contact@gmail.com`, {
      x: 50,
      y: height - logoDims.height - 120,
      size: 10,
      color: rgb(0, 0, 0),
    });

    // Ajouter les détails de la commande
    page.drawText(`Facture pour la commande: ${order.id}`, {
      x: 50,
      y: height - logoDims.height - 150,
      size: 20,
      color: rgb(0, 0, 0),
    });

    page.drawText(`Montant: ${order.totalPrice} €`, {
      x: 50,
      y: height - logoDims.height - 180,
      size: 15,
      color: rgb(0, 0, 0),
    });

    page.drawText(`Date: ${new Date(order.createdAt).toLocaleDateString('fr-FR')}`, {
      x: 50,
      y: height - logoDims.height - 210,
      size: 15,
      color: rgb(0, 0, 0),
    });

    page.drawText(`Statut: ${order.status}`, {
      x: 50,
      y: height - logoDims.height - 240,
      size: 15,
      color: rgb(0, 0, 0),
    });

    // Ajouter les termes et conditions en bas de la page
    const termsAndConditions = `
      Termes et conditions:
      - Paiement dû dans les 30 jours.
      - Aucun remboursement après 15 jours.
      - Contactez-nous pour toute question.
    `;

    page.drawText(termsAndConditions, {
      x: 50,
      y: 50,
      size: 10,
      color: rgb(0, 0, 0),
      maxWidth: width - 100,
    });

    const pdfBytes = await pdfDoc.save();
    console.log('PDF generated successfully');
    return pdfBytes;
  } catch (error) {
    console.error('Error generating invoice:', error);
    throw error;
  }
}
