import EmptyState from "../components/EmptyState";
import ClientOnly from "../components/ClientOnly";

import MobileNavbar from "../components/MobileNavbar";
import Footer from "../components/Footer";
import Container from "../components/Container";
import Heading from "../components/Heading";
import UnsubscribeNewsletter from "../components/UnsubscribeNewsletter";

const  SeDesabonner = async () => {

    return (
        <Container>
{/*             <Heading
                subtitle="Mentions légales"
                title="Conditions de services"
            />
 */}          

                <UnsubscribeNewsletter />

            <Footer />
            <MobileNavbar />
        </Container>

    )
};

export default SeDesabonner;