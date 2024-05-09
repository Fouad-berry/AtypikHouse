import { useState, useEffect } from 'react';
import axios from 'axios';
import Button from '../Button';

interface Comment {
    id: string;
    content: string;
    user: {
        id: string;
        name: string;
    };
    createdAt: string; // Ajoutez cette ligne pour déclarer le type de createdAt
}

const ListingComment = ({ listingId }: { listingId: string }) => {
    const [comments, setComments] = useState<Comment[]>([]); // Utilisez l'interface Comment pour annoter le type des éléments dans le tableau
    const [commentContent, setCommentContent] = useState('');
    const [loading, setLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        const fetchComments = async () => {
            try {
                const response = await axios.get(`/api/showcomments?listingId=${listingId}`);
                setComments(response.data.comments);
                setLoading(false);
            } catch (error) {
                console.error('Erreur lors de la récupération des commentaires :', error);
                setLoading(false);
            }
        };
        fetchComments();
    }, [listingId]);

    const handleCommentSubmit = async () => {
        try {
            // Code de vérification des mots interdits

            await axios.post('/api/comments', {
                content: commentContent,
                listingId: listingId,
            });
            setCommentContent('');
            setErrorMessage('');
            // Recharger les commentaires après avoir soumis un nouveau commentaire
        } catch (error) {
            console.error('Erreur lors de la soumission du commentaire :', error);
        }
    };

    if (loading) {
        return <div>Chargement des commentaires...</div>;
    }

    return (
        <div>
            <h2>Commentaires</h2>
            {comments.length === 0 ? (
                <p>Aucun commentaire pour le moment.</p>
            ) : (
                <ul>
                    {comments.map((comment, index) => (
                        <li key={index}>
                            <p>{comment.content}</p>
                            <p>Par: {comment.user.name}</p>
                            <p>Date: {new Date(comment.createdAt).toLocaleString()}</p>
                        </li>
                    ))}
                </ul>
            )}
            <textarea
                value={commentContent}
                onChange={(e) => setCommentContent(e.target.value)}
                placeholder="Ajouter un commentaire..."
            />
            <div style={{ color: 'red' }}>{errorMessage}</div>
            <Button label="Commenter" onClick={handleCommentSubmit} />
        </div>
    );
};

export default ListingComment;
