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
    <footer id="contact" className="flex md:justify-center items-center w-full bg-dark-background py-[70px] lg:py-[100px]">
      <div className="flex flex-col w-full max-w-[1440px] px-8 md:px-[74px] xl:px-[120px]">
        <div className="flex flex-col md:flex-row justify-between gap-[30px] w-[280px] md:w-full mb-10 xl:mb-[60px]">
          <div className="flex flex-col md:w-[180px] lg:w-[380px]">
            <div className="w-40 h-10 lg:w-[216px] lg:h-[58px] mb-[15px] xl:mb-8 relative">
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
            <h1 className="uppercase text-accent font-light text-base xl:text-lg mb-3">
              Useful links
            </h1>
            <nav className="flex">
              <ul className="flex flex-col gap-1">
                {navigationItems.map((item) => (
                  <li key={item.name} className="text-white text-[13px] xl:text-base uppercase hover:underline">
                    <a href={item.href}>{item.name}</a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="md:w-[200px] lg:w-[264px]">
            <h1 className="uppercase text-accent font-light text-base xl:text-lg mb-[15px]">
              Subscribe
            </h1>
            <p className="text-white text-[13px] xl:text-[14px] mb-5">
              Subscribe now for exclusive offers, updates, and unforgettable experiences!
            </p>
            <form onSubmit={handleSubmit} className="flex items-center py-2">
              <input
                type="email"
                id="email"
                placeholder="Your Email Here"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                title="Enter your email address"
                className="appearance-none bg-dark-accent placeholder:text-accent focus:text-accent
                          placeholder:text-[13px] xl:placeholder:text-[14px] border-none
                          text-white py-[10px] px-4 focus:outline-none w-40 xl:w-56"
              />
              <button
                type="submit"
                title="Submit"
                className="bg-accent hover:bg-hover-accent h-11 px-4"
              >
                <div className="w-[7px] h-[14px]">
                  <Arrow color="#FFFFFF" />
                </div>
              </button>
            </form>
          </div>
        </div>

        <div className="flex items-center mb-10 xl:mb-[60px]">
          <div className="flex-1 h-[1px] bg-white"></div>
            <div className="flex justify-between gap-4 flex-3 max-w-[206px] xl:max-w-[260px] mx-10 md:mx-[60px]">
              {socialIcons.map(({ icon: Icon, name }) => (
                <a href="https://github.com/victoriasokolvak/imperial-grand-hotel" key={name}>
                  <div title={name} className="w-7 h-7 xl:w-10 xl:h-10 border border-white rounded-full flex justify-center items-center">
                    <Icon className="text-white w-[10px] h-[10px] xl:w-4 xl:h-4" />
                  </div>
                </a>
              ))}
            </div>
          <div className="flex-1 h-[1px] bg-white"></div>
        </div>

        <div className="flex flex-col justify-center items-center md:flex-row md:justify-between">
          <p className="text-white text-center text-[13px] xl:text-[14px] mb-5">
            © 2025 Imperial Grand Hotel. All Rights Reserved.
          </p>
          <div className="flex justify-between gap-10 md:gap-[60px]">
            <a href="https://github.com/victoriasokolvak/imperial-grand-hotel">
              <p className="text-white text-[13px] xl:text-[14px] mb-5 hover:underline">Privacy Policy</p>
            </a>
            <a href="https://github.com/victoriasokolvak/imperial-grand-hotel">
              <p className="text-white text-[13px] xl:text-[14px] mb-5 hover:underline">Terms of Use</p>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
