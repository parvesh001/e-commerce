import React, { useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import "../../../node_modules/bootstrap/js/dist/offcanvas";
import style from "./MainHeader.module.scss";
import { BsFillCartCheckFill } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import AuthContext from "../../Context/auth-context";
import { AiOutlineMenu } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";

export default function MainHeader() {
  const authCtx = useContext(AuthContext);
  const profileClickHandler = () => {
    if (!authCtx.isLogedin) {
      authCtx.setLocation("/user-profile");
    }
  };
  const linkClasses = (navData) =>
    navData.isActive
      ? `${"nav-link"} ${style.navLink} ${style.active}`
      : `${"nav-link"} ${style.navLink}`;
  return (
    <header className={style.mainHeader}>
      <nav className="navbar navbar-expand-md navbar-light bg-light fixed-top">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/home">
            <img src="/Images/logo/puma.png" width="100" alt="site-logo" />
          </Link>
          <button
            className={`${"navbar-toggler"} ${style.navbarToggler}`}
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
          >
            <AiOutlineMenu className={style.burger} />
          </button>
          <div
            className="offcanvas offcanvas-end"
            tabIndex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <img
                src="/Images/logo/puma.png"
                width="100"
                className="offcanvas-title"
                id="offcanvasNavbarLabel"
                alt="brand"
              />

              <RxCross2
                type="button"
                className={style.cross}
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              />
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item" data-bs-dismiss="offcanvas">
                  <NavLink
                    className={linkClasses}
                    aria-current="page"
                    to="/home"
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item" data-bs-dismiss="offcanvas">
                  <NavLink className={linkClasses} to="/shop">
                    Shop
                  </NavLink>
                </li>
                <li className="nav-item" data-bs-dismiss="offcanvas">
                  <NavLink className={linkClasses} to="/contact">
                    Contact
                  </NavLink>
                </li>
                <li className="nav-item" data-bs-dismiss="offcanvas">
                  <NavLink className={linkClasses} to="/about">
                    About
                  </NavLink>
                </li>
                <li className="nav-item" data-bs-dismiss="offcanvas">
                  <NavLink className={linkClasses} to="/user-orders">
                    Orders
                  </NavLink>
                </li>
                <li className="nav-item" data-bs-dismiss="offcanvas">
                  <NavLink className={linkClasses} to="/cart">
                    <BsFillCartCheckFill className="fs-4" />
                  </NavLink>
                </li>
                <li
                  className="nav-item"
                  onClick={profileClickHandler}
                  data-bs-dismiss="offcanvas"
                >
                  <NavLink
                    className={linkClasses}
                    to={
                      authCtx.isLogedin
                        ? "/user-profile"
                        : "/user-authentication"
                    }
                  >
                    <FaUserAlt className="fs-5" />
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
