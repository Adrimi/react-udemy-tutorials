import React, { Component } from "react";

import FunctionalButton from "./FunctionalButton";
import ClassButton from "./ClassButton";
import "./App.css";

class App extends Component {
  state = {
    times: 0,
  };

  handleClick = (buttonName) => () => {
    console.log("Clicked inside App, button was", buttonName);

    this.setState({ times: this.state.times + 1 });
  };

  render() {
    return (
      <div className="App">
        <FunctionalButton
          times={this.state.times}
          onButtonClick={this.handleClick}
        />
        <ClassButton
          times={this.state.times}
          onButtonClick={this.handleClick}
        />
      </div>
    );
  }
}

export default App;
