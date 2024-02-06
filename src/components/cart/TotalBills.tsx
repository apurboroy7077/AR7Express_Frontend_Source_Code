import { useSelector } from "react-redux";
import { stateType } from "../../configs/redux/store";
import GiveTotalPriceBasedOnCartProducts from "../extra_functions/GiveTotalPriceBasedOnCartProducts";
import GiveFractionalValues from "../extra_functions/GiveFractionalValues";

const TotalBills = () => {
  let cartProducts = useSelector(
    (state: stateType) => state.cartSliceReducer.productsQuantity
  );
  if (cartProducts.length < 1) {
    return null;
  }
  let totalPrice = GiveTotalPriceBasedOnCartProducts(cartProducts);
  let fractionalValuesOfPrice = GiveFractionalValues(totalPrice);

  return (
    <div>
      <span className="font-medium text-[1.2rem]">Subtotal</span>
      <span className="ml-2 font-medium ">$</span>
      <span className="text-2xl font-bold">
        {fractionalValuesOfPrice.beforeFraction}
      </span>
      <sup className="font-medium">
        {" "}
        {fractionalValuesOfPrice.afterFraction}
      </sup>
    </div>
  );
};

export default TotalBills;
