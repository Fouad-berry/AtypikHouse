// actions/getAllUsers.js
import prisma from "@/app/libs/prismadb";

const getAllUsers = async () => {
    try {
        const users = await prisma.user.findMany();
        return users;
    } catch (error) {
        console.error('Error retrieving users:', error);
        return [];
    }
}

export default getAllUsers;
