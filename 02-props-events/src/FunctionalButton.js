import React from "react";

const FunctionalButton = (props) => {
  return (
    <button onClick={props.onButtonClick}>
      Functional, times: {props.times}
    </button>
  );
};

export default FunctionalButton;
