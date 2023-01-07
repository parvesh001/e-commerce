import React from "react";
import style from "./TransparentButton.module.scss"

export default function TransparentButton(props) {
  return (
    <div className={style["transparent-btn"]}>
      <button
        onClick={props.onClick}
        className={`${props.className} ${"btn btn-outline-light px-4 px-3"}`}
        type={props.type}
        disabled={props.disabled}
      >
        {props.children}
      </button>
    </div>
  );
}
