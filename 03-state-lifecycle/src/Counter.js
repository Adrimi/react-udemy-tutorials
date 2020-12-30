import React, { Component } from "react";

import Header from "./Header";
import Button from "./Button";

class Counter extends Component {
  state = {
    count: 0,
  };

  increment = () => {
    this.setState((previousState) => {
      return {
        count: previousState.count + 1,
      };
    });
  };

  handleIncrease = () => {
    this.increment();
    this.increment();
    this.increment();
  };

  handleDecrease = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <div className="Counter">
        <Header count={this.state.count} />
        <Button onSomethingHappened={this.handleIncrease}>Increase</Button>
        <Button onSomethingHappened={this.handleDecrease}>Decrease</Button>
      </div>
    );
  }
}

export default Counter;
