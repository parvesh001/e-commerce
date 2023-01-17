import React, { useContext, useState, useReducer } from "react";
import AuthForm from "../Components/Forms/AuthForm";
import UserForm from "../Components/Forms/UserForm";
import Model from "../UI/Model/Model";
import Alert from "../UI/Alert/Alert";
import AuthContext from "../Context/auth-context";
import GoToTop from "../Components/GoTop/GoToTop";

const initialState = {
  isLoading: false,
  show: false,
  message: null,
  status: null,
};
const sideEffectReducer = (state, action) => {
  if (action.type === "SET_LOADING") {
    return {
      isLoading: action.value,
      show: state.show,
      message: state.message,
      status: state.status,
    };
  }
  if (action.type === "SET_ALERT") {
    return {
      isLoading: state.isLoading,
      show: action.value.show,
      message: action.value.message,
      status: action.value.status,
    };
  }
};

export default function Authentication() {
  const authCtx = useContext(AuthContext);
  const [token, setToken] = useState("");

  const [sideEffect, dispatchSideEffect] = useReducer(
    sideEffectReducer,
    initialState
  );
  const setIsLoadingHandler = (boolean) => {
    dispatchSideEffect({ type: "SET_LOADING", value: boolean });
  };
  const setAlertHandler = (alertKeys) => {
    dispatchSideEffect({ type: "SET_ALERT", value: alertKeys });
  };

  const tokenHandler = (token) => {
    setToken(token);
  };

  return (
    <React.Fragment>
      {sideEffect.isLoading && (
        <Model>
          <div className="text-center">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        </Model>
      )}
      {!sideEffect.isLoading && sideEffect.show && (
        <Alert className={sideEffect.status} alertMsg={sideEffect.message} />
      )}
      <div
        className="d-flex align-items-center justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        {authCtx.isSignedup && (
          <UserForm
            token={token}
            setLoading={setIsLoadingHandler}
            setAlert={setAlertHandler}
          />
        )}
        {!authCtx.isSignedup && (
          <AuthForm
            getToken={tokenHandler}
            setLoading={setIsLoadingHandler}
            setAlert={setAlertHandler}
            status = {sideEffect.status}
          />
        )}
      </div>
      <GoToTop />
    </React.Fragment>
  );
}
