import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // currentPage: 1,
  pages: 1,
  name: '',
  toShow: {
    characters: true,
    favourites: false,
  },
  isError: false,
  characters: null,
  favCharacters: [],
  inputValue: '',
  currCharacterId: 0,
  favChar: {},

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
      state.queryParams.page = 1;
    },
    setName(state, action) {
      state.queryParams.name = action.payload;
      state.queryParams.page = 1;
    },
    setPages(state, action) {
      state.pages = action.payload;
    },
    setToShow(state, action) {
      state.toShow = action.payload;
    },
    setCharactersFetch(state, action) {
      // console.log('fetch');
      state.isLoading = true;
    },
    setCharacters(state, action) {
      state.isLoading = false;
      state.characters = action.payload;
    },
    setFavCharacters(state, action) {
      if (action.payload.add) {
        let character = state.characters.find(item => item.id === action.payload.id)
        state.favCharacters.push(character);
        // console.log(`setFavCharacters: added:`, state.favCharacters.length,state.favCharacters[state.favCharacters.length-1].name, character.name);
      } else {
        let idx = state.favCharacters.findIndex((item) => item.id === action.payload.id);
        state.favCharacters.splice(idx, 1);
        // console.log(`setFavCharacters: removed:`, state.favCharacters.length);
      }
    },
    // setFavCharacterId(state, action) {
    //   state.favCharacterId = action.payload;
    // },
    setNextPage(state, action) {
      state.queryParams.page += action.payload;
    },
    setInputValue(state, action) {
      state.inputValue = action.payload;
    },
    setIsError(state, action) {
      state.isError = action.payload;
    },
    setCurrCharacter(state, action) {
      state.favChar = action.payload;
      state.isLoading = false;
    },
    fetchCurrCharacter(state, action) {
      state.isLoading = true;
      state.currCharacterId = action.payload;
    },
  },
});

export const getCurrentPage = (state) => state.manager.queryParams.page;
export const getPages = (state) => state.manager.pages;
export const getName = (state) => state.manager.name;
export const getToShow = (state) => state.manager.toShow;
export const getSpecies = (state) => state.manager.species;
export const getCharacters = (state) => state.manager.characters;
export const getFavCharacters = (state) => state.manager.favCharacters;
export const getCurrCharacterId = (state) => state.manager.currCharacterId;
export const getQueryParams = (state) => state.manager.queryParams;
export const getInputValue = (state) => state.manager.inputValue;
export const getIsError = (state) => state.manager.isError;
export const getCurrCharacter = (state) => state.manager.favChar;


export const {
  setCurrentPage,
  setName,
  setPages,
  setToShow,
  setSpecies,
  setCharacters,
  setFavCharacters,
  // setFavCharacterId,
  setNextPage,
  setInputValue,
  setIsError,
  setCurrCharacter,
  fetchCurrCharacter,

  // fetch
  setCharactersFetch,
} = stateManager.actions;

export default stateManager.reducer;