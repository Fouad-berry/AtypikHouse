'use client';
import React from "react";
import EmptyState from "../components/EmptyState";
import ClientOnly from "../components/ClientOnly";
import MobileNavbar from "../components/MobileNavbar";
import Footer from "../components/Footer";
import Container from "../components/Container";
import Heading from "../components/Heading";
import Image from "next/image";
import Button from "../components/Button";
import { useRouter } from "next/navigation";

const QuiSommesNous = () => {
    const router = useRouter();
  return (
    <Container>
      {/* First Section */}
      <div className="relative w-full h-[500px]">
        <Image
          src="/images/banner.jpg"
          alt="Background Image"
          fill
          style={{ objectFit: "cover" }}
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white">
          <h1 className="text-4xl font-bold" style={{ fontFamily: 'LilitaOne-Regular', fontWeight:'bold' }}>
            REJOIGNEZ L&apos;AVENTURE ET BOOSTEZ VOS VENTES !
          </h1>
          <p className="text-xl mt-2" style={{ fontFamily: 'LilitaOne-Regular' }}>
            Intégrez la future 1ère place de marché exclusivement dédiée à la commercialisation d&apos;hébergements insolites !
          </p>
            <Button
                className="mt-4 px-6 py-2 mx-auto w-auto w-1/4"
                label="C'EST PARTI"
                onClick={() => router.push('/')}
            />
        </div>
      </div>

      {/* Second Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-16">
        <div className="flex flex-col items-center justify-center text-center">
          <Image
            src="/images/marche-cible.png"
            alt="Image 1"
            width={150}
            height={150}
            style={{ objectFit: "contain" }}
          />
          <p className="mt-4 text-xl text-neutral-500" style={{ fontFamily: 'LilitaOne-Regular'}}>Place de marché</p>
          <p className="mt-4 text-sm text-neutral-500" >Modèle à la performance</p>
        </div>
        <div className="flex flex-col items-center justify-center text-center">
          <Image
            src="/images/page-daccueil.png"
            alt="Image 2"
            width={150}
            height={150}
            style={{ objectFit: "contain" }}
          />
          <p className="mt-4 text-xl text-neutral-500" style={{ fontFamily: 'LilitaOne-Regular' }}>Modèle à la performance</p>
          <p className="mt-4 text-sm text-neutral-500" >Modèle à la performance</p>

        </div>
        <div className="flex flex-col items-center justify-center text-center">
          <Image
            src="/images/sans-contact.png"
            alt="Image 3"
            width={150}
            height={150}
            style={{ objectFit: "contain" }}
          />
          <p className="mt-4 text-xl text-neutral-500" style={{ fontFamily: 'LilitaOne-Regular' }}>Réservation instantannée</p>
          <p className="mt-4 text-sm text-neutral-500" >Modèle à la performance</p>
        </div>
      </div>

      {/* Third Section */}
      <div className="flex flex-col md:flex-row items-center my-16 bg-gray-200 py-8">
        <div className="md:w-1/2">
          <Image
            src="/images/narutouzu.jpg"
            alt="Image à gauche"
            width={500}
            height={300}
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="md:w-1/2 md:pl-8 mt-8 md:mt-0">
          <p>
            Ceci est un paragraphe à droite de l&apos;image. Vous pouvez ajouter autant de texte que vous
            le souhaitez pour décrire cette section.
          </p>
        </div>
      </div>

      {/* Fourth Section */}
      <div className="text-center my-16">
        <h1 className="text-4xl font-normal" style={{ fontFamily: 'LilitaOne-Regular' }}>Ils parlent de nous</h1>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-8">
          <div className="flex justify-center">
            <Image
              src="/images/tf1.jpg"
              alt="Partenaire 1"
              width={150}
              height={100}
              style={{ objectFit: "contain" }}
              className="transition-all duration-300 filter grayscale-[50%] hover:grayscale-0 cursor-pointer"
            />
          </div>
          <div className="flex justify-center">
            <Image
              src="/images/logo-télématin.jpg"
              alt="Partenaire 2"
              width={150}
              height={100}
              style={{ objectFit: "contain" }}
              className="transition-all duration-300 filter grayscale-[50%] hover:grayscale-0 cursor-pointer"
            />
          </div>
          <div className="flex justify-center">
            <Image
              src="/images/M6.jpg"
              alt="Partenaire 3"
              width={150}
              height={100}
              style={{ objectFit: "contain" }}
              className="transition-all duration-300 filter grayscale-[50%] hover:grayscale-0 cursor-pointer"
            />
          </div>
          <div className="flex justify-center">
            <Image
              src="/images/france3.png"
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
  );
};

export default QuiSommesNous;
