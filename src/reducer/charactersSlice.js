import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  characters: [],
  // fav chars
  favCharacters: JSON.parse(localStorage.getItem('FAV_CHARS')),
};

export const favouritesSlice = createSlice({
  name: 'favourites',
  initialState: initialState,
  reducers: {
    // fav chars
    setFavCharacters(state, action) {
      state.favCharacters = action.payload;
    },
    setCharactersFetch(state, action) {
      // console.log(action.payload);
    },
    setCharacters(state, action) {
      state.characters = action.payload;
    },
    addCharacterToFavourits(state, action) {
      if (!state.favCharacters) {
        state.favCharacters = {};
      }
      state.favCharacters[action.payload.id] = action.payload;
    },
    removeCharacterFromFavourits(state, action) {
      delete state.favCharacters[action.payload.id];
    },
  },
});

export const getCharacters = (state) => state.favourites.characters;
// fav chars
export const getFavCharacters = (state) => state.favourites.favCharacters;


export const {
  // char
  setCharactersFetch,
  setCharacters,

  // fav chars
  setFavCharacters,
  addCharacterToFavourits,
  removeCharacterFromFavourits,
} = favouritesSlice.actions;

export default favouritesSlice.reducer;