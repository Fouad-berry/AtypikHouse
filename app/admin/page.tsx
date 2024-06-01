import { useRouter } from 'next/navigation';
import EmptyState from "../components/EmptyState";
import ClientOnly from "../components/ClientOnly";

import getCurrentUser from "../actions/getCurrentUser";
import getReservation from "../actions/getReservation";
import Container from '../components/Container';
import Heading from '../components/Heading';
import Footer from '../components/Footer';
import MobileNavbar from '../components/MobileNavbar';

const TripsPage = async () => {
    const currentUser = await getCurrentUser();

    // Vérifiez si l'utilisateur actuel a le rôle d'administrateur
    if (!currentUser || currentUser.role !== 'admin') {
        // Si l'utilisateur n'est pas un administrateur, redirigez-le ou affichez un état vide
        return (
            <ClientOnly>
                <EmptyState
                    title="Accès refusé"
                    subtitle="Vous n'avez pas l'autorisation d'accéder à cette page."
                />
            </ClientOnly>
        );
    }

    return (
        <Container>
            <Heading
                title="Panneau d'administration"
            /> 
            <Footer />
            <MobileNavbar />
        </Container>
    )
};

export default TripsPage;
