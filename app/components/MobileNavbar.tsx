'use client';

import React, { useCallback, useState } from 'react';
import { FaHome, FaPlane, FaUser } from 'react-icons/fa'; // Importez les icônes que vous souhaitez utiliser
import { FiMenu } from 'react-icons/fi'; // Icone du menu hamburger
import { GoSearch } from "react-icons/go";
import { BsHeart, BsSearch } from "react-icons/bs";
import { useRouter } from "next/navigation";
import useSearchModal from '../hooks/useSearchModal';

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
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 flex justify-around items-center sm:hidden">
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
        <a href="#" className="flex flex-col items-center text-gray-600 hover:text-yellow-500 cursor-pointer">
          <FaPlane size={25} />
          <span className="text-xs">Voyages</span>
        </a>
      </div>


      {/* Icône Profil avec menu déroulant */}
      <div className="relative">
        <FiMenu size={24} onClick={() => setIsOpen(!isOpen)} />
        {isOpen && (
          <div className="absolute bottom-full left-0 bg-white border border-gray-200 mt-2 rounded shadow-lg">
            <div className="flex flex-col p-2">
              {/* Liens dans le menu déroulant */}
              <div>
                <a href="#" className="flex items-center space-x-2 py-1 text-gray-600 hover:text-yellow-500">
                  <FaHome />
                  <span>Accueil</span>
                </a>
              </div>
              <div>
                <a href="#" className="flex items-center space-x-2 py-1 text-gray-600 hover:text-yellow-500">
                  <BsSearch />
                  <span>Recherche</span>
                </a>
              </div>
              <div>
                <a href="#" className="flex items-center space-x-2 py-1 text-gray-600 hover:text-yellow-500">
                  <FaUser />
                  <span>Profil</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MobileNavbar;
