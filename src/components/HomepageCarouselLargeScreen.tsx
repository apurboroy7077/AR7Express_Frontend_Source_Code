import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { largerSectionData1 } from "../models/LargerSectionData";
import LargerScreenSection1Type2 from "./LargerScreenSection1Type2";

let HomepageCarouselLargeScreen = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    // progressCircle.current.style.setProperty("--progress", 1 - progress);
    // progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper hidden lg:block"
      >
        <SwiperSlide
          className="pt-[200px] bg-cover bg-center"
          style={{
            backgroundImage: "url(/images/carousals/carousel_background_1.jpg)",
          }}
        >
          {" "}
          <LargerScreenSection1Type2 data={largerSectionData1} />
        </SwiperSlide>
        <SwiperSlide
          className="pt-[200px] bg-cover bg-center"
          style={{
            backgroundImage: "url(/images/carousals/carousel_background_2.jpg)",
          }}
        >
          {" "}
          <LargerScreenSection1Type2 data={largerSectionData1} />
        </SwiperSlide>
        <SwiperSlide
          className="pt-[200px] bg-cover bg-center"
          style={{
            backgroundImage: "url(/images/carousals/carousel_background_3.jpg)",
          }}
        >
          {" "}
          <LargerScreenSection1Type2 data={largerSectionData1} />
        </SwiperSlide>
        {/* <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
        <div className="autoplay-progress" slot="container-end"></div>
      </Swiper>
    </>
  );
};

export default HomepageCarouselLargeScreen;
