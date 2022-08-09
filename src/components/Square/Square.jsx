import React from "react";
import "./Square.css";

function Square(props) {
  return (
    <>
      <button className="square__btn" onClick={props.onClick}>
        {props.value}
      </button>
    </>
  );
}

export default Square;
