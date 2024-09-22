'use client';

import React, { useState } from 'react';
import { BiLogoFacebookSquare } from 'react-icons/bi';
import { FaInstagramSquare } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import NewsletterModal from './Modals/NewsletterModal';

const Footer = () => {
  const router = useRouter();
  const [isNewsletterModalOpen, setIsNewsletterModalOpen] = useState(false);

  const openNewsletterModal = () => setIsNewsletterModalOpen(true);
  const closeNewsletterModal = () => setIsNewsletterModalOpen(false);

  return (
    <footer className="bg-white py-4 fixed bottom-0 left-0 right-0 hidden border-t sm:block">
      <div className="container mx-auto text-center">
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-1 flex justify-center sm:justify-center flex-wrap gap-x-1">
            <p className="mb-2 sm:mb-0 ml-4"> @ 2024 AtypikHouse, Inc.</p>
            <p
              onClick={() => router.push('/conditions-generales')}
              className="cursor-pointer hover:underline"
            >
              CUGV
            </p>
            <p
              onClick={() => router.push('/politique-de-confidentialite')}
              className="cursor-pointer hover:underline ml-2"
            >
              Politique de confidentialité
            </p>
            <p
              onClick={() => router.push('/a-propos-de-nous')}
              className="cursor-pointer hover:underline ml-2"
            >
              Infos sur l&apos;entreprise
            </p>
            <p
              onClick={() => router.push('/nous-contactez')}
              className="cursor-pointer hover:underline ml-2"
            >
              Contact
            </p>
            <p
              onClick={openNewsletterModal}
              className="cursor-pointer hover:underline ml-2"
            >
              Newsletter
            </p>
          </div>
          <div className="col-span-1 flex justify-center gap-x-4">
            <p
              onClick={() => window.open('https://www.facebook.com/people/AtypikHouse/61566390087947/', '_blank')}
              className="cursor-pointer hover:underline"
            >
              <BiLogoFacebookSquare size={25} />
            </p>
            <p
              onClick={() => window.open('https://www.instagram.com/atypikhouse2024?igsh=eWc3Nnp6NmszZ3g3&utm_source=qr', '_blank')}
              className="cursor-pointer hover:underline"
>              <FaInstagramSquare size={25} />
            </p>
          </div>
        </div>
      </div>

      <NewsletterModal isOpen={isNewsletterModalOpen} onClose={closeNewsletterModal} />
    </footer>
  );
};

export default Footer;
