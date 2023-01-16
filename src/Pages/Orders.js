import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PlacedOrder from "../Components/PlacedOrder/PlacedOrder";
import { indicatorActions } from "../Store/indicators";
import Model from "../UI/Model/Model";
import Alert from "../UI/Alert/Alert";
import TransparentButton from "../UI/TransparentButton/TransparentButton";
import { useNavigate } from "react-router-dom";
import GoToTop from "../Components/GoTop/GoToTop";

export default function Orders() {
  const [placedOrder, setPlacedOrder] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, status, message, show } = useSelector(
    (state) => state.indicators
  );

  useEffect(() => {
    const fetchPlacedOrder = async () => {
      dispatch(indicatorActions.setLoading(true));
      try {
        const response = await fetch(
          "https://e-commerce-eb5e0-default-rtdb.firebaseio.com/placedOrder.json"
        );
        if (!response.ok) {
          throw new Error("Failed To Fetch Ordered Details!!");
        }
        dispatch(indicatorActions.setLoading(false));
        dispatch(
          indicatorActions.setAlerts({
            show: true,
            status: "successful",
            message: "Successfully Fetched Ordered Details",
          })
        );
        setTimeout(() => {
          dispatch(
            indicatorActions.setAlerts({
              show: false,
              status: null,
              message: null,
            })
          );
        }, 1000);
        const data = await response.json();
        setPlacedOrder(data);
      } catch (error) {
        dispatch(indicatorActions.setLoading(false));
        dispatch(
          indicatorActions.setAlerts({
            show: true,
            status: "unsuccessful",
            message: error.message,
          })
        );
        setTimeout(() => {
          dispatch(
            indicatorActions.setAlerts({
              show: false,
              status: null,
              message: null,
            })
          );
        }, 1000);
      }
    };
    fetchPlacedOrder();
  }, []);

  return (
    <div
      style={{
        marginTop: "6.5rem",
        color: "#fff",
        textAlign: "center",
        minHeight:"30vh"
      }}
    >
      {show && status === "unsuccessful" && (
        <Alert className={status} alertMsg={message} />
      )}

      {isLoading && (
        <Model>
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </Model>
      )}

      {!placedOrder && !isLoading && (
        <div>
          <h6 className="mb-2 mb-md-3">You Have Not Placed Any Order Yet!</h6>
          <TransparentButton onClick={() => navigate("/shop")}>
            Shop Now
          </TransparentButton>
        </div>
      )}
      {placedOrder && (
        <PlacedOrder
          orderedItems={placedOrder.orderedItems}
          totalPrice={placedOrder.total}
        />
      )}
      <GoToTop/>
    </div>
  );
}
