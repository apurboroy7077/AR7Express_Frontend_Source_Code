import TheHr from "../TheHr";
import CartProduct from "./CartProduct";
import Checkout from "./Checkout";
import TotalBills from "./TotalBills";

const CartSection = () => {
  return (
    <div className="pl-2 pt-3 pb-3 pr-2 ">
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
  );
};

export default CartSection;
