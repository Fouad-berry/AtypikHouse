'use client';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { SafeUser, Message } from '@/app/types';
import Container from '@/app/components/Container';
import Heading from '@/app/components/Heading';
import MessageItem from '@/app/components/MessageItem';
import ContactList from '@/app/components/ContactList';
import { usePathname, useRouter } from 'next/navigation';

export const dynamic = 'force-dynamic';

interface MessagesPageProps {
    currentUser: SafeUser;
}

const MessagesClient: React.FC<MessagesPageProps> = ({ currentUser }) => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [contacts, setContacts] = useState<SafeUser[]>([]);
    const [selectedContact, setSelectedContact] = useState<SafeUser | null>(null);
    const pathname = usePathname();
    const router = useRouter();
    const contactId = pathname ? pathname.split('/').pop() : null;

    useEffect(() => {
        const fetchMessages = async () => {
            if (selectedContact) {
                try {
                    const response = await axios.get('/api/message', { params: { contactId: selectedContact.id } });
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
    }, [selectedContact]);

    const handleContactClick = (contact: SafeUser) => {
        setSelectedContact(contact);
    };

    const handleBackClick = () => {
        setSelectedContact(null);
        router.push('/mes-messages');
    };

    return (
        <Container>
            <Heading title="Bienvenue dans votre espace de messagerie" subtitle="Consultez vos messages" />
            <div className="flex">
                {selectedContact ? (
                    <div className="w-full">
                        <button onClick={handleBackClick} className="text-blue-500 mb-4">← Retour aux messages</button>
                        <MessageItem messages={messages} currentUser={currentUser} contactId={selectedContact.id} />
                    </div>
                ) : (
                    <ContactList contacts={contacts} currentUser={currentUser} onContactClick={handleContactClick} />
                )}
            </div>
        </Container>
    );
};

export default MessagesClient;
