'use client';

import useRentModal from '@/app/hooks/useRentModal';
import Modals from './Modals';
import { useMemo, useState, useEffect } from 'react';
import Heading from '../Heading';
import { categories } from '../NavBar/Categories';
import CategoryInput from '../Inputs/CategoryInput';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import CountrySelect from '../Inputs/CountrySelect';
import dynamic from 'next/dynamic';
import Counter from '../Inputs/Counter';
import ImageUpload from '../Inputs/ImageUpload';
import Input from '../Inputs/Input';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { equipement } from '../NavBar/Equipement';

enum STEPS {
    CATEGORY = 0,
    LOCATION = 1,
    INFO = 2,
    IMAGES = 3,
    DESCRIPTION = 4,
    EQUIPEMENT = 5,
    PRICE = 6
}

interface RentModalsProps {
    isOpen: boolean;
    onClose: () => void;
    initialData?: FieldValues;
}

const RentModalsUpdate: React.FC<RentModalsProps> = ({
    isOpen,
    onClose,
    initialData
}) => {
    const router = useRouter();
    const rentModal = useRentModal();

    const [step, setStep] = useState(STEPS.CATEGORY);
    const [isLoading, setIsLoading] = useState(false);

    const {
        register,
        handleSubmit,
        setValue,
        watch,
        formState: {
            errors,
        },
        reset
    } = useForm<FieldValues>({
        defaultValues: initialData || {
            category: '',
            location: null,
            guestCount: 1,
            roomCount: 1,
            bathroomCount: 1,
            imageSrc: [],
            price: 1,
            title: '',
            description: '',
            equipment: []
        }
    });

    useEffect(() => {
        if (initialData) {
            // Map initialData to form fields, including locationvalue to location
            reset({
                ...initialData,
                location: initialData.locationvalue ? { value: initialData.locationvalue } : null,
            });
        }
    }, [initialData, reset]);

    const category = watch('category');
    const location = watch('location');
    const guestCount = watch('guestCount');
    const roomCount = watch('roomCount');
    const bathroomCount = watch('bathroomCount');
    const imageSrc = watch('imageSrc');
    const equipment = watch('equipment');

    const Map = useMemo(() => dynamic(() => import('../Map'), {
        ssr: false
    }), [location]);
    
    const setCustomValue = (id: string, value: any) => {
        setValue(id, value, {
            shouldValidate: true,
            shouldDirty: true,
            shouldTouch: true,
        });
    };

    const onBack = () => {
        setStep((value) => value - 1);
    };

    const onNext = () => {
        setStep((value) => value + 1);
    };

    const logError = (error: any, context: string) => {
        console.error(`Error in ${context}:`, error);
        if (error.response) {
            console.error('Response data:', error.response.data);
            console.error('Response status:', error.response.status);
            console.error('Response headers:', error.response.headers);
        } else if (error.request) {
            console.error('Request data:', error.request);
        } else {
            console.error('Message:', error.message);
        }
    };

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true);

        if (step !== STEPS.PRICE) {
            onNext();
            setIsLoading(false);
            return;
        }

        if (initialData) {
            // Update listing
            axios.put(`/api/updaterent/${initialData.id}`, {
                ...data,
                locationvalue: data.location ? data.location.value : null, // Map location to locationvalue
            })
                .then(() => {
                    toast.success('Votre location a été mise à jour');
                    router.refresh();
                    onClose();
                })
                .catch((error) => {
                    logError(error, "updating listing");
                    toast.error("Une erreur est survenue");
                })
                .finally(() => {
                    setIsLoading(false);
                });
        } else {
            // Create new listing (if this scenario is supported)
            axios.post('/api/listings', {
                ...data,
                locationvalue: data.location ? data.location.value : null,
            })
                .then(() => {
                    toast.success('Votre location a été créée');
                    router.refresh();
                    onClose();
                })
                .catch((error) => {
                    logError(error, "creating listing");
                    toast.error("Une erreur est survenue");
                })
                .finally(() => {
                    setIsLoading(false);
                });
        }
    };
    
    const actionLabel = useMemo(() => {
        if (step === STEPS.PRICE) {
            return initialData ? 'Mettre à jour' : 'Créer';
        }

        return 'Suivant';
    }, [step, initialData]);

    const secondaryActionLabel = useMemo(() => {
        if (step === STEPS.CATEGORY) {
            return undefined;
        }

        return 'Précédent';
    }, [step]);

    let bodyContent = (
        <div className="flex flex-col gap-8">
            <Heading 
                title="Lequel de ces éléments décrit le mieux votre maison"
                subtitle="Choisissez une catégorie"
            />
            <div 
                className="
                    grid
                    grid-cols-1
                    md:grid-cols-2
                    gap-3
                    max-h-[50vh]
                    overflow-y-auto
                ">
                {categories.map((item) => (
                    <div key={item.label} className="col-span-1">
                        <CategoryInput 
                            onClick={(category) => setCustomValue('category', category)}
                            selected={category === item.label}
                            label={item.label}
                            icon={item.icon}
                        />
                    </div>
                ))}
            </div>
        </div>
    );

    if (step === STEPS.LOCATION) {
        bodyContent = (
            <div className='flex flex-col gap-8'>
                <Heading
                    title="Où se trouve votre maison ?"
                    subtitle="Aidez les visiteurs à vous trouver!"
                />
                <CountrySelect
                    value={location}
                    onChange={(value) => setCustomValue('location', value)}
                />
                <Map center={location?.latlng} />
            </div>
        );
    }

    if (step === STEPS.INFO) {
        bodyContent = (
            <div className="flex flex-col gap-8">
                <Heading
                    title="Partagez quelques détails de votre maison"
                    subtitle="Quels sont les agréments que vous avez ?"
                />
                <Counter 
                    title='Nombre d`invités'
                    subtitle='Combien d`invités autorisez-vous ?'
                    value={guestCount}
                    onChange={(value) => setCustomValue('guestCount', value)}
                />
                <Counter 
                    title='Chambres'
                    subtitle='Combien de chambres avez-vous ?'
                    value={roomCount}
                    onChange={(value) => setCustomValue('roomCount', value)}
                />
                <Counter 
                    title='Salles de bains'
                    subtitle='Combien de salles de bains avez-vous ?'
                    value={bathroomCount}
                    onChange={(value) => setCustomValue('bathroomCount', value)}
                />
            </div>
        );
    }

    if (step === STEPS.IMAGES) {
        bodyContent = (
            <div className='flex flex-col gap-8'>
                <Heading
                    title='Ajoutez des photos de votre maison'
                    subtitle='Montrez aux visiteurs à quoi ressemble votre maison !'
                />
                <ImageUpload
                    value={imageSrc}
                    onChange={(value) => setCustomValue('imageSrc', value)}
                />
            </div>
        );
    }

    if (step === STEPS.DESCRIPTION) {
        bodyContent = (
            <div className='flex flex-col gap-8'>
                <Heading
                    title='Comment décririez-vous votre maison ?'
                    subtitle='Courte description'
                />
                <Input
                    id='title'
                    label='Titre'
                    disabled={isLoading}
                    register={register}
                    errors={errors}
                    required
                />
                <Input
                    id='description'
                    label='Description'
                    disabled={isLoading}
                    register={register}
                    errors={errors}
                    required
                />
            </div>
        );
    }

    if (step === STEPS.EQUIPEMENT) {
        bodyContent = (
            <div className="flex flex-col gap-8">
                <Heading 
                    title="Quels équipements proposez-vous ?"
                    subtitle="Sélectionnez vos équipements"
                />
                <div 
                    className="
                        grid
                        grid-cols-1
                        md:grid-cols-2
                        gap-3
                        max-h-[50vh]
                        overflow-y-auto
                    ">
                    {equipement.map((item) => (
                        <div key={item.label} className="col-span-1">
                            <CategoryInput 
                                onClick={(label) => {
                                    const newEquipment = equipment.includes(label)
                                        ? equipment.filter((equip: string) => equip !== label)
                                        : [...equipment, label];
                                    setCustomValue('equipment', newEquipment);
                                }}
                                selected={equipment.includes(item.label)}
                                label={item.label}
                                icon={item.icon}
                            />
                        </div>
                    ))}
                </div>
            </div>
        );
    }

    if (step === STEPS.PRICE) {
        bodyContent = (
            <div className='flex flex-col gap-8'>
                <Heading
                    title='Maintenant, fixez votre prix'
                    subtitle='Combien chargez-vous par nuit ?'
                />
                <Input
                    id='price'
                    label='Prix'
                    formatPrice
                    type='number'
                    disabled={isLoading}
                    register={register}
                    errors={errors}
                    required
                />
            </div>
        );
    }

    return (
        <Modals
            isOpen={isOpen}
            onClose={onClose}
            onSubmit={handleSubmit(onSubmit)}
            actionLabel={actionLabel}
            secondaryAction={step === STEPS.CATEGORY ? undefined : onBack}
            secondaryActionLabel={secondaryActionLabel}
            body={bodyContent}
        />
    );
};

export default RentModalsUpdate;
