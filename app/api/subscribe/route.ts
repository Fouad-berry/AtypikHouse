import { NextResponse } from 'next/server';
import prisma from '@/app/libs/prismadb';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  const { email } = await request.json();

  // Validation : vérifier que l'email est fourni
  if (!email) {
    return NextResponse.json({ message: 'L\'email est requis' }, { status: 400 });
  }

  // Vérifier si l'utilisateur est déjà abonné
  try {
    const existingSubscriber = await prisma.newsletterSubscriber.findUnique({
      where: { email },
    });

    if (existingSubscriber) {
      return NextResponse.json({ message: 'Vous êtes déjà abonné à la newsletter' }, { status: 400 });
    }
  } catch (error) {
    console.error("Erreur lors de la vérification de l'abonné:", error);
    return NextResponse.json({ message: 'Erreur lors de la vérification de l\'abonné' }, { status: 500 });
  }

  // Sauvegarder l'email dans la base de données
  try {
    await prisma.newsletterSubscriber.create({
      data: { email },
    });
  } catch (error) {
    console.error("Erreur lors de l'enregistrement dans la base de données:", error);
    return NextResponse.json({ message: 'Erreur lors de l\'enregistrement' }, { status: 500 });
  }

  // Configurer nodemailer pour l'envoi d'email
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  // Préparer l'email de confirmation
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'Confirmation de souscription à la newsletter',
    text: 'Merci de vous être abonné à la newsletter d\'AtypikHouse ! Vous recevrez bientôt nos actualités.',
  };

  // Envoyer l'email de confirmation
  try {
    await transporter.sendMail(mailOptions);
  } catch (error) {
    console.error("Erreur lors de l'envoi de l'email:", error);
    return NextResponse.json({ message: 'Souscription réussie, mais une erreur est survenue lors de l\'envoi de l\'email de confirmation' }, { status: 500 });
  }

  // Renvoie une réponse de succès
  return NextResponse.json({ message: 'Souscription réussie. Un email de confirmation a été envoyé.' });
}
