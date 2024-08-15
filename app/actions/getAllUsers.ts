import prisma from "@/app/libs/prismadb";
import { SafeUser } from "@/app/types";

export default async function getUsers(): Promise<SafeUser[]> {
    try {
        const users = await prisma.user.findMany({
            select: {
                id: true,
                name: true,
                email: true,
                role: true,
                createAt: true,
                updateAt: true,
            },
        });

        return users.map(user => ({
            ...user,
            emailVerified: null,
            image: null,
            hashedPassword: null,
            favoriteIds: [],
            verificationCode: null,
            createAt: user.createAt.toISOString(), 
            updateAt: user.updateAt ? user.updateAt.toISOString() : "",
        }));
    } catch (error: any) {
        throw new Error(error);
    }
}
