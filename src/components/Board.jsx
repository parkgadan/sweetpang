import React, { useState, useEffect } from "react";
import { width, sweetPuzzle } from "../utils/puzzle";

function Board() {
  const [puzzleArray, setPuzzleArray] = useState([]);

  /** 3match */
  const checkColumnThree = () => {
    for (let i = 0; i < width * width; i++) {
      const columnThree = [i, i + width, i + width * 2];
      const decidedPuzzle = puzzleArray[i];
      const blank = puzzleArray[i] === "";

      if (columnThree.every((puzzle) => puzzleArray[puzzle] === decidedPuzzle && !blank)) {
        columnThree.forEach((puzzle) => (puzzleArray[puzzle] = blank));
        return true;
      }
    }
  };

  const checkRowThree = () => {
    for (let i = 0; i < width * width; i++) {
      const rowThree = [i, i + 1, i + 2];
      const decidedPuzzle = puzzleArray[i];
      const blank = puzzleArray[i] === "";

      if (rowThree.every((puzzle) => puzzleArray[puzzle] === decidedPuzzle && !blank)) {
        rowThree.forEach((puzzle) => (puzzleArray[puzzle] = blank));
        return true;
      }
    }
  };

  const gameBoard = () => {
    const randomPuzzleArray = [];

    for (let i = 0; i < width * width; i++) {
      const randomPuzzle = sweetPuzzle[Math.floor(Math.random() * sweetPuzzle.length)];
      randomPuzzleArray.push(randomPuzzle);
    }
    setPuzzleArray(randomPuzzleArray);
  };

  useEffect(() => {
    gameBoard();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      checkColumnThree();
      checkRowThree();
      setPuzzleArray([...puzzleArray]);
    }, 100);
    return () => clearInterval(timer);
  }, [checkColumnThree, checkRowThree, puzzleArray]);

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
