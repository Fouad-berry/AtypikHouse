'use client';

import { TbBeach, TbMountain, TbPool } from "react-icons/tb";
import Container from "../Container";
import { PiWheelchair, PiWifiHigh, PiFireExtinguisher, PiThermometerSimple, PiSnowflake, PiShirtFoldedLight, PiCoatHanger, PiChargingStationLight } from "react-icons/pi";
import { MdChair, MdFlatware, MdOutlineCoffeeMaker } from "react-icons/md";
import EquipementBox from "../EquipementBox";
import { usePathname, useSearchParams } from "next/navigation";
import { IoDesktopOutline, IoMedkitOutline, IoCarSportOutline, IoBarbellOutline, IoBedOutline } from "react-icons/io5";
import { LuBath, LuUtensils } from "react-icons/lu";
import { BsKey, BsDoorClosed } from "react-icons/bs";
import { GiBarbecue, GiChimney, GiCctvCamera, GiToaster, GiGasStove, GiDutchBike } from "react-icons/gi";
import { PiWineLight, PiPaintBrushHouseholdLight } from "react-icons/pi";
import { RiFridgeLine } from "react-icons/ri";
import { TbIroningSteam } from "react-icons/tb";
import { BiSolidDryer } from "react-icons/bi";
import { FaUmbrellaBeach } from "react-icons/fa6";
import { LiaBabyCarriageSolid, LiaBookSolid, LiaPawSolid, LiaSmokingSolid } from "react-icons/lia";
import { VscGame } from "react-icons/vsc";
import { TfiGame } from "react-icons/tfi";

export const equipement = [
    {
        label: 'Wifi',
        icon: PiWifiHigh,
    },
    {
        label: 'Accès aux handicapé',
        image: '/images/personnes-handicapees.png',
    },
    {
        label: 'Extincteur',
        image: '/images/extincteur-dincendie.png',
    },
    {
        label: 'Chauffage',
        image: '/images/chauffage.png',
    },
    {
        label: 'Climatisation',
        image: '/images/climatisation.png',
    },
    {
        label: 'Armoire d\'habits',
        icon: PiShirtFoldedLight,
    },
    {
        label: 'Cintre',
        image: '/images/cintre.png',
    },
    {
        label: 'Meubles',
        image: '/images/un-meuble.png',
    },
    {
        label: 'Cuisine',
        image: '/images/cuisine.png',
    },
    {
        label: 'Television',
        image: '/images/television.png',
    },
    {
        label: 'Kit de premier secours',
        image: '/images/secours.png',
    },
    {
        label: 'Baignoire',
        image: '/images/baignoire.png',
    },
    {
        label: 'Parking gratuit sur place ',
        image: '/images/parking.png',
    },
    {
        label: 'Equipements de cuisine',
        image: '/images/ustensiles-de-cuisine.png',
    }, 
    {
        label: 'Salle de gymn',
        image: '/images/gym.png',
    },
    {
        label: 'Arrivé autonome',
        icon: BsKey,
    },
    {
        label: 'Barbecue',
        image: '/images/barbecue.png',
    },
    {
        label: 'Verres a vins',
        icon: PiWineLight,
    },
    {
        label: 'Caffétière',
        image: '/images/cafetiere.png',
    },
    {
        label: 'Refrigerateur',
        icon: RiFridgeLine,
    },
    {
        label: 'Cheminée',
        image: '/images/cheminee.png',
    },
    {
        label: 'Fer a repassé',
        icon: TbIroningSteam,
    },
    {
        label: 'Sèche linge',
        image: '/images/seche-linge.png',
    },
    {
        label: 'Camera de surveillance',
        image: '/images/camera-de-securite.png',
    }, 
    {
        label: 'Grille-pain',
        image: '/images/grille-pain.png',
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
        image: '/images/cuisiniere.png',
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
    {
        label: 'Lit',
        icon: IoBedOutline,
    }, 
    {
        label: 'Livres et de quoi lire',
        icon: LiaBookSolid,
    }, 
    {
        label: 'Stations de rehcarge pour véhicules électrique',
        icon: PiChargingStationLight,
    },
    {
        label: 'Console de jeux ps4',
        icon: TfiGame,
    },
    {
        label: 'Savon pour le corps',
        image: '/images/savon-pour-le-corps.png',
    },
    {
        label: 'Gel douche',
        image: '/images/gel-douche.png',
    },
    {
        label: 'Eau chaude',
        image: '/images/eau-chaude.png',
    },
    {
        label: 'Sèche-cheveux',
        image: '/images/seche-cheveux.png',
    },
    {
        label: 'Produits de nettoyage',
        image: '/images/outils.png',
    },
    {
        label: 'Connexion Ethernet',
        image: '/images/ethernet.png',
    },
    {
        label: 'Aire de jeux extérieure',
        image: '/images/parc.png',
    },
    {
        label: 'Table à manger',
        image: '/public/images/table-a-manger.png',
    },
]

const Equipement = () => {
    const params = useSearchParams();
    const equipment = params?.get('equipement');
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
                "
            >
                {equipement.map((item) => (
                    <EquipementBox
                        key={item.label}
                        label={item.label}
                        selected={equipment === item.label}
                        icon={item.icon}
                        image={item.image}  // Passage de l'image à EquipementBox
                    />
                ))}
            </div>
        </Container>
    );
};

export default Equipement;
