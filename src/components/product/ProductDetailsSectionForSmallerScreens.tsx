import RatingOfProductDetails from "./RatingOfProductDetails";
import AmazonsChoiceLogo from "./AmazonsChoiceLogo";
import DeliveryDateInfo from "./DeliveryDateInfo";
import QuantityOfProductInProductDetails from "./QuantityOfProductInProductDetails";
import AddToCartInProductDetails from "./AddToCartInProductDetails";
import { useSelector } from "react-redux";
import { rootType } from "../../configs/redux/screenSize";
import PriceInfo from "./PriceInfo";
import ShippingAndImportFeeInfo from "./ShippingAndImportFeeInfo";

const ProductDetailsSectionForSmallerScreens = () => {
  let screenWidth = useSelector(
    (state: rootType) => state.screenSize.screenWidth
  );
  if (screenWidth > 1023) {
    return null;
  }
  return (
    <>
      <div className="flex justify-between items-center p-2">
        <div>
          <span className="font-medium text-green-700">Griddle Mini Maker</span>
        </div>
        <RatingOfProductDetails />
      </div>
      <div className="p-2">
        <span className="text-sm font-medium opacity-80">
          Voluptua sit labore accusam invidunt eos eos, consetetur consetetur ea
          ipsum dolor clita est est duo tempor. Vero dolore dolor diam nonumy
          eos ea lorem. Sadipscing sadipscing ipsum voluptua justo.
        </span>
      </div>
      <div className="p-2 flex items-center">
        <AmazonsChoiceLogo />
        <span className="text-xs font-medium ml-2">
          in Electric Kitchenwere
        </span>
      </div>
      <div className="p-2">
        <div className="flex justify-center">
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
        <PriceInfo />
        <ShippingAndImportFeeInfo />
        <DeliveryDateInfo />
        <div className="mt-2">
          <span>
            <span>
              <i className="fa-solid fa-location-dot " />
            </span>
            <span className="text-green-700 font-medium">
              {" "}
              Deliver to Bangladesh
            </span>
          </span>
        </div>
        <div className="mt-2">
          <span className="text-green-700 font-medium">In Stock</span>
        </div>
        <QuantityOfProductInProductDetails />
        <AddToCartInProductDetails />
      </div>
    </>
  );
};

export default ProductDetailsSectionForSmallerScreens;
