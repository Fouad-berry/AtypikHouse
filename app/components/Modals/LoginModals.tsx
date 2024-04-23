'use client';
import { signIn } from 'next-auth/react';
import axios from 'axios';
import { AiFillGithub } from 'react-icons/ai';
import { FcGoogle } from 'react-icons/fc';
import { useCallback, useState} from 'react'
import{
    Field,
    FieldValues,
    SubmitHandler,
    useForm
} from 'react-hook-form'

import useRegisterModal from '@/app/hooks/useRegisterModal';
import useLoginModal from '@/app/hooks/useLoginModal';
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
    const [isLoading, setIsLoading] = useState(false);

    const{
        register,
        handleSubmit,
        formState: {
            errors,
        }
    } = useForm<FieldValues>({
        defaultValues: {
            email: '',
            password:''
        }
    });

    const onSubmit: SubmitHandler<FieldValues>  = (data) => {
        setIsLoading(true);
            
            signIn('credentials',{
                ...data,
                redirect: false,
            })
            .then((callback) => {
                setIsLoading(false);

                if (callback?.ok) {
                    toast.success('Vous etes connecté');
                    router.refresh();
                    loginModal.onClose();
                }

                if (callback?.error){
                    toast.error(callback.error);
                }
            })
    }

    const toggle = useCallback(() => {
        loginModal.onClose();
        registerModal.onOpen();
    }, [loginModal, registerModal]);

    const bodyContent = (
        <div className="flex flex-col gap-4">
            <Heading 
                title='Bienvenue sur AtypikHouse'
                subtitle='Connectez vous a votre compte'
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
        <div className="flex flex-col gap-4 mt-3">
            <hr/>
            <Button 
                outline
                label="Continuer avec Google"
                icon={FcGoogle}
                onClick={() => {signIn('google')}}
            />
            <Button 
                outline
                label="Continuer avec GitHub"
                icon={AiFillGithub}
                onClick={() => signIn('github')}
            />
            <div
                className='
                    text-neutral-500
                    text-center
                    mt-4
                    font-light
                '
            >
                <div className='justify-center flex flex-row items-center gap-2'>
                    <div>
                        Vous etes nouveau sur notre site ?
                    </div>
                    <div 
                    onClick={toggle}
                        className='
                            text-neutral-800
                            cursor-pointer
                            hover:underline
                        '
                    >
                        Creez un compte !
                    </div>
                </div>

            </div>
        </div>
    )

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