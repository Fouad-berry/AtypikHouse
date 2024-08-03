import { PDFDocument, rgb } from 'pdf-lib';
import { Order } from '../types';

export async function generateInvoice(order: Order) {
  const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage([600, 400]);
  const { width, height } = page.getSize();

  page.drawText(`Facture pour la commande: ${order.id}`, {
    x: 50,
    y: height - 80,
    size: 20,
    color: rgb(0, 0, 0),
  });

  page.drawText(`Montant: ${order.totalPrice} €`, {
    x: 50,
    y: height - 110,
    size: 15,
    color: rgb(0, 0, 0),
  });

  page.drawText(`Date: ${new Date(order.createdAt).toLocaleDateString('fr-FR')}`, {
    x: 50,
    y: height - 140,
    size: 15,
    color: rgb(0, 0, 0),
  });

  page.drawText(`Statut: ${order.status}`, {
    x: 50,
    y: height - 170,
    size: 15,
    color: rgb(0, 0, 0),
  });

  const pdfBytes = await pdfDoc.save();
  return pdfBytes;
}
