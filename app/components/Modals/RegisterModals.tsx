'use client';

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
import Modals from './Modals';
import Heading from '../Heading';
import Input from '../Inputs/Input';
import toast from 'react-hot-toast';
import Button from '../Button';
import { signIn } from 'next-auth/react';
import useLoginModal from '@/app/hooks/useLoginModal';

const RegisterModals = () => {
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
            name: '',
            email:'',
            password:''
        }
    });

    const onSubmit: SubmitHandler<FieldValues>  = (data) => {
        setIsLoading(true);

        axios.post('/api/register', data)
            .then(() =>{
                toast.success('Inscription reussi !')
                registerModal.onClose();
                loginModal.onOpen();
            })
            .catch((error) => {
                toast.error('Quelque chose s`est mal passé');
            })
            .finally(()=>{
                setIsLoading(false);
            })
    }

    const toggle = useCallback(() => {
        registerModal.onClose();
        loginModal.onOpen();
    }, [loginModal, registerModal]);


    const bodyContent = (
        <div className="flex flex-col gap-4">
            <Heading 
                title='Bienvenue sur AtypikHouse'
                subtitle='Creer votre compte maintenant'
            />
            <Input 
                id='email'
                label='Adresse Email'
                disabled={isLoading}
                register={register}
                errors={errors}
                required
            />
                        <Input 
                id='name'
                label='Nom'
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
                onClick={() => signIn('google')}
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
                        Vous avez déja un compte ?
                    </div>
                    <div 
                    onClick={toggle}
                        className='
                            text-neutral-800
                            cursor-pointer
                            hover:underline
                        '
                    >
                        Connectez vous !
                    </div>
                </div>

            </div>
        </div>
    )

    return (
        <Modals
            disabled={isLoading}
            isOpen={registerModal.isOpen}
            title="Inscription"
            actionLabel="Continuer"
            onClose={registerModal.onClose}
            onSubmit={handleSubmit(onSubmit)}
            body={bodyContent}
            footer={footerContent}
        />
    );
};

export default RegisterModals;