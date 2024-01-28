import { useEffect, useState } from "react";
import ProductsOfCarousel1 from "./ProductsOfCarousel1";

const TheCarousal1 = () => {
  let [currentImageIndex, setCurrentImageIndex] = useState(1);

  let handleTouchEnd = () => {
    let currentImageIndex_ = currentImageIndex;
    currentImageIndex_ = currentImageIndex_ + 1;
    if (currentImageIndex_ > 3) {
      currentImageIndex_ = 1;
    }
    setCurrentImageIndex(currentImageIndex_);
  };
  let handleOnClick = () => {};

  useEffect(() => {
    setTimeout(() => {
      handleTouchEnd();
    }, 5000);
  }, [currentImageIndex]);

  return (
    <div
      className="w-full h-[300px] duration-1000 bg-cover bg-center relative lg:hidden"
      style={{
        backgroundImage: `url(/images/carousals/dino_${currentImageIndex}.jpg)`,
      }}
      onTouchEnd={handleTouchEnd}
      onClick={handleOnClick}
    >
      <div
        className="text-[20px] p-2 text-white font-bold w-fit"
        style={{ textShadow: "2px 2px 2px black" }}
      >
        New Year Sale
      </div>
      <ProductsOfCarousel1 />
    </div>
  );
};

export default TheCarousal1;
