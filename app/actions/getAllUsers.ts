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
            },
        });

        return users.map(user => ({
            ...user,
            emailVerified: null,
            image: null,
            hashedPassword: null,
            createAt: new Date().toISOString(), 
            updateAt: new Date().toISOString(),
            favoriteIds: [],
            verificationCode: null,
        }));
    } catch (error: any) {
        throw new Error(error);
    }
}
