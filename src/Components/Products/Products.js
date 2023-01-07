import React from "react";
import Product from "./Product";

export default function Products(props) {
  const Products = props.products.map((data) => {
    return (
      <Product
        key={data.id}
        srcImg={data.img}
        title={data.title}
        subTitle={data.subTitle}
        price={data.price}
        id={data.id}
      />
    );
  });
  const productsClasses = props.productsClasses;
  return (
    <div className="mt-2 mt-md-5">
      <div className="text-center">
        <h1 className="text-light">{props.productsTitle}</h1>
        <span className="bg-light px-1 px-md-2">{props.productsText}</span>
      </div>
      <div className={`${"px-md-1 px-lg-5"} ${productsClasses}`}>{Products}</div>
    </div>
  );
}
