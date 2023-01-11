import React from "react";
import style from "./Feature.module.scss";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css"

export default function Feature(props) {
  return (
    <div className="p-2 p-sm-3 d-flex justify-content-center">
      <div className={`${style["feature-container"]} ${"card shadow"}`}>
        <LazyLoadImage src={props.srcImg} className="card-img-top" placeholderSrc={props.altImg} effect="blur" alt={props.altText} />
        <div className="card-body">
          <p className="card-text text-light text-nowrap text-center px-2 py-1 rounded" style={{backgroundColor:"#e63129"}}>
            {props.cardText}
          </p>
        </div>
      </div>
    </div>
  );
}
