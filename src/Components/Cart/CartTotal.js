import React from "react";
import { useSelector } from "react-redux";
import TransparentButton from "../../UI/TransparentButton/TransparentButton";

export default function CartTotal() {
  const cartTotal = useSelector((state) => state.cart.totalPrice);
  console.log(cartTotal)
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
    <TransparentButton>Proceed to Checkout</TransparentButton>
    </div>
  );
}
