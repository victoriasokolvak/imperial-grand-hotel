"use client";

import Image from "next/image";
import { BurgerMenuIcon } from "./ui/BurgerMenuIcon";
import { navigationItems } from "@/constants/navItems";
import { BurgerMenu } from "./BurgerMenu";
import { useState } from "react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className="flex justify-between items-center absolute top-0 w-full z-10 px-8 pt-9 md:px-[74px] xl:px-[120px] max-w-[1440px] mx-auto">
        <div className="w-[160px] h-[40px] lg:w-[216px] lg:h-[58px] relative">
          <Image 
            src='./Logo.svg'
            alt="Logo"
            fill
            className="object-contain"
          />
        </div>

        <nav className="hidden lg:flex">
          <ul className="flex gap-[60px]">
            {navigationItems.map((item) => (
              <li key={item.name} className="text-white uppercase hover:underline">
                <a href={item.href}>{item.name}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="lg:hidden" onClick={toggleMenu}>
          <BurgerMenuIcon />
        </div>
      </header>

      <div
        className={`fixed top-0 ${
          isMenuOpen ? "left-0" : "-left-[110%]"
        } w-screen h-screen transition-all duration-300 ease-in-out z-10`}>
        <BurgerMenu onClose={closeMenu} />
      </div>
    </>
  );
};
