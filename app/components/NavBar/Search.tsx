'use client';

import useCountries from "@/app/hooks/useCountries";
import useSearchModal from "@/app/hooks/useSearchModal";
import { differenceInDays } from "date-fns";
import { useSearchParams } from "next/navigation";
import { useMemo } from "react";
import { BiSearch } from "react-icons/bi";

const Search = () => {
    const searchModal = useSearchModal();
    const params = useSearchParams();
    const { getByValue } = useCountries();
    
    const locationvalue = params?.get('locationvalue');
    const startDate = params?.get('startDate');
    const endDate = params?.get('endDate');
    const guestCount = params?.get('guestCount');

    const locationLabel = useMemo(() => {
        if (locationvalue) {
            return getByValue(locationvalue as string)?.label;
        }

        return 'N`importe où ?';
    }, [ getByValue, locationvalue]);

    const durationLabel = useMemo(() => {
        if (startDate && endDate) {
            const start = new Date(startDate as string);
            const end = new Date(endDate as string);
            let diff = differenceInDays(end, start);

            if (diff === 0) {
                diff +1
            }

            return `${diff} Jours`;
        }

        return 'N`importe quelle semaine'
    }, [startDate, endDate]);

    const guestLabel = useMemo(() => {
        if (guestCount) {
            return `${guestCount} Visiteurs`;
        }

        return 'Rechercher une location';
    }, [guestCount])

    return (
        <div 
            onClick={searchModal.onOpen}
            className="
                border-[1px]
                w-full
                md:w-auto
                py-2
                rounded-full
                shadow-sm
                transition
                cursor-pointer
        ">
            <div
            className="
                flex
                flex-row
                items-center
                justify-between
            ">
                <div className="
                    text-sm
                    font-semibold
                    px-6
                ">
                    {locationLabel}
                </div>
                <div className="
                    hidden
                    sm:block
                    text-sm
                    font-semibold
                    px-6
                    border-x-[1px]
                    flex-1
                    text-center
                ">
                    {durationLabel}
                </div>
                <div className="
                    text-sm
                    pl-6
                    pr-2
                    text-gray-600
                    flex
                    flex-row
                    items-center
                    gap-3
                ">
                    <div className="hidden sm:block">{guestLabel}</div>
                    <div className="
                        p-2
                        bg-[#e7f53c]
                        rounded-full
                        text-white
                    ">
                        <BiSearch size={19} color="black" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Search;
