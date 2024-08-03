import EmptyState from "../components/EmptyState";
import ClientOnly from "../components/ClientOnly";
import getCurrentUser from "../actions/getCurrentUser";
import OrderClient from "./OrderClient";
import MobileNavbar from "../components/MobileNavbar";
import Footer from "../components/Footer";

const OrderHistoryPage = async () => {
    const currentUser = await getCurrentUser();

    if (!currentUser) {
        return (
            <ClientOnly>
                <EmptyState 
                    title="Vous n'êtes pas autorisé"
                    subtitle="Vous devez vous connecter"
                />
            </ClientOnly>
        )
    }

    return (
        <>
            <ClientOnly>
                <OrderClient currentUser={currentUser} />
            </ClientOnly>
            <Footer />
            <MobileNavbar />
        </>
    )
}

export default OrderHistoryPage;
