import ar7id from "ar7id";

import TheHr from "../TheHr";
import CartLargerScreenProductImage from "./CartLargerScreenProductImage";
import CartLargerScreenProductInfo from "./CartLargerScreenProductInfo";
import CartLargerScreenProductPriceInfo from "./CartLargerScreenProductPriceInfo";

const CartProductLargeScreen = () => {
  return (
    <>
      <div className="mb-6">
        <div className="w-full flex gap-3  mt-[0.7rem]" key={ar7id()}>
          <CartLargerScreenProductImage />
          <CartLargerScreenProductInfo />
          <CartLargerScreenProductPriceInfo />
        </div>
      </div>
      <TheHr />
    </>
  );
};

export default CartProductLargeScreen;
