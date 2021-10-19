import { createSlice } from "@reduxjs/toolkit";

const initialBillState = { billAmount: "" };

const billSlice = createSlice({
  name: "bill",
  initialState: initialBillState,
  reducers: {
    setBillAmount(state, action) {
      state.billAmount = action.payload;
    },
  },
});

export const billActions = billSlice.actions;

export default billSlice.reducer;
