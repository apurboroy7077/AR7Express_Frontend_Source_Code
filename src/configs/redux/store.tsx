import { configureStore } from "@reduxjs/toolkit";
import { screenSizeSliceReducer } from "./screenSize";
import {
  productQuantityInProductDetailsSliceReducer,
  productQuantityStateType,
} from "./productQuantityInProductDetails";

let store = configureStore({
  reducer: {
    screenSize: screenSizeSliceReducer,
    updateQuantityOfProductsInProductDetails:
      productQuantityInProductDetailsSliceReducer,
  },
});
type stateType = {
  screenSize: {
    screenWidth: number;
  };
  updateQuantityOfProductsInProductDetails: {
    quantityOfProducts: productQuantityStateType;
  };
};
export { store };
export type { stateType };
