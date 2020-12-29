import React, { Component } from "react";

class ClassButton extends Component {
  render() {
    return (
      <button onClick={this.props.onButtonClick}>
        Class Button, times: {this.props.times}
      </button>
    );
  }
}

export default ClassButton;
