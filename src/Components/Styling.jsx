import React from "react";

const currentDate = new Date(2020, 7, 4, 11);
const currentTime = currentDate.getHours();

const customStyleHeading = {
  color: ""
};

let greeting;

if (currentTime < 12) {
  greeting = "Good Morning";
  customStyleHeading.color = "blue";
} else if (currentTime > 18) {
  greeting = "Good Evening";
  customStyleHeading.color = "red";
} else {
  greeting = "Good Afternoon";
  customStyleHeading.color = "green";
}

function Styling() {
  return <h1 style={customStyleHeading}>{greeting}</h1>;
}

export default Styling;
