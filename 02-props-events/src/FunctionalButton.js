import React from "react";

const FunctionalButton = (props) => {
  const handleClick = () => console.log(1);

  return <button onClick={handleClick}>Functional button</button>;
};

export default FunctionalButton;
