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
    const slides = Array.from(Array(SLIDE_COUNT).keys())

    return (
        <>
            <h1 className="pt-6 pb-2 text-center text-xl font-bolder">Les experiences avec atypikHouse</h1>
                <EmblaCarousel slides={['bg-lg.jpg', 'bg-lg.jpg', 'bg-lg.jpg']} options={OPTIONS} />

            <Footer />
            <MobileNavbar />
        </>
    )
};

export default Experiences;
