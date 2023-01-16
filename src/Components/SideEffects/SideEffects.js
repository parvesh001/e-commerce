import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { gettingUser, settingUser } from "../../Store/user-actions";
import { sendingCartData } from "../../Store/cart-actions";
import { fetchingCartData } from "../../Store/cart-actions";

let initialRound = true;
let isInitialRoundForUser = true;

export default function SideEffects() {
  const dispatch = useDispatch();
  const cartData = useSelector((state) => state.cart);
  const {user,change} = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(fetchingCartData());
    dispatch(gettingUser());
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

  useEffect(() => {
    if (isInitialRoundForUser) {
      isInitialRoundForUser = false;
      return;
    }
    if (change) {
      dispatch(settingUser(user));
    }
  }, [dispatch, user, change]);

  return <div></div>;
}
