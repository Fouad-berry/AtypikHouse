import { useState, useEffect } from 'react';
import axios from 'axios';
import Button from '../Button';

const ListingComment = ({ listingId }: { listingId: string }) => {
    const [comments, setComments] = useState([]);
    const [commentContent, setCommentContent] = useState('');
    const [loading, setLoading] = useState(true);
    const [errorMessage, setErrorMessage] = useState('');

    // Liste des mots interdits
    const forbiddenWords = ['offensant',
            'inapproprié', 
            'négatif', 
            'danger',
            'con',
            'malade',
            'mort',
            'viol',
            'agression',
            'violence',
            'desastreux',
            'idiot',
            'imbécile',
            'con',
            'putain',
            'nègre',
            'merde',
            'enculé',
            'Je vais faire en sorte que tout le monde sache comment vous traitez vos locataires',
            'représaille',
                        ];

    // Fonction pour récupérer les commentaires associés à la location
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

    // Charger les commentaires associés à la location lorsque le composant est monté
    useEffect(() => {
        fetchComments();
    }, [listingId]);

    // Soumettre un nouveau commentaire
    const handleCommentSubmit = async () => {
        try {
            // Vérifier si le commentaire contient des mots interdits
            const containsForbiddenWords = forbiddenWords.some(word =>
                commentContent.toLowerCase().includes(word)
            );

            if (containsForbiddenWords) {
                setErrorMessage('Votre commentaire contient des termes inappropriés.veuillez les supprimez s\’il vous plaît.');
                return;
            }

            await axios.post('/api/comments', {
                content: commentContent,
                listingId: listingId,
            });
            setCommentContent('');
            setErrorMessage('');
                fetchComments();
         } catch (error) {
            console.error('Erreur lors de la soumission du commentaire :', error);
        }
    };

    if (loading) {
        return <div>Chargement des commentaires...</div>;
    }

    return (
        <div>
            <h2 style={{ fontWeight: '600', paddingBottom: '10px' }}>Commentaires</h2>
            {comments.length === 0 ? (
                <p>Aucun commentaire pour le moment.</p>
            ) : (
                <div className="comment-columns">
                    {comments.map((comment: any, index: number) => (
                        <div key={index} className="comment-item">
                            <div>
                                <strong>Utilisateur:</strong> {comment.user.name}
                            </div>
                            <div>
                                <strong>Date:</strong>{' '}
                                {new Date(comment.createdAt).toLocaleString()}
                            </div>
                            <div>{comment.content}</div>
                        </div>
                    ))}
                </div>
            )}
                <textarea
                value={commentContent}
                onChange={(e) => setCommentContent(e.target.value)}
                placeholder="Ajouter un commentaire..."
                style={{ marginTop: '5px' }}
            />
            <div style={{ color: 'red', marginTop: '5px' }}>{errorMessage}</div>
            <div style={{ maxWidth: '200px', marginTop: '10px' }}>
                <Button label="Commenter" onClick={handleCommentSubmit} />
            </div>
        </div>
    );
};

export default ListingComment;
