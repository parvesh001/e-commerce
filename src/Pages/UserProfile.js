import React, { useContext } from "react";
import User from "../Components/User/User";
import AuthContext from "../Context/auth-context";
import TransparentButton from "../UI/TransparentButton/TransparentButton";
import { useSelector } from "react-redux";
import Model from "../UI/Model/Model";

export default function UserProfile() {
  const authCtx = useContext(AuthContext);
  const { isLoading, status } = useSelector((state) => state.indicators);

  return (
    <React.Fragment>
      {isLoading && (
        <Model>
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </Model>
      )}

      <div style={{ marginTop: "6rem" }} className="container pb-2 pt-md-4">
        <h2 className="text-center text-light">USER PROFILE</h2>
        {status === "successful" && (
          <div>
            <User />
            <TransparentButton
              className="mt-2 mt-md-3"
              onClick={() => authCtx.logout()}
            >
              Log Out
            </TransparentButton>
          </div>
        )}
      </div>
    </React.Fragment>
  );
}
