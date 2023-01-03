import React from "react";
import { GiCancel } from "react-icons/gi";
import { useSelector,useDispatch } from "react-redux";
import { cartSliceActions } from "../../Store";

export default function CartTable() {
  const cartData = useSelector((state) => state.cart.cartItems);
  const dispatch = useDispatch();
  const {removeFromCart} = cartSliceActions;

  const productCancelHandler = (id)=>{
          dispatch(removeFromCart(id))
  }
  return (
    <table className="table mt-2 mt-md-5 container text-light text-center">
      <thead>
        <tr>
          <th>Remove</th>
          <th>IMAGE</th>
          <th>PRODUCT</th>
          <th>PRICE</th>
          <th>QUANTITY</th>
          <th>SUBTOTAL</th>
        </tr>
      </thead>
      <tbody>
        {cartData.map((data) => {
          const productTotalPrice = data.productPrice * data.productQuantity;
          return (
            <tr key={data.id}>
              <td className="pt-4">
                <GiCancel onClick={productCancelHandler.bind(null,data.id)} style={{cursor:"pointer"}}/>
              </td>
              <td>
                <img src={data.srcImg} alt="product" width="80px" />
              </td>
              <td className="pt-4">{data.productBrand}</td>
              <td className="pt-4">${data.productPrice}</td>
              <td className="pt-4">
                {data.productQuantity}
              </td>
              <td className="pt-4">${productTotalPrice}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
