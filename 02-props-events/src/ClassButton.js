import React, { Component } from "react";

class ClassButton extends Component {
  state = {
    times: 5,
  };

  render() {
    return <button>Class Button, times: {this.state.times}</button>;
  }
}

export default ClassButton;
