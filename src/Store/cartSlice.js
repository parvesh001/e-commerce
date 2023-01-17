import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart data",
  initialState: {
    cartItems: [],
    totalPrice: 0,
    change: false,
    isLoading: false,
    status: null,
    message: null,
    show: false,
  },
  reducers: {
    replaceCartData(state, action) {
      state.cartItems = action.payload.cartItems;
      state.totalPrice = action.payload.totalPrice;
    },
    addToCart(state, action) {
      state.change = true;
      let indexOfExistedItem = state.cartItems.findIndex((item) => {
        return (
          item.id === action.payload.id &&
          item.productSize === action.payload.productSize
        );
      });

      if (indexOfExistedItem !== -1) {
        state.cartItems[indexOfExistedItem].productQuantity +=
          action.payload.productQuantity;
      } else {
        state.cartItems.push(action.payload);
      }
      state.totalPrice +=
        +action.payload.productPrice * +action.payload.productQuantity;
    },

    removeFromCart(state, action) {
      if (state.cartItems.length > 1) {
        const newProducts = state.cartItems.filter((product) => {
          return (
            product.id !== action.payload.id ||
            product.productSize !== action.payload.size
          );
        });
        const newTotalPrice = newProducts.reduce((acc, curr) => {
          acc += curr.productPrice * curr.productQuantity;
          return acc;
        }, 0);
        state.cartItems = newProducts;
        state.totalPrice = newTotalPrice;
        state.change = true;
      } else {
        return { cartItems: [], totalPrice: 0, change: true };
      }
    },
    cartReset(state) {
      state.cartItems = [];
      state.totalPrice = 0;
      state.change = true;
    },
    setLoading(state,action) {
      state.isLoading = action.payload
    },
    setAlert(state, action) {
      state.show = action.payload.show;
      state.status = action.payload.status;
      state.message = action.payload.message;
    },
    setShow(state) {
      state.show = false;
    },
  },
});

export const cartSliceActions = cartSlice.actions;
export default cartSlice.reducer;
