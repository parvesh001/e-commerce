import React from "react";
import CartTable from "../Components/Cart/CartTable";
import style from "./Cart.module.scss";
import { useSelector } from "react-redux";
import CartTotal from "../Components/Cart/CartTotal";


export default function Cart() {
  const cartItems = useSelector((state) => state.cart.cartItems)
  if(!cartItems.length){
    return <div className={style['empty-cart']}> <h4>Your Cart is Empty!</h4></div>
   
  }
  return (
    <>
      <div className={style["user-cart"]} />
      <CartTable/>
      <CartTotal/>
    </>
  );
}
