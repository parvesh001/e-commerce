import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  status: null,
  message: null,
  show: false,
};
const indicatorSlice = createSlice({
  name: "indicators",
  initialState,
  reducers:{
    setLoading(state,action){
      state.isLoading = action.payload
    },
    setAlerts(state,action){
        state.show = action.payload.show
        state.status = action.payload.status
        state.message = action.payload.message
    },
    setShow(state){
        state.show = false
    }
  }
});

export const indicatorActions = indicatorSlice.actions;

export default indicatorSlice.reducer;