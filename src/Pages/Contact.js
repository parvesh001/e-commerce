import React from "react";
import ContactDetails from "../Components/Contact/ContactDetails";
import ContactForm from "../Components/Forms/ContactForm";
import GoToTop from "../Components/GoTop/GoToTop";
import style from "./Contact.module.scss";

export default function Contact() {
  return (
    <>
      <div className={style["contact-hero"]} />
      <div className="container">
       <ContactDetails/>
       <ContactForm/>
      </div>
      <GoToTop/>
    </>
  );
}
