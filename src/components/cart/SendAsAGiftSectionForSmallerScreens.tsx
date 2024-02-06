import { useSelector } from "react-redux";
import { stateType } from "../../configs/redux/store";

const SendAsAGiftSectionForSmallerScreens = () => {
  let cartProductsData = useSelector(
    (state: stateType) => state.cartSliceReducer.productsQuantity
  );
  if (cartProductsData.length < 1) {
    return null;
  }
  return (
    <div className="flex items-center mb-[0.7rem]">
      <span>
        <input type="checkbox" />
      </span>
      <span className="ml-1 text-sm font-medium">
        Send as a Gift. Add Custom Message.
      </span>
    </div>
  );
};

export default SendAsAGiftSectionForSmallerScreens;
