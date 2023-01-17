import React from "react";
import CartTable from "../Components/Cart/CartTable";
import style from "./Cart.module.scss";
import { useSelector } from "react-redux";
import CartTotal from "../Components/Cart/CartTotal";
import Model from "../UI/Model/Model";
import Alert from "../UI/Alert/Alert";
import GoToTop from "../Components/GoTop/GoToTop";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const { isLoading, show, message, status } = useSelector(
    (state) => state.indicators
  );


  return (
    <React.Fragment>
      <div className={style["user-cart"]}>
        {show && <Alert className={status} alertMsg={message} />}
        {isLoading && (
          <Model>
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </Model>
        )}
      </div>
      {!cartItems.length && !isLoading && (
        <div className="text-center text-light mt-2 mt-md-3">
          <h4>Your Cart is Empty!</h4>
        </div>
      )}
      {cartItems.length && (
        <div className="overflow-auto">
          <CartTable />
          <CartTotal />
        </div>
      )}
      <GoToTop />
    </React.Fragment>
  );
};

export default Cart;
