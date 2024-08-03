
import prisma from '@/app/libs/prismadb';

export async function POST(request: Request) {
    const { userId, totalPrice } = await request.json();

    try {
        await prisma.payment.create({
            data: {
                userId,
                totalPrice,
                createdAt: new Date(),
                status: "completed"
            }
        });

        return new Response(null, { status: 200 });
    } catch (error) {
        console.error("Erreur lors de l'enregistrement du paiement :", error);
        return new Response(null, { status: 500 });
    }
}
