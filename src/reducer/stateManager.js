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
  
  // fetch
  isLoading: false,
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
    },

    setCharactersFetch(state, action) {
      state.isLoading = true;
      
    },
    setCharacters(state, action) {
      state.isLoading = false;
      state.characters = action.payload;
    },

    setNextPage(state, action) {
      state.queryParams.page += action.payload;
    },
    setInputValue(state, action) {
      state.inputValue = action.payload;
    },
    setIsError(state, action) {
      state.isError = action.payload;
    },
 
  },
});

export const getCurrentPage = (state) => state.manager.queryParams.page;
export const getPages = (state) => state.manager.pages;

export const getSpecies = (state) => state.manager.species;
export const getCharacters = (state) => state.manager.characters;


export const getQueryParams = (state) => state.manager.queryParams;
export const getInputValue = (state) => state.manager.inputValue;
export const getIsError = (state) => state.manager.isError;



export const {
  setCurrentPage,
  setName,
  setPages,
  setSpecies,
  setCharacters,

  setNextPage,
  setInputValue,
  setIsError,

  // fetch
  setCharactersFetch,
} = stateManager.actions;

export default stateManager.reducer;