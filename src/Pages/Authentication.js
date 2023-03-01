import React, { useState, useReducer } from "react";
import AuthForm from "../Components/Forms/AuthForm";
import UserForm from "../Components/Forms/UserForm";
import Alert from "../UI/Alert/Alert"
import Model from "../UI/Model/Model"
import style from "./Authentication.module.scss";

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
  const [signupToken, setSignupToken] = useState(null);
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

  const signupTokenHandler = (token) => {
    setSignupToken(token);
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
      <div className={style["auth-page-container"]}>
        {!signupToken && <AuthForm setLoading={setIsLoadingHandler} setAlert={setAlertHandler} onSignupToken={signupTokenHandler} />}
        {signupToken && <UserForm setLoading={setIsLoadingHandler} setAlert={setAlertHandler} token={signupToken} />}
      </div>
    </React.Fragment>
  );
}
