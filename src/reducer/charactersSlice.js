import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  characters: [],
  favCharacters: JSON.parse(localStorage.getItem('FAV_CHARS')),
};

export const charactersSlice = createSlice({
  name: 'characters',
  initialState: initialState,
  reducers: {
    setFavCharacters(state, action) {
      state.favCharacters = action.payload;
    },
    setCharactersFetch(state, action) {},
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

export const getCharacters = (state) => state.characters.characters;
export const getFavCharacters = (state) => state.characters.favCharacters;


export const {
  // char
  setCharactersFetch,
  setCharacters,

  setFavCharacters,
  addCharacterToFavourits,
  removeCharacterFromFavourits,
} = charactersSlice.actions;

export default charactersSlice.reducer;