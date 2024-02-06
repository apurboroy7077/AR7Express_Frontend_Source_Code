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
type actionTypeOnIncreementOrDecreement = {
  payload: string;
};
type actionTypeOnDelete = {
  payload: string;
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
    incrementCartProductQuantity: (
      state,
      action: actionTypeOnIncreementOrDecreement
    ) => {
      let theId = action.payload;
      let theProduct = state.productsQuantity.filter(
        (product) => theId == product.theId
      )[0];
      theProduct.quantity++;
      localStorage.setItem(
        "ar7express_cart_page_data",
        JSON.stringify(state.productsQuantity)
      );
    },
    decrementCartProductQuantity: (
      state,
      action: actionTypeOnIncreementOrDecreement
    ) => {
      let theId = action.payload;
      let theProduct = state.productsQuantity.filter(
        (product) => theId == product.theId
      )[0];
      if (theProduct.quantity > 1) {
        theProduct.quantity--;
        localStorage.setItem(
          "ar7express_cart_page_data",
          JSON.stringify(state.productsQuantity)
        );
      }
    },
    deleteFromCart: (state, action: actionTypeOnDelete) => {
      let theId = action.payload;
      state.productsQuantity = state.productsQuantity.filter(
        (product) => theId != product.theId
      );
      localStorage.setItem(
        "ar7express_cart_page_data",
        JSON.stringify(state.productsQuantity)
      );
    },
  },
});
let cartSliceReducer = cartSlice.reducer;
let {
  addToCart,
  updateCartOnPageReload,
  incrementCartProductQuantity,
  decrementCartProductQuantity,
  deleteFromCart,
} = cartSlice.actions;
export {
  cartSliceReducer,
  addToCart,
  updateCartOnPageReload,
  incrementCartProductQuantity,
  decrementCartProductQuantity,
  deleteFromCart,
};
export type { productsQuantityTypeInCart };
