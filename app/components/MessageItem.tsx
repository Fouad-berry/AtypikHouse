// components/MessageItem.tsx
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { Message, SafeUser } from '@/app/types';
import Button from './Button';

interface MessageItemProps {
    message: Message;
    currentUser: SafeUser;
}

const MessageItem: React.FC<MessageItemProps> = ({ message, currentUser }) => {
    const [reply, setReply] = useState('');
    const router = useRouter();

    const handleReply = async () => {
        try {
            await axios.post('/api/message', {
                receiverId: message.senderId,
                content: reply,
            });
            setReply('');
            router.refresh();
        } catch (error) {
            console.error('Error sending reply:', error);
        }
    };

    return (
        <div className="max-w-lg w-full border rounded-lg p-4 mb-4 shadow-lg">
            <div className="mb-2">
                <strong>From:</strong> {message.sender.name}
            </div>
            <div className="mb-2">{message.content}</div>
            <textarea
                value={reply}
                onChange={(e) => setReply(e.target.value)}
                placeholder="Répondez ici..."
                className="w-full p-2 border rounded mb-2"
            />
            <Button onClick={handleReply} label="Répondre" />
        </div>
    );
};

export default MessageItem;
