import getCurrentUser from "@/app/actions/getCurrentUser";
import getUsers from "@/app/actions/getAllUsers";
import ClientOnly from "@/app/components/ClientOnly";
import AdminClient from "./AdminClient";
import EmptyState from "@/app/components/EmptyState";
import Footer from "@/app/components/Footer";
import MobileNavbar from "@/app/components/MobileNavbar";

const AdminPage = async () => {
    const currentUser = await getCurrentUser();
    const users = await getUsers();

    if (!currentUser || currentUser.role !== 'admin') {
        return (
            <>
                <ClientOnly>
                    <EmptyState
                        title="Non autorisé"
                        subtitle="Vous n'avez pas les droits pour accéder à cette page."
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
                <AdminClient users={users} currentUser={currentUser} />
            </ClientOnly>
            <Footer />
            <MobileNavbar />
        </>
    );
};

export default AdminPage;
