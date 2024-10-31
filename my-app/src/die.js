import React from "react";

export default function Die(props) {
  return (
    <div className={ props.isHeld === true ? "dieStyle" : "green"} onClick={props.holdDice}>
      <h2 className="die-num">{props.value}</h2>
    </div>
  );
}
