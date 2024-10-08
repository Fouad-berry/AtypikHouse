import getCurrentUser from "@/app/actions/getCurrentUser";
import getListingById from "@/app/actions/getListingById";
import ClientOnly from "@/app/components/ClientOnly";
import EmptyState from "@/app/components/EmptyState";
import ListingClient from "./ListingClient";
import getReservation from "@/app/actions/getReservation";
import MobileNavbar from "@/app/components/MobileNavbar";
import Footer from "@/app/components/Footer";

interface IParams {
    listingId: string;
}

const ListingPage = async ({params}: {params: IParams}) => {
    const listing = await getListingById(params);
    const reservations= await getReservation(params);
    const currentUser = await getCurrentUser();

    if (!listing) {
        return (
            <> 
            <ClientOnly>
                <EmptyState />
            </ClientOnly>
            <Footer />
            <MobileNavbar />
            </>
        )
    }
    return (
        <>
        <ClientOnly>
            <ListingClient
                listing={listing}
                reservation={reservations}
                currentUser={currentUser} />
        </ClientOnly>
        <Footer />
        <MobileNavbar />
        </>
    );
};

export default ListingPage;