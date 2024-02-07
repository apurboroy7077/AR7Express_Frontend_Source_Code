import ar7id from "ar7id";

import TheHr from "../TheHr";
import CartLargerScreenProductImage from "./CartLargerScreenProductImage";
import CartLargerScreenProductInfo from "./CartLargerScreenProductInfo";
import CartLargerScreenProductPriceInfo from "./CartLargerScreenProductPriceInfo";
type propsType = {
  theId: string;
};
const CartProductLargeScreen = (props: propsType) => {
  let { theId } = props;

  return (
    <>
      <div className="mb-6">
        <div className="w-full flex gap-3  mt-[0.7rem]" key={ar7id()}>
          <CartLargerScreenProductImage theId={theId} />
          <CartLargerScreenProductInfo theId={theId} />
          <CartLargerScreenProductPriceInfo theId={theId} />
        </div>
      </div>
      <TheHr />
    </>
  );
};

export default CartProductLargeScreen;
