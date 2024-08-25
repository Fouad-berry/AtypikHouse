'use client';

import { useState } from "react";
import AddEquipmentModal from "./AddEquipmentModal";
import Container from "@/app/components/Container";
import Button from "@/app/components/Button";
import { SafeUser } from "@/app/types";

interface AdminClientProps {
    users: SafeUser[];
    currentUser?: SafeUser | null;
}

const AdminClient: React.FC<AdminClientProps> = ({ users, currentUser }) => {
    const [isAddEquipmentModalOpen, setIsAddEquipmentModalOpen] = useState(false);

    return (
        <Container>
            <div className="flex flex-col gap-4">
                <h1 className="text-2xl font-semibold">Bienvenue sur votre panneau d&apos;administration</h1>
                
                <Button 
                    label="Ajouter équipement"
                    onClick={() => setIsAddEquipmentModalOpen(true)}
                    className="bg-blue-500 text-white hover:bg-blue-600 transition-colors w-full sm:w-1/2 md:w-1/4 lg:w-1/5 border-none"
                />

                <h3 className="text-sm font-normal">Voilà ci-dessous la liste des utilisateurs</h3>

                <AddEquipmentModal 
                    isOpen={isAddEquipmentModalOpen} 
                    onClose={() => setIsAddEquipmentModalOpen(false)} 
                />

                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                        <thead>
                            <tr>
                                <th className="py-3 px-6 text-left border-b border-gray-300 border-r">Nom</th>
                                <th className="py-3 px-6 text-left border-b border-gray-300 border-r">Email</th>
                                <th className="py-3 px-6 text-left border-b border-gray-300 border-r">Rôle</th>
                                <th className="py-3 px-6 text-left border-b border-gray-300 border-r">Date de création</th>
                                <th className="py-3 px-6 text-left border-b border-gray-300">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user) => (
                                <tr key={user.id} className="hover:bg-gray-100 transition-colors">
                                    <td className="py-2 px-6 border-b border-gray-300 border-r">{user.name}</td>
                                    <td className="py-2 px-6 border-b border-gray-300 border-r">{user.email}</td>
                                    <td className="py-2 px-6 border-b border-gray-300 border-r">{user.role}</td>
                                    <td className="py-2 px-6 border-b border-gray-300 border-r">
                                        {new Date(user.createAt).toLocaleDateString('fr-FR')}
                                    </td>
                                    <td className="py-2 px-6 border-b border-gray-300">
                                        <Button
                                            label="Supprimer"
                                            onClick={() => console.log(`Supprimer l'utilisateur ${user.id}`)}
                                            className="bg-red-500 text-white hover:bg-red-600 transition-colors border-none"
                                        />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </Container>
    );
};

export default AdminClient;
