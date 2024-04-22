'use client';

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Container from "../components/Container";
import Heading from "../components/Heading";
import { SafeUser } from "../types";
import axios from "axios";
import toast from "react-hot-toast";
import { formatDistanceToNow } from "date-fns";
import frLocale from 'date-fns/locale/fr';

interface TripsClientProps {
    currentUser?: SafeUser;
}

const ProfileClient: React.FC<TripsClientProps> = ({
    currentUser
}) => {
    const router = useRouter();
    const [deletingId, setDeletingId] = useState('');
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [accountAge, setAccountAge] = useState('');

    useEffect(() => {
        if (currentUser?.createAt) {
            const distanceToNow = formatDistanceToNow(new Date(currentUser.createAt), { locale: frLocale });
            setAccountAge(distanceToNow);
        }
    }, [currentUser]);


    const onCancel = (id: string) => {
        // Your onCancel function
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            await axios.post(`/api/updatepass/`, {
                oldPassword,
                newPassword
            });
            toast.success("Mot de passe modifié avec succès !");
        } catch (error) {
            toast.error("Erreur lors de la modification du mot de passe");
        }
    };
    
    return (
        <Container>
            <Heading 
                title={`Bienvenue sur votre profil, ${currentUser?.name || ''}`}
                subtitle="D'ou vous venez et ou vous voulez aller ?"
            />
            <div className="mt-10 grid place-items-start">
                {/* Display user card */}
                {currentUser && (
                    <div className=" bg-white rounded-md shadow-lg p-6 flex flex-col items-center mb-6">
                        {/* User image */}
                        <img
                            src={currentUser.image || "/placeholder-image.jpg"} // Remplacez "/placeholder-image.jpg" par le chemin de votre image de remplacement
                            alt="User"
                            className="w-24 h-24 rounded-full mb-4"
                        />
                        {/* User name */}
                        <p className="text-xl font-bold mb-2">{currentUser.name}</p>
                        {/* User email */}
                        <p className="text-gray-600">{currentUser.email}</p>
                        <p className="text-gray-600">Compte créé il y a {accountAge}</p>
                        {/* Add other user information here */}
                    </div>
                )}

                {/* Change password form */}
                <form onSubmit={handleSubmit} className="bg-white rounded-md shadow-lg p-6 flex flex-col items-center">
                    <p className="text-xl font-bold mb-4">Modifier le mot de passe</p>
                    <input
                        type="password"
                        placeholder="Ancien mot de passe"
                        value={oldPassword}
                        onChange={(e) => setOldPassword(e.target.value)}
                        className="w-full p-2 mb-4 border border-gray-300 rounded-md"
                        required
                    />
                    <input
                        type="password"
                        placeholder="Nouveau mot de passe"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        className="w-full p-2 mb-4 border border-gray-300 rounded-md"
                        required
                    />
                    <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md">
                        Modifier
                    </button>
                </form>
            </div>
        </Container>
    );
};

export default ProfileClient;
