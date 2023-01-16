import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../Context/auth-context";
import style from "./Footer.module.scss";

export default function Footer() {
 const authCtx =  useContext(AuthContext)
  const containerClasses = `${"container-fluid px-2 px-sm-4 px-md-5 py-2 py-md-5 mt-2 mt-md-5 bg-light overflow-hidden"} ${
    style["footer"]
  }`;
  const footerClasses = "row row-cols-1 row-cols-sm-2 row-cols-md-4 mt-3";
  return (
    <div className={containerClasses}>
      <div className={style["site-logo"]}>
        <img src="/Images/logo/puma.png" width="100" alt="site-logo" />
      </div>
      <div className={footerClasses}>
        <div>
          <h6>Contacts</h6>
          <p>
            Address: <span>Sector 17, Rohini, New Delhi</span>
          </p>
          <p>
            Phone No: <span>+91-9999999999</span>
          </p>
          <p>
            House: <span>1255/General House keeping colony</span>
          </p>
        </div>
        <div>
          <h6>About</h6>
          <ul>
            <li>
              <Link to="/about">About Us</Link>
            </li>
            <li>
              <Link>Delivery Information</Link>
            </li>
            <li>
              <Link>Privacy Policy</Link>
            </li>
            <li>
              <Link>Terms & Conditions</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>
        <div>
          <h6>My Account</h6>
          <ul>
            <li>
              <Link style={{cursor:authCtx.isLogedin?"not-allowed":"pointer",color:authCtx.isLogedin?"#e632295e":"#e63129"}} to={!authCtx.isLogedin?"/user-authentication":authCtx.location}>Sign In</Link>
            </li>
            <li>
              <Link to="/cart">View Cart</Link>
            </li>
            <li>
              <Link>Trace Order</Link>
            </li>
            <li>
              <Link>My Wishlist</Link>
            </li>
          </ul>
        </div>
        <div>
          <h6>Install App</h6>
          <div>
            <p>From App or Google Play Store</p>
            <div>
              <Link>
                <img src="/Images/Applications logos/apple.png" alt="apple logo" />
              </Link>
              <Link>
                <img src="/Images/Applications logos/play-store.png" alt="play store logo" />
              </Link>
            </div>
          </div>
          <div>
            <p>Secured Payment Gateway</p>
            <div>
              <Link>
                
                <img src="/Images/Applications logos/paypal.png" alt="paypal logo" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
