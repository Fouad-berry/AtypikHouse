'use client';

import { IconType } from "react-icons";
import Image from 'next/image';

interface EquipementInputProps {
    icon?: IconType;
    image?: string; // Ajout de la prop image
    label: string;
    selected?: boolean;
    onClick: (value: string) => void;
}

const EquipementInput: React.FC<EquipementInputProps> = ({
    icon: Icon,
    image, // Ajout de la prop image
    label,
    selected,
    onClick
}) => {
    return (
        <div
            onClick={() => onClick(label)}
            className={`
                rounded-xl
                border-2
                p-4
                flex
                flex-col
                gap-3
                hover:border-black
                transition
                cursor-pointer
                ${selected ? 'border-black' : 'border-neutral-200'}
            `}
        >
            {image ? (
                <Image src={image} alt={label} width={40} height={40} className="object-cover rounded-md" />
            ) : (
                Icon && <Icon size={30} color="black"/>
            )}
            <div className="">
                {label}
            </div>
        </div>
    );
};

export default EquipementInput;
