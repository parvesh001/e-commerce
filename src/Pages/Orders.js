import React, { useContext, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import PlacedOrder from "../Components/PlacedOrder/PlacedOrder";
import TransparentButton from "../UI/TransparentButton/TransparentButton";
import { Link, useNavigate } from "react-router-dom";
import GoToTop from "../Components/GoTop/GoToTop";
import AuthContext from "../Context/auth-context";
import Modal from "../UI/Model/Model";

export default function Orders() {
  const [placedOrderItems, setPlacedOrderItems] = useState(null);
  const [placedOrderTotal, setPlacedOrderTotal] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const MainContainer = {
    marginTop: "6.5rem",
    paddingBottom: "5rem",
    color: "#fff",
    textAlign: "center",
    minHeight: "30vh",
  };

  useEffect(() => {
    const fetchPlacedOrder = async () => {
      try {
        setIsLoading(true);
        const userID = JSON.parse(localStorage.getItem("userID"));
        const response = await fetch(
          `https://e-commerce-eb5e0-default-rtdb.firebaseio.com/users/${userID}/placedOrder.json`
        );

        if (!response.ok) {
          throw new Error("Failed To Fetch Ordered Details!!");
        }
        const data = await response.json();
        setIsLoading(false);
        let orderedItems = [];
        let total = 0;
        if (data && data.orderedItems) {
          orderedItems = data.orderedItems;
          total = data.total;
        }
        setPlacedOrderItems(orderedItems);
        setPlacedOrderTotal(total);
      } catch (error) {
        setIsLoading(false);
        console.log(error);
      }
    };
    fetchPlacedOrder();
  }, [dispatch]);

  const authCtx = useContext(AuthContext);
  if (!authCtx.isLogedin && !isLoading) {
    return (
      <div style={MainContainer}>
        <h4>Please Login First</h4>
        <TransparentButton>
          <Link to="/user-authentication" className="text-decoration-none">
            Login
          </Link>
        </TransparentButton>
        <GoToTop />
      </div>
    );
  }

  if (isLoading) {
    return (
      <>
        <div style={{ height: "100vh" }} />
        <Modal>
          <div className="text-center">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        </Modal>
      </>
    );
  }

  if ((!isLoading && !placedOrderItems) || !placedOrderItems.length) {
    return (
      <div style={MainContainer}>
        <h6 className="mb-2 mb-md-3">You Have Not Placed Any Order Yet!</h6>
        <TransparentButton onClick={() => navigate("/shop")}>
          Shop Now
        </TransparentButton>
        <GoToTop />
      </div>
    );
  }

  return (
    <div style={MainContainer}>
      <PlacedOrder
        orderedItems={placedOrderItems || []}
        totalPrice={placedOrderTotal}
      />
      <GoToTop />
    </div>
  );
}
