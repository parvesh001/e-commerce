import { configureStore } from "@reduxjs/toolkit";
import cartSliceReducer from "./cartSlice";
import indicatorSliceReducer from "./indicators";

const store = configureStore({
  reducer: {
    cart: cartSliceReducer,
    indicators: indicatorSliceReducer,
  },
});

export default store;
