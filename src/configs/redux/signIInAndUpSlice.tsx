import { createSlice } from "@reduxjs/toolkit";
type fieldType = "signIn" | "signUp";
type actionTypeInChangeField = {
  payload: fieldType;
};
const signIInAndUpSlice = createSlice({
  name: "signInAndUpSlice",
  initialState: {
    openedField: "signIn" as fieldType,
  },
  reducers: {
    changeField: (state) => {
      if (state.openedField == "signIn") {
        state.openedField = "signUp";
      } else {
        state.openedField = "signIn";
      }
    },
  },
});
let signInAndUpSliceReducer = signIInAndUpSlice.reducer;
let { changeField } = signIInAndUpSlice.actions;
export { signInAndUpSliceReducer, changeField };
export type { fieldType, actionTypeInChangeField };
