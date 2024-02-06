import { configureStore } from "@reduxjs/toolkit";
import { screenSizeSliceReducer } from "./screenSize";
import {
  productQuantityInProductDetailsSliceReducer,
  productQuantityStateType,
} from "./productQuantityInProductDetails";
import { cartSliceReducer, productsQuantityTypeInCart } from "./cartSlice";

let store = configureStore({
  reducer: {
    screenSize: screenSizeSliceReducer,
    updateQuantityOfProductsInProductDetails:
      productQuantityInProductDetailsSliceReducer,
    cartSliceReducer: cartSliceReducer,
  },
});
// Type of State ---------------------------------------------------------------------------
type stateType = {
  screenSize: {
    screenWidth: number;
  };
  updateQuantityOfProductsInProductDetails: {
    quantityOfProducts: productQuantityStateType;
  };
  cartSliceReducer: {
    productsQuantity: productsQuantityTypeInCart;
  };
};
export { store };
export type { stateType };
