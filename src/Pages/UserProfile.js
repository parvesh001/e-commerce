import React from "react";
import User from "../Components/User/User";
import GoToTop from "../Components/GoTop/GoToTop";

export default function UserProfile() {
  return (
    <React.Fragment>
      <div style={{ marginTop: "6rem" }} className="container pb-2 pt-md-4">
        <h2 className="text-center text-light">USER PROFILE</h2>
        <User />
      </div>
      <GoToTop />
    </React.Fragment>
  );
}
