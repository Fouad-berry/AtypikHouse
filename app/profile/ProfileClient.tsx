'use client';

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
            <div className="mt-10 grid place-items-center">
                {/* Display user card */}
                {currentUser && (
                    <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center">
                        {/* User image */}
                        <img
                            src={currentUser.image || "/placeholder-image.jpg"} // Remplacez "/placeholder-image.jpg" par le chemin de votre image de remplacement
                            alt="User"
                            className="w-24 h-24 rounded-full mb-4"
                        />
                        {/* User name */}
                        <p className="text-xl font-bold mb-2">{currentUser.name}</p>
                        {/* User email */}
                        <p className="text-gray-600">{currentUser.email}</p>
                        {/* Add other user information here */}
                    </div>
                )}
            </div>
        </Container>
    );
};

export default TripsClient;
