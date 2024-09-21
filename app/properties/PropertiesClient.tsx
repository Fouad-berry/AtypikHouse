'use client';

import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

import Container from "../components/Container";
import Heading from "../components/Heading";
import { SafeListing, SafeUser } from "../types";
import ListingCard from "../components/Listings/ListingCard";
import RentModals from "../components/Modals/RentModalsupdate";

interface PropertiesClientProps {
    listings: SafeListing[];
    currentUser?: SafeUser | null;
}

const PropertiesClient: React.FC<PropertiesClientProps> = ({
    listings,
    currentUser
}) => {
    const router = useRouter();
    const [deletingId, setDeletingId] = useState('');
    const [editingId, setEditingId] = useState<string | null>(null);

    const onCancel = useCallback((id: string) => {
        setDeletingId(id);

        axios.delete(`/api/listings/${id}`)
            .then(() => {
                toast.success("La propriété a été supprimée");
                router.refresh();
            })
            .catch((error) => {
                toast.error(error?.response?.data?.error);
            })
            .finally(() => {
                setDeletingId('');
            });
    }, [router]);

    const onEdit = (id: string) => {
        setEditingId(id);
    };

    const onCloseEditModal = () => {
        setEditingId(null);
        router.refresh();
    };

    const listingToEdit = listings.find(listing => listing.id === editingId);

    return (
        <>
        <br />
        <Container>
            <Heading 
                title="Propriétés"
                subtitle="Liste de vos propriétés"
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
                {listings.map((listing) => (
                    <ListingCard
                        key={listing.id}
                        data={listing}
                        actionId={listing.id}
                        onAction={onCancel}
                        onEdit={onEdit}
                        disabled={deletingId === listing.id}
                        actionLabel="Supprimer la propriété"
                        editLabel="Modifier la propriété"
                        currentUser={currentUser}
                    />
                ))}
            </div>
            {editingId && listingToEdit && (
                <RentModals
                    isOpen={!!editingId}
                    onClose={onCloseEditModal}
                    initialData={listingToEdit}
                />
            )}
        </Container>
        </>
    );
};

export default PropertiesClient;
