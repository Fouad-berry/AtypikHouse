import { NextResponse } from "next/server";
import prisma from "@/app/libs/prismadb";
import getCurrentUser from "@/app/actions/getCurrentUser";

export async function POST(
    request: Request
) {
    // Obtenez l'utilisateur actuel
    const currentUser = await getCurrentUser();

    // Vérifiez si l'utilisateur est authentifié
    if (!currentUser) {
        return NextResponse.error();
    }

    // Analysez le corps de la requête pour obtenir les données de réservation
    const body = await request.json();

    const {
        listingId,
        formattedStartDate,
        formattedEndDate,
        totalPrice
    } = body;

    // Vérifiez si toutes les données requises sont présentes
    if (!listingId || !formattedStartDate || !formattedEndDate || !totalPrice) {
        return NextResponse.error();
    }

    try {
        // Créez une nouvelle réservation associée au listing spécifié
        const newReservation = await prisma.finalreservation.create({
            data: {
                startDate: new Date(formattedStartDate),
                endDate: new Date(formattedEndDate),
                totalPrice
            }
        });

        // Retournez la nouvelle réservation créée
        return NextResponse.json(newReservation);
    } catch (error) {
        console.error("Erreur lors de la création de la réservation :", error);
        return NextResponse.error();
    }
}
