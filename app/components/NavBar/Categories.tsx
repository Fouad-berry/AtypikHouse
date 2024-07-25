'use client';

import { TbBeach, TbMountain, TbPool } from "react-icons/tb";
import Container from "../Container";
import { GiBarn, GiBoatFishing, GiCactus, GiCastle, GiCaveEntrance, GiForestCamp, GiIsland, GiWindmill } from "react-icons/gi";
import { MdOutlineVilla } from "react-icons/md";
import CategoryBox from "../CategoryBox";
import { usePathname, useSearchParams } from "next/navigation";
import { FaSkiing } from "react-icons/fa";
import { BsSnow } from "react-icons/bs";
import { IoDiamond } from "react-icons/io5";

export const categories = [
    {
        label: 'Plage',
        icon: TbBeach,
        description:'La propriété est proche de la plage'
    },
    {
        label: 'Eolienne',
        icon: GiWindmill,
        description:'La propriété est proche d`une source eolienne'
    },
    {
        label: 'Moderne',
        icon: MdOutlineVilla,
        description:'La propriété est vraiment moderne'
    },
    {
        label: 'CountrySide',
        icon: TbMountain,
        description:'La propriété est moderne'
    },
    {
        label: 'Pools',
        icon: TbPool,
        description:'La propriété est moderne'
    },
    {
        label: 'Islands',
        icon: GiIsland,
        description:'La propriété est moderne'
    },
    {
        label: 'Lake',
        icon: GiBoatFishing,
        description:'La propriété est moderne'
    },
    {
        label: 'Skiing',
        icon: FaSkiing,
        description:'La propriété est moderne'
    },
    {
        label: 'GiCastle',
        icon: GiCastle,
        description:'La propriété est moderne'
    },
    {
        label: 'Camping',
        icon: GiForestCamp,
        description:'La propriété est moderne'
    },
    {
        label: 'Arctic',
        icon: BsSnow,
        description:'La propriété est vraiment moderne'
    },
    {
        label: 'Cave',
        icon: GiCaveEntrance,
        description:'La propriété est vraiment moderne'
    },
    {
        label: 'Desert ',
        icon: GiCactus,
        description:'La propriété est vraiment moderne'
    },
    {
        label: 'Barn',
        icon: GiBarn,
        description:'La propriété est vraiment moderne'
    },
    {
        label: 'Lux',
        icon: IoDiamond,
        description:'La propriété est vraiment moderne'
    },


]

const Categories = () => {
    const params = useSearchParams();
    const category = params?.get('gategory');
    const pathname = usePathname();

    const isMainPage = pathname === "/";

    if (!isMainPage) {
        return null;
    }
    return (
        <Container>
            <div
            className="
                pt-4
                flex
                flex-row
                items-center
                justify-between
                overflow-x-auto
            ">
                {categories.map((item) => (
                    <CategoryBox
                        key={item.label}
                        label={item.label}
                        selected={category === item.label}
                        icon={item.icon}
                    />
                ))}
            </div>
        </Container>
    );
};

export default Categories;