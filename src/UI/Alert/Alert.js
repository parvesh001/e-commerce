import React from "react";
import style from "./Alert.module.scss";

export default function Alert(props) {
  let alertClasses = `${style["alert"]} ${
    style[props.className]
  } ${"px-2 py-1 px-md-5 py-md-2"}`;
  
  return (
    <div className={alertClasses}>
      <p className="text-ligth mb-0 text-nowrap">{props.alertMsg}</p>
    </div>
  );
}
