import { Arrow } from "./ui/Arrow";
import { Bathtub } from "./ui/Bathtub";
import { Bed } from "./ui/Bed";
import { Breakfast } from "./ui/Breakfast";
import { Conditioner } from "./ui/Conditioner";
import { Person } from "./ui/Person";
import { WiFi } from "./ui/WiFi";

const amenities = [
  { icon: <Person />, label: "1-2 Persons" },
  { icon: <Bathtub />, label: "Bathtub" },
  { icon: <Breakfast />, label: "Free Breakfast" },
  { icon: <Bed />, label: "King Sized Bed" },
  { icon: <WiFi />, label: "Free WiFi" },
  { icon: <Conditioner />, label: "Air Conditioner" },
];

export const ServiceCard = ({ name, price }: { name: string; price: string }) => {
  return (
    <div className="p-[30px] xl:p-[40px] bg-white max-w-[250px] xs:max-w-[350px] xl:max-w-[600px]">
      <h1 className="font-forum text-[18px] xl:text-[24px] text-[#2D2C2C] mb-2">{name}</h1>
      <p className="text-[#BF9766] text-[13px] xl:text-[14px] mb-4">${price}/Night</p>
      <div className="w-full bg-[#e0e0e0] h-[1px] mb-6"></div>

      <div className="w-full mb-[30px] xl:mb-8">
        <ul className="grid grid-cols-1 xs:grid-cols-2 xl:grid-cols-3 gap-x-4 xl:gap-x-7 gap-y-[20px] xl:gap-y-[34px]">
          {amenities.map((item, index) => (
            <li key={index} className="flex items-center gap-[10px] h-5 xl:h-6">
              <div className="h-5 xl:h-6 w-6">{item.icon}</div>
              <p className="text-[13px] xl:text-[14px] text-[#575656]">{item.label}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex items-center">
        <a href="#booking">
          <button className="flex justify-between py-[10px] lg:py-[14px] px-[6px] border-y-[1px] border-[#BF9766] items-center gap-[20px] text-[#BF9766] text-[13px] xl:text-[16px] italic transition-transform duration-300 hover:translate-x-1">
              Book Now
              <div className="w-[6px] h-3">
              <Arrow />
              </div>
          </button>
        </a>
      </div>
    </div>
  );
};
