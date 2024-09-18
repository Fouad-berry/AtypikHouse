'use client';

import { useState } from 'react';
import axios from 'axios';
import { useForm, SubmitHandler } from 'react-hook-form';
import Modals from './Modals';
import toast from 'react-hot-toast';

interface SendNewsletterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface SendNewsletterFormData {
  subject: string;
  content: string;
}

const SendNewsletterModal: React.FC<SendNewsletterModalProps> = ({ isOpen, onClose }) => {
  const [isLoading, setIsLoading] = useState(false);

  const { register, handleSubmit, reset } = useForm<SendNewsletterFormData>({
    defaultValues: {
      subject: '',
      content: ''
    }
  });

  const onSubmit: SubmitHandler<SendNewsletterFormData> = async (data) => {
    setIsLoading(true);

    try {
      await axios.post('/api/send-newsletter', data);
      toast.success('Newsletter envoyée avec succès !');
      reset();
      onClose();
    } catch (error) {
      toast.error('Erreur lors de l\'envoi de la newsletter');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Modals
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit(onSubmit)}
      title="Envoyer une newsletter"
      actionLabel={isLoading ? 'Envoi en cours...' : 'Envoyer'}
      disabled={isLoading}
      body={(
        <div className="flex flex-col gap-4">
          <label htmlFor="subject">Sujet</label>
          <input
            id="subject"
            type="text"
            {...register('subject', { required: true })}
            className="border p-2 rounded"
            placeholder="Sujet de la newsletter"
            disabled={isLoading}
          />
          
          <label htmlFor="content">Contenu</label>
          <textarea
            id="content"
            {...register('content', { required: true })}
            className="border p-2 rounded h-40"
            placeholder="Contenu de la newsletter"
            disabled={isLoading}
          />
        </div>
      )}
    />
  );
};

export default SendNewsletterModal;
