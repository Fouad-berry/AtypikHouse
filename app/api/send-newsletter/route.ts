import { NextResponse } from 'next/server';
import prisma from '@/app/libs/prismadb';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  const { subject, content } = await request.json();

  if (!subject || !content) {
    return NextResponse.json({ message: 'Sujet et contenu sont requis.' }, { status: 400 });
  }

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


  const emailHTML = `
    <div style="font-family: Arial, sans-serif; color: #333;">
      <h2 style="background-color: #f4f4f4; padding: 10px; text-align: center;">${subject}</h2>
      <div style="padding: 20px;">
        <p>${content}</p>
      </div>
      <hr style="border: 1px solid #ddd;"/>
      <footer style="text-align: center; padding: 10px;">
        <p>Merci de nous suivre !</p>
        <p><a href="https://votre-site.com" style="color: #007bff;">Visitez notre site</a></p>
        <p><a href="https://votre-site.com/unsubscribe" style="color: #007bff;">Se désinscrire</a></p>
      </footer>
    </div>
  `;

  for (const subscriber of subscribers) {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: subscriber.email,
      subject: subject,
      html: emailHTML,
    });
  }

  return NextResponse.json({ message: 'Newsletter envoyée à tous les abonnés' });
}
