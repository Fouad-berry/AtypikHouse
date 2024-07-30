'use client';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { SafeUser, Message } from '@/app/types';
import Container from '@/app/components/Container';
import Heading from '@/app/components/Heading';
import MessageItem from '@/app/components/MessageItem';
import ContactList from '@/app/components/ContactList';
import { useRouter } from 'next/router';

interface MessagesPageProps {
    currentUser: SafeUser;
}

const MessagesClient: React.FC<MessagesPageProps> = ({ currentUser }) => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [contacts, setContacts] = useState<SafeUser[]>([]);
    const router = useRouter();
    const { contactId } = router.query;

    useEffect(() => {
        const fetchMessages = async () => {
            if (contactId) {
                try {
                    const response = await axios.get('/api/message', { params: { contactId } });
                    setMessages(response.data);
                } catch (error) {
                    console.error('Error fetching messages:', error);
                }
            }
        };

        const fetchContacts = async () => {
            try {
                const response = await axios.get('/api/contacts');
                setContacts(response.data);
            } catch (error) {
                console.error('Error fetching contacts:', error);
            }
        };

        fetchMessages();
        fetchContacts();
    }, [contactId]);

    return (
        <Container>
            <Heading title="Mes Messages" subtitle="Communiquez avec d'autres utilisateurs" />
            <div className="flex">
                <ContactList contacts={contacts} currentUser={currentUser} />
                <div className="flex-grow">
                    {contactId ? (
                        <MessageItem messages={messages} currentUser={currentUser} contactId={contactId as string} />
                    ) : (
                        <p className="text-gray-500">Sélectionnez un contact pour voir les messages.</p>
                    )}
                </div>
            </div>
        </Container>
    );
};

export default MessagesClient;
