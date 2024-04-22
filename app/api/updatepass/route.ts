import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import prisma from "@/app/libs/prismadb";
import getCurrentUser from "@/app/actions/getCurrentUser";

export async function POST(request: Request) {
    const currentUser = await getCurrentUser();

    if (!currentUser) {
        return NextResponse.error();
    }

    const { oldPassword, newPassword } = await request.json();

    if (!oldPassword || !newPassword) {
        return NextResponse.error();
    }

    try {
        if (!currentUser.hashedPassword) {
            return NextResponse.error();
        }

        const passwordMatch = await bcrypt.compare(oldPassword, currentUser.hashedPassword);

        if (!passwordMatch) {
            return NextResponse.error();
        }

        const hashedNewPassword = await bcrypt.hash(newPassword, 12);

        await prisma.user.update({
            where: {
                id: currentUser.id
            },
            data: {
                hashedPassword: hashedNewPassword
            }
        });

        return NextResponse.json({ message: "Mot de passe changé avec succès" });
    } catch (error) {
        console.error("Erreur lors du changement du mot de passe:", error);
        return NextResponse.error();
    }
}
