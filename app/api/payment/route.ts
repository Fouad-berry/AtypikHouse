import { NextResponse } from 'next/server';
import prisma from '@/app/libs/prismadb';
import getCurrentUser from '@/app/actions/getCurrentUser';

export async function POST(request: Request) {
    const { userId, totalPrice, travelerName } = await request.json();

    try {
        const payment = await prisma.payment.create({
            data: {
                userId,
                totalPrice,
                status: 'completed',
                travelerName,
                createdAt: new Date(),
            },
        });

        return NextResponse.json(payment, { status: 200 });
    } catch (error) {
        console.error("Erreur lors de l'enregistrement du paiement :", error);
        return NextResponse.json({ message: "Erreur lors de l'enregistrement du paiement" }, { status: 500 });
    }
}
