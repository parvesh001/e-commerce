import React, { useState } from "react";
import TransparentButton from "../../UI/TransparentButton/TransparentButton";
import { cartSliceActions } from "../../Store";
import { useDispatch } from "react-redux";
import style from "./SingleProduct.module.scss";

export default function SingleProduct(props) {
  const {id, srcImg, productBrand, productType, productPrice } = props;
  const [productQuantity, setProductQuantity] = useState("");
  const [productSize, setProductSize] = useState("Select Size");
  
  const dispatch = useDispatch();
  const { addToCart } = cartSliceActions;

  const sizeChangeHandler = (event) => {
    setProductSize(event.target.value);
  };
  const quantityChangeHandler = (event) => {
    setProductQuantity(event.target.value);
  };

  const cartFormSubmitHandler = (event) => {
    event.preventDefault();
    if (productSize !== "Select Size" && productQuantity > 0) {
      const itemData = {
        id,
        srcImg,
        productBrand,
        productPrice,
        productQuantity:+productQuantity,
        productSize,
      };
      
      dispatch(addToCart(itemData));
    }
    setProductQuantity("");

  };

  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-md-2">
        <div className={`${style["singleProductImg"]} px-3 px-md-5`}>
          <img src={srcImg} alt="selected product" width="100%" />
        </div>
        <div>
          <div className="mt-2 mt-md-0">
            <h6>{productBrand}</h6>
            <h4>{productType}</h4>
            <h5>{`$ ${productPrice}`}</h5>
          </div>
          <div>
            <select
              onChange={sizeChangeHandler}
              className="form-select form-select-sm w-25 mb-3"
            >
              <option defaultValue={productSize}>Select Size</option>
              <option value="sm">sm</option>
              <option value="md">md</option>
              <option value="lg">lg</option>
              <option value="xl">xl</option>
            </select>
          </div>
          <form
            onSubmit={cartFormSubmitHandler}
            className="d-flex mb-3 gap-md-2"
          >
            <input
              onChange={quantityChangeHandler}
              value={productQuantity}
              type="number"
              name="product-quantity"
            />
            <TransparentButton type="submit">Add To Cart</TransparentButton>
          </form>
        </div>
        <div className={style["product-details"]}>
          <h6
            className="py-1 px-2 bg-light d-inline"
            style={{ color: "#e63129" }}
          >
            Product Details
          </h6>
          <p className="pt-2">{props.productDetails}</p>
        </div>
      </div>
    </div>
  );
}
