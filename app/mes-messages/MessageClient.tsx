'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import { SafeUser } from "@/app/types";
import Container from "../components/Container";
import Heading from "../components/Heading";
import MessageItem from "../components/MessageItem";
import { useRouter } from "next/navigation";

interface Message {
    id: string;
    content: string;
    senderId: string;
    receiverId: string;
    createdAt: string;
    sender: {
        name: string;
    };
    receiver: {
        name: string;
    };
}

interface MessagesPageProps {
    currentUser: SafeUser;
}

const MessagesClient: React.FC<MessagesPageProps> = ({ currentUser }) => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [newMessage, setNewMessage] = useState('');
    const [selectedUserId, setSelectedUserId] = useState('');
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

    const sendMessage = async () => {
        try {
            await axios.post('/api/message', {
                receiverId: selectedUserId,
                content: newMessage,
            });
            setNewMessage('');
            router.refresh();
        } catch (error) {
            console.error('Error sending message:', error);
        }
    };

    return (
        <Container>
            <Heading title="Mes Messages" subtitle="Communiquez avec d'autres utilisateurs" />
            <div>
                {messages.map((message) => (
                    <MessageItem key={message.id} message={message} currentUser={currentUser} />
                ))}
            </div>
            <div style={{ marginTop: '20px' }}>
                <textarea
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    placeholder="Saisissez votre message ici..."
                />
                <div style={{ marginTop: '10px' }}>
                    <button onClick={sendMessage}>Envoyer</button>
                </div>
            </div>
        </Container>
    );
};

export default MessagesClient;
