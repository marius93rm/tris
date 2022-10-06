import './App.css';

import React, { useState } from 'react';

function Square(props) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );

}

function Board() {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [xIsNext, setXIsNext] = useState(true)

  function renderSquare(i) {
    return <Square value={board[i]} onClick={() => handleClick(i)} />;
  }

  function calculateWinner(squares) {
    const combinazioniVincenti = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < combinazioniVincenti.length; i++) {
      const [a, b, c] = combinazioniVincenti[i]; // [0, 1, 2]
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }


  function handleClick(i) {
    const squareCopy = board.slice()
    if (calculateWinner(squareCopy) || squareCopy[i]) { // se c'è un vincitore o se la casella è già stata cliccata
      return
    }
    squareCopy[i] = xIsNext ? 'X' : 'O' // inserisco il valore
    setBoard(squareCopy)
    setXIsNext(!xIsNext)

  }

  return (
    <div>
      <div className="status">{"è il turno di " + (xIsNext ? 'X' : 'O')}</div>

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
