'use client';

import { useEffect, useState } from "react";
import Container from "../Container";
import Categories from "./Categories";
import Logo from "./Logo";
import Search from "./Search";
import UserMenu from "./UserMenu";
import { SafeUser } from "@/app/types";
import Warning from "../warning";
import { useRouter } from "next/navigation";

interface NavBarProps {
  currentUser?: SafeUser | null;
}

const NavBar: React.FC<NavBarProps> = ({ currentUser }) => {
  const [showWarning, setShowWarning] = useState<boolean>(false);
  const router = useRouter();

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
          <div className="flex flex-row items-center justify-between gap-3 ml-6">
            <Logo />

            <div className="flex-grow flex flex-col items-center justify-center space-y-2">
              <div className="hidden md:flex items-center space-x-4">
                <div
                  className="cursor-pointer text-black-700 hover:text-yellow-500 text-[15px] font-bold"
                  onClick={() => router.push("/")}
                >
                  Logements
                </div>
                <hr className="h-6 border border-gray-300" />
                <div
                  className="cursor-pointer text-black-700 hover:text-yellow-500 text-[15px] font-bold"
                  onClick={() => router.push("/experiences")}
                >
                  Expériences
                </div>
              </div>

              <div className="w-full flex justify-center">
                <Search />
              </div>
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
