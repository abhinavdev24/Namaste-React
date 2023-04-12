import React from "react";
import Button from "./Button";

const ButtonList = () => {
  const buttons = [
    "All",
    "Gaming",
    "Songs",
    "Live",
    "Cricket",
    "Soccer",
    "News",
    "Cooking",
    "Comedy",
    "Gadgets",
    "Stocks",
  ];
  return (
    <div>
      {buttons.map((name) => (
        <Button name={name} key={name} />
      ))}
    </div>
  );
};

export default ButtonList;
