import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  lastAlertId: 0,
  alertMessages: {},
};

export const alertSlice = createSlice({
  name: 'alerts',
  initialState: initialState,
  reducers: {
    addAlert(state, action) {
      state.lastAlertId++;
      state.alertMessages[state.lastAlertId] = action.payload;
    },
    removeAlert(state, action) {
      delete state.alertMessages[action.payload];
    },
  },
});

export const getAlertMessage = (state) => state.alerts.alertMessages;
export const getLastAlertId = (state) => state.alerts.lastAlertId;

export const {
  removeAlert,
  addAlert,
} = alertSlice.actions;

export default alertSlice.reducer;