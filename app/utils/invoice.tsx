import { PDFDocument, rgb } from 'pdf-lib';
import { Order } from '../types';

const logoUrl = '/images/logo_atypikhouse.png';

export async function generateInvoice(order: Order) {
  try {
    const pdfDoc = await PDFDocument.create();
    const page = pdfDoc.addPage([600, 800]);
    const { width, height } = page.getSize();

    // Charger et dessiner le logo
    const logoImageBytes = await fetch(logoUrl).then(res => {
      if (!res.ok) {
        throw new Error('Failed to load logo image');
      }
      return res.arrayBuffer();
    });
    const logoImage = await pdfDoc.embedPng(logoImageBytes);
    const logoDims = logoImage.scale(0.09);

    page.drawImage(logoImage, {
      x: 50,
      y: height - logoDims.height - 50,
      width: logoDims.width,
      height: logoDims.height,
    });

    // Infos de l'entreprise
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

    // Titre de la facture
    page.drawText(`Facture pour la commande: ${order.orderNumber}`, {
      x: 50,
      y: height - logoDims.height - 150,
      size: 20,
      color: rgb(0, 0, 0),
    });

    // Détails de la commande
    const tableTop = height - logoDims.height - 180;
    page.drawText('Détails de la commande:', {
      x: 50,
      y: tableTop,
      size: 15,
      color: rgb(0, 0, 0),
    });

    // Initialisation des variables pour le tableau
    const rowHeight = 20;
    const colWidth = [100, 150, 150, 150]; // Largeur des colonnes
    const tableX = 50; // Position x du tableau
    let tableY = tableTop - 30; // Position y du tableau

    // En-têtes de colonne
    const headers = ['Réservation', 'Date de début', 'Date de fin', 'Montant'];

    // Dessiner l'en-tête du tableau
    headers.forEach((header, i) => {
      page.drawText(header, {
        x: tableX + colWidth.slice(0, i).reduce((a, b) => a + b, 0),
        y: tableY,
        size: 12,
        color: rgb(0, 0, 0),
      });
    });

    // Dessiner les bordures de l'en-tête
    page.drawLine({
      start: { x: tableX, y: tableY - 5 },
      end: { x: tableX + colWidth.reduce((a, b) => a + b, 0), y: tableY - 5 },
      thickness: 1,
      color: rgb(0, 0, 0),
    });

    tableY -= rowHeight;

    // Dessiner les lignes du tableau pour chaque réservation
    order.reservations.forEach((reservation, index) => {
      const row = [
        `Réservation ${index + 1}`,
        new Date(reservation.startDate).toLocaleDateString('fr-FR'),
        new Date(reservation.endDate).toLocaleDateString('fr-FR'),
        `${reservation.totalPrice} €`,
      ];

      row.forEach((cell, i) => {
        page.drawText(cell, {
          x: tableX + colWidth.slice(0, i).reduce((a, b) => a + b, 0),
          y: tableY,
          size: 12,
          color: rgb(0, 0, 0),
        });
      });

      // Dessiner les bordures des lignes
      page.drawLine({
        start: { x: tableX, y: tableY - 5 },
        end: { x: tableX + colWidth.reduce((a, b) => a + b, 0), y: tableY - 5 },
        thickness: 0.5,
        color: rgb(0, 0, 0),
      });

      tableY -= rowHeight;
    });

    // Termes et conditions
    const termsAndConditions = `
      Termes et conditions:
      - Paiement dû dans les 30 jours.
      - Aucun remboursement après 15 jours.
      - Contactez notre service clientèle pour toute question.
      - Veuillez conserver cette facture, elle pourra vous servir pour le remboursement.
    `;

    page.drawText(termsAndConditions, {
      x: 50,
      y: 50,
      size: 10,
      color: rgb(0, 0, 0),
      maxWidth: width - 100,
    });

    const pdfBytes = await pdfDoc.save();
    return pdfBytes;
  } catch (error) {
    console.error('Error generating invoice:', error);
    throw error;
  }
}
