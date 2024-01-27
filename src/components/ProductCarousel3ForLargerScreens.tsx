// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import ar7id from "ar7id";
import ProductsForProductCarousel3 from "./product/ProductsForProductCarousel3";
import { productsDataType } from "../models/ProductsData";

let ProductCarousel3ForLargerScreens = (props: { data: productsDataType }) => {
  let productsData = props.data;
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
        pagination={false}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper "
      >
        {Array.from({ length: 6 }).map(() => {
          return (
            <SwiperSlide key={ar7id()}>
              <ProductsForProductCarousel3 data={productsData} />
            </SwiperSlide>
          );
        })}
        <div className="autoplay-progress" slot="container-end"></div>
      </Swiper>
    </div>
  );
};

export default ProductCarousel3ForLargerScreens;
