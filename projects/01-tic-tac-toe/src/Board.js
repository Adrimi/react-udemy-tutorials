import React, { Component } from "react";
import Square from "./Square";

const calculateWinner = (squares) => {
  const lines = [
    // horizontal
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    // vertical
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    // diagonal
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let line of lines) {
    const [a, b, c] = line;
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return "";
};

class Board extends Component {
  state = {
    squares: Array.from({ length: 9 }, () => ""),
    xIsNext: true,
  };

  handleClick = (number) => () => {
    if (calculateWinner(this.state.squares) || this.state.squares[number]) {
      return;
    }

    const newSquares = [...this.state.squares];

    newSquares[number] = this.state.xIsNext ? "X" : "O";

    this.setState({ squares: newSquares, xIsNext: !this.state.xIsNext });
  };

  handleReset = () => {
    this.setState({
      squares: Array.from({ length: 9 }, () => ""),
      xIsNext: true,
    });
  };

  render() {
    const { squares, xIsNext } = this.state;
    const winner = calculateWinner(this.state.squares);
    let status;

    if (winner) {
      status = `Winner: ${winner}`;
    } else {
      status = `Next step: ${xIsNext ? "X" : "O"}`;
    }

    return (
      <div className="Board">
        <h1>{status}</h1>
        <div className="Row">
          <Square value={squares[0]} onClick={this.handleClick(0)}></Square>
          <Square value={squares[1]} onClick={this.handleClick(1)}></Square>
          <Square value={squares[2]} onClick={this.handleClick(2)}></Square>
        </div>
        <div className="Row">
          <Square value={squares[3]} onClick={this.handleClick(3)}></Square>
          <Square value={squares[4]} onClick={this.handleClick(4)}></Square>
          <Square value={squares[5]} onClick={this.handleClick(5)}></Square>
        </div>
        <div className="Row">
          <Square value={squares[6]} onClick={this.handleClick(6)}></Square>
          <Square value={squares[7]} onClick={this.handleClick(7)}></Square>
          <Square value={squares[8]} onClick={this.handleClick(8)}></Square>
        </div>
        <button onClick={this.handleReset} className="Reset">
          Reset
        </button>
      </div>
    );
  }
}

export default Board;
