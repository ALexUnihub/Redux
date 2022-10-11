import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pages: 1,
  isError: false,
  inputValue: '',
};

export const stateManager = createSlice({
  name: 'manager',
  initialState: initialState,
  reducers: {
    setPages(state, action) {
      state.pages = action.payload;
      state.isError = false;
    },
    setInputValue(state, action) {
      state.inputValue = action.payload;
    },
    setIsError(state, action) {
      state.isError = action.payload;
    },
  },
});

export const getPages = (state) => state.manager.pages;
export const getInputValue = (state) => state.manager.inputValue;
export const getIsError = (state) => state.manager.isError;

export const {
  setPages,
  setInputValue,
  setIsError,
} = stateManager.actions;

export default stateManager.reducer;