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
  const { isLoading, show, status, message } = useSelector(
    (state) => state.indicators
  );

  const dispatch = useDispatch();
  const checkoutSubmitHandler = (userInfo) => {
    dispatch(
      checkingOut({
        cart: { cartItems: cart.cartItems, totalPrice: cart.totalPrice },
        userInformation: userInfo,
      })
    );
    setTimeout(()=>{
      navigate("/home")
    },1000)
  };

  return (
    <div style={{ marginTop: "7rem" }} className="p-2 p-md-5">
      {isLoading && (
        <Model>
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </Model>
      )}
      {show && <Alert className={status} alertMsg={message} />}
      <UserForm onSubmit={checkoutSubmitHandler} btnText={"Check Out"} />
    </div>
  );
}
