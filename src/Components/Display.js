import React from "react";
import BitcoinLineChart from "./BitcoinLineChart";

export default function Display(props) {
  if (!props.data) return null;
  const data = props.data;

  const newData = Object.keys(data).map((key) => ({
    date: key,
    value: data[key],
  }));

  return (
    <>
    <h2>Bitcoin's price this month</h2>
      <div className="shadow-lg p-3 mb-5 bg-white rounded contentdiv">
        <BitcoinLineChart data={newData} height={200}></BitcoinLineChart>
      </div>
    </>
  );
}
