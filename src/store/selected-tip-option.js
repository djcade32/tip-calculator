import { createSlice } from "@reduxjs/toolkit";

const initialSelectedTipOptionState = {
  selectedTipOption: "",
  isChange: false,
};

const selectedTipOptionSlice = createSlice({
  name: "selected-tip-option",
  initialState: initialSelectedTipOptionState,
  reducers: {
    setTipOption(state, action) {
      state.selectedTipOption = action.payload;
    },
    isChange(state, action) {
      state.isChange = action.payload;
    },
  },
});

export const selectedTipOptionActions = selectedTipOptionSlice.actions;

export default selectedTipOptionSlice.reducer;
