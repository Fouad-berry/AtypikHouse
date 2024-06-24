'use client';
import { useState } from 'react';
import { useForm, FieldValues, SubmitHandler } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import axios from 'axios';

import Modals from './Modals';
import Heading from '../Heading';
import Input from '../Inputs/Input';
import Button from '../Button';

const ForgotPasswordModal = () => {
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FieldValues>({
        defaultValues: {
            email: '',
        }
    });

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true);
        axios.post('/api/forgot-password/', data)
            .then(() => {
                toast.success('Code de vérification envoyé à votre email');
                setIsOpen(false);
            })
            .catch((error) => {
                toast.error(error.response?.data?.message || 'Erreur lors de l\'envoi du code de vérification');
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    const bodyContent = (
        <div className="flex flex-col gap-4">
            <Heading title='Mot de passe oublié' subtitle='Entrez votre adresse email pour recevoir un code de vérification'/>
            <Input
                id='email'
                label='Adresse Email'
                type='email'
                disabled={isLoading}
                register={register}
                errors={errors}
                required
            />
        </div>
    );

    return (
        <>
            <Button onClick={openModal} label="Mot de passe oublié ?" />
            <Modals
                disabled={isLoading}
                isOpen={isOpen}
                title="Mot de passe oublié"
                actionLabel="Envoyer le code"
                onClose={closeModal}
                onSubmit={handleSubmit(onSubmit)}
                body={bodyContent}
            />
        </>
    );
};

export default ForgotPasswordModal;
