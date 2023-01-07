import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { checkingOut } from "../Store/cart-actions";
import UserForm from "../Components/UserForm/UserForm";
import Model from "../UI/Model/Model";
import Alert from "../UI/Alert/Alert";
import { useNavigate } from "react-router-dom";

export default function UserDetails() {
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);
  
  const dispatch = useDispatch();
  const checkoutSubmitHandler = (userInfo) => {
    dispatch(
      checkingOut({
        cart: { cartItems: cart.cartItems, totalPrice: cart.totalPrice },
        userInformation: userInfo,
      })
    );
  };

  return (
    <div style={{ marginTop: "7rem" }} className="p-2 p-md-5">
      <UserForm onSubmit={checkoutSubmitHandler} btnText={"Check Out"} />
    </div>
  );
}
