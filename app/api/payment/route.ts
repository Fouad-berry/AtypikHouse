import { NextResponse } from 'next/server';
import prisma from '@/app/libs/prismadb';
import getCurrentUser from '@/app/actions/getCurrentUser';

function generateOrderNumber() {
  return 'ORD-' + Math.floor(Math.random() * 1000000).toString().padStart(6, '0');
}

export async function POST(request: Request) {
  const { userId, totalPrice, travelerName } = await request.json();

  try {
    const orderNumber = generateOrderNumber();

    const payment = await prisma.payment.create({
      data: {
        userId,
        totalPrice,
        status: 'completed',
        travelerName,
        orderNumber,
        createdAt: new Date(),
      },
    });

    return NextResponse.json(payment, { status: 200 });
  } catch (error) {
    console.error("Erreur lors de l'enregistrement du paiement :", error);
    return NextResponse.json({ message: "Erreur lors de l'enregistrement du paiement" }, { status: 500 });
  }
}
