import React from "react";
import EmptyState from "../components/EmptyState";
import ClientOnly from "../components/ClientOnly";
import MobileNavbar from "../components/MobileNavbar";
import Footer from "../components/Footer";
import Container from "../components/Container";
import Heading from "../components/Heading";
import Image from "next/image"; // Assuming you're using Next.js

const QuiSommesNous = async () => {
    return (
    <Container>
      {/* First Section */}
        <div className="relative w-full h-[500px]">
            <Image
            src="/images/narutouzu.jpg" // Update with your image path
                alt="Background Image"
                fill
                style={{ objectFit: "cover" }}
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white">
                <h1 className="text-4xl font-bold">Grand Titre</h1>
                <p className="text-xl mt-2">Sous Titre</p>
                <button className="mt-4 px-6 py-2 bg-blue-500 text-white rounded">Bouton</button>
            </div>
        </div>

      {/* Second Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-16">
            <div className="text-center">
                <Image
                    src="/images/narutouzu.jpg" // Update with your image path
                    alt="Image 1"
                    width={300}
                    height={200}
                    style={{ objectFit: "contain" }}
                />
                <p className="mt-4">Texte sous l'image 1</p>
            </div>
        <div className="text-center">
            <Image
                src="/images/narutouzu.jpg" // Update with your image path
                alt="Image 2"
                width={300}
                height={200}
                style={{ objectFit: "contain" }}
            />
            <p className="mt-4">Texte sous l'image 2</p>
        </div>
        <div className="text-center">
            <Image
            src="/images/narutouzu.jpg" // Update with your image path
            alt="Image 3"
            width={300}
            height={200}
            style={{ objectFit: "contain" }}
            />
            <p className="mt-4">Texte sous l'image 3</p>
        </div>
        </div>

      {/* Third Section */}
        <div className="flex flex-col md:flex-row items-center my-16">
            <div className="md:w-1/2">
                <Image
                src="/images/narutouzu.jpg" // Update with your image path
                alt="Image à gauche"
                width={500}
                height={300}
                style={{ objectFit: "cover" }}
                />
            </div>
                <div className="md:w-1/2 md:pl-8 mt-8 md:mt-0">
                    <p>
                    Ceci est un paragraphe à droite de l'image. Vous pouvez ajouter autant de texte que vous
                    le souhaitez pour décrire cette section.
                    </p>
                </div>
        </div>

      {/* Fourth Section */}
      <div className="text-center my-16">
        <h2 className="text-3xl font-bold">Nos Partenaires</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-8">
          <div className="flex justify-center">
            <Image
                src="/images/narutouzu.jpg" // Update with your image path
                alt="Partenaire 1"
              width={150}
              height={100}
              style={{ objectFit: "contain" }}
            />
          </div>
          <div className="flex justify-center">
            <Image
            src="/images/narutouzu.jpg" // Update with your image path
            alt="Partenaire 2"
              width={150}
              height={100}
              style={{ objectFit: "contain" }}
            />
          </div>
          <div className="flex justify-center">
            <Image
            src="/images/narutouzu.jpg" // Update with your image path
            alt="Partenaire 3"
              width={150}
              height={100}
              style={{ objectFit: "contain" }}
            />
          </div>
            <div className="flex justify-center">
            <Image
            src="/images/narutouzu.jpg" // Update with your image path
            alt="Partenaire 4"
                width={150}
                height={100}
                style={{ objectFit: "contain" }}
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
