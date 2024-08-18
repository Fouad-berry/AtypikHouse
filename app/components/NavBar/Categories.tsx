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
        icon: GiForestCamp,
        description:'Découvrez une retraite en pleine nature, idéale pour les amateurs de plein air.'
    },
    {
        label: 'Arctique',
        icon: BsSnow,
        description:'Expérimentez la beauté glaciale des régions polaires avec des vues enneigées à couper le souffle.'
    },
    {
        label: 'Cave',
        icon: GiCaveEntrance,
        description:'Séjournez dans des espaces mystérieux et captivants, sculptés dans la roche.'
    },
    {
        label: 'Desert ',
        icon: GiCactus,
        description:'Évadez-vous dans l&apos;immensité des dunes, où le silence règne en maître.'
    },
    {
        label: 'Campagne',
        icon: TbMountain,
        description:'Profitez de la tranquillité de la campagne, entourée de verdure et de montagnes.'
    },
    {
        label: 'Piscines',
        icon: TbPool,
        description:'Détendez-vous dans des propriétés dotées de superbes piscines privées.'
    },
    {
        label: 'Îles',
        icon: GiIsland,
        description:'Explorez des refuges insulaires exclusifs, entourés par la mer.'
    },
    {
        label: 'Lac',
        icon: GiBoatFishing,
        description:'Séjournez au bord de l&apos;eau avec des vues sereines sur le lac.'
    },
    {
        label: 'Ski',
        icon: FaSkiing,
        description:'Accédez directement aux pistes depuis votre porte pour un séjour au cœur des montagnes enneigées.'
    },
    {
        label: 'Chateau',
        icon: GiCastle,
        description:'Vivez comme des rois dans des châteaux majestueux au charme historique.'
    },
    {
        label: 'Grange',
        icon: GiBarn,
        description:'Séjournez dans des granges restaurées, alliant le charme rustique à un confort moderne.'
    },
    {
        label: 'Moderne',
        icon: MdOutlineVilla,
        description:'Profitez dun design épuré et contemporain dans des propriétés modernes.'
    },
    {
        label: 'Plage',
        icon: TbBeach,
        description:'Ressentez la brise marine dans des propriétés à deux pas de la plage.'
    },
    {
        label: 'Eolienne',
        icon: GiWindmill,
        description:'Découvrez le charme de la campagne avec des moulins à vent emblématiques.'
    },
    {
        label: 'Lux',
        icon: IoDiamond,
        description:'Vivez une expérience somptueuse dans des propriétés ultra-luxueuses.'
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