import EmptyState from "../components/EmptyState";
import ClientOnly from "../components/ClientOnly";

import getCurrentUser from "../actions/getCurrentUser";
import getReservation from "../actions/getReservation";

const TripsPage = async () => {
    const currentUser = await getCurrentUser();


    return (
        <ClientOnly>
            <div>Bonjour</div>
        </ClientOnly>
    )
}

export default TripsPage;