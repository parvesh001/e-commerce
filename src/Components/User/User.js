import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../Context/auth-context";
import Model from "../../UI/Model/Model";

export default function User() {
  const authCtx = useContext(AuthContext);
  const user = useSelector((state) => state.user.user);
  const { isLoading, message, status } = useSelector(
    (state) => state.indicators
  );
  const navigate = useNavigate();
  const logoutHandler = () => {
    navigate("/home");
    authCtx.logout();
  };
  if (isLoading) {
    return (
      <Model>
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </Model>
    );
  }
  if (status === "unsuccessful") {
    return <p className="text-light">{message}</p>;
  }

  return (
    <div className="text-light">
      <h6>Name</h6> : <span>{user.name}</span>
      <h6>Email</h6> : <span>{user.email}</span>
      <h6>Address</h6> : <span>{user.address}</span>
      <h6>Address 2</h6> : <span>{user.addressB}</span>
      <h6>City</h6> : <span>{user.city}</span>
      <h6>State</h6> : <span>{user.state}</span>
      <h6>Zip</h6> : <span>{user.zip}</span>
      <div>
        <button onClick={logoutHandler}>Log out</button>
      </div>
    </div>
  );
}
