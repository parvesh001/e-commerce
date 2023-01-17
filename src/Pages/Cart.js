import React, { useReducer } from "react";
import CartTable from "../Components/Cart/CartTable";
import style from "./Cart.module.scss";
import CartTotal from "../Components/Cart/CartTotal";
import Model from "../UI/Model/Model";
import Alert from "../UI/Alert/Alert";
import GoToTop from "../Components/GoTop/GoToTop";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

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

export default function Cart() {
  const navigate = useNavigate();
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

  if (sideEffect.status === "successful") {
    setTimeout(() => {
      navigate("/user-orders");
    }, 1000);
  }

  const { cartItems } = useSelector((state) => state.cart);

  let cartMainContent;
  if (!cartItems.length && !sideEffect.isLoading && sideEffect.status===null) {
    cartMainContent = (
      <div className="text-center text-light mt-2 mt-md-3 pb-md-5">
        <h4>Your Cart is Empty!</h4>
      </div>
    );
  }
  if (cartItems.length) {
    cartMainContent = (
      <div className="overflow-auto">
        <CartTable />
        <CartTotal
          setLoading={setIsLoadingHandler}
          setAlert={setAlertHandler}
        />
      </div>
    );
  }

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
      <div className={style["user-cart"]} />
      {cartMainContent}
      <GoToTop />
    </React.Fragment>
  );
}
