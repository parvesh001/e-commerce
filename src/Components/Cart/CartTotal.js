import React, { useContext } from "react";
import { useNavigate,useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import TransparentButton from "../../UI/TransparentButton/TransparentButton";
import AuthContext from "../../Context/auth-context";

export default function CartTotal() {
  const location = useLocation();
  const cartTotal = useSelector((state) => state.cart.totalPrice);
  const navigate = useNavigate();
  const authCtx = useContext(AuthContext)
  
  const checkoutHandler = ()=>{
    if(!authCtx.isLogedin){
      authCtx.setLocation(location.pathname)
      navigate("/user-authentication")
    }
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
