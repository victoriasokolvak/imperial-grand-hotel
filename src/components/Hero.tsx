import Image from 'next/image';
import { Star } from './ui/Star';

export const Hero = () => {
  const stars = new Array(5).fill(true);

  return (
    <div className="relative w-full h-[700px] md:h-[700px] lg:h-[900px]">
      <Image
        src='./Hero-mobile.png' //IMPORT
        alt='Hero Mobile'
        fill
        className="object-cover block md:hidden"
        priority={true}
        rel="preload"
      />
      <Image
        src='./Hero.png' //IMPORT
        alt='Hero'
        fill
        className="object-cover hidden md:block"
        priority={true}
        rel="preload"
      />

      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="absolute top-32 lg:top-40 w-full flex justify-center">
        <div className="max-w-[1440px] w-full px-8 md:px-[74px] xl:px-[120px]">
          <div className="flex flex-col justify-between gap-[15px] mb-4 xl:mb-6">
            <div className="border-l-[1px] h-[100px]"></div>
            <h2 className="uppercase text-[#BF9766] font-light text-[18px] lg:text-[24px] tracking-widest md:tracking-[0.25em]">
              Best place to relax & enjoy
            </h2>
          </div>

          <div className="flex flex-col">
            <h1 className="font-forum text-[44px] md:text-[60px] lg:text-[112px] mb-8 text-white font-normal leading-[1.24]">
              Perfect Place to <br /> Enjoy Your Life
            </h1>
            <div className='flex flex-col'>
              <h3 className='text-white text-[13px] xl:text-[18px] tracking-wide mb-[6px] xl:mb-3'>
                4.8 Rated Around The World
              </h3>
              <div className='flex justify-between w-[52px] xl:w-32'>
                {stars.map((_, index) => (
                  <Star key={index} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
