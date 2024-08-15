'use client';
import { signIn } from 'next-auth/react';
import axios from 'axios';
import { AiFillGithub } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import { useCallback, useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';

import useRegisterModal from '@/app/hooks/useRegisterModal';
import useLoginModal from '@/app/hooks/useLoginModal';
import useForgotPasswordModal from '@/app/hooks/useForgotPasswordModal';
import Modals from './Modals';
import Heading from '../Heading';
import Input from '../Inputs/Input';
import toast from 'react-hot-toast';
import Button from '../Button';
import { useRouter } from 'next/navigation';

const LoginModals = () => {
    const router = useRouter();
    const registerModal = useRegisterModal();
    const loginModal = useLoginModal();
    const { onOpen } = useForgotPasswordModal(); // Nous n'avons besoin que de `onOpen` ici
    const [isLoading, setIsLoading] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FieldValues>({
        defaultValues: {
            email: '',
            password: ''
        }
    });

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true);
        signIn('credentials', {
            ...data,
            redirect: false,
        })
        .then((callback) => {
            setIsLoading(false);

            if (callback?.ok) {
                toast.success('Vous êtes connecté');
                router.refresh();
                loginModal.onClose();
            }

            if (callback?.error) {
                toast.error(callback.error);
            }
        })
    }

    const toggle = useCallback(() => {
        loginModal.onClose();
        registerModal.onOpen();
    }, [loginModal, registerModal]);

    const forgot = useCallback(() => {
        loginModal.onClose();
        onOpen();
    }, [loginModal, onOpen]);

    const bodyContent = (
        <div className="flex flex-col gap-4">
            <Heading 
                title='Bienvenue sur AtypikHouse'
                subtitle='Connectez-vous à votre compte'
            />
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
                id='password'
                type='password'
                label='Mot de passe'
                disabled={isLoading}
                register={register}
                errors={errors}
                required
            />
        </div>
    );

    const footerContent = (
<div className="flex flex-col gap-4 mt-3 p-4 md:p-6 mx-auto max-w-md">
    <hr className="border-gray-300"/>
    <Button 
        outline
        label="Continuer avec Google"
        icon={FcGoogle}
        onClick={() => {signIn('google')}}
        className="w-full"
    />
    <Button 
        outline
        label="Continuer avec GitHub"
        icon={AiFillGithub}
        onClick={() => signIn('github')}
        className="w-full"
    />
    <div className='text-neutral-500 text-center mt-4 font-light text-sm md:text-base'>                                        
        <div className='justify-center flex flex-row items-center gap-2'>
            <div>
                Vous êtes nouveau ?
            </div>
            <div 
                onClick={toggle}
                className='text-neutral-800 cursor-pointer hover:underline'
            >
                Créez un compte !
            </div>
        </div>

        <div className='justify-center flex flex-row items-center gap-2 mt-2'>
            <div>
                Mot de passe oublié ?
            </div>
            <div 
                onClick={forgot}
                className='text-neutral-800 cursor-pointer hover:underline'
            >
                Changez de mot de passe
            </div>
        </div>
    </div>
</div>
    );

    return (
        <Modals
            disabled={isLoading}
            isOpen={loginModal.isOpen}
            title="Connexion"
            actionLabel="Continuer"
            onClose={loginModal.onClose}
            onSubmit={handleSubmit(onSubmit)}
            body={bodyContent}
            footer={footerContent}
        />
    );
};

export default LoginModals;
