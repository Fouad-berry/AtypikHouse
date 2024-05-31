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
                title="Mentions légales"
            /> 
            <p style={{ fontWeight: "bold" }}>
            Editeur du site web : <span style={{ fontWeight: "normal" }}>Dev Beast, private unlimited web agency</span>
            </p><br />
            <p style={{ fontWeight: "bold" }}>
            Siège social : <span style={{ fontWeight: "normal" }}>2 All. des Arcades, 60350 Pierrefonds</span>
            </p><br />
            <p style={{ fontWeight: "bold" }}>
            Numéro de TVA intracommunautaire : <span style={{ fontWeight: "normal" }}>FR 11 123456789</span>
            </p><br />
            <p style={{ fontWeight: "bold" }}>
            Numéro d&apos;immatriculation : <span style={{ fontWeight: "normal" }}>RCS de Pierrefonds sous le numéro 174.258.369</span>
            </p><br />
            <p style={{ fontWeight: "bold" }}>
            Capital social : <span style={{ fontWeight: "normal" }}>10000 euros</span>
            </p><br />
            <p style={{ fontWeight: "bold" }}>
            Conseil d&apos;administation : <span style={{ fontWeight: "normal" }}>Nassim Haddad , Grace Mabelle</span>
            </p><br />
            <p style={{ fontWeight: "bold" }}> Nous contactez</p><br />
            <p style={{ fontWeight: "bold" }}>
            Adresse Email : <span style={{ fontWeight: "normal" }}>nassim.haddad@gmail.com</span>
            </p><br />
            <p style={{ fontWeight: "bold" }}>
            Assistance AtypikHouse : <span style={{ fontWeight: "normal" }}>christophe.m@gmail.com</span>
            </p><br />
            <p>
            AtypikHouse Ireland UC agit en qualité d’intermédiaire technique et n’intervient pas dans le choix des contenus mis en ligne par ses utilisateurs. Plus d’informations dans nos Conditions de service
            </p><br />
            <p style={{ fontWeight: "bold" }}>
            Prestataire technique(hébergeur du site web) : <span style={{ fontWeight: "normal" }}>AtypikHouse utilise les services cloud de Vercel pour héberger son site web. Le siège social d’Amazon Web Services est situé à l&apos;adresse suivante : San Francisco, États-Unis</span>
            </p><br />
            <p style={{ fontWeight: "bold" }}>
            Propriété intelectuelle: <span style={{ fontWeight: "normal" }}>L&apos;ensemble du site, y compris sa structure et son contenu (textes, tableaux, graphiques,
            images, photographies, vidéos, sons, bases de données, applications et logiciels), est protégé par le droit d&apos;auteur et de propriété intellectuelle de AtypikHouse ou de ses fournisseurs et prestataires.
            Toute représentation, reproduction, adaptation, modification ou exploitation non autorisée
            est interdite et susceptible de constituer une contrefaçon au sens des articles L. 335-2 et suivants du Code de la propriété intellectuelle.
            </span>
            </p><br />
            <p style={{ fontWeight: "bold" }}>
            Données personnelles : <span style={{ fontWeight: "normal" }}>AtypikHouse s&apos;engage à mettre en œuvre un traitement de vos données personnelles res-
            pectueux de votre vie privée et conforme à la législation française et européenne en vigueur.
            </span>
            </p><br />
            <Footer />
            <MobileNavbar />
        </Container>

    )
};

export default ConditionsGenerales;