import { createSlice } from "@reduxjs/toolkit";
type productQuantityStateType = { theId: string; quantity: number }[];

type updateQuantityActionType = {
  payload: {
    theId: string;
    quantity: number;
  };
};
type updateQuantityActionTypeOnReload = {
  payload: {
    theId: string;
    quantity: number;
  }[];
};

let productQuantityInProductDetailsSlice = createSlice({
  name: "quantityInProductDetails",
  initialState: { quantityOfProducts: [] as productQuantityStateType },
  reducers: {
    updateQuantityOfProductsInProductDetails: (
      state,
      action: updateQuantityActionType
    ) => {
      let productId = action.payload.theId;
      let doesExist = state.quantityOfProducts.filter(
        (product) => product.theId == productId
      );
      if (doesExist.length < 1) {
        state.quantityOfProducts.push(action.payload);
      } else {
        doesExist[0].quantity = action.payload.quantity;
      }
      localStorage.setItem(
        "ar7express_product_details_page_data",
        JSON.stringify(state.quantityOfProducts)
      );
    },
    updateQuantityOfProductsInProductDetailsOnPageReload: (
      state,
      action: updateQuantityActionTypeOnReload
    ) => {
      state.quantityOfProducts = action.payload;
    },
  },
});
let productQuantityInProductDetailsSliceReducer =
  productQuantityInProductDetailsSlice.reducer;
let {
  updateQuantityOfProductsInProductDetails,
  updateQuantityOfProductsInProductDetailsOnPageReload,
} = productQuantityInProductDetailsSlice.actions;

export {
  productQuantityInProductDetailsSliceReducer,
  updateQuantityOfProductsInProductDetails,
  updateQuantityOfProductsInProductDetailsOnPageReload,
};
export type { productQuantityStateType, updateQuantityActionTypeOnReload };
