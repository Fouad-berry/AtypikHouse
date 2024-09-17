// /app/api/newsletter/subscribe.ts
import { NextResponse } from 'next/server';
import prisma from '@/app/libs/prismadb';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  const { email } = await request.json();

  // Vérifier si l'email est déjà abonné
  const existingSubscriber = await prisma.newsletterSubscriber.findUnique({
    where: { email },
  });

  if (existingSubscriber && existingSubscriber.isSubscribed) {
    return NextResponse.json({ message: 'Vous êtes déjà abonné' }, { status: 400 });
  }

  // Si non abonné ou désabonné, on le (ré)abonne
  await prisma.newsletterSubscriber.upsert({
    where: { email },
    update: { isSubscribed: true },
    create: { email },
  });

  // Envoyer un email de confirmation d'abonnement
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'Confirmation d’abonnement à la newsletter',
    text: 'Merci de vous être abonné à notre newsletter !',
  });

  return NextResponse.json({ message: 'Abonnement réussi' });
}
