import React from "react";

const Button = ({ children, onSomethingHappened }) => (
  <button onClick={onSomethingHappened}>{children}</button>
);

export default Button;
