import Image from 'next/image';
import { Star } from './ui/Star';

export const Hero = () => {
  const stars = new Array(5).fill(true);

  return (
    <div id='home' className="relative w-full h-[700px] md:h-[700px] lg:h-[900px]">
      <Image
        src='./Hero-mobile.png'
        alt='Hero Mobile'
        fill
        sizes="100vw"
        className="object-cover block md:hidden"
        priority
      />
      <Image
        src='./Hero.png'
        alt='Hero'
        fill
        sizes="100vw"
        className="object-cover hidden md:block"
        priority
      />

      <div className="absolute inset-0 bg-black opacity-50"></div>

      <div className="absolute top-32 lg:top-40 w-full flex justify-center">
        <div className="max-w-[1440px] w-full px-8 md:px-[74px] xl:px-[120px]">
          <div className="flex flex-col justify-between gap-[15px] mb-4 xl:mb-6">
            <div className="border-l-[1px] h-[100px]"></div>
            <h2 className="uppercase text-accent font-light text-lg lg:text-2xl tracking-widest md:tracking-[0.25em]">
              Best place to relax & enjoy
            </h2>
          </div>

          <div className="flex flex-col">
            <h1 className="font-forum text-[44px] md:text-6xl lg:text-[112px] mb-8 text-white font-normal leading-[1.24]">
              Perfect Place to <br /> Enjoy Your Life
            </h1>
            <div className='flex flex-col'>
              <h3 className='text-white text-[13px] xl:text-lg tracking-wide mb-[6px] xl:mb-3'>
                4.8 Rated Around The World
              </h3>
              <div className='flex justify-between w-[52px] xl:w-32 gap-[3px] xl:gap-[6px]'>
                {stars.map((_, index) => (
                  <div key={index} className='w-2 h-2 xl:w-5 xl:h-5'>
                    <Star />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
