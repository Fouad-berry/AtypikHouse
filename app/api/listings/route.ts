import { NextResponse } from "next/server";
import prisma from "@/app/libs/prismadb";
import getCurrentUser from "@/app/actions/getCurrentUser";

export async function POST(request: Request) {
    const currentUser = await getCurrentUser();

    if (!currentUser) {
        return NextResponse.error();
    }

    const body = await request.json();
    const {
        title,
        description,
        imageSrc, // Tableau d'URLs des images
        category,
        roomCount,
        bathroomCount,
        guestCount,
        location,
        price,
        equipment
    } = body;

    // Vérification des champs requis
    Object.keys(body).forEach((value: any) => {
        if (!body[value]) {
            return NextResponse.error();
        }
    });

    // Création du listing avec Prisma
    const listing = await prisma.listing.create({
        data: {
            title,
            description,
            imageSrc, // Stocker les images en tant que tableau de chaînes
            category,
            roomCount,
            bathroomCount,
            guestCount,
            equipment: { set: equipment }, // Gestion des équipements avec Prisma
            locationvalue: location.value,
            price: parseInt(price, 10),
            userId: currentUser.id,
        }
    });

    return NextResponse.json(listing);
}
