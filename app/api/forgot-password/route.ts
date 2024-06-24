// /app/api/auth/forgot-password.ts
import { NextResponse } from 'next/server';
import prisma from '@/app/libs/prismadb';
import nodemailer from 'nodemailer';
import crypto from 'crypto';

export async function POST(request: Request) {
    const { email } = await request.json();

    const user = await prisma.user.findUnique({ where: { email } });

    if (!user) {
        return NextResponse.json({ message: 'Utilisateur non trouvé' }, { status: 404 });
    }

    const verificationCode = crypto.randomBytes(3).toString('hex').toUpperCase();

    await prisma.user.update({
        where: { email },
        data: { verificationCode }
    });

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });

    await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: email,
        subject: 'Votre code de vérification',
        text: `Votre code de vérification est : ${verificationCode}`
    });

    return NextResponse.json({ message: 'Code de vérification envoyé' });
}
