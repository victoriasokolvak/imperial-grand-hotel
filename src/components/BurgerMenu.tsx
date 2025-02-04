"use client";

import { navigationItems } from "@/constants/navItems";
import { CloseIcon } from "./ui/CloseIcon";
import Image from "next/image";
import { socialIcons } from "@/constants/socialIcons";

type BurgerMenuProps = {
  onClose: () => void;
}

export const BurgerMenu: React.FC<BurgerMenuProps> = ({ onClose }) => {
  return (
    <div className="flex flex-col bg-[#282828] w-screen h-screen">
      <div className="flex justify-between items-center px-8 py-9 md:px-[74px] bg-[#302F2F]">
        <div className="w-[160px] h-[40px] relative">
          <Image 
            src='./Logo.svg'
            alt="Logo"
            fill
            className="object-contain"
          />
        </div>
        <div onClick={onClose} >
          <CloseIcon />
        </div>
      </div>

      <nav className="flex justify-center text-center mt-28 md:mt-36">
        <ul className="flex flex-col justify-between gap-7 md:gap-10">
          {navigationItems.map((link) => (
            <li key={link.name}>
              <a href={link.href} className="text-white text-[30px] md:text-[40px] uppercase">{link.name}</a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="absolute bottom-[50px] md:bottom-[60px] left-0 right-0 flex items-center px-8 md:px-[74px]">
        <div className="w-[60%] h-[1px] bg-white"></div>
        <div className="flex justify-between gap-4 w-[70%] mx-10 md:mx-[60px]">
          {socialIcons.map(({ icon: Icon, name }) => (
            <div key={name} className="w-[28px] h-[28px] md:w-10 md:h-10 border border-white rounded-full flex justify-center items-center">
              <Icon className="text-white w-[10px] h-[10px] md:w-4 md:h-4" />
            </div>
          ))}
        </div>
        <div className="w-[60%] h-[1px] bg-white"></div>
      </div>
    </div>
  );
};
