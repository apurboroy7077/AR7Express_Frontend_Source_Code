import { productsQuantityTypeInCart } from "../../configs/redux/cartSlice";
import { productsData } from "../../models/ProductsData";
import FinalPrice from "./FinalPrice";

const GiveTotalPriceBasedOnCartProducts = (
  cartProducts: productsQuantityTypeInCart
) => {
  let totalPrice = 0;
  for (let i = 0; i < cartProducts.length; i++) {
    let theId = cartProducts[i].theId;
    let quantity = cartProducts[i].quantity;
    let productData = productsData.filter(
      (product) => theId == product.theId
    )[0];
    let { price, discountPercentage } = productData;
    let finalPrice = FinalPrice(price, discountPercentage) * quantity;
    totalPrice = totalPrice + finalPrice;
  }
  return totalPrice;
};

export default GiveTotalPriceBasedOnCartProducts;
