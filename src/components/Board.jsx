import React, { useState, useEffect } from "react";

import biscuit from "../images/biscuit.png";
import cookies from "../images/cookies.png";
import cottonCandy from "../images/cottonCandy.png";
import donut from "../images/donut.png";
import lollipop from "../images/lollipop.png";

function Board() {
  const [puzzleArray, setPuzzleArray] = useState([]);
  const sweetPuzzle = [biscuit, cookies, cottonCandy, donut, lollipop];

  const gameBoard = () => {
    const randomPuzzleArray = [];

    for (let i = 10; i < 10 * 10; i++) {
      const randomPuzzle = sweetPuzzle[Math.floor(Math.random() * sweetPuzzle.length)];
      randomPuzzleArray.push(randomPuzzle);
    }
    setPuzzleArray(randomPuzzleArray);
  };

  useEffect(() => {
    gameBoard();
  }, []);

  return (
    <>
      <main className="board">
        {puzzleArray.map((sweetPuzzle, index) => (
          <img src={sweetPuzzle} key={index} alt={sweetPuzzle} />
        ))}
      </main>
    </>
  );
}
export default Board;
