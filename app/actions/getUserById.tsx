import prisma from "@/app/libs/prismadb";

interface IParams {
    userId?: string;
}

export default async function getUserById(params: IParams) {
    try {
        const { userId } = params;

        const user = await prisma.user.findUnique({
            where: {
                id: userId
            }
        });

        if (!user) {
            return null;
        }

        return {
            ...user,
            name: user.name,
            createAt: user.createAt.toISOString(),
            updateAt: user.updateAt.toISOString(),
            emailVerified: user.emailVerified?.toISOString() || null
        };
    } catch (error: any) {
        throw new Error(error);
    }
}
