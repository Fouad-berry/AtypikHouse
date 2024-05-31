import EmptyState from "../components/EmptyState";
import ClientOnly from "../components/ClientOnly";

import MobileNavbar from "../components/MobileNavbar";
import Footer from "../components/Footer";
import Container from "../components/Container";
import Heading from "../components/Heading";

const  ConditionsGenerales = async () => {

    return (
        <Container>
            <Heading
                title="Politique de confidentialité"
            /> 
            <p style={{ fontWeight: "bold" }}>
            <span style={{ fontWeight: "normal" }}>Chez AtypikHouse , nous nous engageons à protéger et à respecter votre vie privée. Cette politique de confidentialité explique comment nous collectons, utilisons, divulguons et protégeons les informations personnelles que vous nous fournissez lorsque vous utilisez notre site web.</span>
            </p><br />
            <p>
            <strong>2. Informations que Nous Collectons</strong><br />

                Nous pouvons collecter et traiter les données suivantes vous concernant : <br />
                <strong>a. Informations Personnelles</strong><br />

                - Nom <br />
                - Adresse e-mail <br />
                - Numéro de téléphone <br />
                - Adresse postale <br />
                - Informations de paiement (cartes de crédit, coordonnées bancaires) <br />

                <strong>b. Informations de Navigation</strong><br />

                - Adresse IP <br />
                - Type de navigateur <br />
                - Pages visitées <br />
                - Temps passé sur le Site <br />
                - Données de localisation (si activée sur votre appareil) <br />

                <strong>c. Informations Fournies par des Tiers</strong> <br />

                - Données provenant des réseaux sociaux (lorsque vous vous connectez via ces plateformes) <br />
                - Informations des partenaires commerciaux <br />
            </p><br />
            <p>
            <strong>3. Utilisation de Vos Informations</strong><br />

            Nous utilisons vos informations pour :

                - Fournir et gérer les services de location d'hébergement alternatif. <br />
                - Traiter les réservations et les paiements. <br />
                - Vous envoyer des confirmations de réservation et des mises à jour. <br />
                - Améliorer notre Site et nos services. <br />
                - Vous envoyer des communications marketing, si vous avez consenti à les recevoir. <br />
                - Répondre à vos questions et fournir un support client. <br />
                - Assurer la sécurité et la prévention de la fraude. <br />
            </p><br />
            <p>
            <strong>4. Partage de Vos Informations</strong><br />

            Nous ne partageons vos informations personnelles avec des tiers que dans les circonstances suivantes : <br />

                - Avec les propriétaires ou gestionnaires des hébergements pour lesquels vous avez fait une réservation. <br />
                - Avec des prestataires de services tiers qui nous aident à exploiter notre Site et à fournir nos services (paiement, hébergement du Site, etc.). <br />
                - Si la loi l'exige ou pour répondre à une procédure judiciaire. <br />
                - Pour protéger nos droits, notre propriété et notre sécurité ainsi que ceux de nos utilisateurs ou d'autres personnes. <br />
            </p><br />
            <p>
            <strong>5. Sécurité de Vos Informations</strong><br />

            Nous mettons en œuvre des mesures de sécurité appropriées pour protéger vos informations personnelles contre l'accès non autorisé, la modification, la divulgation ou la destruction. Toutefois, aucune méthode de transmission sur Internet ou de stockage électronique n'est totalement sécurisée, et nous ne pouvons garantir une sécurité absolue.
            </p><br />
            <p>
            <strong>6. Vos Droits</strong> <br />

            Vous avez le droit de : <br />

                - Accéder à vos informations personnelles que nous détenons.<br />
                - Demander la correction de toute information personnelle inexacte.<br />
                - Demander la suppression de vos informations personnelles.<br />
                - Retirer votre consentement au traitement de vos données personnelles, lorsque le traitement est basé sur le consentement.<br />
                - Demander la portabilité de vos données.<br />
            </p><br />
            <p>
            <strong>7. Cookies</strong> <br />

Notre Site utilise des cookies pour vous distinguer des autres utilisateurs et pour améliorer votre expérience de navigation. Pour plus d'informations sur l'utilisation des cookies.
            </p> <br />
            <p>
            <strong>8. Modifications de cette Politique</strong> <br />

Nous pouvons mettre à jour cette politique de confidentialité de temps à autre. Toute modification sera publiée sur cette page, et nous vous en informerons par e-mail ou via notre Site, le cas échéant. Veuillez consulter régulièrement cette page pour prendre connaissance des éventuelles modifications.
            </p><br />
            <p>
           <strong>9. Contact</strong> <br />

            Si vous avez des questions concernant cette politique de confidentialité ou nos pratiques de confidentialité, veuillez nous contacter à :

            AtypikHouse <br />
            Adresse : 2 All. des Arcades, 60350 Pierrefonds <br />
            Numéro de téléphone : (+ 33) 0164780356 <br />
            atypik.contact@gmail.com <br />
            </p>
            <Footer />
            <MobileNavbar />
        </Container>

    )
};

export default ConditionsGenerales;