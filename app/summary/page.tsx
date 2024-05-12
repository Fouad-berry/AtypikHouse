import EmptyState from "../components/EmptyState";
import ClientOnly from "../components/ClientOnly";

import getCurrentUser from "../actions/getCurrentUser";
import getReservation from "../actions/getReservation";
import RecapClient from "./RecapClient";
import MobileNavbar from "../components/MobileNavbar";
import Footer from "../components/Footer";

const RecapPage = async () => {
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

    const reservations = await getReservation({
        userId: currentUser.id
    });

    return (
        <>
        <ClientOnly>
            <RecapClient
                reservations={reservations}
                currentUser={currentUser}
            />
        </ClientOnly>
        <Footer />
        <MobileNavbar />
        </>
    )
}

export default RecapPage;