import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    name: null,
    email: null,
    address: null,
    addressB: null,
    city: null,
    state: null,
    zip: null,
  },
  change: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    replaceUser(state, action) {
      state.user = action.payload;
    },
    setUser(state, action) {
      state.change = true;
      state.user = action.payload;
    },
  },
});

export const userSliceActions = userSlice.actions;
export default userSlice.reducer;
