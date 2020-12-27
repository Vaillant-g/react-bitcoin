import React from "react";

export default function CurrentDate(props) {

  return (
    <div className="CurrentDate">
      <span>{props.currentDate}</span>
    </div>
  );
}
