import React, { useState } from "react";
import Board from "../Board/Board";
import "./Game.css";
import { calculateWinner } from "../../helper";

function Game() {
  const [board, setBoard] = useState(Array(9).fill(null));

  const [ticIsNext, setTicIsNext] = useState(true);

  const winner = calculateWinner(board);

  function handleClick(index) {
    const boardCopy = [...board]; // клонуємо доску

    // Визначити чи було натискання по квадрату або гра закінчена ?
    if (winner || boardCopy[index]) return;
    // Визначити чий хід
    boardCopy[index] = ticIsNext ? "X" : "O";
    // Оновлюємо стейт
    setBoard(boardCopy);
    setTicIsNext(!ticIsNext); // Виставляємо значення "false"
  }

  function startNewGame() {
    return (
      <button
        className="start__btn"
        onClick={() => setBoard(Array(9).fill(null))}
      >
        Start New Game
      </button>
    );
  }

  return (
    <>
      <div className="wrapper">
        {startNewGame()}
        <Board squares={board} click={handleClick} />
        <p className="turn">
          {winner ? "Winner " + winner : "Turn " + (ticIsNext ? "X" : "O")}
        </p>
      </div>
    </>
  );
}

export default Game;
