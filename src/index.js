import React from "react";
import ReactDOM from "react-dom";

const fName = "Abdullah";
const lName = "Mujahid";
const img = "https://picsum.photos/200";

ReactDOM.render(
  <div>
    {/* //<h1>Hello {fName}+ " "+{lName} </h1> */}
    <h1 className="heading" contentEditable="false" spellCheck="false">
      Hello {`${fName} ${lName} `}!
    </h1>

    <div>
      <img src={img} alt="pop" />
    </div>
  </div>,
  document.getElementById("root")
);
