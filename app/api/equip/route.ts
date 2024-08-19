import { NextResponse } from "next/server";
import prisma from "@/app/libs/prismadb";
import getCurrentUser from "@/app/actions/getCurrentUser";

export async function POST(request: Request) {
    try {
        const currentUser = await getCurrentUser();

        if (!currentUser || currentUser.role !== 'admin') {
            return NextResponse.error();
        }

        const body = await request.json();
        const { label, icon } = body;

        if (!label || !icon) {
            return NextResponse.error();
        }

        const newEquip = await prisma.equip.create({
            data: {
                label,
                icon,
            },
        });

        return NextResponse.json({ success: true, equip: newEquip });
    } catch (error) {
        console.error('Error creating equip:', error);
        return NextResponse.error();
    }
}
