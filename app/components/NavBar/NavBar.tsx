'use client';

import { useEffect, useState } from "react";
import Container from "../Container";
import Categories from "./Categories";
import Logo from "./Logo";
import Search from "./Search";
import UserMenu from "./UserMenu";
import { SafeUser } from "@/app/types";
import Warning from "../warning";

interface NavBarProps {
    currentUser?: SafeUser | null;
}

const NavBar: React.FC<NavBarProps> = ({
    currentUser
}) => {
    console.log({ currentUser });

    const [showWarning, setShowWarning] = useState<boolean>(false);
  
    useEffect(() => {
      if (currentUser) {
        setShowWarning(true);
      }
    }, [currentUser]);
  
    const handleDismissWarning = () => {
      setShowWarning(false);
    };
  
    return (
        <div className="fixed w-full bg-white z-10 shadow-sm">
            {showWarning && <Warning onDismiss={handleDismissWarning} />}
            <div className="py-4 border-b-[1px]">
                <Container>
                    <div className="
                    flex
                    flex-row
                    items-center
                    justify-between
                    gap-3
                    ml-6">  {/* Ajout de la marge à gauche */}
                        <Logo />
                        <div className="flex flex-col items-center flex-grow">
                            <div className="text-center text-sm font-bold text-black-700 mb-2">
                            Découvrez le glamping, les cabanes, les mini-maisons, les cabanes dans les arbres, les dômes...
                            </div>
                            <Search />
                        </div>
                        <UserMenu currentUser={currentUser} />
                    </div>
                </Container>
            </div>
            <Categories />
        </div>
    );
};

export default NavBar;
