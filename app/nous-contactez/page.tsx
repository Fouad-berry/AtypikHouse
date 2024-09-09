import EmptyState from "../components/EmptyState";
import ClientOnly from "../components/ClientOnly";

import getCurrentUser from "../actions/getCurrentUser";
import ContactClient from "./ContactClient";
import MobileNavbar from "../components/MobileNavbar";
import Footer from "../components/Footer";

const ContactPage = async () => {
    const currentUser = await getCurrentUser();

    if (!currentUser) {
        return (
            <ClientOnly>
                <EmptyState 
                    title="Vous n'êtes pas autorisé"
                    subtitle="S'il vous plaît connectez-vous pour envoyer un message"
                />
            </ClientOnly>
        );
    }

    return (
        <>
        <ClientOnly>
            <ContactClient currentUser={currentUser} />
        </ClientOnly>
        <Footer />
        <MobileNavbar />
        </>
    );
};

export default ContactPage;
