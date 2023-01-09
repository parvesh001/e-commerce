import { configureStore } from "@reduxjs/toolkit";
import cartSliceReducer from "./cartSlice";
import indicatorSliceReducer from "./indicators";
import userSliceReducer from "./user"

const store = configureStore({
  reducer: {
    cart: cartSliceReducer,
    indicators: indicatorSliceReducer,
    user:userSliceReducer
  },
});

export default store;
