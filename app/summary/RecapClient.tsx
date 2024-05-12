'use client';

import { useRouter } from "next/navigation";

import Container from "../components/Container";
import Heading from "../components/Heading";
import { SafeReservation, SafeUser } from "../types";
import { useCallback, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import ListingCard from "../components/Listings/ListingCard";

interface RecapClientProps {
    reservations: SafeReservation[];
    currentUser?: SafeUser | null;
}

const RecapClient: React.FC<RecapClientProps> = ({
    reservations,
    currentUser
}) => {
    const totalPrice = sessionStorage.getItem('totalPrice');
    const router = useRouter();

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
                        <p>Prix total: {totalPrice}</p>
                    </div>
                    <div>
                        <p>Date de reservation: {totalPrice}</p>
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

export default RecapClient;