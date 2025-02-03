import Image from 'next/image';

const Hero = () => {
  return (
    <div className="relative w-full h-[80vh] md:h-[90vh] lg:h-screen">
      <Image
        src='./Hero-mobile.png'
        alt='Hero Mobile'
        fill
        className="object-cover block md:hidden"
      />

      <Image
        src='./Hero.png'
        alt='Hero'
        fill
        className="object-cover hidden md:block"
      />

      <div className="absolute inset-0 bg-black opacity-50"></div>
    </div>
  );
};

export default Hero;