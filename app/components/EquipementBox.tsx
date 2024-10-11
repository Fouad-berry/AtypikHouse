'use client';

import { useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";
import qs from "query-string";
import Image from 'next/image';

interface EquipementBoxProps {
    label: string;
    selected: boolean;
    image: string;
}

const EquipementBox: React.FC<EquipementBoxProps> = ({
    label,
    selected,
    image
}) => {
    const router = useRouter();
    const params = useSearchParams();

    const handleClick = useCallback(() => {
        let currentQuery = {};

        if (params) {
            currentQuery = qs.parse(params.toString());
        }

        const updateQuery: any = {
            ...currentQuery,
            equipement: label
        }

        if (params?.get('equipement') === label) {
            delete updateQuery.equipement;
        }

        const url = qs.stringifyUrl({
            url: '/',
            query: updateQuery
        }, { skipNull: true });

        router.push(url);
    }, [label, params, router]);

    return (
        <div
            onClick={handleClick}
            className={`
                flex
                flex-col
                items-center
                justify-center
                gap-2
                p-3
                border-b-2
                hover:text-neutral-800
                transition
                cursor-pointer
                ${selected ? 'border-b-neutral-800' : 'border-transparent'}
                ${selected ? 'text-neutral-800' : 'text-neutral-500'}
            `}
        >
            <Image src={image} alt={label} width={40} height={40} className="object-cover rounded-full" />
            <div className="font-medium text-sm">
                {label}
            </div>
        </div>
    );
};

export default EquipementBox;
