import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favCharactersLength: 0,
  favsId: [],
  characters: [],
  // 
  newFavChar: {
    toAdd: false,
    char: {},
  },
};

export const favouritesSlice = createSlice({
  name: 'favourites',
  initialState: initialState,
  reducers: {
    setFavsId(state, action) {
      const arrId = action.payload.map(item => item.id);
      console.log('fav Slice', arrId);
      state.favsId = arrId;
    },
    setCharactersFetch(state, action) {
      // state.isLoading = true;
    },
    setCharacters(state, action) {
      let charsArr = action.payload;

      charsArr.forEach((element, i) => {
        const idx = state.favsId.indexOf(element.id);

        if (idx === -1) {
          charsArr[i].isFavourite = false;

        } else {
          charsArr[i].isFavourite = true;
        }
      });
      state.characters = charsArr;
      // console.log('chars', state.characters);
    },
    addCharOnLocalStorage(state, action) {
      state.newFavChar = action.payload;
      // console.log('new fav', state.newFavChar);
    },
    setCharacterFavourite(state, action) {
      let charIdx = -1;
      state.characters.find((item, i) => {
        if (item.id === action.payload.char.id) {
          charIdx = i;
          return item;
        }
      });

      console.log('set', action.payload);

      if (state.characters.length > 0 && action.payload.toAdd) {
        state.characters[charIdx].isFavourite = true;
      } else if (state.characters.length > 0){
        state.characters[charIdx].isFavourite = false;
      }
    },
  },
});

// export const getFavCharactersLength = (state) => state.favourites.favCharactersLength;
export const getFavCharacterId = (state) => state.favourites.favsId;
export const getCharacters = (state) => state.favourites.characters;
export const getNewFavChar = (state) => state.favourites.newFavChar;


export const {
  // setFavCharactersLength,
  setFavsId,
  addCharOnLocalStorage,

  // chars
  setCharactersFetch,
  setCharacters,
  setCharacterFavourite,
} = favouritesSlice.actions;

export default favouritesSlice.reducer;