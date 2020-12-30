import React, { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    count: 0,
  };

  render() {
    return (
      <div className="App">
        <h1>Current count: {this.state.count}</h1>
        <button>Increase</button>
        <button>Decrease</button>
      </div>
    );
  }
}

export default App;
