import { productsQuantityTypeInCart } from "../../configs/redux/cartSlice";
import { productsDataType } from "../../models/ProductsData";
import FinalPrice from "./FinalPrice";
import GiveFractionalValues from "./GiveFractionalValues";

const FinalPriceAccordingToQuantity = (
  theId: string,
  productsData: productsDataType,
  cartData: productsQuantityTypeInCart
) => {
  let quantity = cartData.filter((product) => theId == product.theId)[0]
    .quantity;
  let product = productsData.filter((product) => theId == product.theId)[0];
  let regularPrice = product.price;
  let discountPercentage = product.discountPercentage;
  let priceAfterDiscount = FinalPrice(regularPrice, discountPercentage);
  let totalPriceWithoutDiscount = quantity * regularPrice;
  totalPriceWithoutDiscount = Number(totalPriceWithoutDiscount.toFixed(2));
  let totalPriceWithDiscount = priceAfterDiscount * quantity;
  let fractionalValuesOfTotalPriceWithDiscount = GiveFractionalValues(
    totalPriceWithDiscount
  );
  let fractionalValuesOfTotalPriceWithoutDiscount = GiveFractionalValues(
    totalPriceWithoutDiscount
  );
  return {
    totalPriceWithoutDiscount,
    totalPriceWithDiscount,
    fractionalValuesOfTotalPriceWithDiscount,
    fractionalValuesOfTotalPriceWithoutDiscount,
  };
};

export default FinalPriceAccordingToQuantity;
