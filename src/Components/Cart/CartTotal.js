import React, { useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import TransparentButton from "../../UI/TransparentButton/TransparentButton";
import AuthContext from "../../Context/auth-context";
import { cartSliceActions } from "../../Store/cartSlice";

const CartTotal = ({ setLoading, setAlert }) => {
  const location = useLocation();
  const dispatch = useDispatch();
  const cartTotal = useSelector((state) => state.cart.totalPrice);
  const { cartItems, totalPrice } = useSelector((state) => state.cart);
  const navigate = useNavigate();
  const authCtx = useContext(AuthContext);

  const checkoutHandler = () => {
    if (!authCtx.isLogedin) {
      authCtx.setLocation(location.pathname);
      navigate("/user-authentication");
    } else {
      const checkOut = async () => {
        try {
          setLoading(true);
          const userID = JSON.parse(localStorage.getItem("userID"));
          const response = await fetch(
            `https://e-commerce-eb5e0-default-rtdb.firebaseio.com/users/${userID}/placedOrder.json`,
            {
              method: "PUT",
              body: JSON.stringify({
                orderedItems: cartItems,
                total: totalPrice,
              }),
              headers: {
                "Content-Type": "application/json",
              },
            }
          );

          if (!response.ok) {
            throw new Error("Failed to Checkout!");
          }
          setLoading(false);
          setAlert({
            show: true,
            status: "successful",
            message: "Oreder Placed Successfully",
          });
          setTimeout(() => {
            setAlert({ show: false, status: null, message: null });
            dispatch(cartSliceActions.cartReset());
          }, 1000);
          
        } catch (error) {
          setLoading(false);
          setAlert({
            show: true,
            status: "unsuccessful",
            message: "Oreder Can't Be Placed",
          });
          setTimeout(() => {
            setAlert({ show: false, status: null, message: null });
          }, 1000);
        }
      };
      checkOut();
    }
  };

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
};

export default CartTotal;
