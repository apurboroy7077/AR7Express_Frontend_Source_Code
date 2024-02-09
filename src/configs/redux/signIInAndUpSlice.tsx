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
    setSpecificField: (state, action: actionTypeInChangeField) => {
      state.openedField = action.payload;
    },
  },
});
let signInAndUpSliceReducer = signIInAndUpSlice.reducer;
let { changeField, setSpecificField } = signIInAndUpSlice.actions;
export { signInAndUpSliceReducer, changeField, setSpecificField };
export type { fieldType, actionTypeInChangeField };
