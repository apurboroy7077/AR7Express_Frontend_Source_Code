import TheHr from "../TheHr";
import CartInternationalCustomerPurchased from "./CartInternationalCustomerPurchased";
import CartProducts from "./CartProducts";
import Checkout from "./Checkout";
import EmptyCartMessage from "./EmptyCartMessage";
import SendAsAGiftSectionForSmallerScreens from "./SendAsAGiftSectionForSmallerScreens";
import TotalBills from "./TotalBills";

const CartSectionForSmallerScreen = () => {
  return (
    <div className="pl-2 pt-3 pb-3 pr-2 ">
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
  );
};

export default CartSectionForSmallerScreen;
