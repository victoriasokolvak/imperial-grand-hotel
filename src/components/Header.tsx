import Image from "next/image";
import BurgerMenuIcon from "./ui/BurgerMenuIcon";
import { navigationItems } from "@/constants/navItems";

const Header = () => {
  return (
    <header className="flex justify-between items-center absolute top-0 left-0 w-full z-10 px-8 pt-9 md:px-[74px] xl:px-[120px]">
      <div className="w-[160px] h-[33px] lg:w-[216px] lg:h-[58px] relative">
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

      <div className="lg:hidden">
        <BurgerMenuIcon />
      </div>
    </header>
  );
};

export default Header;
