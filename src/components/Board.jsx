import React, { useState, useEffect } from "react";
import { width, sweetPuzzle, blank, exception } from "../utils/puzzle";

function Board() {
  const [puzzleArray, setPuzzleArray] = useState([]);
  const [puzzleDrag, setPuzzleDrag] = useState(null);
  const [puzzleReplacement, setPuzzleReplacement] = useState(null);
  const [score, setScore] = useState(0);

  const checkColumnSix = () => {
    for (let i = 0; i < width * (width - 4); i++) {
      const columnSix = [i, i + width, i + width * 2, i + width * 3, i + width * 4, i + width * 5];
      const puzzleDecision = puzzleArray[i];
      const puzzleClear = puzzleArray[i] === blank;

      if (columnSix.every((puzzle) => puzzleArray[puzzle] === puzzleDecision && !puzzleClear)) {
        columnSix.forEach((puzzle) => (puzzleArray[puzzle] = blank));
        return true;
      }
    }
  };

  const checkRowSix = () => {
    for (let i = 0; i < width * width; i++) {
      const rowSix = [i, i + 1, i + 2, i + 3, i + 4, i + 5];
      const puzzleDecision = puzzleArray[i];
      const puzzleClear = puzzleArray[i] === blank;
      const exceptionSix = [
        width - 4,
        width * 2 - 4,
        width * 3 - 4,
        width * 4 - 4,
        width * 5 - 4,
        width * 6 - 4,
        width * 7 - 4,
        width * 8 - 4,
        width * 9 - 4,
        width - 3,
        width * 2 - 3,
        width * 3 - 3,
        width * 4 - 3,
        width * 5 - 3,
        width * 6 - 3,
        width * 7 - 3,
        width * 8 - 3,
        width * 9 - 3,
        ...exception,
      ];

      if (exceptionSix.includes(i)) continue;

      if (rowSix.every((puzzle) => puzzleArray[puzzle] === puzzleDecision && !puzzleClear)) {
        rowSix.forEach((puzzle) => (puzzleArray[puzzle] = blank));
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
      const exceptionFive = [
        width - 4,
        width * 2 - 4,
        width * 3 - 4,
        width * 4 - 4,
        width * 5 - 4,
        width * 6 - 4,
        width * 7 - 4,
        width * 8 - 4,
        width * 9 - 4,
        width - 3,
        width * 2 - 3,
        width * 3 - 3,
        width * 4 - 3,
        width * 5 - 3,
        width * 6 - 3,
        width * 7 - 3,
        width * 8 - 3,
        width * 9 - 3,
        ...exception,
      ];

      if (exceptionFive.includes(i)) continue;

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
      const exceptionFour = [width - 3, width * 2 - 3, width * 3 - 3, width * 4 - 3, width * 5 - 3, width * 6 - 3, width * 7 - 3, width * 8 - 3, width * 9 - 3, ...exception];

      if (exceptionFour.includes(i)) continue;

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
      }
    }
  };

  const dropNewPuzzle = () => {
    for (let i = 0; i < width * width - width; i++) {
      const firstRow = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
      const isFirstRow = firstRow.includes(i);

      if (isFirstRow && puzzleArray[i] === blank) {
        let randomNumber = Math.floor(Math.random() * sweetPuzzle.length);
        puzzleArray[i] = sweetPuzzle[randomNumber];
      }

      if (puzzleArray[i + width] === blank) {
        puzzleArray[i + width] = puzzleArray[i];
        puzzleArray[i] = blank;
      }
    }
  };

  const handleDragStart = (e) => {
    setPuzzleDrag(e.target);
  };

  const handleDragDrop = (e) => {
    setPuzzleReplacement(e.target);
  };

  const handleDragEnd = () => {
    const puzzleDragId = parseInt(puzzleDrag.getAttribute("data-id"));
    const puzzleReplacementId = parseInt(puzzleReplacement.getAttribute("data-id"));

    puzzleArray[puzzleReplacementId] = puzzleDrag.getAttribute("src");
    puzzleArray[puzzleDragId] = puzzleReplacement.getAttribute("src");

    const validMoves = [puzzleDragId - 1, puzzleDragId - width, puzzleDragId + 1, puzzleDragId + width];

    const validMove = validMoves.includes(puzzleReplacementId);

    // const checkBoard = checkColumnSix() || checkRowSix() || checkColumnFive() || checkRowFive() || checkColumnFour() || checkRowFour() || checkColumnThree() || checkRowThree();

    const columnOfSix = checkColumnSix();
    const rowOfSix = checkRowSix();
    const columnOfFive = checkColumnFive();
    const rowOfFive = checkRowFive();
    const columnOfFour = checkColumnFour();
    const rowOfFour = checkRowFour();
    const columnOfThree = checkColumnThree();
    const rowOfThree = checkRowThree();

    if (puzzleReplacementId && validMove && (columnOfSix || rowOfSix || columnOfFive || rowOfFive || columnOfFour || rowOfFour || rowOfThree)) {
      setPuzzleDrag(null);
      setPuzzleReplacement(null);
    } else {
      puzzleArray[puzzleReplacementId] = puzzleReplacement.getAttribute("src");
      puzzleArray[puzzleDragId] = puzzleDrag.getAttribute("src");
      setPuzzleArray([...puzzleArray]);
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
      dropNewPuzzle();
      setPuzzleArray([...puzzleArray]);
    }, 100);
    return () => clearInterval(timer);
  }, [checkColumnSix, checkRowSix, checkColumnFive, checkRowFive, checkColumnFour, checkRowFour, checkColumnThree, checkRowThree, dropNewPuzzle, puzzleArray]);

  return (
    <>
      <main className="board">
        {puzzleArray.map((sweetPuzzle, index) => (
          <img
            src={sweetPuzzle}
            key={index}
            alt={sweetPuzzle}
            data-id={index}
            draggable={true}
            onDragStart={handleDragStart}
            onDragOver={(e) => e.preventDefault()}
            onDragEnter={(e) => e.preventDefault()}
            onDragLeave={(e) => e.preventDefault()}
            onDrop={handleDragDrop}
            onDragEnd={handleDragEnd}
          />
        ))}
      </main>
    </>
  );
}
export default Board;
