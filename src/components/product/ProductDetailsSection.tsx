const ProductDetailsSection = () => {
  return (
    <>
      <div className="flex justify-between items-center p-2">
        <div>
          <span className="font-medium text-green-700">Griddle Mini Maker</span>
        </div>
        <div className="text-xs">
          <span className="mr-1 font-medium">5.0</span>
          <span className="mr-1 font-medium text-orange-500">
            <i className="fa-solid fa-star" />
            <i className="fa-solid fa-star" />
            <i className="fa-solid fa-star" />
            <i className="fa-solid fa-star" />
            <i className="fa-regular fa-star-half-stroke" />
          </span>
          <span className="font-medium text-green-700">5541</span>
        </div>
      </div>
      <div className="p-2">
        <span className="text-sm font-medium opacity-80">
          Voluptua sit labore accusam invidunt eos eos, consetetur consetetur ea
          ipsum dolor clita est est duo tempor. Vero dolore dolor diam nonumy
          eos ea lorem. Sadipscing sadipscing ipsum voluptua justo.
        </span>
      </div>
      <div className="p-2 flex items-center">
        <span className="bg-[#232F3E] pr-2 pl-2 pt-1 pb-1 text-sm font-medium">
          <span className="text-[white]">Amazon's </span>
          <span className="text-[#F69931]">Choice</span>
        </span>
        <span className="text-xs font-medium ml-2">
          in Electric Kitchenwere
        </span>
      </div>
      <div className="p-2">
        <div>
          <img src="/images/products/digital_watch.jpg" />
        </div>
        <div className="text-center mt-1">
          <span className="text-xs font-medium">900+ bought in past month</span>
        </div>
      </div>
      <div className="p-2">
        <div className="  ">
          <span className=" pt-1 pb-1 pl-2 pr-2 bg-red-800  text-white cursor-pointer">
            {99}% off
          </span>
          <span className=" text-red-800 font-medium ml-2">Deal</span>
        </div>
        <div className="mt-2">
          <sup className="font-medium text-base">$</sup>
          <span className=" text-2xl">{99}</span>
          <span className="opacity-70 font-medium ml-2">
            List Price:{" "}
            <span className=" line-through cursor-pointer">${99}</span>
          </span>
        </div>
        <div className="font-medium ">
          <span className="font-medium text-sm opacity-90">
            {
              "Ipsum voluptua sed ipsum lorem aliquyam dolor, amet sed sed magna sed ipsum justo dolore, accusam dolor sed elitr consetetur sadipscing. Duo diam eirmod et stet sed ea magna sadipscing."
            }
          </span>
        </div>
      </div>
    </>
  );
};

export default ProductDetailsSection;
