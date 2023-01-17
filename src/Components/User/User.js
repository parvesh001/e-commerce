import React, { useEffect, useState, useContext } from "react";
import Model from "../../UI/Model/Model";
import TransparentButton from "../../UI/TransparentButton/TransparentButton";
import AuthContext from "../../Context/auth-context";

export default function User() {
  const authCtx = useContext(AuthContext);
  const [user, setUser] = useState({
    name: null,
    email: null,
    address: null,
    addressB: null,
    city: null,
    state: null,
    zip: null,
  });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getUser = async () => {
      try {
        setIsLoading(true);
        let userID = JSON.parse(localStorage.getItem("userID"));
        const response = await fetch(
          `https://e-commerce-eb5e0-default-rtdb.firebaseio.com/users/${userID}/user.json`
        );

        if (!response.ok) {
          throw new Error("something went wrong!!");
        }
        setIsLoading(false);
        const data = await response.json();

        setUser(data);
      } catch (error) {
        setIsLoading(false);
        console.log(error);
      }
    };
    getUser();
  }, []);

  if (isLoading) {
    return (
      <>
        <div style={{height:"100vh"}}></div>
        <Model>
          <div className="text-center">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        </Model>
      </>
    );
  }

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
      <br />
      <TransparentButton className="mt-2" onClick={() => authCtx.logout()}>
        Log Out
      </TransparentButton>
    </div>
  );
}
