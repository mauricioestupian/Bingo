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
    id: "54",
    grid: [
      [ { number: 12, marked: false }, { number: 21, marked: false }, { number: 32, marked: false }, { number: 50, marked: false }, { number: 71, marked: false } ],
      [ { number: 6, marked: false }, { number: 23, marked: false }, { number: 37, marked: false }, { number: 58, marked: false }, { number: 73, marked: false } ],
      [ { number: 5, marked: false }, { number: 18, marked: false }, { number: 0, marked: true },  { number: 57, marked: false }, { number: 70, marked: false } ],
      [ { number: 15, marked: false }, { number: 25, marked: false }, { number: 43, marked: false }, { number: 55, marked: false }, { number: 65, marked: false } ],
      [ { number: 3, marked: false }, { number: 17, marked: false }, { number: 35, marked: false }, { number: 59, marked: false }, { number: 74, marked: false } ]
    ]
  },
  {
    id: "491",
    grid: [
      [ { number: 2, marked: false }, { number: 22, marked: false }, { number: 39, marked: false }, { number: 51, marked: false }, { number: 67, marked: false } ],
      [ { number: 5, marked: false }, { number: 20, marked: false }, { number: 40, marked: false }, { number: 56, marked: false }, { number: 74, marked: false } ],
      [ { number: 6, marked: false }, { number: 23, marked: false }, { number: 0, marked: false },  { number: 52, marked: false }, { number: 66, marked: false } ],
      [ { number: 7, marked: false }, { number: 17, marked: false }, { number: 45, marked: false }, { number: 60, marked: false }, { number: 69, marked: false } ],
      [ { number: 3, marked: false }, { number: 30, marked: false }, { number: 37, marked: false }, { number: 50, marked: false }, { number: 73, marked: false } ]
    ]
  }
];