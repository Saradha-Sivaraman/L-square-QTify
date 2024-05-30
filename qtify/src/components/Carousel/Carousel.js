import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import CarouselLeftNavigation from "./CarouselLeftNavigation/CarouselLeft";
import CarouselRightNavigation from "./CarouselRightNavigation/CarouselRightNavigation";


export default function Carousel({ data, renderComponent }) {
  console.log(CarouselLeftNavigation);
  return (
    <Swiper
      spaceBetween={40}
      slidesPerView={"auto"}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
       <CarouselLeftNavigation />  

      {data.map((item) => (
        <SwiperSlide>{renderComponent(item)}</SwiperSlide>
      ))}
      <CarouselRightNavigation /> 
    </Swiper>
  );
}