'use client';
import { FC, PropsWithChildren } from 'react';
import { useState } from 'react';
import { useForm, FieldValues, SubmitHandler } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import axios from 'axios';

import Modals from './Modals';
import Heading from '../Heading';
import Input from '../Inputs/Input';
import Button from '../Button';

interface ResetPasswordModalProps {
    isOpen: boolean;
    onClose: () => void;
    email: string;
    code: string;
}

const ResetPasswordModal: FC<PropsWithChildren<ResetPasswordModalProps>> = ({ isOpen, onClose, email, code }) => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FieldValues>({
        defaultValues: {
            email,
            code,
            newPassword: ''
        }
    });

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true);
        axios.post('/api/reset-password', data)
            .then(() => {
                toast.success('Mot de passe mis à jour');
                onClose();
                router.refresh();
            })
            .catch((error) => {
                toast.error(error.response?.data?.message || 'Erreur lors de la mise à jour du mot de passe');
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    const bodyContent = (
        <div className="flex flex-col gap-4">
            <Heading title='Réinitialiser le mot de passe' subtitle='Entrez votre email, code de vérification et nouveau mot de passe'/>
            <Input
                id='email'
                label='Adresse Email'
                type='email'
                disabled={isLoading}
                register={register}
                errors={errors}
                required
            />
            <Input
                id='code'
                label='Code de vérification'
                type='text'
                disabled={isLoading}
                register={register}
                errors={errors}
                required
            />
            <Input
                id='newPassword'
                label='Nouveau mot de passe'
                type='password'
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
            title="Réinitialiser le mot de passe"
            actionLabel="Mettre à jour le mot de passe"
            onClose={onClose}
            onSubmit={handleSubmit(onSubmit)}
            body={bodyContent}
        />
    );
};

export default ResetPasswordModal;
