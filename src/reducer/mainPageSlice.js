import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pages: 1,
  isError: false,
  inputValue: '',
};

export const mainPageSlice = createSlice({
  name: 'mainPage',
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

export const getPages = (state) => state.mainPage.pages;
export const getInputValue = (state) => state.mainPage.inputValue;
export const getIsError = (state) => state.mainPage.isError;

export const {
  setPages,
  setInputValue,
  setIsError,
} = mainPageSlice.actions;

export default mainPageSlice.reducer;