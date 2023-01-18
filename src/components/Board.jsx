import React, { useState, useEffect } from "react";
import { width, sweetPuzzle, blank } from "../utils/puzzle";

function Board() {
  const [puzzleArray, setPuzzleArray] = useState([]);

  const checkColumnOfFour = () => {
    for (let i = 0; i <= 39; i++) {
      const columnOfFour = [i, i + width, i + width * 2, i + width * 3];
      const decidedColor = puzzleArray[i];
      const isBlank = puzzleArray[i] === blank;

      if (columnOfFour.every((square) => puzzleArray[square] === decidedColor && !isBlank)) {
        columnOfFour.forEach((square) => (puzzleArray[square] = blank));
        return true;
      }
    }
  };

  const checkRowOfFour = () => {
    for (let i = 0; i < 64; i++) {
      const rowOfFour = [i, i + 1, i + 2, i + 3];
      const decidedColor = puzzleArray[i];
      const notValid = [5, 6, 7, 13, 14, 15, 21, 22, 23, 29, 30, 31, 37, 38, 39, 45, 46, 47, 53, 54, 55, 62, 63, 64];
      const isBlank = puzzleArray[i] === blank;

      if (notValid.includes(i)) continue;

      if (rowOfFour.every((square) => puzzleArray[square] === decidedColor && !isBlank)) {
        rowOfFour.forEach((square) => (puzzleArray[square] = blank));
        return true;
      }
    }
  };

  const checkColumnOfThree = () => {
    for (let i = 0; i <= 47; i++) {
      const columnOfThree = [i, i + width, i + width * 2];
      const decidedColor = puzzleArray[i];
      const isBlank = puzzleArray[i] === blank;

      if (columnOfThree.every((square) => puzzleArray[square] === decidedColor && !isBlank)) {
        columnOfThree.forEach((square) => (puzzleArray[square] = blank));
        return true;
      }
    }
  };

  const checkRowOfThree = () => {
    for (let i = 0; i < 64; i++) {
      const rowOfThree = [i, i + 1, i + 2];
      const decidedColor = puzzleArray[i];
      const notValid = [6, 7, 14, 15, 22, 23, 30, 31, 38, 39, 46, 47, 54, 55, 63, 64];
      const isBlank = puzzleArray[i] === blank;

      if (notValid.includes(i)) continue;

      if (rowOfThree.every((square) => puzzleArray[square] === decidedColor && !isBlank)) {
        rowOfThree.forEach((square) => (puzzleArray[square] = blank));
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
      checkColumnOfFour();
      checkRowOfFour();
      checkColumnOfThree();
      checkRowOfThree();
      setPuzzleArray([...puzzleArray]);
    }, 100);
    return () => clearInterval(timer);
  }, [checkColumnOfFour, checkRowOfFour, checkColumnOfThree, checkRowOfThree, puzzleArray]);

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
