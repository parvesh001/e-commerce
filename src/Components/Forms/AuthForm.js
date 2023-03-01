import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../Context/auth-context";
import useInput from "../../Hooks/use-input";
import TransparentButton from "../../UI/TransparentButton/TransparentButton";
import style from "./AuthForm.module.scss";

export default function AuthForm(props) {
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(false);
  const {
    inputValue: emailInputValue,
    inputIsValid: emailInputIsValid,
    inputIsInvalid: emailInputIsInvalid,
    inputChangeHandler: emailInputChangeHandler,
    blurHandler: emailInputBlurHandler,
    reset: emailInputReset,
  } = useInput((value) => value.includes("@"));
  const {
    inputValue: passwordInputValue,
    inputIsValid: passwordInputIsValid,
    inputIsInvalid: passwordInputIsInvalid,
    inputChangeHandler: passwordInputChangeHandler,
    blurHandler: passwordInputBlurHandler,
    reset: passwordInputReset,
  } = useInput((value) => value.length > 7);
  const {
    inputValue: passwordConfirmInputValue,
    inputIsValid: passwordConfirmInputIsValid,
    inputIsInvalid: passwordConfirmInputIsInvalid,
    inputChangeHandler: passwordConfirmInputChangeHandler,
    blurHandler: passwordConfirmInputBlurHandler,
    reset: passwordConfirmInputReset,
  } = useInput((value) => value.length > 7);

  const modeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  let formIsValid = false;
  if (isLogin) {
    if (emailInputIsValid && passwordInputIsValid) {
      formIsValid = true;
    }
  } else {
    if (
      emailInputIsValid &&
      passwordInputIsValid &&
      passwordConfirmInputIsValid
    ) {
      formIsValid = true;
    }
  }

  const authFormSubmitHandler = async (event) => {
    props.setLoading(true);
    event.preventDefault();
    try {
      let response;
      if (isLogin) {
        response = await fetch("url", {
          method: "POST",
          body: JSON.stringify({
            email: emailInputValue,
            password: passwordInputValue,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        });
      } else {
        response = await fetch("http://localhost:8080/api/v1/users/signup", {
          method: "POST",
          body: JSON.stringify({
            email: emailInputValue,
            password: passwordInputValue,
            passwordConfirm: passwordConfirmInputValue,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        });
      }
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message);
      }
      props.setLoading(false);
      props.setAlert({
        show: true,
        message: "Request Accepted",
        status: "successful",
      });
      setTimeout(() => {
        props.setAlert({ show: false, message: null, status: null });
      }, 1000);
      const data = await response.json(); //{status:'success', token:'abc',data:{user}
      if (isLogin) {
        setTimeout(()=>{
          authCtx.saveToken(data.token);
          navigate(authCtx.location);
        },1000)
      } else {
        setTimeout(()=>{
          props.onSignupToken(data.token);
        },1000)
      }
      emailInputReset();
      passwordInputReset();
      passwordConfirmInputReset();
    } catch (error) {
      props.setLoading(false);
      props.setAlert({
        show: true,
        message: error.message,
        status: "unsuccessful",
      });
      setTimeout(() => {
        props.setAlert({ show: false, message: null, status: null });
      }, 1000);
    }
  };

  const emailInputClasses = emailInputIsInvalid
    ? `${"mb-3"} ${style.formInput} ${style.invalid}`
    : `${"mb-3"} ${style.formInput}`;
  const passwordInputClasses = passwordInputIsInvalid
    ? `${"mb-3"} ${style.formInput} ${style.invalid}`
    : `${"mb-3"} ${style.formInput}`;
  const passwordConfirmInputClasses = passwordConfirmInputIsInvalid
    ? `${"mb-3"} ${style.formInput} ${style.invalid}`
    : `${"mb-3"} ${style.formInput}`;

  return (
    <div className={style.authForm}>
      <h4 className="text-center mb-1 mb-md-2">
        {isLogin ? "Please Login" : "Please Create Account"}
      </h4>
      <form onSubmit={authFormSubmitHandler}>
        <div className={emailInputClasses}>
          <label htmlFor="userEmail" className="form-label">
            Email address
          </label>
          <input
            onChange={emailInputChangeHandler}
            onBlur={emailInputBlurHandler}
            value={emailInputValue}
            type="email"
            className="form-control"
            id="userEmail"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            <span>We'll never share your email with anyone else.</span>
          </div>
        </div>
        <div className={passwordInputClasses}>
          <label htmlFor="userPassword" className="form-label">
            Password
          </label>
          <input
            onChange={passwordInputChangeHandler}
            onBlur={passwordInputBlurHandler}
            value={passwordInputValue}
            type="password"
            className="form-control"
            id="userPassword"
          />
        </div>
        {!isLogin && (
          <div className={passwordConfirmInputClasses}>
            <label htmlFor="userPasswordConfirm" className="form-label">
              Confirm Password
            </label>
            <input
              onChange={passwordConfirmInputChangeHandler}
              onBlur={passwordConfirmInputBlurHandler}
              value={passwordConfirmInputValue}
              type="password"
              className="form-control"
              id="userPasswordConfirm"
            />
          </div>
        )}
        <TransparentButton type="submit" disabled={!formIsValid}>
          {isLogin ? "Login" : "Sign Up"}
        </TransparentButton>
      </form>
      <div className={style["mode"]} onClick={modeHandler}>
        <span>
          {isLogin ? "Create a new account" : "Login with existed account"}
        </span>
      </div>
    </div>
  );
}
