const CartLargerScreenProductPriceInfo = () => {
  return (
    <div className=" ">
      <div>
        <div className=" text-nowrap">
          <span className=" bg-red-800 text-[0.8rem] p-[0.1rem] pr-[0.3rem] pl-[0.3rem] mr-[0.3vw] text-white rounded-[0.1rem]">
            90% off
          </span>
          <span className=" text-red-800 font-medium text-[0.8rem] ml-[0.2rem]">
            Deal
          </span>
        </div>
        <div className=" text-right">
          <span>
            <sup className="text-[0.7rem] font-medium">$</sup>
          </span>
          <span className=" text-[1.35rem] font-medium">50</span>
          <span className="mr-[0.5rem] font-medium">
            <sup>99</sup>
          </span>
        </div>
        <div>
          <span className="text-[0.83rem] opacity-70 font-medium">
            List Price: <span className=" line-through">$55</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default CartLargerScreenProductPriceInfo;
