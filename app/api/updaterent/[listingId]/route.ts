import { NextResponse } from "next/server";
import prisma from "@/app/libs/prismadb";
import getCurrentUser from "@/app/actions/getCurrentUser";

export async function PUT(request: Request) {
    const currentUser = await getCurrentUser();

    if (!currentUser) {
        return NextResponse.error();
    }

    try {
        const {
            id,
            category,
            locationvalue,
            guestCount,
            roomCount,
            bathroomCount,
            imageSrc,
            price,
            title,
            description,
            equipment
        } = await request.json();

        if (!id || !category || !locationvalue || !guestCount || !roomCount || !bathroomCount || !price || !title || !description) {
            return NextResponse.json({ message: "Tous les champs requis ne sont pas fournis" }, { status: 400 });
        }

        const priceNumber = typeof price === 'string' ? parseFloat(price) : price;

        if (isNaN(priceNumber) || priceNumber <= 0) {
            return NextResponse.json({ message: "Le prix est invalide" }, { status: 400 });
        }

        if (!Array.isArray(imageSrc) || imageSrc.some(src => typeof src !== 'string')) {
            return NextResponse.json({ message: "Les images doivent être un tableau d'URLs" }, { status: 400 });
        }

        const updatedProperty = await prisma.listing.update({
            where: {
                id: id,
                userId: currentUser.id,
            },
            data: {
                category,
                locationvalue,
                guestCount,
                roomCount,
                bathroomCount,
                imageSrc,
                price: priceNumber,
                title,
                description,
                equipment,
            }
        });

        return NextResponse.json({ message: "Propriété mise à jour avec succès", listing: updatedProperty });
    } catch (error) {
        console.error("Erreur lors de la mise à jour de la propriété:", error);
        return NextResponse.json({ message: "Erreur interne lors de la mise à jour de la propriété" }, { status: 500 });
    }
}
