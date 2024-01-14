import ar7id from "ar7id";
import { useState } from "react";

const TheCarousal1 = () => {
  let [currentImageIndex, setCurrentImageIndex] = useState(1);
  let handleProductDivTouchEnd = (e: React.TouchEvent) => {
    e.stopPropagation();
    console.log("Propagate");
  };
  let handleTouchEnd = () => {
    let currentImageIndex_ = currentImageIndex;
    currentImageIndex_ = currentImageIndex_ + 1;
    if (currentImageIndex_ > 3) {
      currentImageIndex_ = 1;
    }
    setCurrentImageIndex(currentImageIndex_);
  };
  let handleOnClick = () => {};

  return (
    <div
      className="w-full h-[300px] duration-1000 bg-cover bg-center relative"
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
      <div className="flex gap-3 overflow-x-auto absolute bottom-0 max-w-full">
        {Array.from({ length: 20 }).map(() => {
          return (
            <div
              key={ar7id()}
              className="bg-white min-w-[125px] rounded overflow-hidden shadow"
              onTouchEnd={handleProductDivTouchEnd}
            >
              <div className="p-1">HeadPhones</div>
              <div className="h-[130px] w-full">
                <img
                  src="/images/products/headphone.webp"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TheCarousal1;
