export type BingoCell = {
  number: number;
  marked: boolean;
};

export type BingoCard = {
  id: string; // Identificador único de 3 dígitos
  grid: BingoCell[][];
};

export const bingoCards: BingoCard[] = [
  {
    id: "101",
    grid: [
      [ { number: 5, marked: false }, { number: 18, marked: false }, { number: 31, marked: false }, { number: 46, marked: false }, { number: 60, marked: false } ],
      [ { number: 7, marked: false }, { number: 22, marked: false }, { number: 34, marked: false }, { number: 49, marked: false }, { number: 65, marked: false } ],
      [ { number: 2, marked: false }, { number: 16, marked: false }, { number: 0, marked: false },  { number: 53, marked: false }, { number: 68, marked: false } ],
      [ { number: 10, marked: false }, { number: 25, marked: false }, { number: 39, marked: false }, { number: 52, marked: false }, { number: 70, marked: false } ],
      [ { number: 12, marked: false }, { number: 29, marked: false }, { number: 41, marked: false }, { number: 58, marked: false }, { number: 75, marked: false } ]
    ]
  },
  {
    id: "204",
    grid: [
      [ { number: 3, marked: false }, { number: 19, marked: false }, { number: 33, marked: false }, { number: 45, marked: false }, { number: 61, marked: false } ],
      [ { number: 6, marked: false }, { number: 21, marked: false }, { number: 36, marked: false }, { number: 50, marked: false }, { number: 64, marked: false } ],
      [ { number: 1, marked: false }, { number: 17, marked: false }, { number: 0, marked: false },  { number: 54, marked: false }, { number: 67, marked: false } ],
      [ { number: 11, marked: false }, { number: 26, marked: false }, { number: 38, marked: false }, { number: 51, marked: false }, { number: 72, marked: false } ],
      [ { number: 13, marked: false }, { number: 28, marked: false }, { number: 40, marked: false }, { number: 59, marked: false }, { number: 74, marked: false } ]
    ]
  },
  {
    id: "305",
    grid: [
      [ { number: 4, marked: false }, { number: 20, marked: false }, { number: 32, marked: false }, { number: 47, marked: false }, { number: 62, marked: false } ],
      [ { number: 8, marked: false }, { number: 23, marked: false }, { number: 35, marked: false }, { number: 48, marked: false }, { number: 63, marked: false } ],
      [ { number: 9, marked: false }, { number: 15, marked: false }, { number: 0, marked: false },  { number: 55, marked: false }, { number: 66, marked: false } ],
      [ { number: 14, marked: false }, { number: 24, marked: false }, { number: 37, marked: false }, { number: 56, marked: false }, { number: 71, marked: false } ],
      [ { number: 19, marked: false }, { number: 27, marked: false }, { number: 42, marked: false }, { number: 57, marked: false }, { number: 73, marked: false } ]
    ]
  }
];