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
        <Container>
            <Heading 
                title="Recapitulatif de votre commande"
                subtitle="Ci dessous vous verrez le recapitulatif de votre commande ?"
            />
            <div className="
                mt-10
                grid
                grid-cols-1
                sm:grid-cols-2
                md:grid-cols-3
                lg:grid-cols-4
                xl:grid-cols-5
                2xl:grid-cols-6
                gap-8
            ">
                <div>
                <p>Total Price: {totalPrice}</p>
                </div>
            </div>
        </Container>
    );
};

export default RecapClient;