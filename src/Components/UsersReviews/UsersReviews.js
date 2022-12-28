import React from "react";
import UserReview from "./UserReview";
import { User__Data } from "./User__Data";
import "../../../node_modules/bootstrap/js/src/carousel";

export default function UsersReviews() {
  const users = User__Data.map((user) => {
    return (
      <UserReview
        key={user.id}
        userImg={user.img}
        userName={user.name}
        userPosition={user.position}
        userReview={user.review}
        className={user.class}
      />
    );
  });

  return (
    <div id="usersReviews" className="carousel slide mt-2 mt-md-5" data-bs-ride="true">
      <div className="text-center text-light border-bottom border-3 w-25 m-auto text-nowrap">
        <h2>Our Reviews</h2>
      </div>
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#usersReviews"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#usersReviews"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#usersReviews"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
        <button
          type="button"
          data-bs-target="#usersReviews"
          data-bs-slide-to="3"
          aria-label="Slide 4"
        ></button>
        <button
          type="button"
          data-bs-target="#usersReviews"
          data-bs-slide-to="4"
          aria-label="Slide 5"
        ></button>
      </div>
      <div className="carousel-inner">{users}</div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#usersReviews"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#usersReviews"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
