import React from "react";
import { Link } from "react-router-dom";
import { AiFillStar, AiOutlineShoppingCart } from "react-icons/ai";

export default function Product(props) {
  return (
    <div className="p-2 p-md-3">
      <div className="card">
        <img src={props.srcImg} className="card-img-top" alt="product-img" />
        <div className="card-body">
          <h4 className="card-title mb-0">{props.title}</h4>
          <p style={{ color: "#f96058", fontSize: "small", margin: "0" }}>
            <i>{props.subTitle}</i>
          </p>
          <div className="text-warning d-flex gap-2 fs-3 mt-1">
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </div>
          <h4 className="mt-1">{props.price}</h4>
          <div>
            <AiOutlineShoppingCart
              style={{ cursor: "pointer" }}
              className="d-block ms-auto fs-3"
            >
              <Link />
            </AiOutlineShoppingCart>
          </div>
        </div>
      </div>
    </div>
  );
}
