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

    const rowHeight = 20;
    const marginLeft = 50;
    const marginRight = width - 50;

    const tableData = [
      { label: 'Numéro de la commande', value: order.orderNumber },
      { label: 'Montant total payé', value: `${order.totalPrice} €` },
      { label: 'Date de paiement', value: new Date(order.createdAt).toLocaleDateString('fr-FR') },
    ];

    tableData.forEach((row, index) => {
      page.drawText(`${row.label}:`, {
        x: marginLeft,
        y: tableTop - rowHeight * (index + 2),
        size: 12,
        color: rgb(0, 0, 0),
      });
      page.drawText(row.value.toString(), {
        x: marginLeft + 150,
        y: tableTop - rowHeight * (index + 2),
        size: 12,
        color: rgb(0, 0, 0),
      });
    });

    // Ajouter les détails de la réservation
    let currentYPosition = tableTop - rowHeight * (tableData.length + 2);
    order.reservations.forEach((reservation, index) => {
      page.drawText(`Réservation ${index + 1}:`, {
        x: marginLeft,
        y: currentYPosition,
        size: 12,
        color: rgb(0, 0, 0),
      });

      const reservationInfo = [
        `Date de début: ${new Date(reservation.startDate).toLocaleDateString('fr-FR')}`,
        `Date de fin: ${new Date(reservation.endDate).toLocaleDateString('fr-FR')}`,
        `Montant: ${reservation.totalPrice} €`,
      ];

      reservationInfo.forEach((info, infoIndex) => {
        page.drawText(info, {
          x: marginLeft + 20,
          y: currentYPosition - rowHeight * (infoIndex + 1),
          size: 12,
          color: rgb(0, 0, 0),
        });
      });

      currentYPosition -= rowHeight * (reservationInfo.length + 1);
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
      maxWidth: marginRight - marginLeft,
    });

    const pdfBytes = await pdfDoc.save();
    return pdfBytes;
  } catch (error) {
    console.error('Error generating invoice:', error);
    throw error;
  }
}
