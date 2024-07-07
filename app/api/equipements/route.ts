import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/app/libs/prismadb';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { label, icon } = req.body;

        if (!label || !icon) {
            return res.status(400).json({ message: 'Label and icon are required' });
        }

        const newEquipement = await prisma.equipment.create({
            data: { label, icon },
        });

        return res.status(200).json(newEquipement);
    } else if (req.method === 'GET') {
        const equipments = await prisma.equipment.findMany();
        return res.status(200).json(equipments);
    } else {
        return res.status(405).json({ message: 'Method not allowed' });
    }
}
