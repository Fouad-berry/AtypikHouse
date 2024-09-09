import { NextResponse } from 'next/server';
import prisma from '@/app/libs/prismadb';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
    const { message, userId } = await request.json();

    if (!message || !userId) {
        return NextResponse.json({ message: 'Message ou utilisateur invalide' }, { status: 400 });
    }

    // Récupérer les infos de l'utilisateur
    const user = await prisma.user.findUnique({ where: { id: userId } });

    if (!user) {
        return NextResponse.json({ message: 'Utilisateur non trouvé' }, { status: 404 });
    }

    // Sauvegarder le message dans la base de données
    await prisma.contactMessage.create({
        data: {
            message,
            userId
        }
    });

    // Configurer nodemailer
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });

    // Envoyer l'email au destinataire prédéfini
    const predefinedEmail = process.env.CONTACT_EMAIL;
    
    try {
        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: predefinedEmail,
            subject: `Nouveau message de ${user.email}`,
            text: `Message : ${message}\nDe : ${user.email}`
        });

        return NextResponse.json({ message: 'Message envoyé avec succès' });
    } catch (error) {
        console.error('Erreur lors de l\'envoi de l\'email:', error);
        return NextResponse.json({ message: 'Erreur lors de l\'envoi de l\'email' }, { status: 500 });
    }
}
