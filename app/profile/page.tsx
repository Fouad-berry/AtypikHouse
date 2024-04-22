import EmptyState from "../components/EmptyState";
import ClientOnly from "../components/ClientOnly";

import getCurrentUser from "../actions/getCurrentUser";
import getReservation from "../actions/getReservation";
import ProfileClient from "./ProfileClient";
import MobileNavbar from "../components/MobileNavbar";
import Footer from "../components/Footer";

const TripsPage = async () => {
    const currentUser = await getCurrentUser();

    if (!currentUser) {
        return (
            <ClientOnly> 
                <EmptyState 
                    title="Vous n'est pas autorisé"
                    subtitle="Vous devez vous connectez"
                />
            </ClientOnly>
        )
    }


    if (!currentUser) {
        return (
            <>
            <ClientOnly>
                <EmptyState
                    title="Pas de voyages trouvé"
                    subtitle="Regardez vous n'avez reservé aucun voyage"
                />
            </ClientOnly>
            <Footer />
            <MobileNavbar />
            </>
        )
    }

    return (
        <>
        <ClientOnly>
            <ProfileClient
                currentUser={currentUser}
            />
        </ClientOnly>
        <Footer />
        <MobileNavbar />
        </>
    )
}

export default TripsPage;