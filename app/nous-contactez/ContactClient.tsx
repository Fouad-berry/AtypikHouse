'use client';

import { useState, useCallback } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { FaHeadset, FaClock, FaReply } from 'react-icons/fa'; // Importation des icônes
import Image from "next/image"; // Pour l'image à gauche

import Heading from "../components/Heading";
import Container from "../components/Container";
import { SafeUser } from "../types";

interface ContactClientProps {
    currentUser: SafeUser | null;
}

const ContactClient: React.FC<ContactClientProps> = ({ currentUser }) => {
    const [formData, setFormData] = useState({
        yourname: '',
        email: '',
        phone: '',
        message: ''
    });
    const [isSending, setIsSending] = useState(false);
    const router = useRouter();

    const onSend = useCallback(() => {
        const { yourname, email, phone, message } = formData;

        if (!yourname || !email || !phone || !message) {
            toast.error('Tous les champs doivent être remplis');
            return;
        }

        setIsSending(true);

        axios.post('/api/mailchi', {
            yourname,
            email,
            phone,
            message,
            userId: currentUser?.id // Si l'utilisateur est authentifié, lier son ID
        })
        .then(() => {
            toast.success('Message envoyé avec succès');
            setFormData({
                yourname: '',
                email: '',
                phone: '',
                message: ''
            });
            router.refresh();
        })
        .catch(() => {
            toast.error('Erreur lors de l\'envoi du message');
        })
        .finally(() => {
            setIsSending(false);
        });
    }, [formData, currentUser, router]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    return (
        <Container>
            <Heading 
                title="Contactez-nous"
                subtitle="Envoyez un message à l'équipe de support"
            />

            {/* Section contenant l'image et le formulaire */}
            <div className="flex flex-col md:flex-row items-center justify-between mt-6 bg-white rounded-lg p-6">
                {/* Image à gauche */}
                <div className="w-full md:w-1/2 mb-6 md:mb-0">
                    <Image 
                        src="/images/customer.jpg" // Remplace par le chemin de ton image
                        alt="Contact Support"
                        width={500}
                        height={400}
                        className="rounded-lg object-cover"
                    />
                </div>

                {/* Formulaire à droite */}
                <div className="w-full md:w-1/2">
                    <input 
                        type="text"
                        name="yourname"
                        value={formData.yourname}
                        onChange={handleChange}
                        placeholder="Nom complet"
                        className="w-full mb-4 p-4 border border-gray-300 rounded-lg"
                    />
                    <input 
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Email"
                        className="w-full mb-4 p-4 border border-gray-300 rounded-lg"
                    />
                    <input 
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Numéro de téléphone"
                        className="w-full mb-4 p-4 border border-gray-300 rounded-lg"
                    />
                    <textarea 
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tapez votre message ici..."
                        rows={5}
                        className="w-full p-4 border border-gray-300 rounded-lg"
                    />
                    <button 
                        onClick={onSend}
                        disabled={isSending}
                        className="mt-4 p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:bg-gray-300"
                    >
                        {isSending ? 'Envoi en cours...' : 'Envoyer'}
                    </button>
                </div>
            </div>

            {/* Section avec les icônes en dessous */}
            <div className="flex justify-between items-center mt-8 space-x-4 text-center">
                <div className="flex flex-col items-center">
                    <FaHeadset size={40} className="text-blue-500" />
                    <span className="mt-2 text-gray-700">Service Client</span>
                </div>
                <div className="flex flex-col items-center">
                    <FaClock size={40} className="text-blue-500" />
                    <span className="mt-2 text-gray-700">24h/24h à votre écoute</span>
                </div>
                <div className="flex flex-col items-center">
                    <FaReply size={40} className="text-blue-500" />
                    <span className="mt-2 text-gray-700">Retour très rapide</span>
                </div>
            </div>
        </Container>
    );
};

export default ContactClient;
