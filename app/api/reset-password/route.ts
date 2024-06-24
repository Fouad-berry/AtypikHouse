// /app/api/auth/reset-password.ts
import { NextResponse } from 'next/server';
import prisma from '@/app/libs/prismadb';
import bcrypt from 'bcrypt';

export async function POST(request: Request) {
    const { email, code, newPassword } = await request.json();

    const user = await prisma.user.findUnique({ where: { email } });

    if (!user || user.verificationCode !== code) {
        return NextResponse.json({ message: 'Code de vérification invalide' }, { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(newPassword, 12);

    await prisma.user.update({
        where: { email },
        data: { hashedPassword, verificationCode: null }
    });

    return NextResponse.json({ message: 'Mot de passe mis à jour' });
}
