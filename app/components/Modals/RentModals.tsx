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
import Input from '../Inputs/Input';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import EquipementInput from '../Inputs/EquipementInput';
import { equipement as staticEquipments } from '../NavBar/Equipement';
import ImageUpload from '../Inputs/ImageUpload';

enum STEPS {
    CATEGORY = 0,
    LOCATION = 1,
    INFO = 2,
    IMAGES = 3,
    DESCRIPTION = 4,
    EQUIPEMENT = 5,
    PRICE = 6
}

const RentModals = () => {
    const router = useRouter();
    const rentModal = useRentModal();

    const [step, setStep] = useState(STEPS.CATEGORY);
    const [isLoading, setIsLoading] = useState(false);
    const [dynamicEquipments, setDynamicEquipments] = useState([]);

    useEffect(() => {
        axios.get('/api/equipments')
            .then((response) => {
                setDynamicEquipments(response.data);
            })
            .catch(() => {
                toast.error("Erreur lors du chargement des équipements dynamiques");
            });
    }, []);

    const combinedEquipments = useMemo(() => {
        const formattedDynamicEquipments = dynamicEquipments.map((item: any) => ({
            label: item.name,
            image: item.image,
        }));
        return [...staticEquipments, ...formattedDynamicEquipments];
    }, [dynamicEquipments]);

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
        defaultValues: {
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
    }

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        if (step !== STEPS.PRICE) {
            return onNext();
        }
        setIsLoading(true);

        axios.post('/api/listings', data)
            .then(() => {
                toast.success('Votre location a été créée');
                router.refresh();
                reset();
                setStep(STEPS.CATEGORY);
                rentModal.onClose();
            })
            .catch(() => {
                toast.error("Une erreur est survenue");
            }).finally(() => {
                setIsLoading(false);
            })
    }

    const actionLabel = useMemo(() => {
        if (step === STEPS.PRICE) {
            return 'Publier';
        }

        return 'Suivant';
    }, [step]);

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
                            onClick={(category) =>
                                setCustomValue('category', category)}
                            selected={category === item.label}
                            label={item.label}
                            image={item.image}
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
                <Map
                    center={location?.latlng}
                />
            </div>
        );
    }

    if (step === STEPS.INFO) {
        bodyContent = (
            <div className="flex flex-col gap-8">
                <Heading
                    title="Partager quelques informations sur votre maison"
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
                    subtitle='Montrez aux visiteurs à quoi votre maison ressemble'
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
                    subtitle='Donnez les caractéristiques phares de votre maison'
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
                    title="Lequel de ces équipements sont présents dans votre maison"
                    subtitle="Choisissez des équipements"
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
                    {combinedEquipments.map((item) => (
                        <div key={item.label} className="col-span-1">
                            <EquipementInput
                                onClick={(selected) => {
                                    const newValue = [...equipment];
                                    const index = newValue.indexOf(selected);
                                    if (index === -1) {
                                        newValue.push(selected);
                                    } else {
                                        newValue.splice(index, 1);
                                    }
                                    setCustomValue('equipment', newValue);
                                }}
                                selected={equipment.includes(item.label)}
                                label={item.label}
                                image={item.image}
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
                    title='Donnez votre prix'
                    subtitle='Combien de frais par nuit ?'
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
            isOpen={rentModal.isOpen}
            onClose={rentModal.onClose}
            onSubmit={handleSubmit(onSubmit)}
            actionLabel={actionLabel}
            secondaryActionLabel={secondaryActionLabel}
            secondaryAction={step === STEPS.CATEGORY ? undefined : onBack}
            title="Louer votre maison!"
            body={bodyContent}
        />
    );
};

export default RentModals;
