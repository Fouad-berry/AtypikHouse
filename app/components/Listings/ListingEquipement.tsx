'use client';

import { IconType } from "react-icons";
import Image from 'next/image';

interface ListingEquipementProps {
    icon?: IconType; // Rendre l'icône optionnelle
    image?: string;  // Ajouter une prop pour l'image
    label: string;
}

const ListingEquipement: React.FC<ListingEquipementProps> = ({
    icon: Icon,
    image,
    label,
}) => {
    return (
        <div className="flex flex-col gap-6">
            <div className="flex flex-row items-center gap-4">
                {image ? (
                    <Image src={image} alt={label} width={40} height={40} className="object-cover rounded-md" />
                ) : (
                    Icon && <Icon size={30} color="black" className="text-normal-600" />
                )}
                <div className="flex flex-col">
                    <div className="text-lg font-light">
                        {label}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ListingEquipement;
