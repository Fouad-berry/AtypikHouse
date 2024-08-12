'use client';

import { SafeListing, SafeReservation, SafeUser } from "@/app/types";
import { useRouter } from "next/navigation";
import useCountries from "@/app/hooks/useCountries";
import React, { useCallback, useMemo } from "react";
import { format } from "date-fns";
import Image from "next/image";
import HeartButton from "../HeartButton";
import Button from "../Button";

interface ListingCardProps {
    data: SafeListing;
    reservation?: SafeReservation;
    secondaryAction?: () => void;
    secondaryActionLabel?: string;
    onAction?: (id: string) => void;
    onEdit?: (id: string) => void;
    disabled?: boolean;
    actionLabel?: string;
    editLabel?: string;
    actionId?: string;
    currentUser?: SafeUser | null;
}

const ListingCard: React.FC<ListingCardProps> = ({
    data,
    reservation,
    secondaryAction,
    secondaryActionLabel,
    onAction,
    onEdit,
    disabled,
    actionLabel,
    editLabel,
    actionId = "",
    currentUser
}) => {
    const router = useRouter();
    const { getByValue } = useCountries();

    const location = getByValue(data.locationvalue);

    const handleCancel = useCallback(
        (e: React.MouseEvent<HTMLButtonElement>) => {
            e.stopPropagation();

            if (disabled) {
                return;
            }

            onAction?.(actionId);
        }, [onAction, actionId, disabled]);

    const handleEdit = useCallback(
        (e: React.MouseEvent<HTMLButtonElement>) => {
            e.stopPropagation();

            if (disabled) {
                return;
            }

            onEdit?.(actionId);
        }, [onEdit, actionId, disabled]);

    const price = useMemo(() => {
        if (reservation) {
            return reservation.totalPrice;
        }

        return data.price;
    }, [reservation, data.price]);

    const reservationDate = useMemo(() => {
        if (!reservation) {
            return null;
        }

        const start = new Date(reservation.startDate);
        const end = new Date(reservation.endDate);
        
        return `${format(start, 'PP')} - ${format(end, 'PP')}`;
    }, [reservation]);

    // Utilisation de la première image de la liste d'images
    const mainImageSrc = data.imageSrc && data.imageSrc.length > 0 ? data.imageSrc[0] : "/placeholder.jpg"; // Placeholder au cas où il n'y a pas d'image

    return (
        <div
            onClick={() => router.push(`/listings/${data.id}`)}
            className="
                col-span-1 cursor-pointer group
            "
        >
            <div className="flex flex-col gap-2 w-full">
                <div className="
                    aspect-square
                    w-full
                    relative
                    overflow-hidden
                    rounded-xl
                ">
                    <Image 
                        fill
                        alt="Listing"
                        src={mainImageSrc}
                        className="
                            object-cover
                            h-full
                            w-full
                            group-hover:scale-110
                            transition
                        "
                    />
                    <div className="absolute top-3 right-3">
                        <HeartButton 
                            listingId={data.id}
                            currentUser={currentUser}
                        />
                    </div>
                </div>
                <div className="font-semibold text-lg">
                    {location?.region}, {location?.label}
                </div>
                <div className="font-light text-neutral-500">
                    {reservationDate || data.category}
                </div>
                <div className="flex flex-row items-center gap-1">
                    <div className="font-semibold">
                        € {price}
                    </div>
                    {!reservation && (
                        <div className="font-light"> / nuit</div>
                    )}
                </div>
                {onAction && actionLabel && (
                    <Button
                        disabled={disabled}
                        small
                        label={actionLabel}
                        onClick={handleCancel}
                    />
                )}
                {onEdit && editLabel && (
                    <Button
                        disabled={disabled}
                        small
                        label={editLabel}
                        onClick={handleEdit}
                    />
                )}
                {secondaryAction && secondaryActionLabel && (
                    <button onClick={secondaryAction}>
                        {secondaryActionLabel}
                    </button>
                )}
            </div>
        </div>
    );
};

export default ListingCard;
