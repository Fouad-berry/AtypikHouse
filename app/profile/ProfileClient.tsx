'use client';

// TripsClient.tsx

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Container from "../components/Container";
import Heading from "../components/Heading";
import { SafeUser } from "../types";
import axios from "axios";
import toast from "react-hot-toast";

interface TripsClientProps {
    currentUser?: SafeUser;
}

const TripsClient: React.FC<TripsClientProps> = ({
    currentUser
}) => {
    const router = useRouter();
    const [deletingId, setDeletingId] = useState('');

    useEffect(() => {
        // Fetch additional user data if needed
        // Example:
        // axios.get(`/api/user/${currentUser?.id}`)
        //     .then(response => {
        //         // Handle response
        //     })
        //     .catch(error => {
        //         toast.error("Failed to fetch user data");
        //     });
    }, [currentUser]);

    const onCancel = (id: string) => {
        // Your onCancel function
    };

    return (
        <Container>
            <Heading 
                title="Mes voyages"
                subtitle="D'ou vous venez et ou vous voulez aller ?"
            />
            <div className="
                mt-10
                grid
                grid-cols-1
                sm:grid-cols-2
                md:grid-cols-3
                lg:grid-cols-4
                xl:grid-cols-5
                2xl:grid-cols-6
                gap-8
            ">
                {/* Display user information */}
                {currentUser && (
                    <div>
                        <p>Nom: {currentUser.name}</p>
                        <p>Email: {currentUser.email}</p>
                        {/* Add other user information here */}
                    </div>
                )}
            </div>
        </Container>
    );
};

export default TripsClient;
