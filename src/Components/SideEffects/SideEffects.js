import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendingCartData } from "../../Store/cart-actions";
import { fetchingCartData } from "../../Store/cart-actions";

let initialRound = true;

export default function SideEffects() {
  const dispatch = useDispatch();
  const cartData = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(fetchingCartData());
  }, [dispatch]);

  useEffect(() => {
    if (initialRound) {
      initialRound = false;
      return;
    }
    if (cartData.change) {
      dispatch(sendingCartData(cartData));
    }
  }, [dispatch, cartData]);

 

  return <div></div>;
}
