import React from "react";
import ReactDOM from "react-dom";

const fName = "Abdullah";
const lName = "Mujahid";
const luckyNum = 4;

ReactDOM.render(
  <div>
    {/* //<h1>Hello {fName}+ " "+{lName} </h1> */}
    <h1> Hello {`${fName} ${lName} `}!</h1>
    <p>Your lucky number is {luckyNum}</p>
  </div>,
  document.getElementById("root")
);
