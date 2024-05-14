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
            toast.error("Quelque chose s`est mal passé");
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
            </div>
            <hr />
                <div>
                    <h2 className="text-xl font-semibold text-normal-700">Conditions d&apos;annulation</h2> <br></br>
                    <p>
                    Annulation gratuite pendant 48 heures. Si vous annulez avant le 25 mai, <p></p> 
                    vous aurez droit à un remboursement partiel. En savoir plus                    </p>
                </div>

            <hr />
                <div>
                    <h2 className="text-xl font-semibold text-normal-700">Règles de base</h2> <br></br>
                    <p>
                        Nous demandons à tous les voyageurs de se souvenir de quelques règles simples <p></p> 
                        qui contribueront à rendre leur séjour agréable, pour eux comme pour les hôtes.
                    <li>Respectez le règlement intérieur.</li>
                    <li>Traitez le logement de votre hôte comme si c&apos;était le vôtre.</li>
                    </p>
                </div>
            <hr />
            <PayPalButton totalPrice={totalPrice} onSuccess={onFinal} />
{/*             <hr />
            <div className="text-lg font-bold text-normal-300">
            </div>
 */}        </div>
        </Container>
    );
};

export default RecapClient;