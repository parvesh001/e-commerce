import React from "react";
import Product from "./Product";
import { Product__Data } from "./ProductsData";

export default function Products() {
  const Products = Product__Data.map((data) => {
    return (
      <Product
        key={data.id}
        srcImg={data.img}
        title={data.title}
        subTitle={data.subTitle}
        price={data.price}
      />
    );
  });
  const productsClasses = "px-md-5 px-2 row row-cols-1 row-cols-sm-3 row-cols-md-4";
  return (
    <div className="mt-2 mt-md-5">
      <div className="text-center">
        <h1 className="text-light">Featured Products</h1>
        <span className="bg-light px-1 px-md-2">
          Summer Collection Featured Products
        </span>
      </div>

      <div className={productsClasses}>
        {Products}
      </div>
    </div>
  );
}
