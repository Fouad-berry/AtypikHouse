import prisma from "@/app/libs/prismadb";

interface IParams {
    listingId?: string;
    userId?: string;
}

export default async function getComments(params: IParams) {
    try {
        const { listingId, userId } = params;

        const query: any = {};

        if (listingId) {
            query.listingId = listingId;
        }

        if (userId) {
            query.userId = userId;
        }

        const comments = await prisma.comment.findMany({
            where: query,
            orderBy: {
                createdAt: 'desc' // Assuming 'createdAt' is the name of the field storing the comment creation date
            }
        });

        const safeComments = comments.map((comment) => ({
            ...comment,
            createdAt: comment.createdAt.toISOString(),
            // Add any other transformations needed for safe usage of the comment data
        }));

        return safeComments;
    } catch (error: any) {
        throw new Error(error);
    }
}
