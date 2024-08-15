'use client';

import { useRouter } from "next/navigation";
import { useState, useCallback } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { SafeUser } from "@/app/types";
import Container from "@/app/components/Container";
import Button from "@/app/components/Button";

interface AdminClientProps {
    users: SafeUser[];
    currentUser?: SafeUser | null;
}

const AdminClient: React.FC<AdminClientProps> = ({ users, currentUser }) => {
    const router = useRouter();
    const [isDeleting, setIsDeleting] = useState<string | null>(null);

    const onDeleteUser = useCallback((userId: string) => {
        if (!currentUser || currentUser.role !== 'admin') {
            return;
        }

        setIsDeleting(userId);

        axios.delete(`/api/users/${userId}`)
            .then(() => {
                toast.success('Utilisateur supprimé');
                router.refresh();  // Refresh the page to update the list of users
            })
            .catch((error) => {
                toast.error('Erreur lors de la suppression de l\'utilisateur');
            })
            .finally(() => {
                setIsDeleting(null);
            });
    }, [currentUser, router]);

    // Fonction pour formater la date et l'heure
    const formatDate = (dateString: string) => {
        const options: Intl.DateTimeFormatOptions = {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
        };
        return new Date(dateString).toLocaleDateString('fr-FR', options);
    };

    return (
        <Container>
            <div className="flex flex-col gap-4">
                <h1 className="text-2xl font-semibold">Bienvenu sur votre panneau d&apos;administration</h1>
                <h3 className="text-sm font-normal">Voilà ci-dessous la liste des utilisateurs</h3>
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
                                        {formatDate(user.createAt)}
                                    </td>
                                    <td className="py-2 px-6 border-b border-gray-300">
                                        <Button
                                            label="Supprimer"
                                            onClick={() => onDeleteUser(user.id)}
                                            disabled={isDeleting === user.id}
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
