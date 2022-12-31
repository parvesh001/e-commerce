import React from "react";
import style from "./UserReview.module.scss";

export default function UserReview(props) {
  const userClasses = `${style.user} ${"text-light p-3 p-sm-4 p-md-5"} ${
    props.className
  }`;
  return (
    <div className={userClasses}>
      <div>
        <img src={props.userImg} alt="user" width="100" />
      </div>
      <h5>{props.userName}</h5>
      <h6>{props.userPosition}</h6>
      <p>{props.userReview}</p>
    </div>
  );
}
