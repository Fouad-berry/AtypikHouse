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
                
            <div className="flex flex-col md:flex-row items-center my-16 bg-gray-200 py-8">
                <div className="md:w-1/2 px-4">
                <Image
                    src="/images/madeinfrance.jpg"
                    alt="Image à gauche"
                    width={800}
                    height={350}
                    style={{ objectFit: "cover" }}
                />
                </div>
                <div className="md:w-1/2 md:pl-8 mt-8 md:mt-0 px-4">
                <h2 className="text-3xl font-bold text-center mb-4" style={{ fontFamily: 'LilitaOne-Regular' }}>
                NOTRE HISTOIRE, VOS AVENTURES</h2>
                <p className="text-xl">
                    <br />
                    Chez AtypikHouse, nous ne nous contentons pas de proposer des hébergements atypiques, nous créons des expériences inoubliables. Basée dans le Sud de la France, notre plateforme offre à ses utilisateurs l'opportunité de vivre des moments uniques, que ce soit dans une cabane perchée, une yourte, ou encore une maison flottante. <br />
                    <br />
                    Chaque séjour est une aventure, un voyage hors du temps, pensé pour ravir les amoureux de la nature, les familles en quête de découverte, et les voyageurs avides d'originalité. Nous sommes fiers de collaborer avec des hébergeurs passionnés qui partagent cette vision. Ensemble, nous offrons bien plus qu'un simple hébergement, nous créons des souvenirs impérissables. <br />
                </p>
                </div>
            </div>


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
