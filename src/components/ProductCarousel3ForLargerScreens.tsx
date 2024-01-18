// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import {
  largerSectionData1,
  largerSectionData2,
} from "../models/LargerSectionData";
import LargerScreenSection1Type2 from "./LargerScreenSection1Type2";
import ar7id from "ar7id";

let ProductCarousel3ForLargerScreens = () => {
  const onAutoplayTimeLeft = () => {
    // progressCircle.current.style.setProperty("--progress", 1 - progress);
    // progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <div className="hidden lg:block  bg-white m-[1vw] p-[1vw] pb-[1.2vw]">
      <div className="text-[1.2vw] font-bold mb-[0.8vw]">
        Deals on electronics, gadgets & accessories
      </div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper "
      >
        {Array.from({ length: 6 }).map(() => {
          return (
            <SwiperSlide key={ar7id()}>
              <div className=" flex justify-between">
                {Array.from({ length: 6 }).map(() => {
                  return (
                    <div className="w-[15%]" key={ar7id()}>
                      <div>
                        <img
                          src="/images/products/led_tv.jpg"
                          className="w-full"
                        />
                      </div>
                      <div className=" leading-[1.5vw]">
                        <span className=" bg-red-800 text-[0.87vw] p-[0.2vw] pr-[0.5vw] pl-[0.5vw] mr-[0.3vw] text-white">
                          49% off
                        </span>
                        <span className=" text-red-800 font-medium text-[0.87vw]">
                          Deal
                        </span>
                      </div>
                      <div>
                        <sup className="text-[0.7vw]">$</sup>
                        <span className=" text-[1.1vw] mr-[0.5vw] ">74.95</span>
                        <span className="text-[0.83vw] opacity-70 font-medium">
                          List Price:{" "}
                          <span className=" line-through">$54.99</span>
                        </span>
                      </div>
                      <div className="font-medium text-[0.85vw]">
                        Acer 21.5 inch Full HD (1920*1080) l...
                      </div>
                    </div>
                  );
                })}
              </div>
            </SwiperSlide>
          );
        })}

        {/* <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
        <div className="autoplay-progress" slot="container-end"></div>
      </Swiper>
    </div>
  );
};

export default ProductCarousel3ForLargerScreens;
