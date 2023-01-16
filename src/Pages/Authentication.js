import React, { useContext, useState } from "react";
import { useSelector } from "react-redux";
import AuthForm from "../Components/Forms/AuthForm";
import UserForm from "../Components/Forms/UserForm";
import Model from "../UI/Model/Model";
import Alert from "../UI/Alert/Alert";
import AuthContext from "../Context/auth-context";
import GoToTop from "../Components/GoTop/GoToTop";

export default function Authentication() {
  const authCtx = useContext(AuthContext);
  const [token, setToken] = useState("");
  const { isLoading, show, status, message } = useSelector(
    (state) => state.indicators
  );

  const tokenHandler = (token) => {
    setToken(token);
  };

  return (
    <React.Fragment>
      {isLoading && (
        <Model>
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </Model>
      )}
      <div
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        {show && <Alert className={status} alertMsg={message} />}
        {authCtx.isSignedup && <UserForm token={token} />}
        {!authCtx.isSignedup && (
          <AuthForm getToken={tokenHandler} />
        )}
      </div>
      <GoToTop/>
    </React.Fragment>
  );
}
