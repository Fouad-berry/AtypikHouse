import { getSession } from "next-auth/react";
import { GetServerSideProps } from "next";
import { FC } from "react";
import EmptyState from "../components/EmptyState";
import ClientOnly from "../components/ClientOnly";
import getCurrentUser from "../actions/getCurrentUser";

interface User {
    id: string;
    role: string;
    email?: string | null;
    name?: string | null;
    image?: string | null;
}

interface TripsPageProps {
    user: User | null;
}

const TripsPage: FC<TripsPageProps> = ({ user }) => {
    if (!user || user.role !== 'admin') {
        return (
            <ClientOnly>
                <EmptyState  />
            </ClientOnly>
        );
    }

    return (
        <ClientOnly>
            <div>
                <h1>Bienvenue sur la page des voyages, {user.email}!</h1>
                <p>Vous êtes un administrateur.</p>
            </div>
        </ClientOnly>
    );
};

export default TripsPage;
