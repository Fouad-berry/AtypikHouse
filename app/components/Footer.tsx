'use client';

import React from 'react';
import { BiLogoFacebookSquare } from 'react-icons/bi';
import { FaInstagramSquare } from 'react-icons/fa';
import { useRouter } from "next/navigation";

const Footer = () => {
  const router = useRouter();

  return (
    <footer className="bg-gray-200 py-4 fixed bottom-0 left-0 right-0 hidden sm:block">
      <div className="container mx-auto text-center">
        <div className="grid grid-cols-2 gap-4">
          {/* Colonne à gauche avec deux éléments */}
          <div className="col-span-1 flex flex-wrap justify-center sm:justify-center">
            <p className="mb-2 sm:mb-0"> @ 2024 AtypikHouse, Inc.</p>&emsp;
            <p
              onClick={() => router.push('/conditions-generales')}
              className="cursor-pointer hover:underline ml-2 sm:ml-0"
            > CUGV
            </p>&emsp;
            <p
              onClick={() => router.push('/politique-de-confidentialite')}
              className="cursor-pointer hover:underline ml-2 sm:ml-0"
            > Politique de confidentialité
            </p>&emsp;
            <p
              onClick={() => router.push('/a-propos-de-nous')}
              className="cursor-pointer hover:underline ml-2 sm:ml-0"
            > Infos sur l&apos;entreprise
            </p>&emsp;
            <p
              onClick={() => router.push('/nous-contactez')}
              className="cursor-pointer hover:underline ml-2 sm:ml-0"
            > Contact
            </p>&emsp;
          </div>
          {/* Colonne à droite avec deux éléments */}
          <div className="col-span-1 flex justify-center">
            <p
              onClick={() => router.push('/trips')}
              className="cursor-pointer hover:underline ml-2"
            > <BiLogoFacebookSquare size={25} />
            </p>&emsp;
            <p
              onClick={() => router.push('/trips')}
              className="cursor-pointer hover:underline ml-2"
            > <FaInstagramSquare size={25} />
            </p>&emsp;
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
