"use client";

import { navigationItems } from "@/constants/navItems";
import Image from "next/image";
import { Arrow } from "./ui/Arrow";
import { socialIcons } from "@/constants/socialIcons";
import { useState } from "react";

export const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setEmail('');
  };

  return (
    <footer className="flex md:justify-center items-center w-full bg-[#282828] py-[70px] lg:py-[100px]">
      <div className="flex flex-col w-full max-w-[1440px] px-8 md:px-[74px] xl:px-[120px]">
        <div className="flex flex-col md:flex-row justify-between gap-[30px] w-[280px] md:w-full mb-[40px] xl:mb-[60px]">
          <div className="flex flex-col md:w-[180px] lg:w-[380px]">
            <div className="w-[160px] h-[40px] lg:w-[216px] lg:h-[58px] mb-[15px] xl:mb-8 relative">
              <Image 
                src='./Logo.svg'
                alt="Logo"
                fill
                className="object-contain"
                />
            </div>
            <p className="text-white text-[13px] xl:text-[14px]">
              A perfect blend of luxury, comfort, and exceptional service for an unforgettable stay.
            </p>
          </div>

          <div className="md:w-[112px]">
            <h1 className="uppercase text-[#BF9766] font-light text-[16px] xl:text-[18px] mb-3">
              Useful links
            </h1>
            <nav className="flex">
              <ul className="flex flex-col gap-1">
                {navigationItems.map((item) => (
                  <li key={item.name} className="text-white text-[13px] xl:text-[16px] uppercase hover:underline">
                    <a href={item.href}>{item.name}</a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="md:w-[200px] lg:w-[264px]">
            <h1 className="uppercase text-[#BF9766] font-light text-[16px] xl:text-[18px] mb-[15px]">
              Subscribe
            </h1>
            <p className="text-white text-[13px] xl:text-[14px] mb-[20px]">
              Subscribe now for exclusive offers, updates, and unforgettable experiences!
            </p>
            <form onSubmit={handleSubmit} className="flex items-center py-2">
              <input
                type="email"
                id="email"
                placeholder="Your Email Here"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="appearance-none bg-[#302F2F] placeholder:text-[#BF9766] focus:text-[#BF9766]
                          placeholder:text-[13px] xl:placeholder:text-[14px] border-none
                          text-white py-[10px] px-4 focus:outline-none w-[160px] xl:w-[224px]"
              />
              <button
                type="submit"
                className="bg-[#BF9766] hover:bg-[#a87f5c] h-[44px] px-4"
              >
                <div className="w-[7px] h-[14px]">
                  <Arrow color="#FFFFFF" />
                </div>
              </button>
            </form>
          </div>
        </div>

        <div className="flex items-center mb-[40px] xl:mb-[60px]">
          <div className="flex-1 h-[1px] bg-white"></div>
            <div className="flex justify-between gap-4 flex-3 max-w-[206px] xl:max-w-[260px] mx-10 md:mx-[60px]">
              {socialIcons.map(({ icon: Icon, name }) => (
                <div key={name} className="w-[28px] h-[28px] xl:w-10 xl:h-10 border border-white rounded-full flex justify-center items-center">
                  <Icon className="text-white w-[10px] h-[10px] xl:w-4 xl:h-4" />
                </div>
              ))}
            </div>
          <div className="flex-1 h-[1px] bg-white"></div>
        </div>

        <div className="flex flex-col justify-center items-center md:flex-row md:justify-between">
          <p className="text-white text-center text-[13px] xl:text-[14px] mb-[20px]">
            © 2025 Imperial Grand Hotel. All Rights Reserved.
          </p>
          <div className="flex justify-between gap-10 md:gap-[60px]">
            <p className="text-white text-[13px] xl:text-[14px] mb-[20px]">Privacy Policy</p>
            <p className="text-white text-[13px] xl:text-[14px] mb-[20px]">Terms of Use</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
