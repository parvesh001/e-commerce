import React from "react";
import { useParams } from "react-router-dom";
import GoToTop from "../Components/GoTop/GoToTop";
import Model from "../UI/Model/Model";
import { Product__Data } from "../Components/Products/ProductsData";
import SingleProduct from "../Components/SingleProduct/SingleProduct";
import style from "./ProductDetail.module.scss";
import Alert from "../UI/Alert/Alert";
import { useSelector } from "react-redux";

export default function ProductDetail() {
  const { isLoading, show, message, status } = useSelector(
    (state) => state.indicators
  );
  

  const params = useParams();
  const product = Product__Data.filter((pro) => {
    return pro.id === params.productId;
  });
  const productDetails =
    "When it comes to comfortable clothing, there’s nothing that beats a t-shirt. Regardless of the fabric, design, or color, it will be comfortable when you put a t-shirt on. You can also wear t-shirts for countless activities, including working out, spending time with friends, hiking, and more.When it comes to comfortable clothing, there’s nothing that beats a t-shirt. Regardless of the fabric, design, or color, it will be comfortable when you put a t-shirt on. You can also wear t-shirts for countless activities, including working out, spending time with friends, hiking, and more.";

  return (
    <React.Fragment>
      {isLoading && (
        <Model>
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </Model>
      )}

      {show && <Alert className={status} alertMsg={message} />}
      <div className={style["product-detail"]}>
        <SingleProduct
          id={product[0].id}
          srcImg={product[0].img}
          productBrand={product[0].title}
          productType={product[0].subTitle}
          productPrice={product[0].price}
          productDetails={productDetails}

        />
        <GoToTop />
      </div>
    </React.Fragment>
  );
}
