"use client";

import { Slider } from "./Slider";

export const RoomChoicesSection = () => {
  return (
    <section className="flex justify-center items-center w-full bg-[#282828] pt-[70px] pb-[130px] md:pt-[80px] md:pb-[130px] lg:py-[70px] lg:pb-[130px]">
      <div className="flex flex-col w-full max-w-[1440px] px-8 md:px-[74px] xl:px-[120px]">
        <div className="flex flex-col items-center mb-[14px] md:mb-[30px] lg:mb-[60px]">
            <div className="border-l-[1px] border-white h-[105px] mb-8 md:mb-4 lg:mb-8"></div>
            <h2 className="uppercase text-[#BF9766] font-light text-[18px] lg:text-[24px] mb-1 tracking-[0.2em] md:tracking-[0.25em]">
              Our room choices
            </h2>
            <h1 className="text-center font-forum text-[35px] md:text-[40px] lg:text-[64px] text-white font-normal leading-[1.26]">
              Luxury Rooms & Suites
            </h1>
        </div>

        <Slider />
      </div>
    </section>
  );
};
