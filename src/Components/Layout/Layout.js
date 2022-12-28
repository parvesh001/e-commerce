import React from "react";
import Footer from "./Footer";
import MainHeader from "./MainHeader";

export default function Layout(props) {
  return (
    <React.Fragment>
      <MainHeader />
      <main>{props.children}</main>
      <Footer />
    </React.Fragment>
  );
}
