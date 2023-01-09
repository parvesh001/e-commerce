import React, { useState } from "react";
import { useSelector } from "react-redux";
import AuthForm from "../Components/Auth/AuthForm";
import UserForm from "../UI/Forms/UserForm";
import Model from "../UI/Model/Model";
import Alert from "../UI/Alert/Alert";

export default function Authentication() {
  const [showAuth, setShowAuth] = useState(true);
  const { isLoading, show, status, message } = useSelector(
    (state) => state.indicators
  );

  const showAuthHandler = (boolean) => {
    setShowAuth(boolean);
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
        style={{ height: "100vh" }}
      >
        {show && <Alert className={status} alertMsg={message} />}
        {!showAuth && <UserForm />}
        {showAuth && <AuthForm showAuth={showAuthHandler} />}
      </div>
    </React.Fragment>
  );
}
