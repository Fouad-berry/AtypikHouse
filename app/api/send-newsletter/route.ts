// /app/api/newsletter/send.ts
import { NextResponse } from 'next/server';
import prisma from '@/app/libs/prismadb';
import nodemailer from 'nodemailer';

export async function POST() {
  const subscribers = await prisma.newsletterSubscriber.findMany({
    where: { isSubscribed: true },
  });

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  for (const subscriber of subscribers) {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: subscriber.email,
      subject: 'Votre newsletter',
      text: 'Voici les dernières nouvelles de notre site...',
    });
  }

  return NextResponse.json({ message: 'Newsletter envoyée à tous les abonnés' });
}
