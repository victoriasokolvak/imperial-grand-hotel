import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/navigation';
import Image from "next/image";
import { ServiceCard } from "./ServiceCard";
import { Controller, Navigation, Pagination } from 'swiper/modules';
import { useRef, useState } from "react";
import { Arrow } from "./ui/Arrow";
import { imageDetails, roomDetails } from "@/constants/roomsSliderData";

export const Slider = () => {
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
    <div className="flex flex-col md:flex-row-reverse justify-center items-center w-full relative">
      <div className="w-[280px] h-[290px] xs:w-[380px] md:h-[400px] md:w-[268px] xl:h-[442px] xl:w-[602px]">
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
          {imageDetails.map((image) => (
            <SwiperSlide key={image.id}>
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 768px) 100vw, 768px"
                className="object-cover"
                placeholder="blur"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="-mt-8 md:-mt-0 md:-mr-8 xl:-mr-36">
        <Swiper
          modules={[Navigation, Controller]}
          spaceBetween={50}
          slidesPerView={1}
          onSwiper={(swiper) => (secondSwiperRef.current = swiper)}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          initialSlide={0}
          allowTouchMove={false}
          loop={false} 
          className="p-[30px] xl:p-[40px] max-w-[250px] xs:max-w-[350px] xl:max-w-[600px]"
        >
          {roomDetails.map((room) => (
            <SwiperSlide key={room.id}>
              <ServiceCard name={room.name} price={room.price} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="absolute top-[450px] md:top-[210px] transform -translate-y-1/2 flex justify-between w-[300px] xs:w-[400px] md:w-[660px] xl:w-[1150px]">
        <div className="w-[7px] h-[14px] rotate-180 cursor-pointer" onClick={goToPrev}>
          <Arrow />
        </div>
        <div className="w-[7px] h-[14px] cursor-pointer" onClick={goToNext}>
          <Arrow />
        </div>
      </div>

      <div className="absolute bottom-[-60px] flex items-center gap-2 w-[80px] h-[16px]">
        {imageDetails.map((_, index) => (
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
