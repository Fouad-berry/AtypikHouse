"use client";

import React, { useState, useEffect } from 'react';
import Container from "../Container";
import Categories from "./Categories";
import Logo from "./Logo";
import Search from "./Search";
import UserMenu from "./UserMenu";
import { SafeUser } from "@/app/types";
import Warning from '../warning';

interface NavBarProps {
  currentUser?: SafeUser | null;
}

const NavBar: React.FC<NavBarProps> = ({ currentUser }) => {
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
            md:gap-0
          ">
            <Logo />
            <Search />
            <UserMenu currentUser={currentUser} />
          </div>
        </Container>
      </div>

      <Categories />
    </div>
  );
};

export default NavBar;
