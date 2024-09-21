import EmptyState from "../components/EmptyState";
import ClientOnly from "../components/ClientOnly";
import MobileNavbar from "../components/MobileNavbar";
import Footer from "../components/Footer";
import Container from "../components/Container";
import Heading from "../components/Heading";
import Image from "next/image";
import React from 'react'
import EmblaCarousel from "../components/EmblaCarousel";
import { EmblaOptionsType } from 'embla-carousel'
import '../embla.css';



const Experiences = async () => {

    const OPTIONS: EmblaOptionsType = {}
    const SLIDE_COUNT = 5
    const slides = Array.from(Array(SLIDE_COUNT).keys())

    return (
        <Container>
            <h1 className="pt-6 pb-2 text-center text-2xl font-bolder" style={{ fontFamily: 'LilitaOne-Regular' }}>Les experiences avec atypikHouse</h1>
                <EmblaCarousel slides={['weekend-amoureux.jpg', 'people-relaxing.jpg', 'full-shot.jpg', 'nomad-family.jpg']} options={OPTIONS} />
                <br />
                <br />
                
                <div className="text-center my-16">
        <h1 className="text-4xl font-normal" style={{ fontFamily: 'LilitaOne-Regular' }}>Vivez une experiences inoubliables en compagnie de nos partenaires </h1>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-8">
            <div className="flex justify-center">
                <Image
                src="/images/croix-rouge.png"
                alt="Partenaire 1"
                width={150}
                height={100}
                style={{ objectFit: "contain" }}
                className="transition-all duration-300 filter grayscale-[50%] hover:grayscale-0 cursor-pointer"
                />
            </div>
            <div className="flex justify-center">
                <Image
                src="/images/netflix.png"
                alt="Partenaire 2"
                width={150}
                height={100}
                style={{ objectFit: "contain" }}
                className="transition-all duration-300 filter grayscale-[50%] hover:grayscale-0 cursor-pointer"
                />
            </div>
            <div className="flex justify-center">
            <Image
                src="/images/spotify.png"
                alt="Partenaire 3"
                width={150}
                height={100}
                style={{ objectFit: "contain" }}
                className="transition-all duration-300 filter grayscale-[50%] hover:grayscale-0 cursor-pointer"
            />
            </div>
            <div className="flex justify-center">
                <Image
                    src="/images/ikea.png"
                    alt="Partenaire 4"
                    width={150}
                    height={100}
                    style={{ objectFit: "contain" }}
                    className="transition-all duration-300 filter grayscale-[50%] hover:grayscale-0 cursor-pointer"
                />
            </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-4">
            <div className="flex justify-center">
                <Image
                src="/images/genshin.png"
                alt="Partenaire 1"
                width={150}
                height={100}
                style={{ objectFit: "contain" }}
                className="transition-all duration-300 filter grayscale-[50%] hover:grayscale-0 cursor-pointer"
                />
            </div>
            <div className="flex justify-center">
                <Image
                src="/images/myconcierge.png"
                alt="Partenaire 2"
                width={150}
                height={100}
                style={{ objectFit: "contain" }}
                className="transition-all duration-300 filter grayscale-[50%] hover:grayscale-0 cursor-pointer"
                />
            </div>
            <div className="flex justify-center">
            <Image
                src="/images/oreo.png"
                alt="Partenaire 3"
                width={150}
                height={100}
                style={{ objectFit: "contain" }}
                className="transition-all duration-300 filter grayscale-[50%] hover:grayscale-0 cursor-pointer"
            />
            </div>
            <div className="flex justify-center">
                <Image
                    src="/images/emma.jpg"
                    alt="Partenaire 4"
                    width={150}
                    height={100}
                    style={{ objectFit: "contain" }}
                    className="transition-all duration-300 filter grayscale-[50%] hover:grayscale-0 cursor-pointer"
                />
            </div>
            </div>
        </div>

                
            <Footer />
            <MobileNavbar />
        </Container>
    )
};

export default Experiences;
