import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLogin: document.cookie.includes('isLogin'),
};

export const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    loginRequest(state, action) {},
    registerRquest(state, action) {},
    loginFailed(state, action) {},
    logout(state, action) {},
    setIsLogin(state, action) {
      state.isLogin = action.payload;
    }
  },
});

export const getIsLogin = (state) => state.auth.isLogin;

export const {
  loginRequest,
  registerRquest,
  loginFailed,
  logout,
  setIsLogin,
} = authSlice.actions;

export default authSlice.reducer;