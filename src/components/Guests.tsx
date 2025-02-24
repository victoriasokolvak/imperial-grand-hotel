import Image from "next/image";

export const Guests = ({ name, src }: { name: string; src: string }) => {
  return (
    <div className="flex items-center gap-1 lg:gap-2">
      <div className="relative w-[50px] h-[50px] lg:w-[94px] lg:h-[94px] rounded-full overflow-hidden border-[3px] border-[#BF9766]">
        <Image
          src={src}
          alt={name}
          fill
          sizes="50px"
          className="object-cover w-full h-full"
        />
      </div>
      <div>
        <h1 className="font-forum text-[#BF9766] text-[18px] lg:text-[24px]">{name}</h1>
        <h2 className="text-[#575656] text-[13px] lg:text-[14px]">Guest</h2>
      </div>
    </div>
  );
};
