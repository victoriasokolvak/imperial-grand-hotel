import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/navigation';
import { Controller, Navigation, Pagination } from 'swiper/modules';
import { useRef, useState } from "react";
import { Arrow } from "./ui/Arrow";
import { Guests } from "./Guests";
import { reviews } from "@/constants/guestsData";

export const ReviewsSlider = () => {
  const firstSwiperRef = useRef<SwiperClass | null>(null);
  const secondSwiperRef = useRef<SwiperClass | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const goToNext = () => {
    if (firstSwiperRef.current && secondSwiperRef.current) {
      firstSwiperRef.current.slideNext();
    }
    if (firstSwiperRef.current && secondSwiperRef.current) {
      secondSwiperRef.current.slideNext();
    }
  };

  const goToPrev = () => {
    if (firstSwiperRef.current && secondSwiperRef.current) {
      firstSwiperRef.current.slidePrev();
    }
    if (firstSwiperRef.current && secondSwiperRef.current) {
      secondSwiperRef.current.slidePrev();
    }
  };

  const goToSlide = (index: number) => {
    if (firstSwiperRef.current && secondSwiperRef.current) {
      firstSwiperRef.current.slideTo(index);
      secondSwiperRef.current.slideTo(index);
      setActiveIndex(index);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center w-full relative">
      <div className="w-full md:w-[464px] lg:w-[756px] h-auto mb-[23px] lg:mb-[55px]">
        <Swiper
          modules={[Navigation, Pagination, Controller]}
          spaceBetween={50}
          slidesPerView={1}
          onSwiper={(swiper) => (firstSwiperRef.current = swiper)}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          initialSlide={0}
          allowTouchMove={false}
          loop={false}
          className="w-full h-full"
        >
          {reviews.map((guest) => (
            <SwiperSlide key={guest.name}>
              <p className="text-center text-[#575656] text-[13px] lg:text-[18px]">
              <em>&quot;</em> {guest.comment}<em>&quot;</em>
              </p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="flex justify-between w-full mb-[23px] lg:mb-[55px]">
        <div className="w-[7px] h-[14px] rotate-180 cursor-pointer" onClick={goToPrev} title="Go to previous slide">
          <Arrow />
        </div>
        <div className="w-[7px] h-[14px] cursor-pointer" onClick={goToNext} title="Go to next slide">
          <Arrow />
        </div>
      </div>

      <div className="flex justify-center items-center">
        <Swiper
          modules={[Navigation, Controller]}
          spaceBetween={50}
          slidesPerView={1}
          onSwiper={(swiper) => (secondSwiperRef.current = swiper)}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          initialSlide={0}
          allowTouchMove={false}
          loop={false} 
          className="w-[164px] lg:w-[256px] rounded-full"
        >
          {reviews.map((guest) => (
            <SwiperSlide key={guest.name}>
              <Guests name={guest.name} src={guest.src}/>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="mt-[30px] md:mt-[43px] lg:mt-[60px] flex items-center gap-2 w-[80px] h-[16px]">
        {reviews.map((_, index) => (
          <button
            key={index}
            className={
              `w-2 h-2 rounded-full transition-all duration-700 ${
                activeIndex === index 
                  ? "bg-[#BF9766] w-4 h-4" 
                  : "bg-[#D9D9D9]"
              }`
            }
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};