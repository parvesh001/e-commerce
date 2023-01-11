import React from "react";

export default function PlacedOrder() {
  return (
    <div className="mt-2 mt-md-5 container text-light text-center">
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
          <tr>
            <td>
              <img src={""} alt="product" width="80px" />
            </td>
            <td className="pt-4">Brand</td>
            <td className="pt-4">price</td>
            <td className="pt-4">quantity</td>
            <td className="pt-4">product total price</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <th>Total</th>
            <th>$200</th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}
