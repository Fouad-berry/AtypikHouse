import { NextResponse } from "next/server";

import getCurrentUser from "@/app/actions/getCurrentUser";
import prisma from "@/app/libs/prismadb";

interface IParams {
    listingId?: string;
}

export async function DELETE(
    request: Request,
    {params}: {params: IParams}
) {
    const currentUser = await getCurrentUser();

    if(!currentUser) {
        return NextResponse.error();
    }

    const {listingId} = params;

    if (!listingId || typeof listingId !== 'string') {
        throw new Error('Id invalide');
    }

    const listing = await prisma.listing.deleteMany({
        where: {
            id: listingId,
            userId: currentUser.id
        }
    })

    return NextResponse.json(listing);
}

export async function PUT(
    request: Request,
    { params }: { params: IParams }
) {
    const currentUser = await getCurrentUser();

    if (!currentUser) {
        return NextResponse.error();
    }

    const { listingId } = params;

    if (!listingId || typeof listingId !== 'string') {
        throw new Error('Id invalide');
    }

    const body = await request.json();

    const updatedListing = await prisma.listing.updateMany({
        where: {
            id: listingId,
            userId: currentUser.id
        },
        data: {
            title: body.title,
            description: body.description,
            price: body.price,
            category: body.category,
            locationvalue: body.location,
            guestCount: body.guestCount,
            roomCount: body.roomCount,
            bathroomCount: body.bathroomCount,
            imageSrc: body.imageSrc,
            equipment: body.equipment,
        }
    });

    return NextResponse.json(updatedListing);
}