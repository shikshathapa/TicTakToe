import { useState } from "react";
import Sqaure from "./Sqaure";

const Board = () => {
  const [state, setState] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);

  // Winner logic
  const checkWinner = () => {
    const winnerLogic = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let logic of winnerLogic) {
      const [a, b, c] = logic;
      if (state[a] && state[a] === state[b] && state[a] === state[c]) {
        return state[a]; // Return the winner ("X" or "O")
      }
    }
    return null; // No winner
  };

  const handleClick = (index) => {
    const copyState = [...state];
    if (copyState[index] || checkWinner()) return; // Do nothing if square is filled or there's a winner
    copyState[index] = isXTurn ? "X" : "O";
    setState(copyState);
    setIsXTurn(!isXTurn); // Switch turns
  };

  const winner = checkWinner();

  return (
    <div className="parent-container">
      <div className="board-container">
        {winner ? (
          <div className="winner-message">
            <h2>{`Winner: ${winner}`}</h2>
          </div>
        ) : (
          <>
            <div className="board-row">
              <Sqaure onClick={() => handleClick(0)} value={state[0]} />
              <Sqaure onClick={() => handleClick(1)} value={state[1]} />
              <Sqaure onClick={() => handleClick(2)} value={state[2]} />
            </div>

            <div className="board-row">
              <Sqaure onClick={() => handleClick(3)} value={state[3]} />
              <Sqaure onClick={() => handleClick(4)} value={state[4]} />
              <Sqaure onClick={() => handleClick(5)} value={state[5]} />
            </div>

            <div className="board-row">
              <Sqaure onClick={() => handleClick(6)} value={state[6]} />
              <Sqaure onClick={() => handleClick(7)} value={state[7]} />
              <Sqaure onClick={() => handleClick(8)} value={state[8]} />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Board;
