import React from "react";
import Product from "./Product";
import { Product__Data } from "./ProductsData";

export default function Products(props) {
  const Products = Product__Data.map((data) => {
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
  const productsClasses =
    "px-md-5 px-2 row row-cols-1 row-cols-sm-3 row-cols-md-4 gx-0";
  return (
    <div className="mt-2 mt-md-5">
      <div className="text-center">
        <h1 className="text-light">{props.productsTitle}</h1>
        <span className="bg-light px-1 px-md-2">{props.productsText}</span>
      </div>
      <div className={productsClasses}>{Products}</div>
    </div>
  );
}
