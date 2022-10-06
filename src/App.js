import './App.css';

import React, { useState } from 'react';

function Square(props) {
  return (
    <button className="square">
      {props.value}
    </button>
  );

}

function Board() {
  const [board, setBoard] = useState(Array(9).fill(0))
  const [xIsNext, setXIsNext] = useState(true)

  const giocatoreInCorso = xIsNext ? 'X' : 'O'

  function renderSquare(i) {
    return <Square value={board[i]} />;
  }

  return (
    <div>
      <div className="status">{"è il turno di " + giocatoreInCorso}</div>

      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );



}

function App() {
  return (
    <div className="App">
      <Board />
    </div>
  );
}

export default App;
