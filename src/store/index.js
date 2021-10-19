import { configureStore } from "@reduxjs/toolkit";
import BillReducer from "./bill";

const store = configureStore({
  reducer: { bill: BillReducer },
});

export default store;
