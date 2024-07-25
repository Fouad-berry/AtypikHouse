import { NextResponse } from 'next/server';
import prisma from '@/app/libs/prismadb';
import getCurrentUser from '@/app/actions/getCurrentUser';

export async function GET(request: Request) {
  try {
    const currentUser = await getCurrentUser();

    if (!currentUser) {
      return NextResponse.error();
    }

    const messages = await prisma.message.findMany({
      where: {
        OR: [
          { senderId: currentUser.id },
          { receiverId: currentUser.id },
        ],
      },
      orderBy: {
        createdAt: 'desc',
      },
      include: {
        sender: true, // Include sender information
        receiver: true, // Include receiver information
      },
    });

    return NextResponse.json(messages);
  } catch (error) {
    console.error('Error fetching messages:', error);
    return NextResponse.error();
  }
}

export async function POST(request: Request) {
  try {
      const currentUser = await getCurrentUser();

      if (!currentUser) {
          return NextResponse.error();
      }

      const { receiverId, content } = await request.json();

      if (!receiverId || !content) {
          return NextResponse.error();
      }

      const message = await prisma.message.create({
          data: {
              content,
              senderId: currentUser.id,
              receiverId,
              createdAt: new Date(),
          },
      });

      return NextResponse.json(message);
  } catch (error) {
      console.error('Error sending message:', error);
      return NextResponse.error();
  }
}