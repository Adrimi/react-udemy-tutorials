import React from "react";

const FunctionalButton = ({ onButtonClick, times }) => {
  return (
    <button onClick={onButtonClick("functional")}>
      Functional, times: {times}
    </button>
  );
};

export default FunctionalButton;
