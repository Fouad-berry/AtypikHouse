// /app/api/equipments/route.ts

import { NextResponse } from "next/server";
import prisma from "@/app/libs/prismadb";

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, image } = body;

        if (!name || !image) {
            return NextResponse.error();
        }

        const equipment = await prisma.equipment.create({
            data: {
                name,
                image, // L'image est stockée directement en base64 dans la base de données
            },
        });

        return NextResponse.json(equipment);
    } catch (error) {
        console.error("Erreur lors de l'ajout de l'équipement:", error);
        return NextResponse.error();
    }
}

export async function GET() {
    try {
        const equipments = await prisma.equipment.findMany();
        return NextResponse.json(equipments);
    } catch (error) {
        console.error("Erreur lors de la récupération des équipements:", error);
        return NextResponse.error();
    }
}
