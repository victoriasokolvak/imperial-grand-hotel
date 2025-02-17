"use client";

import { ReviewsSlider } from "./ReviewsSlider";
import { Star } from "./ui/Star";

export const ReviewsSection = () => {
  const stars = new Array(5).fill(true);

  return (
    <section className="flex justify-center items-center w-full py-[140px] md:py-[150px] lg:py-[180px]">
      <div className="flex flex-col w-full max-w-[1440px] px-8 md:px-[74px] xl:px-[120px]">
        <div className="flex flex-col items-center mb-[15px] lg:mb-[32px]">
          <div className="border-l-[1px] border-[#BF9766] h-[105px] mb-8 md:mb-4 lg:mb-8"></div>
          <h2 className="uppercase text-[#BF9766] text-center font-light text-[18px] lg:text-[24px] mb-1 tracking-[0.2em] md:tracking-[0.25em]">
            Our customers&apos; reviews
          </h2>
          <h1 className="text-center font-forum text-[#171717] text-[35px] md:text-[40px] lg:text-[64px] font-normal leading-[1.26] mb-1">
            What Our Clients Say
          </h1>
          <div className='flex justify-between w-[89px] lg:w-[173px] gap-1 xl:gap-2'>
            {stars.map((_, index) => (
              <div key={index} className='w-[15px] h-[15px] lg:w-[29px] lg:h-[29px]'>
                <Star />
              </div>
            ))}
          </div>
        </div>

        <ReviewsSlider />
      </div>
    </section>
  );
};