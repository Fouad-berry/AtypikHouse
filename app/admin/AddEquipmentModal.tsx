'use client';

import { useState } from "react";
import { useForm, FieldValues, SubmitHandler } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
import Modals from "../components/Modals/Modals";
import Input from "../components/Inputs/Input";

interface AddEquipmentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AddEquipmentModal: React.FC<AddEquipmentModalProps> = ({ isOpen, onClose }) => {
  const [isLoading, setIsLoading] = useState(false);
  const { register, handleSubmit, watch, formState: { errors } } = useForm<FieldValues>({
    defaultValues: {
      name: '',
      image: null
    }
  });

  const imageFile = watch('image');

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    setIsLoading(true);

    try {
      // Lire le fichier et le convertir en base64
      const reader = new FileReader();
      reader.readAsDataURL(data.image[0]);
      reader.onloadend = async () => {
        const base64data = reader.result as string;

        // Soumission des données avec l'image encodée en base64 à votre API
        await axios.post('/api/equipments', {
          name: data.name,
          image: base64data, // Envoi de l'image encodée en base64
        });

        toast.success('Équipement ajouté avec succès');
        onClose();
      };
    } catch (error) {
      toast.error("Erreur lors de l'ajout de l'équipement");
    } finally {
      setIsLoading(false);
    }
  };

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Input
        id="name"
        label="Nom de l'équipement"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <input
        type="file"
        id="image"
        {...register('image', { required: true })}
        accept="image/*"
        className={`block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none ${
          errors.image ? 'border-red-500' : 'border-neutral-300'
        }`}
        disabled={isLoading}
        style={{ padding: '12px', height: '50px' }} // Augmentation de la taille ici
      />
      {errors.image && <span className="text-red-500 text-sm">L'image est requise</span>}
    </div>
  );

  return (
    <Modals
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit(onSubmit)}
      actionLabel="Ajouter"
      title="Ajouter un équipement"
      body={bodyContent}
    />
  );
};

export default AddEquipmentModal;
