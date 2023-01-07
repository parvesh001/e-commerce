import { indicatorActions } from "./indicators";
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
      dispatch(indicatorActions.setLoading(true));
      try {
        const response = await fetch(
          "https://e-commerce-eb5e0-default-rtdb.firebaseio.com/cart.json",
          {
            method: "PUT",
            body: JSON.stringify({ cartItems, totalPrice }),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to send data!");
        }

        dispatch(indicatorActions.setLoading(false));
        dispatch(
          indicatorActions.setAlerts({
            show: true,
            status: "successful",
            message: "data sent successfully",
          })
        );
        setTimeout(() => {
          dispatch(indicatorActions.setShow());
        }, 1000);
      } catch (error) {
        dispatch(indicatorActions.setLoading(false));
        dispatch(
          indicatorActions.setAlerts({
            show: true,
            status: "unsuccessful",
            message: error.message,
          })
        );
        setTimeout(() => {
          dispatch(indicatorActions.setShow());
        }, 1000);
      }
    };
    sendCartData();
  };
};

export const fetchingCartData = () => {
  return async (dispatch) => {
    dispatch(indicatorActions.setLoading(true));
    const fetchCartData = async () => {
      try {
        const response = await fetch(
          "https://e-commerce-eb5e0-default-rtdb.firebaseio.com/cart.json"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch cart data");
        }
        const data = await response.json();
        return data;
      } catch (error) {
        dispatch(indicatorActions.setLoading(false));
        alert(error.message);
      }
    };

    const cartData = await fetchCartData();
    let cartItems = [];
    let totalPrice = 0;
    if (cartData.cartItems) {
      cartItems = cartData.cartItems;
      totalPrice = cartData.totalPrice;
    }
    dispatch(
      cartSliceActions.replaceCartData({
        cartItems,
        totalPrice,
      })
    );
    dispatch(indicatorActions.setLoading(false));
  };
};

export const checkingOut = (info) => {
  return (dispatch) => {
    const checkOut = async () => {
      dispatch(indicatorActions.setLoading(true))
      try {
        const response = await fetch(
          "https://e-commerce-eb5e0-default-rtdb.firebaseio.com/placedOrder.json",
          {
            method: "PUT",
            body: JSON.stringify(info),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (!response.ok) {
          throw new Error("Failed to Checkout!");
        }
        dispatch(indicatorActions.setLoading(false))
        dispatch(indicatorActions.setAlerts({
          show:true,
          status:"successful",
          message:"Order Placed Successfully"
        }))
        setTimeout(()=>{
          dispatch(indicatorActions.setShow())
          dispatch(cartSliceActions.cartReset());
        },1000)
      } catch (error) {
        dispatch(indicatorActions.setLoading(false))
        dispatch(indicatorActions.setAlerts({
          show:true,
          status:"unsuccessful",
          message:"Order failed to Place"
        }))
        setTimeout(()=>{
          dispatch(indicatorActions.setShow())
        },1000)
      }
    };
    checkOut();
  };
};
