import React from "react";
import BitcoinLineChart from "./BitcoinLineChart";

export default function DisplayBetween(props) {
  if (!props.data) return null;
  const data = props.data;

  const newData = Object.keys(data).map((key) => ({
    date: key,
    value: data[key],
  }));

  return (
    <>
      <h2>
        Evolution of Bitcoin's price between {props.startDate} and{" "}
        {props.endDate}
      </h2>
      <div className="shadow-lg p-3 mb-5 bg-white rounded contentdiv">
      
        <BitcoinLineChart data={newData}></BitcoinLineChart>
      </div>
    </>
  );
}
