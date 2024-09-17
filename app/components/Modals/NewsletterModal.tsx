'use client';
import { FC, PropsWithChildren, useState } from 'react';
import { useForm, FieldValues, SubmitHandler } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import axios from 'axios';

import Modals from './Modals'; // Assurez-vous d'avoir ce composant Modal
import Heading from '../Heading';
import Input from '../Inputs/Input';
import Button from '../Button';

interface NewsletterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const NewsletterModal: FC<PropsWithChildren<NewsletterModalProps>> = ({ isOpen, onClose }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: '',
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    axios
      .post('/api/subscribe', data)
      .then((response) => {
        if (response.status === 200) {
          toast.success(response.data.message || 'Merci pour votre souscription !');
          onClose();
          router.refresh();
        }
      })
      .catch((error) => {
        toast.error(error.response?.data?.message || 'Erreur lors de la souscription');
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  
  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading title="Souscrire à la Newsletter" subtitle="Entrez votre adresse email pour recevoir des mises à jour" />
      <Input
        id="email"
        label="Adresse Email"
        type="email"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
    </div>
  );

  return (
    <Modals
      disabled={isLoading}
      isOpen={isOpen}
      title="Souscrire à la Newsletter"
      actionLabel="Souscrire"
      onClose={onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
    />
  );
};

export default NewsletterModal;
