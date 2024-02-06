import { createSlice } from "@reduxjs/toolkit";

type productsQuantityTypeInCart = {
  theId: string;
  quantity: number;
}[];
type actionType = {
  payload: {
    theId: string;
    quantity: number;
  };
};
type actionTypeOnReload = {
  payload: productsQuantityTypeInCart;
};
let cartSlice = createSlice({
  name: "cartState",
  initialState: {
    productsQuantity: [] as productsQuantityTypeInCart,
  },
  reducers: {
    addToCart: (state, action: actionType) => {
      let productId = action.payload.theId;
      let doesExist = state.productsQuantity.filter(
        (product) => product.theId == productId
      );
      if (doesExist.length < 1) {
        state.productsQuantity.push(action.payload);
      } else {
        doesExist[0].quantity = action.payload.quantity;
      }
      console.log("Hello");
      localStorage.setItem(
        "ar7express_cart_page_data",
        JSON.stringify(state.productsQuantity)
      );
    },
    updateCartOnPageReload: (state, action: actionTypeOnReload) => {
      state.productsQuantity = action.payload;
    },
  },
});
let cartSliceReducer = cartSlice.reducer;
let { addToCart, updateCartOnPageReload } = cartSlice.actions;
export { cartSliceReducer, addToCart, updateCartOnPageReload };
export type { productsQuantityTypeInCart };
