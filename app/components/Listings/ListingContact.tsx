'use client';

import { useState } from 'react';
import axios from 'axios';
import Button from '../Button';

const ListingContact = ({ ownerId }: { ownerId: string }) => {
    const [message, setMessage] = useState('');

    const sendMessage = async () => {
        try {
            await axios.post('/api/messageform', {
                ownerId,
                message,
            });
            // Afficher un message de succès ou effectuer d'autres actions nécessaires
        } catch (error) {
            console.error('Erreur lors de l\'envoi du message :', error);
            // Gérer les erreurs d'envoi de message
        }
    };

    return (
        <div>
            <h3 style={{ marginTop: '50px' }} >Contacter le propriétaire de cette location</h3>
            <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Saisissez votre message ici..."
            />
            <div style={{ maxWidth: '200px', marginTop: '10px' }}>
                <Button
                    label="Envoyer"
                    onClick={sendMessage}
                />
            </div>
        </div>
    );
};

export default ListingContact;
