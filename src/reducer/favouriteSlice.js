import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favCharactersLength: 0,
};

export const favouritesSlice = createSlice({
  name: 'favourites',
  initialState: initialState,
  reducers: {
    setFavCharactersLength(state, action) {
      state.favCharactersLength = action.payload;
    },
  },
});

export const getFavCharactersLength = (state) => state.favourites.favCharactersLength;

export const {
  setFavCharactersLength,
} = favouritesSlice.actions;

export default favouritesSlice.reducer;