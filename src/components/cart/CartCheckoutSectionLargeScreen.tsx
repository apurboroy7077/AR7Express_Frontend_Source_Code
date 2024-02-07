import { useSelector } from "react-redux";
import { stateType } from "../../configs/redux/store";
import GiveTotalPriceBasedOnCartProducts from "../extra_functions/GiveTotalPriceBasedOnCartProducts";

const CartCheckoutSectionLargeScreen = () => {
  let cartProductsData = useSelector(
    (state: stateType) => state.cartSliceReducer.productsQuantity
  );
  let totalNumberOfProducts = cartProductsData.length;
  let totalPrice = GiveTotalPriceBasedOnCartProducts(cartProductsData);
  return (
    <div className=" bg-white p-[1vw] ">
      <div className="">
        <span className="text-[1.1rem]">
          Subtotal ({totalNumberOfProducts} items):{" "}
        </span>
        <span className="font-bold text-[1.1rem]">${totalPrice}</span>
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
  );
};

export default CartCheckoutSectionLargeScreen;
