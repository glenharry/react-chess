import React, { Component } from "react";
import Chessboard from "chessboardjsx";
import { Chess } from 'chess.js';


class ChessBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chess: new Chess(),
    };
  }
  onDrop = ({ sourceSquare, targetSquare }) => {
    let move = this.state.chess.move({
      from: sourceSquare,
      to: targetSquare,
      promotion: "q",
    });

    if (move === null) {
      return;
    }

    this.setState({ chess: this.state.chess });
  };
  render() {
    return (
      <div>
        <Chessboard
          width={400}
          position={this.state.chess.fen()}
          onDrop={this.onDrop}
          onMouseOverSquare={() => {}}
          onMouseOutSquare={() => {}}
        />
      </div>
    );
  }
}

export default ChessBoard;
