import TheHr from "../TheHr";
import CartProduct from "./CartProduct";
import Checkout from "./Checkout";
import TotalBills from "./TotalBills";
import CartProductLargeScreen from "./CartProductLargeScreen";
import CartInternationalCustomerPurchased from "./CartInternationalCustomerPurchased";
import productsData from "./../../models/ProductsData.json";
import CartCheckoutSectionLargeScreen from "./CartCheckoutSectionLargeScreen";
import { Link } from "react-router-dom";
import EmptyCartMessage from "./EmptyCartMessage";
import EmptyCartMessageLargeScreen from "./EmptyCartMessageLargeScreen";

const CartSection = () => {
  return (
    <>
      <div className="pl-2 pt-3 pb-3 pr-2 lg:hidden">
        <EmptyCartMessage />
        <TotalBills />
        <Checkout />
        <div className="flex items-center mb-[0.7rem]">
          <span>
            <input type="checkbox" />
          </span>
          <span className="ml-1 text-sm font-medium">
            Send as a Gift. Add Custom Message.
          </span>
        </div>
        <TheHr />
        <CartProduct />
        <CartProduct />
        <CartProduct />
        <div className="mt-5 ">
          <div className="mb-4 lg:mb-5">
            <span className="text-[1.1rem] font-semibold">
              New international customers purchased
            </span>
          </div>
          <CartInternationalCustomerPurchased data={productsData} />
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
              <CartProductLargeScreen />
              <CartProductLargeScreen />
            </div>
            <div className="mt-2 mb-5 text-end">
              <span className="text-[1.2rem]">Subtotal (6 items): </span>
              <span className="text-[1.2rem] font-medium">$2,030.94</span>
            </div>
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
            <CartInternationalCustomerPurchased data={productsData} />
          </div>
        </div>
      </div>
    </>
  );
};

export default CartSection;
