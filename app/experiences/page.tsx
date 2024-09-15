import EmptyState from "../components/EmptyState";
import ClientOnly from "../components/ClientOnly";
import MobileNavbar from "../components/MobileNavbar";
import Footer from "../components/Footer";
import Container from "../components/Container";
import Heading from "../components/Heading";
import Image from "next/image";

const Experiences = async () => {

    return (
        <>
            <Heading
                title="Politique de confidentialité"
            />

            {/* Ajout de l'image responsive */}
            <div className="relative w-full h-100 md:h-96"> {/* Le parent doit être "relative" avec des dimensions */}
                <Image
                    src="/images/bg-lg.jpg" // Remplace par le chemin correct de l'image
                    alt="Image de Politique de Confidentialité"
                    fill // Utilise "fill" pour remplir l'espace parent
                    className="object-cover" // Utilise Tailwind CSS pour l'ajustement de l'image
                />
            </div>

            <Footer />
            <MobileNavbar />
            </>
    )
};

export default Experiences;
