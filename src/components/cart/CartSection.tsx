import TheHr from "../TheHr";
import Checkout from "./Checkout";
import TotalBills from "./TotalBills";
import CartInternationalCustomerPurchased from "./CartInternationalCustomerPurchased";
import CartCheckoutSectionLargeScreen from "./CartCheckoutSectionLargeScreen";

import EmptyCartMessage from "./EmptyCartMessage";
import EmptyCartMessageLargeScreen from "./EmptyCartMessageLargeScreen";
import CartSubtotalForLargeScreen from "./CartSubtotalForLargeScreen";
import SendAsAGiftSectionForSmallerScreens from "./SendAsAGiftSectionForSmallerScreens";
import CartProducts from "./CartProducts";
import CartProductsOfLargeScreens from "./CartProductsOfLargeScreens";

const CartSection = () => {
  return (
    <>
      <div className="pl-2 pt-3 pb-3 pr-2 lg:hidden">
        <EmptyCartMessage />
        <TotalBills />
        <Checkout />
        <SendAsAGiftSectionForSmallerScreens />
        <TheHr />
        <CartProducts />
        <div className="mt-5 ">
          <div className="mb-4 lg:mb-5">
            <span className="text-[1.1rem] font-semibold">
              New international customers purchased
            </span>
          </div>
          <CartInternationalCustomerPurchased />
        </div>
      </div>
      <div className="hidden lg:flex justify-between bg-slate-200 p-[1vw] ">
        <div className=" w-[75%] h-fit">
          <div className="p-[1vw] bg-white">
            <EmptyCartMessageLargeScreen />
            <div className="">
              <span className="text-[1.7vw] font-medium">Shopping Cart</span>
            </div>
            <div className="text-right">
              <span className="text-sm font-medium opacity-70">Price</span>
            </div>
            <TheHr />
            <div>
              <CartProductsOfLargeScreens />
            </div>
            <CartSubtotalForLargeScreen />
          </div>
          <div className="mt-5 pr-[10rem]">
            <span className="text-xs font-medium ">
              The price and availability of items at Amazon.com are subject to
              change. The Cart is a temporary place to store a list of your
              items and reflects each item's most recent price. Shopping
              CartLearn more Do you have a gift card or promotional code? We'll
              ask you to enter your claim code when it's time to pay.
            </span>
          </div>
        </div>
        <div className="w-[23.5%] ">
          <CartCheckoutSectionLargeScreen />
          <div className="p-[1vw] bg-white mt-[1.3vw] ">
            <div className="mb-5">
              <span className="text-[1.1rem] ">
                New international customers purchased
              </span>
            </div>
            <CartInternationalCustomerPurchased />
          </div>
        </div>
      </div>
    </>
  );
};

export default CartSection;
