import React from "react";
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
        productsTitle={"Featured Products"}
        productsText={"Outstanding Collection of Featured Products"}
      /> 
      <TemplateA
        templateTitle={"Special Offer!"}
        templateText={"UP TO 70% off - All T-shirts and Accessories"}
        templateBtn={"Explore More"}
      />
      <Products
        productsTitle={"New Arrival Products"}
        productsText={"Outstanding Collection of New Arrival Products"}
      />
      <UsersReviews/>
    </React.Fragment>
  );
}
