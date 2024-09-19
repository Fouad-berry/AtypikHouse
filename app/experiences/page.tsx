import EmptyState from "../components/EmptyState";
import ClientOnly from "../components/ClientOnly";
import MobileNavbar from "../components/MobileNavbar";
import Footer from "../components/Footer";
import Container from "../components/Container";
import Heading from "../components/Heading";
import Image from "next/image";
import React from 'react'
import ReactDOM from 'react-dom/client'
import EmblaCarousel from "../components/EmblaCarousel";
import { EmblaOptionsType } from 'embla-carousel'
import '../embla.css';



const Experiences = async () => {

    const OPTIONS: EmblaOptionsType = {}
    const SLIDE_COUNT = 5
    const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

    return (
        <>
{/*             <Heading
                title="Politique de confidentialité"
            />
 */}
    <h1 className="bonjour">Bonjour</h1>
                <EmblaCarousel slides={SLIDES} options={OPTIONS} />

            <Footer />
            <MobileNavbar />
        </>
    )
};

export default Experiences;
