'use client';

import { IconType } from "react-icons";
import Image from 'next/image';

interface ListingCategoryProps {
    icon?: IconType; // Rendre l'icône optionnelle
    image?: string;  // Ajouter une prop pour l'image
    label: string;
    description: string;
}

const ListingCategory: React.FC<ListingCategoryProps> = ({
    icon: Icon,
    image,
    label,
    description
}) => {
    return (
        <div className="flex flex-col gap-6">
            <div className="flex flex-row items-center gap-4">
                {image ? (
                    <Image src={image} alt={label} width={30} height={30} className="object-cover rounded-md" />
                ) : (
                    Icon && <Icon size={40} className="text-neutral-600" />
                )}
                <div className="flex flex-col">
                    <div className="text-lg font-semibold">
                        {label}
                    </div>
                    <div className="text-neutral-500 font-light">
                        {description}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ListingCategory;
