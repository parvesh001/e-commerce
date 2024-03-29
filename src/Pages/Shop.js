import React, { useState } from "react";
import GoToTop from "../Components/GoTop/GoToTop";
import Pagination from "../Components/Pagination/Pagination";
import Products from "../Components/Products/Products";
import { Product__Data } from "../Components/Products/ProductsData";
import style from "./Shop.module.scss";

export default function Shop() {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = Product__Data.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const paginatePage = (number) => {
    setCurrentPage(number);
  };

  return (
    <>
      <div className={`${style["shop-now"]}`}/>
      <Products
        products={currentProducts}
        productsClasses={"row row-cols-1 row-cols-sm-3 gx-0"}
        productsTitle={"Shop Now To Save Money"}
        productsText={"Connect with us & save money"}
      />
      <Pagination
        totalProducts={Product__Data.length}
        productsSeil={productsPerPage}
        paginate={paginatePage}
      />
      <GoToTop/>
    </>
  );
}
