import React from "react";
import CartTable from "../Components/Cart/CartTable";
import style from "./Cart.module.scss";
import { useSelector } from "react-redux";
import CartTotal from "../Components/Cart/CartTotal";
import Model from "../UI/Model/Model";

export default function Cart() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const { isLoading } = useSelector((state) => state.indicators);

  if (isLoading) {
    return (
      <Model>
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </Model>
    );
  }

  if (!isLoading && !cartItems.length) {
    return (
      <div className={style["empty-cart"]}>
        <h4>Your Cart is Empty!</h4>
      </div>
    );
  }

  return (
    <>
      <div className={style["user-cart"]} />
      <div className="overflow-auto">
      <CartTable />
      </div>
      <CartTotal />
    </>
  );
}
