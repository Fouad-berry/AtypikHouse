import { NextResponse } from "next/server";
import prisma from "@/app/libs/prismadb";
import getCurrentUser from "@/app/actions/getCurrentUser";

export async function DELETE(
    request: Request,
    { params }: { params: { userId: string } }
) {
    const currentUser = await getCurrentUser();

    if (!currentUser || currentUser.role !== 'admin') {
        return NextResponse.error();
    }

    const { userId } = params;

    if (!userId || typeof userId !== 'string') {
        throw new Error('ID utilisateur invalide');
    }

    const user = await prisma.user.delete({
        where: {
            id: userId,
        },
    });

    return NextResponse.json(user);
}
