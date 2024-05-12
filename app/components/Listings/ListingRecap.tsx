'use client';

import useCountries from "@/app/hooks/useCountries";
import { SafeUser } from "@/app/types";
import { IconType } from "react-icons";
import Avatar from "../Avatar";
import ListingCategory from "./ListingCategory";
import ListingEquipement from "./ListingEquipement";
import dynamic from "next/dynamic";


const ListingInfo= ({}) => {

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
                    <div>Louer par </div>
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
                         visiteurs
                    </div>
                    <div>
                         chambres
                    </div>
                    <div>
                         salle de bains
                    </div>
                </div>
            </div>
            <hr />
            <hr />
            <hr />
                <div>
                    <h2 className="text-xl font-semibold text-neutral-700">Les équipements que propose ce logement</h2> <br></br>
                    <div className="grid grid-cols-2 gap-3">
                    </div>
                </div>
            <hr />
            <div className="text-lg font-light text-neutral-500">

            </div>
            <hr />
            <div className="text-lg font-bold text-normal-300">
                Ou se trouve notre logement Athipique
            </div>
        </div>
    );
};

export default ListingInfo;