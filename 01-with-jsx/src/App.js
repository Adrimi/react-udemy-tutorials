import React from "react";

const Header = (props) => <h1>JSX Expression text</h1>;

const agree = false;

const App = (props) => {
  if (agree) {
    return <h1>Agree</h1>;
  } else {
    return <h1>Not Agree</h1>;
  }
};

export default App;
