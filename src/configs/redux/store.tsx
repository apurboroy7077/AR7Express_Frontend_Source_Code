import { configureStore } from "@reduxjs/toolkit";
import { screenSizeSliceReducer } from "./screenSize";
import {
  productQuantityInProductDetailsSliceReducer,
  productQuantityStateType,
} from "./productQuantityInProductDetails";
import { cartSliceReducer, productsQuantityTypeInCart } from "./cartSlice";
import { fieldType, signInAndUpSliceReducer } from "./signIInAndUpSlice";

let store = configureStore({
  reducer: {
    screenSize: screenSizeSliceReducer,
    updateQuantityOfProductsInProductDetails:
      productQuantityInProductDetailsSliceReducer,
    cartSliceReducer: cartSliceReducer,
    signInAndUp: signInAndUpSliceReducer,
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
  signInAndUp: {
    openedField: fieldType;
  };
};
export { store };
export type { stateType };
