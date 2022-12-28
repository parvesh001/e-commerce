import React from "react";
import "./DarkButton.scss";
export default function DarkButton(props) {
  return (
    <div className="dark-btn">
      <button className="btn">{props.children}</button>
    </div>
  );
}
