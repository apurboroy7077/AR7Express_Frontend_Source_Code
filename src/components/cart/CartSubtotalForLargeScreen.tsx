import { useSelector } from "react-redux";
import { stateType } from "../../configs/redux/store";
import GiveTotalPriceBasedOnCartProducts from "../extra_functions/GiveTotalPriceBasedOnCartProducts";

const CartSubtotalForLargeScreen = () => {
  let cartProductsData = useSelector(
    (state: stateType) => state.cartSliceReducer.productsQuantity
  );
  let totalProductsNumber = cartProductsData.length;
  let totalPrice = GiveTotalPriceBasedOnCartProducts(cartProductsData);
  return (
    <div className="mt-2 mb-5 text-end">
      <span className="text-[1.2rem]">
        Subtotal ({totalProductsNumber} items):{" "}
      </span>
      <span className="text-[1.2rem] font-medium">${totalPrice}</span>
    </div>
  );
};

export default CartSubtotalForLargeScreen;
