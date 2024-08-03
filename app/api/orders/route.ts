import { NextResponse } from 'next/server';
import prisma from '@/app/libs/prismadb';
import getCurrentUser from '@/app/actions/getCurrentUser';

export async function GET(request: Request) {
    const currentUser = await getCurrentUser();

    if (!currentUser) {
        return NextResponse.json({ message: "Utilisateur non autorisé" }, { status: 401 });
    }

    try {
        const orders = await prisma.payment.findMany({
            where: {
                userId: currentUser.id,
                createdAt: {
                    not: undefined,  // Filtrer les enregistrements où createdAt n'est pas null
                }
            },
            orderBy: {
                createdAt: 'desc',
            },
        });

        return NextResponse.json(orders, { status: 200 });
    } catch (error) {
        console.error("Erreur lors de la récupération des commandes :", error);
        return NextResponse.json({ message: "Erreur lors de la récupération des commandes" }, { status: 500 });
    }
}
