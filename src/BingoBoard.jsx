// BingoBoard.jsx
import "./BingoBoard.css";

const LETTERS = ["B", "I", "N", "G", "O"];
const RANGES = {
  B: [1, 15],
  I: [16, 30],
  N: [31, 45],
  G: [46, 60],
  O: [61, 75],
};

function getUniqueNumbers(min, max, count) {
  const nums = new Set();
  while (nums.size < count) {
    nums.add(Math.floor(Math.random() * (max - min + 1)) + min);
  }
  return Array.from(nums);
}

function BingoBoard({ calledNumbers }) {
  // Generar columnas con números únicos
  const columns = LETTERS.map((letter, i) => {
    const [min, max] = RANGES[letter];
    const count = letter === "N" ? 4 : 5;
    return getUniqueNumbers(min, max, count);
  });

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
        {[...Array(5)].map((_, rowIdx) => (
          <tr key={rowIdx}>
            {LETTERS.map((letter, colIdx) => {
              const isFree = rowIdx === 2 && colIdx === 2;
              const number = isFree
                ? "FREE"
                : columns[colIdx][
                    rowIdx >= 2 && letter === "N" ? rowIdx - 1 : rowIdx
                  ];
              const marked = calledNumbers.has(number);
              return (
                <td
                  key={`${letter}-${rowIdx}`}
                  className={marked || isFree ? "marked" : ""}
                >
                  {number}
                </td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default BingoBoard;
