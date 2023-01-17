import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendingCartData } from "../../Store/cart-actions";
import { fetchingCartData } from "../../Store/cart-actions";

let initialRound = true;

export default function SideEffects() {
  const dispatch = useDispatch();
  const { change, cartItems, totalPrice } = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(fetchingCartData());
  }, [dispatch]);

  useEffect(() => {
    if (initialRound) {
      initialRound = false;
      return;
    }
    if (change) {
      dispatch(
        sendingCartData({
          cartItems,
          totalPrice,
        })
      );
    }
  }, [dispatch, change, cartItems, totalPrice]);

  return <div></div>;
}
