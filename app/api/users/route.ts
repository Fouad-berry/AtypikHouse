import { NextResponse } from "next/server";
import prisma from "@/app/libs/prismadb";

export async function DELETE(request: any) {
    try {
        // Extraire l'ID de l'utilisateur à supprimer à partir de la requête
        const { userId } = request.query;

        // Vérifier si l'ID de l'utilisateur est fourni dans la requête
        if (!userId) {
            return NextResponse.json({ success: false, message: "ID de l'utilisateur manquant dans la requête" }, { status: 400 });
        }

        // Supprimer l'utilisateur de la base de données en utilisant Prisma
        await prisma.user.delete({
            where: {
                id: userId as string
            }
        });

        // Retourner une réponse JSON indiquant que l'utilisateur a été supprimé avec succès
        return NextResponse.json({ success: true, message: "Utilisateur supprimé avec succès" });
    } catch (error) {
        console.error('Error deleting user:', error);
        return NextResponse.error();
    }
}
