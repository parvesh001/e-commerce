import React from "react";
import { Product__Data } from "../Components/Products/ProductsData";
import Features from "../Components/Features/Features";
import UsersReviews from "../Components/UsersReviews/UsersReviews";
import Hero from "../Components/Hero/Hero";
import Products from "../Components/Products/Products";
import TemplateA from "../Components/Templates/TemplateA";

export default function Home() {
  return (
    <React.Fragment>
      <Hero />
      <Features />
     <Products
        products={Product__Data}
        productsClasses="row row-cols-1 row-cols-sm-3 row-cols-md-4 gx-0"
        productsTitle={"Featured Products"}
        productsText={"Outstanding Collection of Featured Products"}
      /> 
      <TemplateA
        templateTitle={"Special Offer!"}
        templateText={"UP TO 70% off - All T-shirts and Accessories"}
        templateBtn={"Explore More"}
      />
      <Products
        products={Product__Data}
        productsClasses="row row-cols-1 row-cols-sm-3 row-cols-md-4 gx-0"
        productsTitle={"New Arrival Products"}
        productsText={"Outstanding Collection of New Arrival Products"}
      />
      <UsersReviews/>
    </React.Fragment>
  );
}
