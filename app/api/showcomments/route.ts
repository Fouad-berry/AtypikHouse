import { NextResponse } from "next/server";
import prisma from "@/app/libs/prismadb";

export async function GET(request: Request) {
    try {
        // Extraire le paramètre 'listingId' de la requête
        const url = new URL(request.url);
        const listingId = url.searchParams.get('listingId');
        
        // Vérifier si le paramètre listingId est présent
        if (!listingId) {
            return NextResponse.error();
        }

        // Récupérer les commentaires associés à listingId depuis la base de données
        const comments = await prisma.comment.findMany({
            where: {
                listingId: String(listingId), // Convertir listingId en chaîne de caractères
            },
            include: {
                user: true, // Inclure les informations sur l'utilisateur qui a posté le commentaire
            },
            orderBy: {
                createdAt: 'desc', // Trier les commentaires par date de création décroissante
            },
        });

        // Retourner les commentaires sous forme de réponse JSON
        return NextResponse.json({ success: true, comments });
    } catch (error) {
        console.error('Error retrieving comments:', error);
        return NextResponse.error();
    }
}
