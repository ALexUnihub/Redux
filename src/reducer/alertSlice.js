import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  alertMessages: [],
  alertId: 0,
};

export const alertSlice = createSlice({
  name: 'alerts',
  initialState: initialState,
  reducers: {
    setAlertMessage(state, action) {
      if (action.payload.add) {
        state.alertMessages.push(action.payload.message);
      } else {
        const idx = state.alertMessages.indexOf(action.payload.message);
        if (idx > -1) {
          state.alertMessages.splice(idx, 1);
        }
      } 
    },
    setAlertId(state, action) {
      state.alertId = action.payload;
    }
  },
});

export const getAlertMessage = (state) => state.alerts.alertMessages;
export const getAlertId = (state) => state.alerts.alertId;

export const {
  setAlertMessage,
  setAlertId,
} = alertSlice.actions;

export default alertSlice.reducer;