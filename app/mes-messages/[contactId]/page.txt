import getCurrentUser from "@/app/actions/getCurrentUser";
import ClientOnly from "@/app/components/ClientOnly";
import EmptyState from "@/app/components/EmptyState";
import Footer from "@/app/components/Footer";
import MobileNavbar from "@/app/components/MobileNavbar";
import MessagesClient from "../MessageClient";

const MessagesPage = async ({ params }: { params: { contactId: string } }) => {
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
