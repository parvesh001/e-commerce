import React from "react";
import Features from "../Components/Features/Features";
import Hero from "../Components/Hero/Hero";
import Products from "../Components/Products/Products";

export default function Home() {
  return (
    <React.Fragment>
      <Hero />
      <Features/>
      <Products/>
    </React.Fragment>
  );
}
