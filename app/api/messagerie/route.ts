import { NextResponse } from 'next/server';
import prisma from '@/app/libs/prismadb';
import getCurrentUser from '@/app/actions/getCurrentUser';

export async function POST(request: Request) {
  try {
    const currentUser = await getCurrentUser();

    if (!currentUser) {
      return NextResponse.error();
    }

    const body = await request.json();
    const { ownerId, message } = body;

    if (!ownerId || !message) {
      return NextResponse.error();
    }

    const newMessage = await prisma.message.create({
      data: {
        content: message,
        senderId: currentUser.id,
        receiverId: ownerId,
      },
    });

    return NextResponse.json(newMessage);
  } catch (error) {
    console.error('Error sending message:', error);
    return NextResponse.error();
  }
}
