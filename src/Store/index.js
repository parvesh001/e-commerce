import { configureStore, createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart data",
  initialState: { cartItems: [], totalPrice: 0 },
  reducers: {
    addToCart(state, action) {
      if (!state.cartItems.length) {
        const cartData = {
          cartItems: [action.payload],
          totalPrice: +action.payload.productPrice,
        };
        return cartData;
      }

      let indexOfExistedItem = state.cartItems.findIndex((item) => {
        return (
          item.id === action.payload.id &&
          item.productSize === action.payload.productSize
        );
      });

      if (indexOfExistedItem !== -1) {
        let existedItem = state.cartItems[indexOfExistedItem];
        existedItem.productQuantity += action.payload.productQuantity;
      } else {
        state.cartItems.push(action.payload);
      }
      state.totalPrice +=
        +action.payload.productPrice * +action.payload.productQuantity;
    },
    
    removeFromCart(state, action) {
      const newProducts = state.cartItems.filter((product) => {
        return product.id !== action.payload;
      });
      const newTotalPrice = newProducts.reduce((acc, curr) => {
        acc += curr.productPrice * curr.productQuantity;
        return acc;
      }, 0);
      if (newProducts.length) {
        return { cartItems: newProducts, totalPrice: newTotalPrice };
      }

      return { cartItems: [], totalPrice: 0 };
    },
  },
});

export const cartSliceActions = cartSlice.actions;

const store = configureStore({
  reducer: { cart: cartSlice.reducer },
});

export default store;
