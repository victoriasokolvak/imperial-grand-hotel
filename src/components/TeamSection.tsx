import { employees } from "@/constants/employeesData";
import Image from "next/image";

export const TeamSection = () => {
  return (
    <section id="team" className="flex justify-center items-center w-full bg-[#282828] py-[70px] lg:py-[100px]">
      <div className="flex flex-col justify-center items-center w-full max-w-[1440px] px-8 md:px-[74px] xl:px-[120px]">
        <div className="flex flex-col items-center mb-[14px] md:mb-[30px] lg:mb-[60px]">
          <div className="border-l-[1px] border-white h-[105px] mb-8 md:mb-4 lg:mb-8"></div>
          <h2 className="uppercase text-[#BF9766] font-light text-[18px] lg:text-[24px] mb-1 tracking-[0.2em] md:tracking-[0.25em]">
            Meet our team
          </h2>
          <h1 className="text-center font-forum text-[35px] md:text-[40px] lg:text-[64px] text-white font-normal leading-[1.26]">
            Dedicated Experts
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 w-[300px] md:w-[600px] xl:w-[1200px]">
          {employees.map((employee) => (
            <div
              key={employee.name}
              className="w-[300px] h-auto relative group overflow-hidden"
            >
              <Image
                src={employee.src}
                alt={employee.name}
                width={300}
                height={385}
                placeholder="blur"
                style={{ width: "auto", height: "auto" }}
                className="object-cover opacity-60 hover:opacity-100"
              />
              <div
                className="flex justify-between items-center gap-[30px]
                          w-[300px] h-[120px] bg-[#BF9766] px-[30px]
                          absolute bottom-0 opacity-0 group-hover:opacity-100
                          active:opacity-100 active:translate-y-0 transition-all
                          duration-500 transform translate-y-full
                          group-hover:translate-y-0"
              >
                <div className="h-[1px] bg-white w-full"></div>
                <div className="text-center text-nowrap">
                  <h1 className="font-forum text-[24px] text-white mb-2">{employee.name}</h1>
                  <h2 className="text-[14px] text-white">{employee.position}</h2>
                </div>
                <div className="h-[1px] bg-white w-full"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
