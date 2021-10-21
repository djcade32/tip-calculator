import { createSlice } from "@reduxjs/toolkit";

const initialBillState = { billAmount: "", personAmount: 0, isReset: false };

const billSlice = createSlice({
  name: "bill",
  initialState: initialBillState,
  reducers: {
    setBillAmount(state, action) {
      state.billAmount = action.payload;
    },
    setPersonAmount(state, action) {
      state.personAmount = action.payload;
    },
    reset(state, action) {
      state.isReset = action.payload;
    },
  },
});

export const billActions = billSlice.actions;

export default billSlice.reducer;
