'use client';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { SafeUser, Message } from '@/app/types';
import Container from '../components/Container';
import Heading from '../components/Heading';
import MessageItem from '../components/MessageItem';
import { useRouter } from 'next/navigation';

interface MessagesPageProps {
    currentUser: SafeUser;
}

const MessagesClient: React.FC<MessagesPageProps> = ({ currentUser }) => {
    const [messages, setMessages] = useState<Message[]>([]);
    const router = useRouter();

    useEffect(() => {
        const fetchMessages = async () => {
            try {
                const response = await axios.get('/api/message');
                setMessages(response.data);
            } catch (error) {
                console.error('Error fetching messages:', error);
            }
        };

        fetchMessages();
    }, []);

    return (
        <Container>
            <Heading title="Mes Messages" subtitle="Communiquez avec d'autres utilisateurs" />
            <div>
                {messages.map((message) => (
                    <MessageItem key={message.id} message={message} currentUser={currentUser} />
                ))}
            </div>
        </Container>
    );
};

export default MessagesClient;
