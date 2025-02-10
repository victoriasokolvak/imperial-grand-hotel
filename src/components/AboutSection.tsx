import Image from "next/image";
import { PlayButton } from "./ui/PlayButton";
import { Arrow } from "./ui/Arrow";

export const AboutSection = () => {
  return (
    <section className="flex justify-center items-center w-full mt-[460px] md:mt-[150px] xl:mt-[180px] pb-[140px] md:pb-[150px] lg:pb-[144px]">
      <div className="flex flex-col md:flex-row md:justify-between md:gap-[40px] lg:gap-[120px] w-full max-w-[1440px] px-8 md:px-[74px] xl:px-[120px]">
        <div className="md:flex-1">
        <div className="relative h-[290px] md:w-full md:h-full">
            <Image 
              src="./About-section-mobile.png" //IMPORT
              alt="Reception desk"
              fill
              className="object-cover md:hidden"
            />
            <Image 
              src="./About-section.png" //IMPORT
              alt="Reception desk"
              fill
              className="object-cover hidden md:block"
            />
            <div className="absolute -bottom-[25px] right-[42px] md:right-0 md:translate-x-1/2 md:top-1/2 md:-translate-y-1/2 bg-[#BF9766] w-[50px] h-[50px] lg:w-[100px] lg:h-[100px]">
              <PlayButton />
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-1 mt-[30px] md:mt-0">
          <div className="flex flex-col justify-between gap-[15px] mb-1 xl:mb-6">
            <div className="border-l-[1px] border-[#BF9766] h-[105px]"></div>
            <h2 className="uppercase text-[#BF9766] font-light text-[18px] lg:text-[24px] tracking-[0.2em] md:tracking-[0.25em]">
              Discover our hotel
            </h2>
          </div>

          <div className="flex flex-col">
            <h1 className="font-forum text-[35px] md:text-[40px] lg:text-[64px] mb-4 lg:mb-8 text-[#171717] font-normal leading-[1.26]">
              Enjoy A Luxury Experience
            </h1>
            <p className="text-[13px] lg:text-[18px] text-[#575656] mb-[30px] lg:mb-[60px]">
              Welcome to our hotel, where comfort meets elegance.
              Situated in the heart of the city, our luxury accommodations
              offer the perfect blend of modern amenities and classic charm.
              Let us make your stay a truly memorable one.
            </p>
            <div className="flex items-center">
              <button className="flex justify-between py-[10px] lg:py-[14px] px-[6px] border-y-[1px] border-[#BF9766] items-center gap-[20px] text-[#BF9766] text-[13px] xl:text-[16px] italic leading-none">
                Discover More
                <div className="w-[6px] h-3">
                  <Arrow />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
