import { productsQuantityTypeInCart } from "../../configs/redux/cartSlice";
import { productsDataType } from "../../models/ProductsData";

type productsType = productsDataType | productsQuantityTypeInCart;
const CheckIfExists = (products: productsType, theId: string) => {
  let doesExists: boolean;
  let matchingProducts = products.filter((product) => product.theId == theId);
  if (matchingProducts.length > 0) {
    doesExists = true;
  } else {
    doesExists = false;
  }
  return doesExists;
};

export default CheckIfExists;
