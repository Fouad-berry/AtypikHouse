import { NextResponse } from "next/server";
import prisma from "@/app/libs/prismadb";
import getCurrentUser from "@/app/actions/getCurrentUser";

export async function POST(request: Request) {
    try {
        // Récupérer l'utilisateur actuel
        const currentUser = await getCurrentUser();

        // Vérifier si l'utilisateur est authentifié
        if (!currentUser) {
            return NextResponse.error();
        }

        // Récupérer le corps de la requête
        const body = await request.json();

        // Extraire les données du corps de la requête
        const { content, listingId } = body;

        // Vérifier si toutes les données nécessaires sont présentes
        if (!content || !listingId) {
            return NextResponse.error();
        }

        // Créer le commentaire dans la base de données à l'aide de Prisma
        const newComment = await prisma.comment.create({
            data: {
                content,
                listingId,
                userId: currentUser.id,
                // Vous pouvez ajouter d'autres champs si nécessaire
            },
        });

        // Répondre avec le nouveau commentaire créé
        return NextResponse.json({ success: true, comment: newComment });
    } catch (error) {
        console.error('Error creating comment:', error);
        return NextResponse.error();
    }
}
