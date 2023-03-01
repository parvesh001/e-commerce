import React, { useContext } from "react";
import useInput from "../../Hooks/use-input";
import TransparentButton from "../../UI/TransparentButton/TransparentButton";
import style from "./UserForm.module.scss";
import AuthContext from "../../Context/auth-context";
import { useNavigate } from "react-router-dom";
import GoToTop from "../GoTop/GoToTop";

export default function UserForm(props) {
  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();

  const {
    inputValue: nameValue,
    inputIsValid: nameIsValid,
    inputIsInvalid: nameIsInvalid,
    inputChangeHandler: nameChangeHandler,
    blurHandler: nameBlurHandler,
    reset: nameReset,
  } = useInput((value) => value.trim() !== "");
  const {
    inputValue: addressValue,
    inputIsValid: addressIsValid,
    inputIsInvalid: addressIsInvalid,
    inputChangeHandler: addressChangeHandler,
    blurHandler: addressBlurHandler,
    reset: addressReset,
  } = useInput((value) => value.trim() !== "");
  const {
    inputValue: addressBValue,
    inputIsValid: addressBIsValid,
    inputIsInvalid: addressBIsInvalid,
    inputChangeHandler: addressBChangeHandler,
    blurHandler: addressBBlurHandler,
    reset: addressBReset,
  } = useInput((value) => value.trim() !== "");
  const {
    inputValue: cityValue,
    inputIsValid: cityIsValid,
    inputIsInvalid: cityIsInvalid,
    inputChangeHandler: cityChangeHandler,
    blurHandler: cityBlurHandler,
    reset: cityReset,
  } = useInput((value) => value.trim() !== "");
  const {
    inputValue: stateValue,
    inputIsValid: stateIsValid,
    inputIsInvalid: stateIsInvalid,
    inputChangeHandler: stateChangeHandler,
    blurHandler: stateBlurHandler,
  } = useInput((value) => value.trim() !== "");
  const {
    inputValue: zipValue,
    inputIsValid: zipIsValid,
    inputIsInvalid: zipIsInvalid,
    inputChangeHandler: zipChangeHandler,
    blurHandler: zipBlurHandler,
    reset: zipReset,
  } = useInput((value) => value.trim() !== "");

  let formIsValid = false;

  if (
    nameIsValid &&
    addressIsValid &&
    addressBIsValid &&
    cityIsValid &&
    stateIsValid &&
    zipIsValid
  ) {
    formIsValid = true;
  }

  const formSubmitHandler = async (event) => {
    props.setLoading(true)
    event.preventDefault();
    try {
      const response = await fetch("http://localhost:8080/api/v1/users/userInfo", {
        method: "POST",
        body: JSON.stringify({
          name: nameValue,
          address: addressValue,
          addressB: addressBValue,
          city: cityValue,
          state: stateValue,
          zip: zipValue,
        }),
        headers: {
          "Authorization":`Bearer ${props.token}`,
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message);
      }
      props.setLoading(false)
      props.setAlert({
        show: true,
        message: "User Saved",
        status: "successful",
      });
      setTimeout(() => {
        props.setAlert({ show: false, message: null, status: null });
      }, 1000);
      setTimeout(()=>{
        authCtx.saveToken(props.token);
        navigate(authCtx.location);
      },1000)
    } catch (error) {
      props.setLoading(false)
      props.setAlert({
        show: true,
        message: error.message,
        status: "unsuccessful",
      });
      setTimeout(() => {
        props.setAlert({ show: false, message: null, status: null });
      }, 1000);
    }

    nameReset();
    addressReset();
    addressBReset();
    cityReset();
    zipReset();
  };

  const nameInputClasses = nameIsInvalid
    ? `${"col-md-6"} ${style.formInput} ${style.inValid}`
    : `${"col-md-6"} ${style.formInput}`;
  const addressInputClasses = addressIsInvalid
    ? `${"col-md-12"} ${style.formInput} ${style.inValid}`
    : `${"col-md-12"} ${style.formInput}`;
  const addressBInputClasses = addressBIsInvalid
    ? `${"col-md-12"} ${style.formInput} ${style.inValid}`
    : `${"col-md-12"} ${style.formInput}`;
  const cityInputClasses = cityIsInvalid
    ? `${"col-md-6"} ${style.formInput} ${style.inValid}`
    : `${"col-md-6"} ${style.formInput}`;
  const stateInputClasses = stateIsInvalid
    ? `${"col-md-4"} ${style.formInput} ${style.inValid}`
    : `${"col-md-4"} ${style.formInput}`;
  const zipInputClasses = zipIsInvalid
    ? `${"col-md-2"} ${style.formInput} ${style.inValid}`
    : `${"col-md-2"} ${style.formInput}`;

  return (
    <div className={`${style["user-form"]} ${"container"}`}>
      <div className="d-flex justify-content-center">
        <h4 className="text-center d-inline-block mb-2 mb-md-5">
          PROVIDE MORE DETAILS
        </h4>
      </div>
      <form className="row g-3" onSubmit={formSubmitHandler}>
        <div className={nameInputClasses}>
          <label htmlFor="inputName" className="form-label">
            Name
          </label>
          <input
            onChange={nameChangeHandler}
            onBlur={nameBlurHandler}
            value={nameValue}
            type="text"
            className="form-control"
            id="inputName"
          />
        </div>
        <div className={addressInputClasses}>
          <label htmlFor="inputAddress" className="form-label">
            Address
          </label>
          <input
            onChange={addressChangeHandler}
            onBlur={addressBlurHandler}
            value={addressValue}
            type="text"
            className="form-control"
            id="inputAddress"
            placeholder="1234 Main St"
          />
        </div>
        <div className={addressBInputClasses}>
          <label htmlFor="inputAddress2" className="form-label">
            Address 2
          </label>
          <input
            onChange={addressBChangeHandler}
            onBlur={addressBBlurHandler}
            value={addressBValue}
            type="text"
            className="form-control"
            id="inputAddress2"
            placeholder="Apartment, studio, or floor"
          />
        </div>
        <div className={cityInputClasses}>
          <label htmlFor="inputCity" className="form-label">
            City
          </label>
          <input
            onChange={cityChangeHandler}
            onBlur={cityBlurHandler}
            value={cityValue}
            type="text"
            className="form-control"
            id="inputCity"
          />
        </div>
        <div className={stateInputClasses}>
          <label htmlFor="inputState" className="form-label">
            State
          </label>
          <select
            onChange={stateChangeHandler}
            onBlur={stateBlurHandler}
            value={stateValue}
            id="inputState"
            className="form-select"
          >
            <option defaultValue={"Choose"}>Choose...</option>
            <option>Delhi</option>
            <option>UP</option>
            <option>Bihar</option>
            <option>Haryana</option>
          </select>
        </div>
        <div className={zipInputClasses}>
          <label htmlFor="inputZip" className="form-label">
            Zip
          </label>
          <input
            onChange={zipChangeHandler}
            onBlur={zipBlurHandler}
            value={zipValue}
            type="text"
            className="form-control"
            id="inputZip"
          />
        </div>

        <div className="col-12">
          <TransparentButton type="submit" disabled={!formIsValid}>
            Submit
          </TransparentButton>
        </div>
      </form>
      <GoToTop />
    </div>
  );
}
