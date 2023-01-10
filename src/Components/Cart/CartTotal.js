import React, { useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import TransparentButton from "../../UI/TransparentButton/TransparentButton";
import AuthContext from "../../Context/auth-context";
import { checkingOut } from "../../Store/cart-actions";

export default function CartTotal() {
  const location = useLocation();
  const dispatch = useDispatch();
  const cartTotal = useSelector((state) => state.cart.totalPrice);
  const { cartItems, totalPrice } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.user);
  const { status } = useSelector((state) => state.indicators);
  const navigate = useNavigate();
  const authCtx = useContext(AuthContext);

  const checkoutHandler = () => {
    if (!authCtx.isLogedin) {
      authCtx.setLocation(location.pathname);
      navigate("/user-authentication");
    } else {
      dispatch(
        checkingOut({
          customer: user,
          orderedItems: cartItems,
          total: totalPrice,
        })
      );
    }
  };

  if (status === "successful") {
    setTimeout(() => {
      navigate("/home");
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
