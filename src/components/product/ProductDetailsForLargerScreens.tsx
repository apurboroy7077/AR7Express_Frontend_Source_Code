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
import { singleProductDataType } from "../../models/ProductsData";
import PriceInfoForLargerScreens from "./PriceInfoForLargerScreens";
type propsType = {
  data: singleProductDataType;
};
const ProductDetailsForLargerScreens = (props: propsType) => {
  let { price, discountPercentage, imageSrc, description } = props.data;
  console.log(imageSrc);
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
        <PriceInfo data={{ price, discountPercentage }} />
      </div>
      <div className="p-3 flex justify-between">
        <div className="w-[35%]">
          <img src={imageSrc} className="w-full" />
        </div>
        <div className="w-[35%]">
          <div>
            {/* Dedcription Here------------------------------------------------------------- */}
            <span className="font-medium">{description} </span>
          </div>
          <div>
            <RatingOfProductDetails />
          </div>
          <div>
            <PriceInfo data={{ price, discountPercentage }} />
          </div>
          <ShippingAndImportFeeInfo data={price} />
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
            <PriceInfoForLargerScreens data={price} />
            <ShippingAndImportFeeInfo data={price} />
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
