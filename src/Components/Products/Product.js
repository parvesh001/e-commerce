import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiFillStar, AiOutlineShoppingCart } from "react-icons/ai";

export default function Product(props) {
  const navigate = useNavigate();
  const productClickHandler = ()=>{
        navigate(`/shop/${props.id}`)
  }
  return (
    <div className="p-2 p-md-3" onClick={productClickHandler}  style={{ cursor: "pointer" }}>
      <div className="card">
        <img src={props.srcImg} className="card-img-top" alt="product-img" />
        <div className="card-body">
          <h4 className="card-title mb-0 text-nowrap">{props.title}</h4>
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
          <h4 className="mt-1">{`$ ${props.price}`}</h4>
          <div>
            <AiOutlineShoppingCart className="d-block ms-auto fs-3"/>
          </div>
        </div>
      </div>
    </div>
  );
}
