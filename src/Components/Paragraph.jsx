import React from "react";

const currentDate = new Date(2020, 7, 4, 22);
const year = currentDate.getFullYear();

const fnName = "Irwin";
const lName = "Dasigan";

function Paragraph() {
  return (
    <div>
      <h1 className="heading">Hello {fnName}!</h1>
      <p>Created by {`${fnName} ${lName}`}</p>

      <p>Copyright {year}</p>
      <p>Your lucky number is {Math.floor(Math.random() * 10)}</p>
    </div>
  );
}

export default Paragraph;
