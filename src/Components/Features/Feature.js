import React from "react";
import style from "./Feature.module.scss";

export default function Feature(props) {
  return (
    <React.Fragment>
      <div className={`${style["feature-container"]} ${"card"}`}>
        <img src={props.srcImg} className="card-img-top" alt={props.altText} />
        <div className="card-body">
          <p className="card-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            quidem.
          </p>
        </div>
      </div>
    </React.Fragment>
  );
}
