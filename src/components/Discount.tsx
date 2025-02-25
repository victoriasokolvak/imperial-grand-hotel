import Image from "next/image";
import { Arrow } from "./ui/Arrow";

export const Discount = () => {
  return (
    <div className="flex justify-center items-center w-full py-[140px] lg:py-[180px]">
      <div className="flex w-full max-w-[1440px] h-[185px] md:h-[234px] xl:h-[362px] px-8 md:px-[74px] xl:px-[120px]">
        <div className="relative w-full h-full">
          <Image
            src='./Discount.png'
            alt='Hotel'
            fill
            className="object-cover"
            />
            <div className="absolute inset-0 bg-black opacity-40"></div>
            <div className="absolute flex flex-col s:flex-row w-full h-full justify-between items-center py-4 px-8 md:px-[65px] xl:px-[100px]">
              <h1 className="font-forum text-center s:text-left text-[20px] s:text-[30px] md:text-[40px] xl:text-[64px] w-[206px] md:w-[390px] xl:w-[640px] text-white">
                Get A Luxurious Experience With 25% Off Now
              </h1>
              <div className="flex items-center justify-end">
                <a href="#booking">
                  <button className="flex justify-between lg:w-[150px] lg:justify-center py-[10px] lg:py-[14px] px-[6px] border-y-[1px] border-white items-center gap-[20px] text-white text-[13px] xl:text-[16px] italic transition-transform duration-300 hover:translate-x-1">
                    Book Now
                  <div className="w-[6px] h-3 text-white">
                    <Arrow color="#FFFFFF" />
                  </div>
                </button>
                </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
