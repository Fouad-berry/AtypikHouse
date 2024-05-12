'use client';

import { useRouter } from "next/navigation";
import Container from "@/app/components/Container";
import ListingHead from "@/app/components/Listings/ListingHead";
import ListingInfo from "@/app/components/Listings/ListingInfo";
import ListingComment from "@/app/components/Listings/ListingComment";
import { categories } from "@/app/components/NavBar/Categories";
import { equipement } from "@/app/components/NavBar/Equipement";
import useLoginModal from "@/app/hooks/useLoginModal";
import { SafeListing, SafeReservation, SafeUser } from "@/app/types";

import { useCallback, useEffect, useMemo, useState } from "react";
import { differenceInCalendarDays, differenceInDays, eachDayOfInterval } from "date-fns";
import axios from "axios";
import toast from "react-hot-toast";
import ListingReservation from "@/app/components/Listings/ListingReservation";
import { Range } from "react-date-range";
import ListingContact from "@/app/components/Listings/ListingContact";
import PayPalButton from "@/app/components/PaypalButton";

const initialDateRange = {
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection'
};

interface ListingClientProps {
    reservation?: SafeReservation[];
    listing: SafeListing & {
        user:SafeUser
    };
    currentUser?: SafeUser | null
}

const ListingClient: React.FC<ListingClientProps> = ({
    listing,
    reservation = [],
    currentUser
}) => {
    const loginModal = useLoginModal();
    const router = useRouter();

    const disabledDates = useMemo(() => {
        let dates: Date[] = [];

        reservation.forEach((reservation) => {
            const range = eachDayOfInterval({
                start: new Date(reservation.startDate),
                end: new Date(reservation.endDate)
            });

            dates = [...dates, ...range]
        });

        return dates;
    }, [reservation]);

    const [isLoading, setIsLoading] = useState(false);
    const [totalPrice, setTotalPrice] = useState(listing.price);
    const [dateRange, setDateRange] = useState<Range>(initialDateRange);

    const onCreateReservation = useCallback(() => {
        if (!currentUser) {
            return loginModal.onOpen();
        }

        setIsLoading(true);

        axios.post('/api/reservations', {
            totalPrice,
            startDate: dateRange.startDate,
            endDate: dateRange.endDate,
            listingId: listing?.id
        })
        .then(() => {
            toast.success('Votre  réservation a bien été enregistrée');
            setDateRange(initialDateRange);
            sessionStorage.setItem('totalPrice', totalPrice.toString());
            router.push(`/summary`);
            })
        .catch(() =>{
            toast.error('Quelque chose s`est mal passé');
        })
        .finally(() => {
            setIsLoading(false);
        })
    }, [
        totalPrice,
        dateRange,
        listing?.id,
        router,
        currentUser,
        loginModal
    ]);

    useEffect(() => {
        if (dateRange.startDate && dateRange.endDate) {
            const dayCount = differenceInCalendarDays(
                dateRange.endDate,
                dateRange.startDate
            );

            if (dayCount && listing.price) {
                setTotalPrice(dayCount * listing.price);
            } else {
                setTotalPrice(listing.price);
            }
        }
    }, [dateRange, listing.price]);

    const category = useMemo(() => {
        return categories.find((item) => 
            item.label === listing.category);
    }, [listing.category]);

    const equipment = useMemo(() => {
        return equipement.filter((item) => 
            listing.equipment.includes(item.label));
    }, [listing.equipment]);
    
    return (
        <div>
            <Container>
                <div className="max-w-screen-lg mx-auto">
                    <div className="flex flex-col gap-6">
                        <ListingHead
                            title={listing.title}
                            imageSrc={listing.imageSrc}
                            locationvalue={listing.locationvalue}
                            id={listing.id}
                            currentUser={currentUser}
                        />
                        <div className="
                            grid
                            grid-cols-1
                            md:grid-cols-7
                            md:gap-10
                            mt-6
                        ">
                            <ListingInfo
                                user={listing.user}
                                category={category}
                                equipment={equipment}
                                description={listing.description}
                                roomCount={listing.roomCount}
                                guestCount={listing.guestCount}
                                bathroomCount={listing.bathroomCount}
                                locationvalue={listing.locationvalue}
                            />
                            
                            <div className="
                                order-first
                                mb-10
                                md:order-last
                                md:col-span-3
                            ">
                                    <ListingReservation 
                                        price={listing.price}
                                        totalPrice={totalPrice}
                                        onChangeDate={(value) => setDateRange(value)}
                                        dateRange={dateRange}
                                        onSubmit={onCreateReservation}
                                        disabled={isLoading}
                                        disabledDates={disabledDates}
                                    />
                                        <PayPalButton totalPrice={totalPrice} onSuccess={onCreateReservation} />
                            </div>
                        </div>
                    </div>
                    <div>
                        
                            {/* Ajout du commentaire */}
                                <ListingComment listingId={listing.id} />
                            {/* Afficher les commentaires existants ici */}
                    </div>
                    <div>
                    <ListingContact ownerId={listing.user.id} />
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default ListingClient;
