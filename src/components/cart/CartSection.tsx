import ar7id from "ar7id";
import TheHr from "../TheHr";
import CartButtons from "./CartButtons";
import CartProduct from "./CartProduct";
import Checkout from "./Checkout";
import TotalBills from "./TotalBills";
import { Link } from "react-router-dom";
import CartProductLargeScreen from "./CartProductLargeScreen";

const CartSection = () => {
  return (
    <>
      <div className="pl-2 pt-3 pb-3 pr-2 lg:hidden">
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
      </div>
      <div className="hidden lg:flex justify-between bg-slate-200 p-[1vw] ">
        <div className="p-[1vw] bg-white w-[75%]">
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
        </div>
        <div className="w-[23.5%] ">
          <div className=" bg-white p-[1vw] ">
            <div className="">
              <span className="text-[1.1rem]">Subtotal (6 items): </span>
              <span className="font-bold text-[1.1rem]">$2,030.94</span>
            </div>
            <div className="flex items-center mb-[0.7rem]">
              <span>
                <input type="checkbox" />
              </span>
              <span className="ml-1 text-xs font-medium">
                This Order Contains a Gift
              </span>
            </div>
            <div className="mt-1 mb-1 sticky ">
              <button className=" bg-red-300 w-full p-3 rounded font-medium">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartSection;
