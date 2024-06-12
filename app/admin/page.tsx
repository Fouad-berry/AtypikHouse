import React from "react";
import EmptyState from "../components/EmptyState";
import ClientOnly from "../components/ClientOnly";
import getCurrentUser from "../actions/getCurrentUser";
import getAllUsers from "../actions/getAllUsers";
import MobileNavbar from "../components/MobileNavbar";
import Footer from "../components/Footer";
import styles from './adminPage.module.css';
import Container from "../components/Container";
import Heading from "../components/Heading";

const AdminPage = async () => {
    const currentUser = await getCurrentUser();

    if (!currentUser || currentUser.role !== 'admin') {
        return (
            <ClientOnly> 
                <EmptyState 
                    title="Vous n'êtes pas autorisé"
                    subtitle="Vous devez être administrateur pour accéder à cette page"
                />
            </ClientOnly>
        )
    }

    const users = await getAllUsers();

    if (users.length === 0) {
        return (
            <>
            <ClientOnly>
                <EmptyState
                    title="Pas d'utilisateurs trouvés"
                    subtitle="Aucun utilisateur n'est enregistré dans la base de données"
                />
            </ClientOnly>
            <MobileNavbar />
            </>
        )
    }

    return (
        <>
        <Container>
            <Heading
                title="Bienvenue sur votre panneau d'administration"
            />
            <h3 style={{fontWeight:'bold'}} >Liste des utilisateurs</h3> <br />
            <table className={styles.usersTable}>
                <thead>
                    <tr>
                        <th>Nom</th>
                        <th>Email</th>
                        <th>Crée le</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{new Date(user.createAt).toLocaleString()}</td>
                            <td>
                                <button >Supprimer</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Footer />
            <MobileNavbar />
            </Container>
        </>
    )
}

export default AdminPage;


