'use client';

import { useEffect, useState } from "react";
import Image from "next/image";
import Container from "../components/Container";
import Heading from "../components/Heading";
import { SafeUser } from "../types";
import axios from "axios";
import toast from "react-hot-toast";
import { formatDistanceToNow } from "date-fns";
import frLocale from 'date-fns/locale/fr';
import { FiUser, FiMail, FiLock } from "react-icons/fi";
import Button from "../components/Button"; // Importer le composant Button

interface TripsClientProps {
    currentUser?: SafeUser;
}

const ProfileClient: React.FC<TripsClientProps> = ({
    currentUser
}) => {
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [accountAge, setAccountAge] = useState('');

    useEffect(() => {
        if (currentUser?.createAt) {
            const distanceToNow = formatDistanceToNow(new Date(currentUser.createAt), { locale: frLocale });
            setAccountAge(distanceToNow);
        }
    }, [currentUser]);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            await axios.post(`/api/updatepass/`, {
                oldPassword,
                newPassword
            });
            toast.success("Mot de passe modifié avec succès !");
            setOldPassword('');
            setNewPassword('');
        } catch (error) {
            toast.error("Erreur lors de la modification du mot de passe");
        }
    };
    
    return (
        <>
        <br />
        <Container>
            <Heading 
                title={`Bienvenue sur votre profil, ${currentUser?.name || ''}`}
                subtitle="Vous trouverez ci-dessous les informations relatives à votre profil."
            />
            <div className="mt-10 flex flex-col items-center">
                {/* Display user card */}
                {currentUser && (
                    <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center mb-6 w-full max-w-lg">
                        {/* User image */}
                        {currentUser.image ? (
                            <Image
                                src={currentUser.image} 
                                alt="User"
                                width={96}
                                height={96}
                                className="w-24 h-24 rounded-full mb-4 object-cover"
                            />
                        ) : (
                            <Image
                                src="/images/placeholder.jpg" 
                                alt="Secours"
                                width={96}
                                height={96}
                                className="w-24 h-24 rounded-full mb-4 object-cover"
                            />
                        )}
                        {/* User name */}
                        <p className="text-2xl font-semibold mb-2">{currentUser.name}</p>
                        {/* User email */}
                        <p className="text-gray-600 flex items-center"><FiMail className="mr-2"/> {currentUser.email}</p>
                        <p className="text-gray-600 flex items-center"><FiUser className="mr-2"/> Compte créé il y a {accountAge}</p>
                        {/* Add other user information here */}
                    </div>
                )}

                {/* Change password form */}
                <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center w-full max-w-lg">
                    <p className="text-2xl font-semibold mb-4">Modifier le mot de passe</p>
                    <div className="mb-4 w-full">
                        <label htmlFor="oldPassword" className="block text-sm font-medium text-gray-700 mb-2">
                            Ancien mot de passe :
                        </label>
                        <div className="relative">
                            <FiLock className="absolute top-3 left-3 text-gray-400"/>
                            <input
                                id="oldPassword"
                                type="password"
                                placeholder="Ancien mot de passe"
                                value={oldPassword}
                                onChange={(e) => setOldPassword(e.target.value)}
                                className="w-full p-3 pl-10 border border-gray-300 rounded-md"
                                required
                            />
                        </div>
                    </div>
                    <div className="mb-4 w-full">
                        <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700 mb-2">
                            Nouveau mot de passe :
                        </label>
                        <div className="relative">
                            <FiLock className="absolute top-3 left-3 text-gray-400"/>
                            <input
                                id="newPassword"
                                type="password"
                                placeholder="Nouveau mot de passe"
                                value={newPassword}
                                onChange={(e) => setNewPassword(e.target.value)}
                                className="w-full p-3 pl-10 border border-gray-300 rounded-md"
                                required
                            />
                        </div>
                    </div>
                    <Button
                        label="Modifier"
                        onClick={() => {}} // Laisser vide car le formulaire gère l'événement onSubmit
                        className=""
                    />
                </form>
            </div>
        </Container>
        </>
    );
};

export default ProfileClient;
