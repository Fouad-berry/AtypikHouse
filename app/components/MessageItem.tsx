// components/MessageItem.tsx
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { Message, SafeUser } from '@/app/types';
import Button from './Button';

export const dynamic = 'force-dynamic';

interface MessageItemProps {
    messages: Message[];
    currentUser: SafeUser;
    contactId: string;
}

const MessageItem: React.FC<MessageItemProps> = ({ messages, currentUser, contactId }) => {
    const [reply, setReply] = useState('');
    const router = useRouter();

    const handleReply = async () => {
        try {
            await axios.post('/api/message', {
                receiverId: contactId,
                content: reply,
            });
            setReply('');
            router.refresh();
        } catch (error) {
            console.error('Error sending reply:', error);
        }
    };

    return (
        <div className="flex flex-col max-w-lg w-full border rounded-lg p-4 mb-4 shadow-lg">
            <div className="flex-grow overflow-y-auto mb-4">
                {messages.map((message) => (
                    <div key={message.id} className={`mb-2 p-2 rounded-lg ${message.senderId === currentUser.id ? 'bg-blue-100 self-end' : 'bg-gray-100 self-start'}`}>
                        <strong>{message.senderId === currentUser.id ? 'You' : message.sender.name}:</strong> {message.content}
                    </div>
                ))}
            </div>
            <div className="mt-4">
                <textarea
                    value={reply}
                    onChange={(e) => setReply(e.target.value)}
                    placeholder="Répondez ici..."
                    className="w-full p-2 border rounded mb-2"
                />
                <Button onClick={handleReply} label="Répondre" />
            </div>
        </div>
    );
};

export default MessageItem;
