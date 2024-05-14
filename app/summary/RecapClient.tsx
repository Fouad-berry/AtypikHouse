'use client';

import { useRouter } from "next/navigation";

import Container from "../components/Container";
import Heading from "../components/Heading";
import { SafeListing, SafeReservation, SafeUser } from "../types";
import { useCallback, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import ListingCard from "../components/Listings/ListingCard";
import PayPalButton from "../components/PaypalButton";

interface RecapClientProps {
    reservations: SafeReservation[];
    currentUser?: SafeUser;
/*     listing: SafeListing & {
        user:SafeUser
    };
 */
}

const RecapClient: React.FC<RecapClientProps> = ({
    reservations,
/*     listing,
 */    currentUser
}) => {
    const totalPriceString = sessionStorage.getItem('totalPrice');
    const totalPrice = totalPriceString ? parseInt(totalPriceString) : 0;
    const storedStartDateString = sessionStorage.getItem('startDate');
    const storedEndDateString = sessionStorage.getItem('endDate');
    
    let storedStartDate: Date | null = null;
    let storedEndDate: Date | null = null;
    
    if (storedStartDateString) {
        storedStartDate = new Date(storedStartDateString);
    }
    
    if (storedEndDateString) {
        storedEndDate = new Date(storedEndDateString);
    }
    
    const formatDate = (date: Date | null): string => {
        if (date) {
            return date.toLocaleDateString('fr-FR', {
                day: 'numeric',
                month: 'long',
                year: 'numeric'
            });
        } else {
            return ''; // Retourne une chaîne vide si la date est nulle
        }
    };
    
    const formattedStartDate = formatDate(storedStartDate);
    const formattedEndDate = formatDate(storedEndDate);
            
    const router = useRouter();
    
    const onFinal = useCallback(async () => {
        // Récupérer l'ID de l'utilisateur actuel et l'ID du listing depuis le sessionStorage
        const userId = currentUser?.id;
/*         const listingId = listing?.id
 */
/*         const listingId = sessionStorage.getItem('listingId');
 */
        // Envoyer une requête POST à votre backend pour enregistrer le paiement
        try {
            await axios.post('/api/payment', {
                userId,
                totalPrice
            });
            toast.success('Votre payement a été accepté et votre reservation confirmé');
            router.push(`/trips`);
        } catch (error) {
            console.error("Erreur lors de l'enregistrement du paiement :", error);
            toast.error('Quelque chose s`est mal passé');
        }
    }, [currentUser, totalPrice, router]);
        
    return (
        <Container>
            <br></br>
        <div className="col-span-4 flex flex-col gap-8">
            <div className="flex flex-col gap-2">
                <div className="
                    text-xl
                    font-semibold
                    flex
                    flex-col
                    gap-2
                ">
                    <div style={{fontSize:30}}>Confirmer et Payer </div><br></br>
                    <div style={{fontSize:18, fontWeight:"bolder"}}>Recapitulatif de votre voyage </div>
                </div><br></br>
                <div className="
                    flex
                    flex-col
                    gap-4
                    font-normal
                ">
                    <div>
                        <p style={{fontWeight:"bold"}}>Durée du voyage:</p>
                            {formattedStartDate} - {formattedEndDate}
                    </div>
                    <div>
                        <p style={{fontWeight:"bold"}}>Voyageurs: </p>
                    </div>
                    <div>
                        <p style={{fontWeight:"bold"}}>Prix total:</p>
                            {totalPrice}
                    </div>
                </div>
                <PayPalButton totalPrice={totalPrice} onSuccess={onFinal} />
            </div>
            <hr />
            <hr />
            <hr />
                <div>
                    <h2 className="text-xl font-semibold text-neutral-700">Les équipements que propose ce logement</h2> <br></br>
                </div>
            <hr />
            <div className="text-lg font-light text-neutral-500">

            </div>
            <hr />
            <div className="text-lg font-bold text-normal-300">
                Ou se trouve notre logement Athipique
            </div>
        </div>
        </Container>
    );
};

export default RecapClient;