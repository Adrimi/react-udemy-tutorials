import React, { Component } from "react";

import FunctionalButton from "./FunctionalButton";
import ClassButton from "./ClassButton";

class App extends Component {
  state = {
    times: 0,
  };

  handleClick = () => {
    console.log("Clicked inside App");

    this.setState({ times: this.state.times + 1 });
  };

  render() {
    return (
      <div>
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
