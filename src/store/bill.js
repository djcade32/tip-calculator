import { createSlice } from "@reduxjs/toolkit";

const initialBillState = { billAmount: "", personAmount: 0 };

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
  },
});

export const billActions = billSlice.actions;

export default billSlice.reducer;
