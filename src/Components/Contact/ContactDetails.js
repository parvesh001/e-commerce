import React from "react";
import {
  BiCurrentLocation,
  BiEnvelope,
  BiPhoneCall,
  BiTimeFive,
} from "react-icons/bi";

export default function ContactDetails() {
  return (
    <div className="row row-cols-1 row-cols-md-2 text-light py-2 py-md-5">
      <div>
        <p style={{ color: "#ffffff80" }}>GET IN TOUCH</p>
        <h4>Visit one of our agency locations</h4>
        <h6>Head Office</h6>
        <div>
          <BiCurrentLocation />{" "}
          <span>1789 Glasgow Street, Sector 17, New York</span>
        </div>
        <div>
          <BiEnvelope /> <span>Desire001@gmail.com</span>
        </div>
        <div>
          <BiPhoneCall /> <span>+91 9200000000</span>
        </div>
        <div>
          <BiTimeFive /> <span>Monday to Saturday till 9 O'clock!</span>
        </div>
      </div>
      <div className="border py-2 mt-2">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d143322.8742582892!2d-4.372540514105641!3d55.855380652429666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x488815562056ceeb%3A0x71e683b805ef511e!2sGlasgow%2C%20UK!5e0!3m2!1sen!2sin!4v1655455138779!5m2!1sen!2sin"
          style={{border:"0",width:"100%", height:"100%"}}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="google map"
        />
      </div>
    </div>
  );
} 
