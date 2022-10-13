import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    loginRequest(state, action) {},
    registerRquest(state, action) {},
    loginSucceded(state, action) {
      state.user = action.payload;
    },
    loginFailed(state, action) {
      state.user = action.payload;
    },
    logout(state, action) {
      state.user = null;
    },
  },
});

export const getUser = (state) => state.auth.user;

export const {
  loginRequest,
  registerRquest,
  loginSucceded,
  loginFailed,
  logout,
} = authSlice.actions;

export default authSlice.reducer;