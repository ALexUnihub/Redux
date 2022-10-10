import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  alertMessages: [],
  alertId: 0,

  // fix
  alertMessages: [] ,
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
    },

    // fix
    addAlert(state, action) {
      state.alertMessages.push({
        id: state.alertId + 1,
        message: `${action.payload} added to favourites`,
      });
    },
    removeAlert(state, action) {
      
    },
  },
});

export const getAlertMessage = (state) => state.alerts.alertMessages;
export const getAlertId = (state) => state.alerts.alertId;

export const {
  setAlertMessage,
  setAlertId,

  // fix
  addAlert,
  removeAlert,
} = alertSlice.actions;

export default alertSlice.reducer;