// BingoBoard.tsx
import React, { useState } from "react";
import "./BingoBoard.css";

const LETTERS = ["B", "I", "N", "G", "O"];
const RANGES: Record<string, [number, number]> = {
  B: [1, 15],
  I: [16, 30],
  N: [31, 45],
  G: [46, 60],
  O: [61, 75],
};

function getUniqueNumbers(min: number, max: number, count: number): number[] {
  const nums = new Set<number>();
  while (nums.size < count) {
    nums.add(Math.floor(Math.random() * (max - min + 1)) + min);
  }
  return Array.from(nums);
}

type BingoCell = {
  value: number | "FREE"| "CROODS";
  selected: boolean;
};

function generateBoard(): BingoCell[][] {
  const columns = LETTERS.map((letter) => {
    const [min, max] = RANGES[letter];
    const count = letter === "N" ? 4 : 5;
    return getUniqueNumbers(min, max, count);
  });

  const board: BingoCell[][] = [];
  for (let row = 0; row < 5; row++) {
    const rowCells: BingoCell[] = [];
    for (let col = 0; col < 5; col++) {
      if (row === 2 && col === 2) {
        rowCells.push({ value: "CROODS", selected: true });
      } else {
        const idx = col === 2 && row > 1 ? row - 1 : row;
        rowCells.push({ value: columns[col][idx], selected: false });
      }
    }
    board.push(rowCells);
  }
  return board;
}

const BingoBoard: React.FC = () => {
  const [board, setBoard] = useState<BingoCell[][]>(generateBoard());

  const handleCellClick = (rowIdx: number, colIdx: number) => {
    if (rowIdx === 2 && colIdx === 2) return; // FREE cell, no toggle
    setBoard((prev) =>
      prev.map((row, r) =>
        row.map((cell, c) =>
          r === rowIdx && c === colIdx
            ? { ...cell, selected: !cell.selected }
            : cell
        )
      )
    );
  };

  return (
    <table className="bingo-table">
      <thead>
        <tr>
          {LETTERS.map((letter) => (
            <th key={letter}>{letter}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {board.map((row, rowIdx) => (
          <tr key={rowIdx}>
            {row.map((cell, colIdx) => (
              <td
                key={`${rowIdx}-${colIdx}`}
                className={cell.selected ? "marked" : ""}
                onClick={() => handleCellClick(rowIdx, colIdx)}
                style={{ cursor: rowIdx === 2 && colIdx === 2 ? "default" : "pointer" }}
              >
                {cell.value}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default BingoBoard;