import { configureStore } from "@reduxjs/toolkit";
import { screenSizeSliceReducer } from "./screenSize";

let store = configureStore({
  reducer: {
    screenSize: screenSizeSliceReducer,
  },
});
export { store };
