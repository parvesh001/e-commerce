import React from "react";
import { useSelector } from "react-redux";

export default function User() {
  const user = useSelector((state) => state.user.user);

  return (
    <div className="py-2 px-3 py-md-3 px-md-5 text-light border">
      <div className="d-flex justify-content-between">
        <h6>Name</h6>
        <span>{user.name}</span>
      </div>
      <hr />
      <div className="d-flex justify-content-between">
        <h6>Email</h6>
        <span>{user.email}</span>
      </div>
      <hr />
      <div className="d-flex justify-content-between">
        <h6>Address</h6>
        <span>{user.address}</span>
      </div>
      <hr />
      <div className="d-flex justify-content-between">
        <h6>Address 2</h6>
        <span>{user.addressB}</span>
      </div>
      <hr />
      <div className="d-flex justify-content-between">
        <h6>City</h6>
        <span>{user.city}</span>
      </div>
      <hr />
      <div className="d-flex justify-content-between">
        <h6>State</h6>
        <span>{user.state}</span>
      </div>
      <hr />
      <div className="d-flex justify-content-between">
        <h6>Zip</h6>
        <span>{user.zip}</span>
      </div>
    </div>
  );
}
