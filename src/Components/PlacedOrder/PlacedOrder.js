
import React from "react";

export default function PlacedOrder(props) {
  const { orderedItems,totalPrice } = props;

  return (
    <div className="mt-2 mt-md-5 container text-light text-center overflow-auto">
      <h5>Placed Order</h5>
      <table className="table text-light">
        <thead>
          <tr>
            <th>IMAGE</th>
            <th>PRODUCT</th>
            <th>PRICE</th>
            <th>QUANTITY</th>
            <th>SUBTOTAL</th>
          </tr>
        </thead>
        <tbody>
          {orderedItems.map((item) => {
            let productSubtotal =
              item.productPrice * item.productQuantity;
            return (
              <tr  key={`${item.id}${item.productSize}`}>
                <td>
                  <img src={item.srcImg} alt="product" width="80px" />
                </td>
                <td className="pt-4">{item.productBrand}</td>
                <td className="pt-4">{item.productPrice}</td>
                <td className="pt-4">{item.productQuantity}</td>
                <td className="pt-4">{`$${productSubtotal}`}</td>
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <tr>
            <th>Total</th>
            <th>{`$${totalPrice}`}</th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
