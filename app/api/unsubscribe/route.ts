import { NextResponse } from 'next/server';
import prisma from '@/app/libs/prismadb';

export async function POST(request: Request) {
  const { email } = await request.json();

  const existingSubscriber = await prisma.newsletterSubscriber.findUnique({
    where: { email },
  });

  if (!existingSubscriber || !existingSubscriber.isSubscribed) {
    return NextResponse.json({ message: 'Cet email n’est pas abonné' }, { status: 404 });
  }

  await prisma.newsletterSubscriber.update({
    where: { email },
    data: { isSubscribed: false },
  });

  return NextResponse.json({ message: 'Désabonnement réussi' });
}
