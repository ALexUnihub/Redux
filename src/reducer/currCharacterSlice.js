import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currCharacterId: 0,
  currChar: {
    char: {},
    episode: '',
  },
}

export const currCharacterSlise = createSlice({
  name: 'currCharacter',
  initialState: initialState,
  reducers: {
    setCurrCharacter(state, action) {
      state.currChar.char = action.payload.character;
      state.currChar.episode = action.payload.episode;
    },
    fetchCurrCharacter(state, action) {
      state.currCharacterId = action.payload;
    },
  },
});

export const getCurrCharacterId = (state) => state.currCharacter.currCharacterId;
export const getCurrCharacter = (state) => state.currCharacter.currChar;

export const {
  setCurrCharacter,
  fetchCurrCharacter,
} = currCharacterSlise.actions;

export default currCharacterSlise.reducer;