import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: 0,
  char: null,
  episode: '',
}

export const currCharacterSlise = createSlice({
  name: 'currCharacter',
  initialState: initialState,
  reducers: {
    setCurrCharacter(state, action) {
      state.char = action.payload;
    },
    fetchCurrCharacter(state, action) {},
    setEpisode(state, action) {
      state.episode = action.payload;
    },
  },
});

export const getCurrCharacter = (state) => state.currCharacter.char;
export const getEpisode = (state) => state.currCharacter.episode;

export const {
  setCurrCharacter,
  fetchCurrCharacter,
} = currCharacterSlise.actions;

export default currCharacterSlise.reducer;