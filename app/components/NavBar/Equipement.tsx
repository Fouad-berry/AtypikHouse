'use client';

import { TbBeach, TbMountain, TbPool } from "react-icons/tb";
import Container from "../Container";
import { PiWheelchair, PiWifiHigh, PiFireExtinguisher, PiThermometerSimple, PiSnowflake, PiShirtFoldedLight, PiCoatHanger } from "react-icons/pi";
import { MdChair, MdFlatware, MdOutlineCoffeeMaker } from "react-icons/md";
import EquipementBox from "../EquipementBox";
import { usePathname, useSearchParams } from "next/navigation";
import { IoDesktopOutline, IoMedkitOutline, IoCarSportOutline, IoBarbellOutline } from "react-icons/io5";
import { LuBath, LuUtensils } from "react-icons/lu";
import { BsKey, BsDoorClosed } from "react-icons/bs";
import { GiBarbecue, GiChimney, GiCctvCamera, GiToaster, GiGasStove, GiDutchBike } from "react-icons/gi";
import { PiWineLight, PiPaintBrushHouseholdLight } from "react-icons/pi";
import { RiFridgeLine } from "react-icons/ri";
import { TbIroningSteam } from "react-icons/tb";
import { BiSolidDryer } from "react-icons/bi";
import { FaUmbrellaBeach } from "react-icons/fa6";
import { LiaBabyCarriageSolid, LiaPawSolid, LiaSmokingSolid } from "react-icons/lia";
import { VscGame } from "react-icons/vsc";

export const equipement = [
    {
        label: 'Wifi',
        icon: PiWifiHigh,
    },
    {
        label: 'Accès aux handicapé',
        icon: PiWheelchair,
    },
    {
        label: 'Extincteur',
        icon: PiFireExtinguisher,
    },
    {
        label: 'Chauffage',
        icon: PiThermometerSimple,
    },
    {
        label: 'Climatisation',
        icon: PiSnowflake,
    },
    {
        label: 'Armoire d\'habits',
        icon: PiShirtFoldedLight,
    },
    {
        label: 'Cintre',
        icon: PiCoatHanger,
    },
    {
        label: 'Meubles',
        icon: MdChair,
    },
    {
        label: 'Cuisine',
        icon: MdFlatware,
    },
    {
        label: 'Television',
        icon: IoDesktopOutline,
    },
    {
        label: 'Kit de premier secours',
        icon: IoMedkitOutline,
    },
    {
        label: 'Baignoire',
        icon: LuBath,
    },
    {
        label: 'Parking gratuit sur place ',
        icon: IoCarSportOutline,
    },
    {
        label: 'Equipements de cuisine',
        icon: LuUtensils,
    }, 
    {
        label: 'Salle de gymn',
        icon: IoBarbellOutline,
    },
    {
        label: 'Arrivé autonome',
        icon: BsKey,
    },
    {
        label: 'Barbecue',
        icon: GiBarbecue,
    },
    {
        label: 'Verres a vins',
        icon: PiWineLight,
    },
    {
        label: 'Caffétière',
        icon: MdOutlineCoffeeMaker,
    },
    {
        label: 'Refrigerateur',
        icon: RiFridgeLine,
    },
    {
        label: 'Cheminée',
        icon: GiChimney,
    },
    {
        label: 'Fer a repassé',
        icon: TbIroningSteam,
    },
    {
        label: 'Sèche linge',
        icon: BiSolidDryer,
    },
    {
        label: 'Camera de surveillance',
        icon: GiCctvCamera,
    }, 
    {
        label: 'Grille-pain',
        icon: GiToaster,
    },
    {
        label: 'Menage disponible tout au long du sejour',
        icon: PiPaintBrushHouseholdLight,
    },
    {
        label: 'Produit indispensable pour la plage',
        icon: FaUmbrellaBeach,
    },
    {
        label: 'Entrée privée',
        icon: BsDoorClosed,
    },
    {
        label: 'Cuisinière a gaz',
        icon: GiGasStove,
    },
    {
        label: 'Recommandation de baby-sitters',
        icon: LiaBabyCarriageSolid,
    }, 
    {
        label: 'Animaux accepetés',
        icon: LiaPawSolid,
    },
    {
        label: 'Logement fumeur',
        icon: LiaSmokingSolid,
    },  
    {
        label: 'Vélos',
        icon: GiDutchBike,
    },
    {
        label: 'Jouets',
        icon: VscGame,
    },

]

const Equipement = () => {
    const params = useSearchParams();
    const equipment = params?.get('gequipment');
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
                {equipement.map((item) => (
                    <EquipementBox
                        key={item.label}
                        label={item.label}
                        selected={equipment === item.label}
                        icon={item.icon}
                    />
                ))}
            </div>
        </Container>
    );
};

export default Equipement;