import React, { useContext, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import TransparentButton from "../../UI/TransparentButton/TransparentButton";
import AuthContext from "../../Context/auth-context";
import { checkingOut } from "../../Store/cart-actions";

 const CartTotal = ({checkOut}) =>{
  const [isClicked,setIsClicked] =useState(false)
  const location = useLocation();
  const dispatch = useDispatch();
  const cartTotal = useSelector((state) => state.cart.totalPrice);
  const { cartItems, totalPrice } = useSelector((state) => state.cart);
  const { status } = useSelector((state) => state.indicators);
  const navigate = useNavigate();
  const authCtx = useContext(AuthContext);

  const checkoutHandler = () => {
    checkOut();
    if (!authCtx.isLogedin) {
      authCtx.setLocation(location.pathname);
      navigate("/user-authentication");
    } else { 
      dispatch(
        checkingOut({
          orderedItems: cartItems,
          total: totalPrice,
        })

      );
      setIsClicked(true)
      
    }

  };

  if (isClicked && status === "successful") {
    setTimeout(() => {
      navigate("/user-orders");
    }, 1000);
  }
 

  return (
    <div className="container">
      <table className="table text-light mt-2 mt-sm-3 mt-md-5">
        <thead>
          <tr>
            <th>Card Total</th>
            <td> </td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Cart Subtotal</td>
            <td>${cartTotal}</td>
          </tr>
          <tr>
            <td>Shipping</td>
            <td>Free</td>
          </tr>
          <tr>
            <th>Total</th>
            <td>${cartTotal}</td>
          </tr>
        </tbody>
      </table>
      <TransparentButton onClick={checkoutHandler}>
        Proceed to Checkout
      </TransparentButton>
    </div>
  );
}

export default CartTotal