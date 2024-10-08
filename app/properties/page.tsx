import EmptyState from "../components/EmptyState";
import ClientOnly from "../components/ClientOnly";

import getCurrentUser from "../actions/getCurrentUser";
import PropertiesClient from "./PropertiesClient";
import getListings from "../actions/getListings";
import MobileNavbar from "../components/MobileNavbar";
import Footer from "../components/Footer";

const PropertiesPage = async () => {
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

    const listings = await getListings({
        userId: currentUser.id
    });

    if (listings.length === 0) {
        return (
            <>
            <ClientOnly>
                <EmptyState
                    title="Pas de propriétés trouvé"
                    subtitle="On dirait que vous n'avez aucune propriété"
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
            <PropertiesClient
                listings={listings}
                currentUser={currentUser}
            />
        </ClientOnly>
        <Footer />
        <MobileNavbar />
        </>
    )
}

export default PropertiesPage;