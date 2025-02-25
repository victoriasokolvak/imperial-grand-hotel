import Image from "next/image";
import { PlayButton } from "./ui/PlayButton";
import { Arrow } from "./ui/Arrow";

export const AboutSection = () => {
  return (
    <section id="about" className="flex bg-white justify-center items-center w-full mt-[460px] md:mt-[150px] xl:mt-[180px] pb-[140px] md:pb-[150px] lg:pb-36">
      <div className="flex flex-col md:flex-row md:justify-between md:gap-10 lg:gap-[120px] w-full max-w-[1440px] px-8 md:px-[74px] xl:px-[120px]">
        <div className="md:flex-1">
          <div className="relative h-[290px] md:w-full md:h-full">
            <Image 
              src="./About-section.png"
              alt="Reception desk"
              sizes="(max-height: 640px) 290px, (min-width: 641px) 100%, (min-height: 641) 100%"
              fill
              className="object-cover"
            />
            <div className="absolute -bottom-6 right-[42px] md:right-0 md:translate-x-1/2 md:top-1/2 md:-translate-y-1/2 bg-accent w-[50px] h-[50px] lg:w-[100px] lg:h-[100px]">
              <PlayButton />
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-1 mt-[30px] md:mt-0">
          <div className="flex flex-col justify-between gap-[15px] mb-1 xl:mb-6">
            <div className="border-l-[1px] border-accent h-[105px]"></div>
            <h2 className="uppercase text-accent font-light text-lg lg:text-2xl tracking-[0.2em] md:tracking-[0.25em]">
              Discover our hotel
            </h2>
          </div>

          <div className="flex flex-col">
            <h1 className="font-forum text-[35px] md:text-[40px] lg:text-[64px] mb-4 lg:mb-8 text-dark-grey font-normal leading-[1.26]">
              Enjoy A Luxury Experience
            </h1>
            <p className="text-[13px] lg:text-lg text-grey mb-[30px] lg:mb-[60px]">
              Welcome to our hotel, where comfort meets elegance.
              Situated in the heart of the city, our luxury accommodations
              offer the perfect blend of modern amenities and classic charm.
              Let us make your stay a truly memorable one.
            </p>
            <div className="flex items-center">
              <a href="#services">
                <button
                  className="flex justify-between py-[10px] lg:py-[14px] px-[6px] border-y-[1px]
                          border-accent items-center gap-[20px] text-accent text-[13px] xl:text-base
                          italic leading-none transition-transform duration-300 hover:translate-x-1"
                >
                  Discover More
                  <div className="w-[6px] h-3">
                    <Arrow />
                  </div>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
