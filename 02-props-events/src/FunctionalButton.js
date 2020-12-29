import React from "react";

const handleClick = () => console.log(1);

const FunctionalButton = (props) => (
  <button onClick={handleClick}>Functional button</button>
);

export default FunctionalButton;
