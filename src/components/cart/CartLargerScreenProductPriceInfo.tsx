import { useSelector } from "react-redux";
import { productsData } from "../../models/ProductsData";
import FinalPriceAccordingToQuantity from "../extra_functions/FinalPrice2";
import GiveProductBasedOnId from "../extra_functions/GiveProductBasedOnId";
import { stateType } from "../../configs/redux/store";

type propsType = {
  theId: string;
};
const CartLargerScreenProductPriceInfo = (props: propsType) => {
  let { theId } = props;
  let productData = GiveProductBasedOnId(theId);
  let { discountPercentage } = productData;
  let cartProductsData = useSelector(
    (state: stateType) => state.cartSliceReducer.productsQuantity
  );
  let totalPrice = FinalPriceAccordingToQuantity(
    theId,
    productsData,
    cartProductsData
  );
  return (
    <div className=" ">
      <div className=" text-end">
        <div className=" text-nowrap">
          <span className=" bg-red-800 text-[0.8rem] p-[0.1rem] pr-[0.3rem] pl-[0.3rem] mr-[0.3vw] text-white rounded-[0.1rem]">
            {discountPercentage}% off
          </span>
          <span className=" text-red-800 font-medium text-[0.8rem] ml-[0.2rem]">
            Deal
          </span>
        </div>
        <div className=" text-right">
          <span>
            <sup className="text-[0.7rem] font-medium">$</sup>
          </span>
          <span className=" text-[1.35rem] font-medium">
            {totalPrice.fractionalValuesOfTotalPriceWithDiscount.beforeFraction}
          </span>
          <span className="mr-[0.5rem] font-medium">
            <sup>
              {
                totalPrice.fractionalValuesOfTotalPriceWithDiscount
                  .afterFraction
              }
            </sup>
          </span>
        </div>
        <div>
          <span className="text-[0.83rem] opacity-70 font-medium text-nowrap">
            List Price:{" "}
            <span className=" line-through">
              ${totalPrice.totalPriceWithoutDiscount}
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default CartLargerScreenProductPriceInfo;
