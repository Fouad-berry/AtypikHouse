import EmptyState from "../components/EmptyState";
import ClientOnly from "../components/ClientOnly";

import getCurrentUser from "../actions/getCurrentUser";
import getReservation from "../actions/getReservation";
import ReservationsClient from "./ReservationsClient";
import MobileNavbar from "../components/MobileNavbar";
import Footer from "../components/Footer";

const  ReservationPage = async () => {
    const currentUser = await getCurrentUser();

    if (!currentUser) {
        return (
            <ClientOnly>
                <EmptyState 
                    title="Vous n'etes pas autorisé"
                    subtitle="S'il vous plait connectez vous"
                />
            </ClientOnly>
        );
    }
    
    const reservations = await getReservation({
        authorId: currentUser.id
    });

    if (reservations.length === 0) {
        return (
            <>
            <ClientOnly>
                <EmptyState
                    title="Pas de reservation trouvé"
                    subtitle="Regardez si vous n'avez pas de reservation dans vos propriétés"
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
            <ReservationsClient
                reservations={reservations}
                currentUser={currentUser}
            />
        </ClientOnly>
        <Footer />
        <MobileNavbar />
        </>
    )
};

export default ReservationPage;