'use client';

import { useState, useCallback } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

import Heading from "../components/Heading";
import Container from "../components/Container";
import { SafeUser } from "../types";

interface ContactClientProps {
    currentUser: SafeUser | null;
}

const ContactClient: React.FC<ContactClientProps> = ({ currentUser }) => {
    const [message, setMessage] = useState('');
    const [isSending, setIsSending] = useState(false);
    const router = useRouter();

    const onSend = useCallback(() => {
        if (!message) {
            toast.error('Le message ne peut pas être vide');
            return;
        }

        setIsSending(true);

        axios.post('/api/mailchi', {
            message,
            userId: currentUser?.id
        })
        .then(() => {
            toast.success('Message envoyé avec succès');
            setMessage('');
            router.refresh();
        })
        .catch(() => {
            toast.error('Erreur lors de l\'envoi du message');
        })
        .finally(() => {
            setIsSending(false);
        });
    }, [message, currentUser, router]);

    return (
        <Container>
            <Heading 
                title="Contactez-nous"
                subtitle="Envoyez un message à l'équipe de support"
            />
            <div className="mt-6">
                <textarea 
                    className="w-full p-4 border border-gray-300 rounded-lg"
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tapez votre message ici..."
                />
            </div>
            <button 
                onClick={onSend}
                disabled={isSending}
                className="mt-4 p-3 bg-blue-500 text-white rounded-lg disabled:bg-gray-300"
            >
                {isSending ? 'Envoi en cours...' : 'Envoyer'}
            </button>
        </Container>
    );
};

export default ContactClient;
