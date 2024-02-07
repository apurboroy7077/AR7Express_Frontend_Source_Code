import { useEffect, useState } from "react";
import CartButtons from "./CartButtons";
import ar7id from "ar7id";
import GiveProductBasedOnId from "../extra_functions/GiveProductBasedOnId";
import FinalPrice from "../extra_functions/FinalPrice";
import GiveFractionalValues from "../extra_functions/GiveFractionalValues";
import { useSelector } from "react-redux";
import { stateType } from "../../configs/redux/store";
import GiveRequiredValue from "../extra_functions/GiveRequiredValue";
type propsType = {
  data: {
    theId: string;
    quantity: number;
  };
};
const CartProduct = (props: propsType) => {
  let { theId } = props.data;
  let cartData = useSelector(
    (state: stateType) => state.cartSliceReducer.productsQuantity
  );
  let quantity = GiveRequiredValue(cartData, theId, "quantity") as number;
  let productData = GiveProductBasedOnId(theId);
  let { imageSrc, description, discountPercentage, price } = productData;
  let listPrice = price * quantity;
  listPrice = Number(listPrice.toFixed(2));
  let finalPrice = FinalPrice(price, discountPercentage);
  finalPrice = finalPrice * quantity;
  let fractionalValuesOfPrice = GiveFractionalValues(finalPrice);
  let [displayDescription, setDisplayDescription] = useState(description);
  let handleResize = () => {
    let totalWord = Math.floor(window.innerWidth / 6);
    let wordsToDisplay = description.slice(0, totalWord);
    setDisplayDescription(wordsToDisplay);
  };
  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
  }, []);
  return (
    <div className="mb-6">
      <div className="w-full flex gap-3 items-center mt-[0.7rem]" key={ar7id()}>
        <div className="  mb-2">
          <img
            src={imageSrc}
            className="min-w-[9rem] h-[9rem] object-cover bg-center"
          />
        </div>
        <div className="">
          <div className="text-sm font-medium mb-[0.15rem]">
            {displayDescription}
            {description.length > displayDescription.length && <>...</>}
          </div>
          <div className="leading-[0.9rem] mb-[0.15rem]">
            <span className="text-[0.8rem] font-medium opacity-85">
              500+ bought in past month
            </span>
          </div>
          <div className=" ">
            <span className=" bg-red-800 text-[0.8rem] p-[0.1rem] pr-[0.3rem] pl-[0.3rem] mr-[0.3vw] text-white rounded-[0.1rem]">
              {discountPercentage}% off
            </span>
            <span className=" text-red-800 font-medium text-[0.8rem] ml-[0.2rem]">
              Deal
            </span>
          </div>
          <div>
            <span>
              <sup className="text-[0.7rem] font-medium">$</sup>
            </span>
            <span className=" text-[1.35rem] font-medium">
              {fractionalValuesOfPrice.beforeFraction}
            </span>
            <span className="mr-[0.5rem] font-medium">
              <sup>{fractionalValuesOfPrice.afterFraction}</sup>
            </span>
            <span className="text-[0.83rem] opacity-70 font-medium">
              List Price: <span className=" line-through">${listPrice}</span>
            </span>
          </div>
          <div className="font-medium text-[0.80rem] text-green-700">
            <span>In Stock</span>
          </div>
        </div>
      </div>
      <CartButtons data={{ theId, quantity }} />
    </div>
  );
};

export default CartProduct;
