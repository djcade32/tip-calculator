import { configureStore } from "@reduxjs/toolkit";
import BillReducer from "./bill";
import selectedTipOptionReducer from "./selected-tip-option";

const store = configureStore({
  reducer: { bill: BillReducer, selectedTipOption: selectedTipOptionReducer },
});

export default store;
