import EmptyState from "../components/EmptyState";
import ClientOnly from "../components/ClientOnly";

import getCurrentUser from "../actions/getCurrentUser";
import getFavoriteListings from "../actions/getFavoriteListings";
import FavoritesClient from "./FavoritesClient";
import MobileNavbar from "../components/MobileNavbar";
import Footer from "../components/Footer";

const ListingPage = async () => {
    const listings = await getFavoriteListings();
    const currentUser = await getCurrentUser();

    if (listings.length === 0){
        return (
            <>
            <ClientOnly>
                <EmptyState
                    title="Aucun favoris n'a été trouvé"
                    subtitle="C'est comme si vous n'avez pas de locations favorites"
                />
            </ClientOnly>
            <Footer />
            <MobileNavbar />
            </>
        )
    }

    return(
        <>
        <ClientOnly>
            <FavoritesClient
                listings={listings}
                currentUser={currentUser}
            />
        </ClientOnly>
        <Footer />
        <MobileNavbar />
        </>
    )
}

export default ListingPage;