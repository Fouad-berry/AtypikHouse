'use client';

import useCountries from "@/app/hooks/useCountries";
import { SafeUser } from "@/app/types";
import { IconType } from "react-icons";
import Avatar from "../Avatar";
import ListingCategory from "./ListingCategory";
import ListingEquipement from "./ListingEquipement";
import dynamic from "next/dynamic";

const Map = dynamic(() => import('../Map'), {
    ssr: false
})

interface ListingInfoProps {
    user: SafeUser;
    description: string;
    guestCount: number;
    roomCount: number;
    bathroomCount: number;
    category: {
        icon: IconType;
        label: string;
        description: string;
    } | undefined
    equipment: {
        icon: IconType;
        label: string;
    }[] | undefined
    locationvalue: string;
}

const ListingInfo: React.FC<ListingInfoProps> = ({
    user,
    description,
    guestCount,
    roomCount,
    bathroomCount,
    category,
    equipment,
    locationvalue
}) => {
    const {getByValue} = useCountries();

    const coordinates = getByValue(locationvalue)?.latlng;

    return (
        <div className="col-span-4 flex flex-col gap-8">
            <div className="flex flex-col gap-2">
                <div className="
                    text-xl
                    font-semibold
                    flex
                    flex-row
                    items-center
                    gap-2
                ">
                    <div>Louer par {user?.name}</div>
                    <Avatar src={user?.image}/>
                </div>
                <div className="
                    flex
                    flex-row
                    items-center
                    gap-4
                    font-light
                    text-neutral-500
                ">
                    <div>
                        {guestCount} visiteurs
                    </div>
                    <div>
                        {roomCount} chambres
                    </div>
                    <div>
                        {bathroomCount} salle de bains
                    </div>
                </div>
            </div>
            <hr />
            {category && (
                <ListingCategory
                    icon={category.icon}
                    label={category.label}
                    description={category.description}
                />
            )}
            <hr />
            {equipment && equipment.length > 0 && (
                <div>
                    <h2 className="text-xl font-semibold text-neutral-700">Les équipements que propose ce logement</h2> <br></br>
                    <div className="grid grid-cols-2 gap-3">
                        {equipment.map((item, index) => (
                            <ListingEquipement
                                key={index}
                                icon={item.icon}
                                label={item.label}
                            />
                        ))}
                    </div>
                </div>
            )}
            <hr />
            <div className="text-lg font-light text-neutral-500">
                {description}
            </div>
            <hr />
            <div className="text-lg font-bold text-normal-300">
                Ou se trouve notre logement Athipique
            </div>
            <Map center={coordinates}/>
        </div>
    );
};

export default ListingInfo;