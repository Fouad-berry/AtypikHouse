// api/contacts.ts
import { NextResponse } from 'next/server';
import prisma from '@/app/libs/prismadb';
import getCurrentUser from '@/app/actions/getCurrentUser';

export const runtime = "edge";
export async function GET(request: Request) {
  try {
    const currentUser = await getCurrentUser();

    if (!currentUser) {
      return NextResponse.error();
    }

    const contacts = await prisma.user.findMany({
      where: {
        receivedMessages: {
          some: {
            senderId: currentUser.id,
          },
        },
      },
    });

    return NextResponse.json(contacts);
  } catch (error) {
    console.error('Error fetching contacts:', error);
    return NextResponse.error();
  }
}
