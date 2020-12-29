import React, { Component } from "react";

class ClassButton extends Component {
  state = {
    times: 5,
  };

  handleClick = () => {
    console.log("Clicked class/stateful component button");

    this.setState({ times: this.state.times + 1 });
  };

  render() {
    return (
      <button onClick={this.handleClick}>
        Class Button, times: {this.state.times}
      </button>
    );
  }
}

export default ClassButton;
