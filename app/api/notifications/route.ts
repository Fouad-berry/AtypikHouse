
import { NextResponse } from 'next/server';
import prisma from '@/app/libs/prismadb';
import getCurrentUser from '@/app/actions/getCurrentUser';

export const dynamic = 'force-dynamic';

export async function GET(request: Request) {
  try {
    const lastChecked = new Date(Date.now() - 60 * 1000);
    const newListing = await prisma.listing.findMany({
      where: {
        createAt: {
          gte: lastChecked,
        },
      },
    });

    return NextResponse.json({ hasNewListing: newListing.length > 0 });
  } catch (error) {
    console.error('Erreur lors de la vérification des nouvelles locations:', error);
    return NextResponse.error();
  }
}
