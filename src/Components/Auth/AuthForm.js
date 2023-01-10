import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../Context/auth-context";
import { indicatorActions } from "../../Store/indicators";
import useInput from "../../Hooks/use-input";
import TransparentButton from "../../UI/TransparentButton/TransparentButton";
import style from "./AuthForm.module.scss";
import { useDispatch } from "react-redux"; 

export default function AuthForm(props) {
  const dispatch = useDispatch();
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

  const modeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  let formIsValid = false;
  if (emailInputIsValid && passwordInputIsValid) {
    formIsValid = true;
  }

  const authFormSubmitHandler = (event) => {
    event.preventDefault();

    let url;
    if (isLogin) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCNhFI9T4RLwVxvuPPwIrxNJKccDAR7vVA";
    } else {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCNhFI9T4RLwVxvuPPwIrxNJKccDAR7vVA";
    }
    dispatch(indicatorActions.setLoading(true));
    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: emailInputValue,
        password: passwordInputValue,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        dispatch(indicatorActions.setLoading(false));
        if (!res.ok) {
          return res.json().then((data) => {
            throw new Error(data.error.message);
          });
        } else {
          return res.json();
        }
      })
      .then((data) => {
        dispatch(
          indicatorActions.setAlerts({
            show: true,
            status: "successful",
            message: isLogin
              ? "Loggedin Successfully"
              : "Created Account Successfully",
          })
        );
        if (isLogin) {
          authCtx.login(data.idToken);
          authCtx.signup(true)
          setTimeout(()=>{
            navigate(authCtx.location);
          },1000)
        } else {
          setTimeout(()=>{
            authCtx.signup(true)
            props.getToken(data.idToken)
          },1200)
        }
        setTimeout(() => {
          dispatch(indicatorActions.setShow());
        }, 1000);
      })
      .catch((error) => {
        dispatch(
          indicatorActions.setAlerts({
            show: true,
            status: "unsuccessful",
            message: error.message,
          })
        );
        setTimeout(() => {
          dispatch(indicatorActions.setShow());
        }, 1000);
      });

    emailInputReset();
    passwordInputReset();
  };

  const emailInputClasses = emailInputIsInvalid
    ? `${"mb-3"} ${style.formInput} ${style.invalid}`
    : `${"mb-3"} ${style.formInput}`;
  const passwordInputClasses = passwordInputIsInvalid
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
