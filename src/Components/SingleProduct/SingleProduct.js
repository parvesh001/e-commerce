import React from "react";
import TransparentButton from "../../UI/TransparentButton/TransparentButton";
import style from "./SingleProduct.module.scss";

export default function SingleProduct(props) {
  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-md-2">
        <div className={`${style['singleProductImg']} px-3 px-md-5`}>
          <img src={props.srcImg} alt="selected product" width="100%" />
        </div>
        <div>
          <div className="mt-2 mt-md-0">
            <h6>{props.productBrand}</h6>
            <h4>{props.productType}</h4>
            <h5>{`$ ${props.productPrice}`}</h5>
          </div>
          <div>
            <select className="form-select form-select-sm w-25 mb-3">
              <option defaultValue={"Select Size"}>Select Size </option>
              <option value="1">sm</option>
              <option value="2">md</option>
              <option value="3">lg</option>
              <option value="3">xl</option>
            </select>
          </div>
          <div className="d-flex mb-3 gap-md-2">
            <input type="number" name="product-quantity" />
            <TransparentButton>Add To Cart</TransparentButton>
          </div>
        </div>
         <div className={style['product-details']}>
            <h6 className="py-1 px-2 bg-light d-inline" style={{color:"#e63129"}}>Product Details</h6>
            <p className="pt-2">{props.productDetails}</p>
          </div>
      </div>
    </div>
  );
}
