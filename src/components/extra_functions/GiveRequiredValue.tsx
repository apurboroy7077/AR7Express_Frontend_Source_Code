import {
  productsQuantityTypeInCart,
  singleProductDataTypeInCart,
} from "../../configs/redux/cartSlice";
import {
  productsDataType,
  singleProductDataType,
} from "../../models/ProductsData";

const GiveRequiredValue = (
  data: productsDataType | productsQuantityTypeInCart,
  theId: string,
  targetedValue: keyof singleProductDataType | keyof singleProductDataTypeInCart
) => {
  let matchingProducts = data.filter((product) => theId == product.theId);
  let theProduct = matchingProducts[0];
  if ("quantity" in theProduct) {
    let demandedValue =
      theProduct[targetedValue as keyof singleProductDataTypeInCart];
    return demandedValue;
  } else {
    let demandedValue =
      theProduct[targetedValue as keyof singleProductDataType];
    return demandedValue;
  }
};

export default GiveRequiredValue;
