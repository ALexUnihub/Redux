import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pages: 1,
  isError: false,
  characters: [],
  inputValue: '',
  queryParams: {
    page: 1,
    species: 'all',
    name: '',
  },
};

export const stateManager = createSlice({
  name: 'manager',
  initialState: initialState,
  reducers: {
    setCurrentPage(state, action) {
      state.queryParams.page = action.payload;
    },
    setSpecies(state, action) {
      state.queryParams.species = action.payload;
    },
    setName(state, action) {
      state.queryParams.name = action.payload;
    },
    setPages(state, action) {
      state.pages = action.payload;
      state.isError = false;
    },
    setNextPage(state, action) {
      state.queryParams.page += action.payload;
    },
    setInputValue(state, action) {
      state.inputValue = action.payload;
    },
    setIsError(state, action) {
      state.isError = action.payload;
      state.pages = 1;
      state.queryParams.page = 1;
    },
  },
});

export const getCurrentPage = (state) => state.manager.queryParams.page;
export const getPages = (state) => state.manager.pages;
export const getSpecies = (state) => state.manager.species;
export const getQueryParams = (state) => state.manager.queryParams;
export const getInputValue = (state) => state.manager.inputValue;
export const getIsError = (state) => state.manager.isError;

export const {
  setCurrentPage,
  setName,
  setSpecies,
  setPages,
  setNextPage,
  setInputValue,
  setIsError,
} = stateManager.actions;

export default stateManager.reducer;