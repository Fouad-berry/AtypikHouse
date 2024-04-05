'use client';

import { IconType } from "react-icons";

interface ListingEquipementProps {
    icon: IconType;
    label: string;
}

const ListingEquipement: React.FC<ListingEquipementProps> = ({
    icon: Icon,
    label,
}) => {
    return (
        <div className="flex flex-col gap-6">
            <div className="flex flex-row items-center gap-4">
                <Icon size={30} className="text-neutral-600" />
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