import { NextResponse } from 'next/server';
import prisma from '@/app/libs/prismadb';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
    const { yourname, email, phone, message, userId } = await request.json();

    // Validation des données envoyées
    if (!yourname || !email || !phone || !message) {
        return NextResponse.json({ message: 'Tous les champs sont requis' }, { status: 400 });
    }

    // Sauvegarder le message dans la base de données
    try {
        await prisma.contactMessage.create({
            data: {
                yourname,
                email,
                phone,
                message,
                userId: userId || undefined, // Utiliser userId si fourni
            }
        });
    } catch (error) {
        console.error('Erreur lors de l\'enregistrement du message:', error);
        return NextResponse.json({ message: 'Erreur lors de l\'enregistrement du message' }, { status: 500 });
    }

    // Configurer nodemailer pour l'envoi d'email
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });

    const predefinedEmail = process.env.CONTACT_EMAIL;

    // Envoyer un email avec le message
    try {
        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: predefinedEmail,
            subject: `Nouveau message de ${yourname}`,
            text: `
                Nom: ${yourname}
                Email: ${email}
                Téléphone: ${phone}
                Message: ${message}
            `
        });

        return NextResponse.json({ message: 'Message envoyé avec succès' });
    } catch (error) {
        console.error('Erreur lors de l\'envoi de l\'email:', error);
        return NextResponse.json({ message: 'Erreur lors de l\'envoi de l\'email' }, { status: 500 });
    }
}
