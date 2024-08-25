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
        label: 'Camping',
        image: '/images/tente.png',
        description: 'Découvrez une retraite en pleine nature, idéale pour les amateurs de plein air.'
    },
    {
        label: 'Arctique',
        image: '/images/flocon-de-neige.png',
        description: 'Expérimentez la beauté glaciale des régions polaires avec des vues enneigées à couper le souffle.'
    },
    {
        label: 'Cabanes',
        image: '/images/cabane.png',
        description: 'Échappez à la routine quotidienne dans une cabane perchée, un havre de paix au cœur de la forêt, idéal pour se reconnecter avec la nature.'
    },
    {
        label: 'Desert',
        image: '/images/cactus.png',
        description: 'Évadez-vous dans l\'immensité des dunes, où le silence règne en maître.'
    },
    {
        label: 'Caravanes',
        image: '/images/caravane.png',
        description: 'Embarquez pour une escapade nomade avec nos caravanes confortables, offrant la liberté de découvrir de nouveaux horizons tout en profitant du confort moderne.'
    },
    {
        label: 'Piscines',
        image: '/images/piscine.png',
        description: 'Détendez-vous dans des propriétés dotées de superbes piscines privées.'
    },
    {
        label: 'Tours',
        image: '/images/tour.png',
        description: 'Vivez comme des rois dans des châteaux majestueux au charme historique.'
    },
    {
        label: 'Grange',
        image: '/images/grange.png',
        description: 'Séjournez dans des granges restaurées, alliant le charme rustique à un confort moderne.'
    },
    {
        label: 'Wow!',
        image: '/images/vaisseau.png',
        description: 'Profitez dun design fantastique et contemporain dans des propriétés .'
    },
    {
        label: 'Plage',
        image: '/images/plage.png',
        description: 'Ressentez la brise marine dans des propriétés à deux pas de la plage.'
    },
    {
        label: 'Ski',
        image: '/images/ski.png',
        description: 'Ressentez la brise marine dans des propriétés à deux pas de la plage.'
    },
];

const Categories = () => {
    const params = useSearchParams();
    const category = params?.get('category');
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
                        image={item.image}
                    />
                ))}
            </div>
        </Container>
    );
};

export default Categories;
