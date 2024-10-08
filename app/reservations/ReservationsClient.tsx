'use client';

import toast, { Toast } from "react-hot-toast";
import axios from "axios";
import { useCallback, useState } from "react";
import { useRouter } from "next/navigation";

import { SafeReservation, SafeUser } from "../types";

import Heading from "../components/Heading";
import Container from "../components/Container";
import ListingCard from "../components/Listings/ListingCard";

interface ReservationsClientProps {
    reservations: SafeReservation[];
    currentUser?: SafeUser | null;
}

const ReservationsClient: React.FC<ReservationsClientProps> = ({
    reservations,
    currentUser
}) => {
    const router = useRouter();
    const [deletingId, setDeletingId] = useState('');

    const onCancel = useCallback((id: string) => {
        setDeletingId(id);

        axios.delete(`/api/reservations/${id}`)
        .then(() => {
            toast.success("Reservation annulée");
            router.refresh();
        })
        .catch(() => {
            toast.error('Quelque chose s`est mal passé');
        })
        .finally(() => {
            setDeletingId('');
        })
    }, [router]);
    return (
        <>
        <br />
        <Container>
            <Heading 
                title="Reservations"
                subtitle="Reservation sur vos propriétés"
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
                gap-6
            ">
                {reservations.map((reservation) => (
                    <ListingCard
                        key={reservation.id}
                        data={reservation.listing}
                        reservation={reservation}
                        actionId={reservation.id}
                        onAction={onCancel}
                        disabled={deletingId === reservation.id}
                        actionLabel="Annuler la reservation du visiteur"
                        currentUser={currentUser}
                    />
                ))}
            </div>
        </Container>
        </>
    );
};

export default ReservationsClient;