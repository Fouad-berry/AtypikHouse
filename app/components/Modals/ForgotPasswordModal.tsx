'use client';
import { useState } from 'react';
import { useForm, FieldValues, SubmitHandler } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import axios from 'axios';

import Modals from './Modals';
import Heading from '../Heading';
import Input from '../Inputs/Input';
import useForgotPasswordModal from '@/app/hooks/useForgotPasswordModal';
import ResetPasswordModal from './ResetPasswordModal'; // Assurez-vous d'importer ce composant

const ForgotPasswordModal = () => {
    const router = useRouter();
    const { isOpen, onClose } = useForgotPasswordModal();
    const [isLoading, setIsLoading] = useState(false);
    const [isResetPasswordOpen, setIsResetPasswordOpen] = useState(false);
    const [email, setEmail] = useState('');
    const [verificationCode, setVerificationCode] = useState('');

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
            .then((response) => {
                toast.success('Code de vérification envoyé à votre email');
                setEmail(data.email);
                setVerificationCode(response.data.verificationCode);
                onClose();
                setIsResetPasswordOpen(true);
            })
            .catch((error) => {
                toast.error(error.response?.data?.message || 'Erreur lors de l\'envoi du code de vérification');
            })
            .finally(() => {
                setIsLoading(false);
            });
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
            <Modals
                disabled={isLoading}
                isOpen={isOpen}
                title="Mot de passe oublié"
                actionLabel="Envoyer le code"
                onClose={onClose}
                onSubmit={handleSubmit(onSubmit)}
                body={bodyContent}
            />
            <ResetPasswordModal
                isOpen={isResetPasswordOpen}
                onClose={() => setIsResetPasswordOpen(false)}
                email={email}
                code={verificationCode}
            />
        </>
    );
};

export default ForgotPasswordModal;
