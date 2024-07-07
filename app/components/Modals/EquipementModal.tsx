'use client';

import { useCallback, useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import Button from "../Button";
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
import Modals from "./Modals";

interface EquipementModalProps {
    isOpen: boolean;
    onClose: () => void;
    onEquipementAdded: () => void; // Ajouter un callback pour rafraîchir la liste des équipements
}

const EquipementModal: React.FC<EquipementModalProps> = ({
    isOpen,
    onClose,
    onEquipementAdded
}) => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const onSubmit: SubmitHandler<any> = (data) => {
        axios.post('/api/equipement', data)
            .then(() => {
                toast.success('Équipement ajouté avec succès');
                reset();
                onClose();
                onEquipementAdded(); // Appeler le callback après ajout
            })
            .catch((error) => {
                toast.error('Erreur lors de l\'ajout de l\'équipement');
                console.error(error);
            });
    };

    return (
        <Modals
            isOpen={isOpen}
            onClose={onClose}
            onSubmit={handleSubmit(onSubmit)}
            title="Ajouter un nouvel équipement"
            actionLabel="Ajouter"
        >
            <div className="flex flex-col gap-4">
                <input
                    id="label"
                    placeholder="Nom de l'équipement"
                    {...register("label", { required: true })}
                    className="border p-2 rounded-md"
                />
                {errors.label && <span className="text-red-500">Ce champ est requis</span>}
                <input
                    id="icon"
                    placeholder="Nom de l'icône (par ex. BiAlarm)"
                    {...register("icon", { required: true })}
                    className="border p-2 rounded-md"
                />
                {errors.icon && <span className="text-red-500">Ce champ est requis</span>}
            </div>
        </Modals>
    );
};

export default EquipementModal;
