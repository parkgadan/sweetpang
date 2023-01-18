import React, { useState, useEffect } from "react";
import { width, sweetPuzzle, blank, exception } from "../utils/puzzle";

function Board() {
  const [puzzleArray, setPuzzleArray] = useState([]);

  const checkColumnSix = () => {
    for (let i = 0; i < width * (width - 5); i++) {
      const columnFive = [i, i + width, i + width * 2, i + width * 3, i + width * 4, i + width * 5];
      const puzzleDecision = puzzleArray[i];
      const puzzleClear = puzzleArray[i] === blank;

      if (columnFive.every((puzzle) => puzzleArray[puzzle] === puzzleDecision && !puzzleClear)) {
        columnFive.forEach((puzzle) => (puzzleArray[puzzle] = blank));
        return true;
      }
    }
  };

  const checkRowSix = () => {
    for (let i = 0; i < width * width; i++) {
      const rowFive = [i, i + 1, i + 2, i + 3, i + 4, i + 5];
      const puzzleDecision = puzzleArray[i];
      const puzzleClear = puzzleArray[i] === blank;

      if (exception.includes(i)) continue;

      if (rowFive.every((puzzle) => puzzleArray[puzzle] === puzzleDecision && !puzzleClear)) {
        rowFive.forEach((puzzle) => (puzzleArray[puzzle] = blank));
        return true;
      }
    }
  };

  const checkColumnFive = () => {
    for (let i = 0; i < width * (width - 4); i++) {
      const columnFive = [i, i + width, i + width * 2, i + width * 3, i + width * 4];
      const puzzleDecision = puzzleArray[i];
      const puzzleClear = puzzleArray[i] === blank;

      if (columnFive.every((puzzle) => puzzleArray[puzzle] === puzzleDecision && !puzzleClear)) {
        columnFive.forEach((puzzle) => (puzzleArray[puzzle] = blank));
        return true;
      }
    }
  };

  const checkRowFive = () => {
    for (let i = 0; i < width * width; i++) {
      const rowFive = [i, i + 1, i + 2, i + 3, i + 4];
      const puzzleDecision = puzzleArray[i];
      const puzzleClear = puzzleArray[i] === blank;

      if (exception.includes(i)) continue;

      if (rowFive.every((puzzle) => puzzleArray[puzzle] === puzzleDecision && !puzzleClear)) {
        rowFive.forEach((puzzle) => (puzzleArray[puzzle] = blank));
        return true;
      }
    }
  };

  const checkColumnFour = () => {
    for (let i = 0; i < width * (width - 3); i++) {
      const columnFour = [i, i + width, i + width * 2, i + width * 3];
      const puzzleDecision = puzzleArray[i];
      const puzzleClear = puzzleArray[i] === blank;

      if (columnFour.every((puzzle) => puzzleArray[puzzle] === puzzleDecision && !puzzleClear)) {
        columnFour.forEach((puzzle) => (puzzleArray[puzzle] = blank));
        return true;
      }
    }
  };

  const checkRowFour = () => {
    for (let i = 0; i < width * width; i++) {
      const rowFour = [i, i + 1, i + 2, i + 3];
      const puzzleDecision = puzzleArray[i];
      const puzzleClear = puzzleArray[i] === blank;

      if (exception.includes(i)) continue;

      if (rowFour.every((puzzle) => puzzleArray[puzzle] === puzzleDecision && !puzzleClear)) {
        rowFour.forEach((puzzle) => (puzzleArray[puzzle] = blank));
        return true;
      }
    }
  };

  const checkColumnThree = () => {
    for (let i = 0; i < width * (width - 2); i++) {
      const columnThree = [i, i + width, i + width * 2];
      const puzzleDecision = puzzleArray[i];
      const puzzleClear = puzzleArray[i] === blank;

      if (columnThree.every((puzzle) => puzzleArray[puzzle] === puzzleDecision && !puzzleClear)) {
        columnThree.forEach((puzzle) => (puzzleArray[puzzle] = blank));
        return true;
      }
    }
  };

  const checkRowThree = () => {
    for (let i = 0; i < width * width; i++) {
      const rowThree = [i, i + 1, i + 2];
      const puzzleDecision = puzzleArray[i];
      const puzzleClear = puzzleArray[i] === blank;

      if (exception.includes(i)) continue;

      if (rowThree.every((puzzle) => puzzleArray[puzzle] === puzzleDecision && !puzzleClear)) {
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
      checkColumnSix();
      checkRowSix();
      checkColumnFive();
      checkRowFive();
      checkColumnFour();
      checkRowFour();
      checkColumnThree();
      checkRowThree();
      setPuzzleArray([...puzzleArray]);
    }, 100);
    return () => clearInterval(timer);
  }, [checkColumnSix, checkRowSix, checkColumnFive, checkRowFive, checkColumnFour, checkRowFour, checkColumnThree, checkRowThree, puzzleArray]);

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
