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
        image: '/images/armoire.png',
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
        label: 'Drap',
        image: '/images/draps-de-lit.png',
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
        image: '/images/cles.png',
    },
    {
        label: 'Barbecue',
        image: '/images/barbecue.png',
    },
    {
        label: 'Verres a vins',
        image: '/images/verres-a-vin.png',
    },
    {
        label: 'Caffétière',
        image: '/images/cafetiere.png',
    },
    {
        label: 'Refrigerateur',
        image: '/images/refrigerateur.png',
    },
    {
        label: 'Cheminée',
        image: '/images/cheminee.png',
    },
    {
        label: 'Fer a repassé',
        image: '/images/le-fer.png',
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
        label: 'Menage disponible',
        image: '/images/menage.png',
    },
    {
        label: 'Chaussure pour la plage',
        image: '/images/chaussure-de-plage.png',
    },
    {
        label: 'Entrée privée',
        image: '/images/cle.png',
    },
    {
        label: 'Cuisinière a gaz',
        image: '/images/cuisiniere.png',
    },
    {
        label: 'Recommandation de baby-sitters',
        image: '/images/baby-sitter.png',
    }, 
    {
        label: 'Animaux accepetés',
        image: '/images/pattes.png',
    },
    {
        label: 'Logement fumeur',
        image: '/images/zone-fumeur.png',
    },  
    {
        label: 'Vélos',
        image: '/images/velo.png',
    }, 
    {
        label: 'Jouets',
        image: '/images/jouet.png',
    },
    {
        label: 'Lit',
        image: '/images/lit.png',
    }, 
    {
        label: 'Livres et de quoi lire',
        image: '/images/livre-ouvert.png',
    }, 
    {
        label: 'Stations de rehcarge pour véhicules électrique',
        image: '/images/voiture-electrique.png',
    },
    {
        label: 'Console de jeux ps4',
        image: '/images/console-de-jeu.png',
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
        label: 'Oreillers et couvertures supplémentaires',
        image: '/images/oreiller.png',
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
        label: 'Depot de bagage',
        image: '/images/bagage.png',
    },
    {
        label: 'Table à manger',
        image: '/images/table-a-manger.png',
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
                        image={item.image}
                    />
                ))}
            </div>
        </Container>
    );
};

export default Equipement;
