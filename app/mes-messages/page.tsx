import getCurrentUser from "../actions/getCurrentUser";
import ClientOnly from "../components/ClientOnly";
import EmptyState from "../components/EmptyState";
import Footer from "../components/Footer";
import MobileNavbar from "../components/MobileNavbar";
import MessagesClient from "./MessageClient";

const MessagesPage = async () => {
    const currentUser = await getCurrentUser();

    if (!currentUser) {
        return (
            <>
            <ClientOnly> 
                <EmptyState 
                    title="Vous n'êtes pas autorisé"
                    subtitle="Vous devez vous connecter"
                />
            </ClientOnly>
            <Footer />
            <MobileNavbar />
            </>
        );
    }

    return (
        <>
        <ClientOnly>
            <MessagesClient currentUser={currentUser} />
        </ClientOnly>
        <Footer />
        <MobileNavbar />
        </>
    );
};

export default MessagesPage;
