import { NextResponse } from "next/server";
import prisma from "@/app/libs/prismadb";
import getCurrentUser from "@/app/actions/getCurrentUser";

export async function PUT(request: Request) {
    const currentUser = await getCurrentUser();

    if (!currentUser) {
        return NextResponse.error();
    }

    

    try {
        
        const { id, category, locationvalue, guestCount, roomCount, bathroomCount, imageSrc, price, title, description, equipment } = await request.json();

        const priceNumber = typeof price === 'string' ? parseFloat(price) : price;

        if (!id || !category || !locationvalue || !guestCount || !roomCount || !bathroomCount || !price || !title || !description) {
            return NextResponse.error();
        }

        const updatedProperty = await prisma.listing.update({
            where: {
                id: id,
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
                userId: currentUser.id,
            }
        });

        return NextResponse.json({ message: "Propriété mise à jour avec succès", listing: updatedProperty });
    } catch (error) {
        console.error("Erreur lors de la mise à jour de la propriété:", error);
        return NextResponse.error();
    }
}