import { createSlice } from "@reduxjs/toolkit";

let screenSizeSlice = createSlice({
  name: "screenSize",
  initialState: { screenWidth: 0 },
  reducers: {
    updateScreenWidth: (state, action) => {
      state.screenWidth = action.payload;
    },
  },
});
let screenSizeSliceReducer = screenSizeSlice.reducer;
let { updateScreenWidth } = screenSizeSlice.actions;
type rootType = {
  screenSize: {
    screenWidth: number;
  };
};
export { screenSizeSliceReducer, updateScreenWidth };
export type { rootType };
