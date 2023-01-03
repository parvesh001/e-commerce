import React, { useState } from "react";
import Pagination from "../Components/Pagination/Pagination";
import Products from "../Components/Products/Products";
import { Product__Data } from "../Components/Products/ProductsData";
import style from "./Shop.module.scss";

export default function Shop() {
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(6);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = Product__Data.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const paginatePage=(number)=>{
    setCurrentPage(number)
  }

  return (
    <>
      <div className={`${style["shop-now"]}`}>
        <h1>#Stay Home</h1>
        <h6 className="bg-light px-2 p-1 d-inline">
          Save more with coupans and up to 70%!!
        </h6>
      </div>
      <Products
        products={currentProducts}
        productsClasses={"row row-cols-1 row-cols-sm-3 gx-0"}
        productsTitle={"Shop Now To Save Money"}
        productsText={"Connect with us & save money"}
      />
      <Pagination totalProducts={Product__Data.length} productsSeil={productsPerPage} paginate={paginatePage}/>
    </>
  );
}
