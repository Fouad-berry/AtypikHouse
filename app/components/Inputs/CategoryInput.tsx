'use client';

import { IconType } from "react-icons";
import Image from 'next/image';

interface CategoryInputProps {
    icon?: IconType; // Icon becomes optional
    image?: string; // Add image prop
    label: string;
    selected?: boolean;
    onClick: (value: string) => void;
}

const CategoryInput: React.FC<CategoryInputProps> = ({
    icon: Icon,
    image,
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
                <Image src={image} alt={label} width={30} height={30} className="object-cover rounded-md" />
            ) : (
                Icon && <Icon size={30} />
            )}
            <div className="font-bold">
                {label}
            </div>
        </div>
    );
};

export default CategoryInput;
