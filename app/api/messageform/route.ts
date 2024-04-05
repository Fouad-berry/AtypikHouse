import { NextResponse } from "next/server";
import prisma from "@/app/libs/prismadb";
import getCurrentUser from "@/app/actions/getCurrentUser";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
    try {
        // Récupérer l'utilisateur actuel
        const currentUser = await getCurrentUser();

        // Vérifier si l'utilisateur est authentifié
        if (!currentUser) {
            return NextResponse.error();
        }

        // Récupérer le corps de la requête
        const body = await request.json();

        // Extraire les données du corps de la requête
        const { ownerId, message } = body;

        // Vérifier si toutes les données nécessaires sont présentes
        if (!ownerId || !message) {
            return NextResponse.error();
        }

        // Récupérer l'utilisateur propriétaire de la location depuis la base de données
        const owner = await prisma.user.findUnique({
            where: {
                id: ownerId,
            },
        });

        // Vérifier si l'utilisateur propriétaire de la location existe et s'il a une adresse e-mail valide
        if (!owner || !owner.email) {
            return NextResponse.error();
        }

        if (!currentUser.email) {
            console.error("L'e-mail de l'utilisateur n'est pas défini.");
            return NextResponse.error();
        }

        // Configuration du transporteur Nodemailer (SMTP)
        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com", // Serveur SMTP Gmail
            port: 587,
            secure: false, // true pour le port 465, false pour les autres ports
            auth: {
                user: "fidriss96@gmail.com", // Votre adresse e-mail Gmail
                pass: "wxjb ocss qzhh iumq", // Mot de passe de votre adresse e-mail Gmail
            },
        });

        // Envoyer l'e-mail au propriétaire de la location
        await transporter.sendMail({
            from: currentUser.email, // Utiliser l'e-mail de l'utilisateur connecté comme expéditeur
            to: owner.email, // Adresse e-mail du propriétaire de la location
            subject: "Nouveau message pour votre location", // Sujet de l'e-mail
            text: message, 
            });

        // Répondre avec un succès
        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Error sending message:', error);
        return NextResponse.error();
    }
}
