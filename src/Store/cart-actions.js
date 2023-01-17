import { cartSliceActions } from "./cartSlice";

export const sendingCartData = (cartData) => {
  return (dispatch) => {
    let cartItems = [];
    let totalPrice = 0;
    if (cartData) {
      cartItems = cartData.cartItems;
      totalPrice = cartData.totalPrice;
    }
    const sendCartData = async () => {
      try {
        dispatch(cartSliceActions.setLoading(true));
        const userID = JSON.parse(localStorage.getItem("userID"));
        const response = await fetch(
          `https://e-commerce-eb5e0-default-rtdb.firebaseio.com/users/${userID}/cart.json`,
          {
            method: "PUT",
            body: JSON.stringify({ cartItems, totalPrice }),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error("Item Can Not be Added!");
        }
        dispatch(cartSliceActions.setLoading(false));
        dispatch(
          cartSliceActions.setAlert({
            show: true,
            status: "successful",
            message: "Item Added Successfully",
          })
        );
        setTimeout(() => {
          dispatch(
            cartSliceActions.setAlert({
              show: false,
              status: null,
              message: null,
            })
          );
        }, 1000);
      } catch (error) {
        dispatch(cartSliceActions.setLoading(false));
        dispatch(
          cartSliceActions.setAlert({
            show: true,
            status: "unsuccessful",
            message: error.message,
          })
        );
        setTimeout(() => {
          dispatch(
            cartSliceActions.setAlert({
              show: false,
              status: null,
              message: null,
            })
          );
        }, 1000);
      }
    };
    sendCartData();
  };
};

export const fetchingCartData = () => {
  return async (dispatch) => {
    const fetchCartData = async () => {
      try {
        const userID = JSON.parse(localStorage.getItem("userID"));
        const response = await fetch(
          `https://e-commerce-eb5e0-default-rtdb.firebaseio.com/users/${userID}/cart.json`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch cart data");
        }
        const data = await response.json();
        return data;
      } catch (error) {
        console.log(error);
      }
    };
    const cartData = await fetchCartData();
    let cartItems = [];
    let totalPrice = 0;
    if (cartData && cartData.cartItems) {
      cartItems = cartData.cartItems;
      totalPrice = cartData.totalPrice;
    }
    dispatch(
      cartSliceActions.replaceCartData({
        cartItems,
        totalPrice,
      })
    );
  };
};
