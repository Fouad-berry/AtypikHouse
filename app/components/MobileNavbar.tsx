'use client';

import React, { useCallback, useState } from 'react';
import { FaHome, FaPlane, FaUser } from 'react-icons/fa'; // Importez les icônes que vous souhaitez utiliser
import { FiMenu } from 'react-icons/fi'; // Icone du menu hamburger
import { GoSearch } from "react-icons/go";
import { BsHeart, BsPerson, BsSearch } from "react-icons/bs";
import { useRouter } from "next/navigation";
import useSearchModal from '../hooks/useSearchModal';
import { IoHomeOutline } from "react-icons/io5";

const MobileNavbar = () => {
  const router = useRouter();
  const searchModal = useSearchModal();

  const [isOpen, setIsOpen] = useState(false);

  const toogleOpen = useCallback(() =>{
      setIsOpen((value) => !value);
  }, []);

  const onSearch = useCallback(() => {
      
      searchModal.onOpen();
  }, [ searchModal]);

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 flex justify-around items-center sm:hidden pb-8">
      {/* Icône Accueil */}
      <div>
        <a onClick={onSearch} className="flex flex-col items-center text-gray-600 hover:text-yellow-500 cursor-pointer">
          <GoSearch size={25} />
          <span className="text-xs">Explorer</span>
        </a>
      </div>

      {/* Icône Recherche */}
      <div>
        <a onClick={() => router.push('/favorites')} className="flex flex-col items-center text-gray-600 hover:text-yellow-500 cursor-pointer">
          <BsHeart size={25} />
          <span className="text-xs">Favoris</span>
        </a>
      </div>

      <div>
        <a onClick={() => router.push('/trips')} className="flex flex-col items-center text-gray-600 hover:text-yellow-500 cursor-pointer">
          <FaPlane size={25} />
          <span className="text-xs">Voyages</span>
        </a>
      </div>

      <div>
        <a onClick={() => router.push('/profile')} className="flex flex-col items-center text-gray-600 hover:text-yellow-500 cursor-pointer">
          <BsPerson  size={27} />
          <span className="text-xs">Profil</span>
        </a>
      </div>

      <div>
        <a onClick={() => router.push('/')} className="flex flex-col items-center text-gray-600 hover:text-yellow-500 cursor-pointer">
          <IoHomeOutline  size={27} />
          <span className="text-xs">Accueil</span>
        </a>
      </div>

    </div>
  );
};

export default MobileNavbar;
