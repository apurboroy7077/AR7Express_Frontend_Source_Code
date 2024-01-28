import { useSelector } from "react-redux";
import { rootType } from "../../configs/redux/screenSize";
import RatingOfProductDetails from "./RatingOfProductDetails";
import AmazonsChoiceLogo from "./AmazonsChoiceLogo";
import PriceInfo from "./PriceInfo";
import ShippingAndImportFeeInfo from "./ShippingAndImportFeeInfo";
import DeliveryDateInfo from "./DeliveryDateInfo";
import DeliverLocation from "./DeliverLocation";
import QuantityOfProductInProductDetails from "./QuantityOfProductInProductDetails";
import AddToCartInProductDetails from "./AddToCartInProductDetails";

const ProductDetailsForLargerScreens = () => {
  let screenWidth = useSelector(
    (state: rootType) => state.screenSize.screenWidth
  );
  if (screenWidth < 1023) {
    return null;
  }
  return (
    <>
      <div className="flex justify-between items-center p-3">
        <RatingOfProductDetails />
        <AmazonsChoiceLogo />
        <PriceInfo />
      </div>
      <div className="p-3 flex justify-between">
        <div className="w-[35%]">
          <img src="/images/products/asus_monitor.jpg" className="w-full" />
        </div>
        <div className="w-[35%]">
          <div>
            <span className="font-medium">
              ASUS ROG Swift 32” 4K HDR Gaming Monitor - 144Hz DSC, UHD (3840 x
              2160) PC Monitor, Mini-LED IPS with G-SYNC Ultimate, Local
              Dimming, Ideal for Desktop and Computer Monitor Black - - PG32UQX
            </span>
          </div>
          <div>
            <RatingOfProductDetails />
          </div>
          <div>
            <PriceInfo />
          </div>
          <ShippingAndImportFeeInfo />
          <div>
            <span className="text-sm font-semibold opacity-80">
              Available at a lower price from other sellers that may not offer
              free Prime shipping.
            </span>
          </div>
          <div>
            <span className="font-semibold">Iconic</span>
          </div>
        </div>
        <div className="w-[25%] flex justify-center ">
          <div
            className=" border-[black] border-[1px] w-[90%] p-3 pb-5 rounded h-fit"
            style={{ boxShadow: "2px 2px 5px black" }}
          >
            <div>
              <sup className="font-medium text-sm">$</sup>
              <span className=" text-2xl">{99}</span>
              <sup className="font-medium text-sm">65</sup>
            </div>
            <ShippingAndImportFeeInfo />
            <DeliveryDateInfo />
            <DeliverLocation />
            <QuantityOfProductInProductDetails />
            <AddToCartInProductDetails />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetailsForLargerScreens;
