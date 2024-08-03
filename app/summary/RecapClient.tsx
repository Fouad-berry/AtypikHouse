'use client';

import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import Container from "../components/Container";
import Heading from "../components/Heading";
import { SafeReservation, SafeUser } from "../types";
import PayPalButton from "../components/PaypalButton";

interface RecapClientProps {
    reservations: SafeReservation[];
    currentUser?: SafeUser;
}

const RecapClient: React.FC<RecapClientProps> = ({
    reservations,
    currentUser
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

        // Envoyer une requête POST à votre backend pour enregistrer le paiement
        try {
            await axios.post('/api/payment', {
                userId,
                totalPrice
            });
            toast.success('Votre paiement a été accepté et votre réservation confirmée');
            router.push(`/trips`);
        } catch (error) {
            console.error("Erreur lors de l'enregistrement du paiement :", error);
            toast.error("Quelque chose s'est mal passé");
        }
    }, [currentUser, totalPrice, router]);
        
    return (
        <Container>
            <div className="bg-white p-8 rounded-lg shadow-lg">
                <Heading title="Voilà le recapitulatif de votre commande" subtitle="" />
                <div className="flex flex-col gap-6">
                    <div className="text-center">
                        <h2 className="text-2xl font-bold mb-4">Confirmer et Payer</h2>
                        <p className="text-lg font-semibold">Récapitulatif de votre voyage</p>
                    </div>
                    <div className="flex flex-col gap-4 p-4 bg-gray-100 rounded-lg">
                        <div>
                            <p className="font-bold text-lg">Durée du voyage:</p>
                            <p>{formattedStartDate} - {formattedEndDate}</p>
                        </div>
                        <div>
                            <p className="font-bold text-lg">Voyageurs:</p>
                            <p>{reservations.length}</p>
                        </div>
                        <div>
                            <p className="font-bold text-lg">Prix total:</p>
                            <p>{totalPrice} €</p>
                        </div>
                    </div>
                    <hr />
                    <div className="flex flex-col gap-4 p-4 bg-gray-100 rounded-lg">
                        <h2 className="text-xl font-semibold">Conditions d'annulation</h2>
                        <p>Annulation gratuite pendant 48 heures. Si vous annulez avant le 25 mai, vous aurez droit à un remboursement partiel. En savoir plus</p>
                    </div>
                    <hr />
                    <div className="flex flex-col gap-4 p-4 bg-gray-100 rounded-lg">
                        <h2 className="text-xl font-semibold">Règles de base</h2>
                        <p>Nous demandons à tous les voyageurs de se souvenir de quelques règles simples qui contribueront à rendre leur séjour agréable, pour eux comme pour les hôtes.</p>
                        <ul className="list-disc list-inside">
                            <li>Respectez le règlement intérieur.</li>
                            <li>Traitez le logement de votre hôte comme si c'était le vôtre.</li>
                        </ul>
                    </div>
                    <hr />
                    <div className="flex justify-center">
                        <PayPalButton totalPrice={totalPrice} onSuccess={onFinal} />
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default RecapClient;
