'use client';

import { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';

const UnsubscribeNewsletter = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleUnsubscribe = async () => {
    setIsLoading(true);
    try {
      // Envoi de l'email à l'API de désabonnement
      await axios.post('/api/unsubscribe', { email });
      toast.success('Désabonnement réussi');
      setEmail('');  // Réinitialiser l'email
    } catch (error) {
      toast.error('Erreur lors du désabonnement. Veuillez vérifier votre email.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-xl font-semibold">Se désabonner de la newsletter</h2>
      <input
        type="email"
        placeholder="Votre email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border p-2 rounded"
        disabled={isLoading}
      />
      <button
        onClick={handleUnsubscribe}
        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
        disabled={isLoading || !email}
      >
        {isLoading ? 'Désabonnement en cours...' : 'Se désabonner'}
      </button>
    </div>
  );
};

export default UnsubscribeNewsletter;
