import React from 'react';
import { SafeUser } from "@/app/types";

interface MessageItemProps {
    message: {
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
    };
    currentUser?: SafeUser;
}

const MessageItem: React.FC<MessageItemProps> = ({ message, currentUser }) => {
    const isSentByCurrentUser = currentUser ? message.senderId === currentUser.id : false;

    return (
        <div style={{ backgroundColor: isSentByCurrentUser ? '#e1ffc7' : '#f1f1f1', padding: '10px', borderRadius: '5px', marginBottom: '10px' }}>
            <p><strong>{isSentByCurrentUser ? 'Vous' : message.sender.name}:</strong> {message.content}</p>
            <small>{new Date(message.createdAt).toLocaleString()}</small>
        </div>
    );
};

export default MessageItem;
