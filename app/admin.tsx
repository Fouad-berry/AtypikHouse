import { getSession } from "next-auth/react";
import { GetServerSideProps } from "next";
import { FC } from "react";

interface AdminPageProps {
    user: {
        id: string;
        role: string;
        email?: string | null;
        name?: string | null;
        image?: string | null;
    };
}

const AdminPage: FC<AdminPageProps> = ({ user }) => {
    return (
        <div>
            <h1>Admin Page</h1>
            <p>Welcome, {user.email}. You have admin access.</p>
        </div>
    );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
    const session = await getSession(context);

    if (!session || session.user.role !== 'admin') {
        return {
            redirect: {
                destination: '/',
                permanent: false,
            },
        };
    }

    return {
        props: { user: session.user },
    };
};

export default AdminPage;
