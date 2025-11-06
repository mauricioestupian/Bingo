export type Celdas = {
  number: number;
  marked: boolean;
};

export type Cartones = {
  id: string; // Identificador único de 3 dígitos
  grid: Celdas[][];
};

export const cartones: Cartones[] = [
  {
    id: "51",
    grid: [
      [ { number: 10, marked: false }, { number: 20, marked: false }, { number: 34, marked: false }, { number: 58, marked: false }, { number: 67, marked: false } ],
      [ { number: 5, marked: false }, { number: 18, marked: false }, { number: 35, marked: false }, { number: 56, marked: false }, { number: 68, marked: false } ],
      [ { number: 4, marked: false }, { number: 29, marked: false }, { number: 0, marked: true },  { number: 46, marked: false }, { number: 75, marked: false } ],
      [ { number: 14, marked: false }, { number: 22, marked: false }, { number: 39, marked: false }, { number: 48, marked: false }, { number: 69, marked: false } ],
      [ { number: 11, marked: false }, { number: 28, marked: false }, { number: 31, marked: false }, { number: 60, marked: false }, { number: 62, marked: false } ]
    ]
  },
  {
    id: "52",
    grid: [
      [ { number: 15, marked: false }, { number: 19, marked: false }, { number: 33, marked: false }, { number: 51, marked: false }, { number: 73, marked: false } ],
      [ { number: 13, marked: false }, { number: 20, marked: false }, { number: 35, marked: false }, { number: 53, marked: false }, { number: 67, marked: false } ],
      [ { number: 3, marked: false }, { number: 18, marked: false }, { number: 0, marked: true },  { number: 54, marked: false }, { number: 75, marked: false } ],
      [ { number: 14, marked: false }, { number: 30, marked: false }, { number: 34, marked: false }, { number: 56, marked: false }, { number: 70, marked: false } ],
      [ { number: 2, marked: false }, { number: 21, marked: false }, { number: 41, marked: false }, { number: 46, marked: false }, { number: 63, marked: false } ]
    ]
  }, 
  {
    id: "53",
    grid: [
      [ { number: 8, marked: false }, { number: 17, marked: false }, { number: 42, marked: false }, { number: 50, marked: false }, { number: 72, marked: false } ],
      [ { number: 1, marked: false }, { number: 20, marked: false }, { number: 43, marked: false }, { number: 48, marked: false }, { number: 62, marked: false } ],
      [ { number: 4, marked: false }, { number: 16, marked: false }, { number: 0, marked: true },  { number: 58, marked: false }, { number: 63, marked: false } ],
      [ { number: 12, marked: false }, { number: 28, marked: false }, { number: 44, marked: false }, { number: 52, marked: false }, { number: 71, marked: false } ],
      [ { number: 13, marked: false }, { number: 23, marked: false }, { number: 39, marked: false }, { number: 49, marked: false }, { number: 64, marked: false } ]
    ]
  }, 
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
    id: "55",
    grid: [
      [ { number: 2, marked: false }, { number: 20, marked: false }, { number: 43, marked: false }, { number: 55, marked: false }, { number: 75, marked: false } ],
      [ { number: 9, marked: false }, { number: 24, marked: false }, { number: 38, marked: false }, { number: 50, marked: false }, { number: 74, marked: false } ],
      [ { number: 15, marked: false }, { number: 16, marked: false }, { number: 0, marked: true },  { number: 60, marked: false }, { number: 69, marked: false } ],
      [ { number: 11, marked: false }, { number: 28, marked: false }, { number: 40, marked: false }, { number: 59, marked: false }, { number: 63, marked: false } ],
      [ { number: 12, marked: false }, { number: 29, marked: false }, { number: 36, marked: false }, { number: 46, marked: false }, { number: 73, marked: false } ]
    ]
  },
  {
    id: "56",
    grid: [
      [ { number: 9, marked: false }, { number: 17, marked: false }, { number: 36, marked: false }, { number: 49, marked: false }, { number: 69, marked: false } ],
      [ { number: 15, marked: false }, { number: 23, marked: false }, { number: 35, marked: false }, { number: 52, marked: false }, { number: 71, marked: false } ],
      [ { number: 7, marked: false }, { number: 26, marked: false }, { number: 0, marked: true },  { number: 54, marked: false }, { number: 72, marked: false } ],
      [ { number: 2, marked: false }, { number: 25, marked: false }, { number: 42, marked: false }, { number: 46, marked: false }, { number: 65, marked: false } ],
      [ { number: 5, marked: false }, { number: 19, marked: false }, { number: 34, marked: false }, { number: 47, marked: false }, { number: 70, marked: false } ]
    ]
  }, 
  {
    id: "57",
    grid: [
      [ { number: 13, marked: false }, { number: 28, marked: false }, { number: 38, marked: false }, { number: 51, marked: false }, { number: 69, marked: false } ],
      [ { number: 5, marked: false }, { number: 23, marked: false }, { number: 42, marked: false }, { number: 57, marked: false }, { number: 70, marked: false } ],
      [ { number: 11, marked: false }, { number: 22, marked: false }, { number: 0, marked: true },  { number: 54, marked: false }, { number: 73, marked: false } ],
      [ { number: 14, marked: false }, { number: 16, marked: false }, { number: 35, marked: false }, { number: 58, marked: false }, { number: 66, marked: false } ],
      [ { number: 1, marked: false }, { number: 18, marked: false }, { number: 34, marked: false }, { number: 56, marked: false }, { number: 62, marked: false } ]
    ]
  },
  {
    id: "58",
    grid: [
      [ { number: 14, marked: false }, { number: 23, marked: false }, { number: 39, marked: false }, { number: 50, marked: false }, { number: 66, marked: false } ],
      [ { number: 6, marked: false }, { number: 18, marked: false }, { number: 40, marked: false }, { number: 52, marked: false }, { number: 61, marked: false } ],
      [ { number: 9, marked: false }, { number: 27, marked: false }, { number: 0, marked: true },  { number: 54, marked: false }, { number: 74, marked: false } ],
      [ { number: 10, marked: false }, { number: 16, marked: false }, { number: 38, marked: false }, { number: 57, marked: false }, { number: 69, marked: false } ],
      [ { number: 7, marked: false }, { number: 26, marked: false }, { number: 44, marked: false }, { number: 47, marked: false }, { number: 63, marked: false } ]
    ]
  }, 
  {
    id: "59",
    grid: [
      [ { number: 6, marked: false }, { number: 26, marked: false }, { number: 35, marked: false }, { number: 57, marked: false }, { number: 69, marked: false } ],
      [ { number: 13, marked: false }, { number: 25, marked: false }, { number: 36, marked: false }, { number: 47, marked: false }, { number: 63, marked: false } ],
      [ { number: 4, marked: false }, { number: 19, marked: false }, { number: 0, marked: true },  { number: 56, marked: false }, { number: 65, marked: false } ],
      [ { number: 9, marked: false }, { number: 16, marked: false }, { number: 39, marked: false }, { number: 46, marked: false }, { number: 62, marked: false } ],
      [ { number: 11, marked: false }, { number: 24, marked: false }, { number: 34, marked: false }, { number: 55, marked: false }, { number: 64, marked: false } ]
    ]
  }, 
  {
    id: "60",
    grid: [
      [ { number: 10, marked: false }, { number: 20, marked: false }, { number: 31, marked: false }, { number: 50, marked: false }, { number: 67, marked: false } ],
      [ { number: 2, marked: false }, { number: 19, marked: false }, { number: 45, marked: false }, { number: 56, marked: false }, { number: 61, marked: false } ],
      [ { number: 13, marked: false }, { number: 17, marked: false }, { number: 0, marked: true },  { number: 47, marked: false }, { number: 69, marked: false } ],
      [ { number: 12, marked: false }, { number: 29, marked: false }, { number: 43, marked: false }, { number: 59, marked: false }, { number: 63, marked: false } ],
      [ { number: 5, marked: false }, { number: 25, marked: false }, { number: 37, marked: false }, { number: 49, marked: false }, { number: 70, marked: false } ]
    ]
  }, 
  {
    id: "61",
    grid: [
      [ { number: 9, marked: false }, { number: 27, marked: false }, { number: 42, marked: false }, { number: 52, marked: false }, { number: 63, marked: false } ],
      [ { number: 2, marked: false }, { number: 24, marked: false }, { number: 36, marked: false }, { number: 47, marked: false }, { number: 61, marked: false } ],
      [ { number: 5, marked: false }, { number: 23, marked: false }, { number: 0, marked: true },  { number: 48, marked: false }, { number: 75, marked: false } ],
      [ { number: 15, marked: false }, { number: 29, marked: false }, { number: 43, marked: false }, { number: 54, marked: false }, { number: 72, marked: false } ],
      [ { number: 7, marked: false }, { number: 25, marked: false }, { number: 44, marked: false }, { number: 55, marked: false }, { number: 69, marked: false } ]
    ]
  },
  {
    id: "62",
    grid: [
      [ { number: 5, marked: false }, { number: 19, marked: false }, { number: 44, marked: false }, { number: 48, marked: false }, { number: 65, marked: false } ],
      [ { number: 10, marked: false }, { number: 27, marked: false }, { number: 34, marked: false }, { number: 47, marked: false }, { number: 66, marked: false } ],
      [ { number: 12, marked: false }, { number: 21, marked: false }, { number: 0, marked: true },  { number: 59, marked: false }, { number: 64, marked: false } ],
      [ { number: 15, marked: false }, { number: 29, marked: false }, { number: 38, marked: false }, { number: 46, marked: false }, { number: 74, marked: false } ],
      [ { number: 9, marked: false }, { number: 17, marked: false }, { number: 40, marked: false }, { number: 56, marked: false }, { number: 69, marked: false } ]
    ]
  }, 
  {
    id: "63",
    grid: [
      [ { number: 11, marked: false }, { number: 16, marked: false }, { number: 37, marked: false }, { number: 52, marked: false }, { number: 69, marked: false } ],
      [ { number: 10, marked: false }, { number: 21, marked: false }, { number: 31, marked: false }, { number: 48, marked: false }, { number: 70, marked: false } ],
      [ { number: 8, marked: false }, { number: 17, marked: false }, { number: 0, marked: true },  { number: 46, marked: false }, { number: 64, marked: false } ],
      [ { number: 12, marked: false }, { number: 27, marked: false }, { number: 34, marked: false }, { number: 51, marked: false }, { number: 68, marked: false } ],
      [ { number: 1, marked: false }, { number: 19, marked: false }, { number: 38, marked: false }, { number: 57, marked: false }, { number: 75, marked: false } ]
    ]
  },
  {
    id: "64",
    grid: [
      [ { number: 14, marked: false }, { number: 22, marked: false }, { number: 35, marked: false }, { number: 53, marked: false }, { number: 65, marked: false } ],
      [ { number: 7, marked: false }, { number: 29, marked: false }, { number: 44, marked: false }, { number: 47, marked: false }, { number: 70, marked: false } ],
      [ { number: 1, marked: false }, { number: 24, marked: false }, { number: 0, marked: true },  { number: 46, marked: false }, { number: 71, marked: false } ],
      [ { number: 4, marked: false }, { number: 23, marked: false }, { number: 41, marked: false }, { number: 49, marked: false }, { number: 75, marked: false } ],
      [ { number: 13, marked: false }, { number: 18, marked: false }, { number: 38, marked: false }, { number: 56, marked: false }, { number: 64, marked: false } ]
    ]
  },
  {
    id: "65",
    grid: [
      [ { number: 5, marked: false }, { number: 20, marked: false }, { number: 32, marked: false }, { number: 48, marked: false }, { number: 65, marked: false } ],
      [ { number: 6, marked: false }, { number: 19, marked: false }, { number: 31, marked: false }, { number: 50, marked: false }, { number: 71, marked: false } ],
      [ { number: 10, marked: false }, { number: 16, marked: false }, { number: 0, marked: true },  { number: 49, marked: false }, { number: 69, marked: false } ],
      [ { number: 4, marked: false }, { number: 23, marked: false }, { number: 37, marked: false }, { number: 58, marked: false }, { number: 74, marked: false } ],
      [ { number: 3, marked: false }, { number: 18, marked: false }, { number: 33, marked: false }, { number: 52, marked: false }, { number: 63, marked: false } ]
    ]
  }, 
  {
    id: "66",
    grid: [
      [ { number: 7, marked: false }, { number: 26, marked: false }, { number: 40, marked: false }, { number: 57, marked: false }, { number: 61, marked: false } ],
      [ { number: 4, marked: false }, { number: 19, marked: false }, { number: 39, marked: false }, { number: 60, marked: false }, { number: 66, marked: false } ],
      [ { number: 13, marked: false }, { number: 27, marked: false }, { number: 0, marked: true },  { number: 48, marked: false }, { number: 70, marked: false } ],
      [ { number: 9, marked: false }, { number: 17, marked: false }, { number: 42, marked: false }, { number: 58, marked: false }, { number: 75, marked: false } ],
      [ { number: 12, marked: false }, { number: 18, marked: false }, { number: 45, marked: false }, { number: 47, marked: false }, { number: 72, marked: false } ]
    ]
  },
  {
    id: "67",
    grid: [
      [ { number: 7, marked: false }, { number: 25, marked: false }, { number: 35, marked: false }, { number: 50, marked: false }, { number: 74, marked: false } ],
      [ { number: 13, marked: false }, { number: 23, marked: false }, { number: 43, marked: false }, { number: 57, marked: false }, { number: 71, marked: false } ],
      [ { number: 3, marked: false }, { number: 16, marked: false }, { number: 0, marked: true },  { number: 52, marked: false }, { number: 61, marked: false } ],
      [ { number: 12, marked: false }, { number: 27, marked: false }, { number: 45, marked: false }, { number: 51, marked: false }, { number: 69, marked: false } ],
      [ { number: 8, marked: false }, { number: 19, marked: false }, { number: 40, marked: false }, { number: 56, marked: false }, { number: 64, marked: false } ]
    ]
  },
  {
    id: "68",
    grid: [
      [ { number: 15, marked: false }, { number: 24, marked: false }, { number: 45, marked: false }, { number: 50, marked: false }, { number: 63, marked: false } ],
      [ { number: 1, marked: false }, { number: 26, marked: false }, { number: 38, marked: false }, { number: 48, marked: false }, { number: 70, marked: false } ],
      [ { number: 12, marked: false }, { number: 18, marked: false }, { number: 0, marked: true },  { number: 55, marked: false }, { number: 72, marked: false } ],
      [ { number: 3, marked: false }, { number: 25, marked: false }, { number: 44, marked: false }, { number: 60, marked: false }, { number: 68, marked: false } ],
      [ { number: 8, marked: false }, { number: 17, marked: false }, { number: 43, marked: false }, { number: 51, marked: false }, { number: 62, marked: false } ]
    ]
  }, 
  {
    id: "69",
    grid: [
      [ { number: 6, marked: false }, { number: 20, marked: false }, { number: 36, marked: false }, { number: 52, marked: false }, { number: 69, marked: false } ],
      [ { number: 1, marked: false }, { number: 21, marked: false }, { number: 45, marked: false }, { number: 46, marked: false }, { number: 62, marked: false } ],
      [ { number: 7, marked: false }, { number: 26, marked: false }, { number: 0, marked: true },  { number: 59, marked: false }, { number: 74, marked: false } ],
      [ { number: 8, marked: false }, { number: 30, marked: false }, { number: 39, marked: false }, { number: 57, marked: false }, { number: 71, marked: false } ],
      [ { number: 13, marked: false }, { number: 23, marked: false }, { number: 31, marked: false }, { number: 53, marked: false }, { number: 70, marked: false } ]
    ]
  },
  {
    id: "70",
    grid: [
      [ { number: 2, marked: false }, { number: 26, marked: false }, { number: 43, marked: false }, { number: 57, marked: false }, { number: 69, marked: false } ],
      [ { number: 7, marked: false }, { number: 24, marked: false }, { number: 41, marked: false }, { number: 60, marked: false }, { number: 75, marked: false } ],
      [ { number: 3, marked: false }, { number: 28, marked: false }, { number: 0, marked: true },  { number: 46, marked: false }, { number: 65, marked: false } ],
      [ { number: 10, marked: false }, { number: 23, marked: false }, { number: 36, marked: false }, { number: 52, marked: false }, { number: 63, marked: false } ],
      [ { number: 5, marked: false }, { number: 20, marked: false }, { number: 37, marked: false }, { number: 54, marked: false }, { number: 72, marked: false } ]
    ]
  }, 
  //Cartones Rojos
  {
    id: "481",
    grid: [
      [ { number: 3, marked: false }, { number: 22, marked: false }, { number: 36, marked: false }, { number: 49, marked: false }, { number: 63, marked: false } ],
      [ { number: 4, marked: false }, { number: 27, marked: false }, { number: 33, marked: false }, { number: 47, marked: false }, { number: 67, marked: false } ],
      [ { number: 8, marked: false }, { number: 21, marked: false }, { number: 0, marked: true },  { number: 52, marked: false }, { number: 72, marked: false } ],
      [ { number: 2, marked: false }, { number: 30, marked: false }, { number: 45, marked: false }, { number: 58, marked: false }, { number: 65, marked: false } ],
      [ { number: 10, marked: false }, { number: 17, marked: false }, { number: 34, marked: false }, { number: 51, marked: false }, { number: 62, marked: false } ]
    ]
  },
  {
    id: "482",
    grid: [
      [ { number: 15, marked: false }, { number: 19, marked: false }, { number: 36, marked: false }, { number: 54, marked: false }, { number: 74, marked: false } ],
      [ { number: 1, marked: false }, { number: 20, marked: false }, { number: 33, marked: false }, { number: 56, marked: false }, { number: 72, marked: false } ],
      [ { number: 12, marked: false }, { number: 27, marked: false }, { number: 0, marked: true },  { number: 55, marked: false }, { number: 67, marked: false } ],
      [ { number: 2, marked: false }, { number: 17, marked: false }, { number: 42, marked: false }, { number: 49, marked: false }, { number: 66, marked: false } ],
      [ { number: 6, marked: false }, { number: 23, marked: false }, { number: 38, marked: false }, { number: 52, marked: false }, { number: 70, marked: false } ]
    ]
  },
  {
    id: "483",
    grid: [
      [ { number: 2, marked: false }, { number: 23, marked: false }, { number: 36, marked: false }, { number: 49, marked: false }, { number: 67, marked: false } ],
      [ { number: 4, marked: false }, { number: 25, marked: false }, { number: 38, marked: false }, { number: 59, marked: false }, { number: 73, marked: false } ],
      [ { number: 3, marked: false }, { number: 26, marked: false }, { number: 0, marked: true },  { number: 52, marked: false }, { number: 68, marked: false } ],
      [ { number: 7, marked: false }, { number: 20, marked: false }, { number: 42, marked: false }, { number: 55, marked: false }, { number: 75, marked: false } ],
      [ { number: 11, marked: false }, { number: 19, marked: false }, { number: 40, marked: false }, { number: 60, marked: false }, { number: 64, marked: false } ]
    ]
  },
  {
    id: "484",
    grid: [
      [ { number: 1, marked: false }, { number: 21, marked: false }, { number: 35, marked: false }, { number: 52, marked: false }, { number: 67, marked: false } ],
      [ { number: 10, marked: false }, { number: 26, marked: false }, { number: 41, marked: false }, { number: 48, marked: false }, { number: 62, marked: false } ],
      [ { number: 5, marked: false }, { number: 17, marked: false }, { number: 0, marked: true },  { number: 53, marked: false }, { number: 66, marked: false } ],
      [ { number: 13, marked: false }, { number: 18, marked: false }, { number: 36, marked: false }, { number: 56, marked: false }, { number: 75, marked: false } ],
      [ { number: 3, marked: false }, { number: 20, marked: false }, { number: 33, marked: false }, { number: 46, marked: false }, { number: 61, marked: false } ]
    ]
  },
  {
    id: "485",
    grid: [
      [ { number: 15, marked: false }, { number: 24, marked: false }, { number: 43, marked: false }, { number: 55, marked: false }, { number: 65, marked: false } ],
      [ { number: 14, marked: false }, { number: 29, marked: false }, { number: 38, marked: false }, { number: 52, marked: false }, { number: 67, marked: false } ],
      [ { number: 12, marked: false }, { number: 30, marked: false }, { number: 0, marked: true },  { number: 46, marked: false }, { number: 72, marked: false } ],
      [ { number: 5, marked: false }, { number: 26, marked: false }, { number: 36, marked: false }, { number: 50, marked: false }, { number: 63, marked: false } ],
      [ { number: 11, marked: false }, { number: 17, marked: false }, { number: 32, marked: false }, { number: 54, marked: false }, { number: 61, marked: false } ]
    ]
  },
  {
    id: "486",
    grid: [
      [ { number: 14, marked: false }, { number: 28, marked: false }, { number: 45, marked: false }, { number: 48, marked: false }, { number: 64, marked: false } ],
      [ { number: 13, marked: false }, { number: 22, marked: false }, { number: 43, marked: false }, { number: 54, marked: false }, { number: 62, marked: false } ],
      [ { number: 12, marked: false }, { number: 19, marked: false }, { number: 0, marked: true },  { number: 56, marked: false }, { number: 66, marked: false } ],
      [ { number: 5, marked: false }, { number: 21, marked: false }, { number: 41, marked: false }, { number: 59, marked: false }, { number: 63, marked: false } ],
      [ { number: 8, marked: false }, { number: 27, marked: false }, { number: 42, marked: false }, { number: 52, marked: false }, { number: 67, marked: false } ]
    ]
  },
  {
    id: "487",
    grid: [
      [ { number: 6, marked: false }, { number: 27, marked: false }, { number: 40, marked: false }, { number: 51, marked: false }, { number: 65, marked: false } ],
      [ { number: 2, marked: false }, { number: 19, marked: false }, { number: 43, marked: false }, { number: 46, marked: false }, { number: 67, marked: false } ],
      [ { number: 1, marked: false }, { number: 29, marked: false }, { number: 0, marked: true },  { number: 50, marked: false }, { number: 62, marked: false } ],
      [ { number: 15, marked: false }, { number: 28, marked: false }, { number: 42, marked: false }, { number: 52, marked: false }, { number: 61, marked: false } ],
      [ { number: 4, marked: false }, { number: 17, marked: false }, { number: 37, marked: false }, { number: 47, marked: false }, { number: 71, marked: false } ]
    ]
  },
  {
    id: "488",
    grid: [
      [ { number: 8, marked: false }, { number: 20, marked: false }, { number: 43, marked: false }, { number: 53, marked: false }, { number: 73, marked: false } ],
      [ { number: 9, marked: false }, { number: 24, marked: false }, { number: 41, marked: false }, { number: 57, marked: false }, { number: 67, marked: false } ],
      [ { number: 4, marked: false }, { number: 21, marked: false }, { number: 0, marked: true },  { number: 50, marked: false }, { number: 68, marked: false } ],
      [ { number: 13, marked: false }, { number: 19, marked: false }, { number: 45, marked: false }, { number: 52, marked: false }, { number: 75, marked: false } ],
      [ { number: 5, marked: false }, { number: 30, marked: false }, { number: 44, marked: false }, { number: 58, marked: false }, { number: 72, marked: false } ]
    ]
  }, 
  {
    id: "489",
    grid: [
      [ { number: 12, marked: false }, { number: 21, marked: false }, { number: 34, marked: false }, { number: 56, marked: false }, { number: 66, marked: false } ],
      [ { number: 8, marked: false }, { number: 29, marked: false }, { number: 31, marked: false }, { number: 55, marked: false }, { number: 61, marked: false } ],
      [ { number: 1, marked: false }, { number: 30, marked: false }, { number: 0, marked: true },  { number: 59, marked: false }, { number: 75, marked: false } ],
      [ { number: 15, marked: false }, { number: 25, marked: false }, { number: 40, marked: false }, { number: 52, marked: false }, { number: 73, marked: false } ],
      [ { number: 2, marked: false }, { number: 24, marked: false }, { number: 36, marked: false }, { number: 49, marked: false }, { number: 74, marked: false } ]
    ]
  },
  {
    id: "490",
    grid: [
      [ { number: 8, marked: false }, { number: 24, marked: false }, { number: 39, marked: false }, { number: 46, marked: false }, { number: 63, marked: false } ],
      [ { number: 11, marked: false }, { number: 27, marked: false }, { number: 35, marked: false }, { number: 49, marked: false }, { number: 68, marked: false } ],
      [ { number: 6, marked: false }, { number: 16, marked: false }, { number: 0, marked: true },  { number: 58, marked: false }, { number: 71, marked: false } ],
      [ { number: 3, marked: false }, { number: 26, marked: false }, { number: 33, marked: false }, { number: 60, marked: false }, { number: 62, marked: false } ],
      [ { number: 15, marked: false }, { number: 19, marked: false }, { number: 42, marked: false }, { number: 54, marked: false }, { number: 70, marked: false } ]
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
  },
  {
    id: "492",
    grid: [
      [ { number: 9, marked: false }, { number: 22, marked: false }, { number: 43, marked: false }, { number: 59, marked: false }, { number: 68, marked: false } ],
      [ { number: 12, marked: false }, { number: 28, marked: false }, { number: 34, marked: false }, { number: 50, marked: false }, { number: 73, marked: false } ],
      [ { number: 13, marked: false }, { number: 24, marked: false }, { number: 0, marked: true },  { number: 54, marked: false }, { number: 61, marked: false } ],
      [ { number: 14, marked: false }, { number: 20, marked: false }, { number: 42, marked: false }, { number: 49, marked: false }, { number: 65, marked: false } ],
      [ { number: 2, marked: false }, { number: 16, marked: false }, { number: 44, marked: false }, { number: 58, marked: false }, { number: 74, marked: false } ]
    ]
  }, 
  {
    id: "493",
    grid: [
      [ { number: 13, marked: false }, { number: 22, marked: false }, { number: 37, marked: false }, { number: 55, marked: false }, { number: 67, marked: false } ],
      [{ number: 2, marked: false }, { number: 27, marked: false }, { number: 35, marked: false }, { number: 60, marked: false }, { number: 70, marked: false } ],
      [ { number: 1, marked: false }, { number: 30, marked: false }, { number: 0, marked: true },  { number: 56, marked: false }, { number: 71, marked: false } ],
      [ { number: 14, marked: false }, { number: 26, marked: false }, { number: 40, marked: false }, { number: 59, marked: false }, { number: 64, marked: false } ],
      [ { number: 12, marked: false }, { number: 20, marked: false }, { number: 41, marked: false }, { number: 47, marked: false }, { number: 62, marked: false } ]
    ]
  }, 
  {
    id: "494",
    grid: [
      [ { number: 2, marked: false }, { number: 21, marked: false }, { number: 44, marked: false }, { number: 56, marked: false }, { number: 66, marked: false } ],
      [ { number: 8, marked: false }, { number: 26, marked: false }, { number: 33, marked: false }, { number: 51, marked: false }, { number: 75, marked: false } ],
      [ { number: 10, marked: false }, { number: 27, marked: false }, { number: 0, marked: true },  { number: 58, marked: false }, { number: 62, marked: false } ],
      [ { number: 1, marked: false }, { number: 29, marked: false }, { number: 37, marked: false }, { number: 59, marked: false }, { number: 68, marked: false } ],
      [ { number: 6, marked: false }, { number: 20, marked: false }, { number: 43, marked: false }, { number: 54, marked: false }, { number: 61, marked: false } ]
    ]
  }, 
  {
    id: "495",
    grid: [
      [ { number: 2, marked: false }, { number: 27, marked: false }, { number: 43, marked: false }, { number: 57, marked: false }, { number: 68, marked: false } ],
      [ { number: 15, marked: false }, { number: 20, marked: false }, { number: 42, marked: false }, { number: 52, marked: false }, { number: 73, marked: false } ],
      [ { number: 9, marked: false }, { number: 26, marked: false }, { number: 0, marked: true },  { number: 56, marked: false }, { number: 69, marked: false } ],
      [ { number: 10, marked: false }, { number: 30, marked: false }, { number: 32, marked: false }, { number: 58, marked: false }, { number: 61, marked: false } ],
      [ { number: 13, marked: false }, { number: 18, marked: false }, { number: 41, marked: false }, { number: 51, marked: false }, { number: 63, marked: false } ]
    ]
  }, 
  {
    id: "496",
    grid: [
      [ { number: 9, marked: false }, { number: 18, marked: false }, { number: 41, marked: false }, { number: 56, marked: false }, { number: 64, marked: false } ],
      [ { number: 11, marked: false }, { number: 19, marked: false }, { number: 43, marked: false }, { number: 51, marked: false }, { number: 65, marked: false } ],
      [ { number: 7, marked: false }, { number: 25, marked: false }, { number: 0, marked: true },  { number: 55, marked: false }, { number: 69, marked: false } ],
      [ { number: 10, marked: false }, { number: 17, marked: false }, { number: 40, marked: false }, { number: 50, marked: false }, { number: 62, marked: false } ],
      [ { number: 5, marked: false }, { number: 16, marked: false }, { number: 39, marked: false }, { number: 52, marked: false }, { number: 63, marked: false } ]
    ]
  }, 
  {
    id: "497",
    grid: [
      [ { number: 14, marked: false }, { number: 18, marked: false }, { number: 38, marked: false }, { number: 54, marked: false }, { number: 65, marked: false } ],
      [ { number: 6, marked: false }, { number: 23, marked: false }, { number: 32, marked: false }, { number: 47, marked: false }, { number: 69, marked: false } ],
      [ { number: 8, marked: false }, { number: 29, marked: false }, { number: 0, marked: true },  { number: 56, marked: false }, { number: 72, marked: false } ],
      [ { number: 13, marked: false }, { number: 21, marked: false }, { number: 43, marked: false }, { number: 57, marked: false }, { number: 73, marked: false } ],
      [ { number: 11, marked: false }, { number: 25, marked: false }, { number: 44, marked: false }, { number: 53, marked: false }, { number: 71, marked: false } ]
    ]
  }, 
  {
    id: "498",
    grid: [
      [ { number: 12, marked: false }, { number: 29, marked: false }, { number: 33, marked: false }, { number: 56, marked: false }, { number: 73, marked: false } ],
      [ { number: 11, marked: false }, { number: 25, marked: false }, { number: 35, marked: false }, { number: 57, marked: false }, { number: 65, marked: false } ],
      [ { number: 2, marked: false }, { number: 24, marked: false }, { number: 0, marked: true },  { number: 55, marked: false }, { number: 63, marked: false } ],
      [ { number: 8, marked: false }, { number: 28, marked: false }, { number: 37, marked: false }, { number: 59, marked: false }, { number: 75, marked: false } ],
      [ { number: 6, marked: false }, { number: 17, marked: false }, { number: 45, marked: false }, { number: 53, marked: false }, { number: 72, marked: false } ]
    ]
  },
  {
    id: "499",
    grid: [
      [ { number: 15, marked: false }, { number: 28, marked: false }, { number: 36, marked: false }, { number: 60, marked: false }, { number: 74, marked: false } ],
      [ { number: 2, marked: false }, { number: 22, marked: false }, { number: 45, marked: false }, { number: 50, marked: false }, { number: 70, marked: false } ],
      [ { number: 13, marked: false }, { number: 16, marked: false }, { number: 0, marked: true },  { number: 56, marked: false }, { number: 71, marked: false } ],
      [ { number: 11, marked: false }, { number: 19, marked: false }, { number: 33, marked: false }, { number: 52, marked: false }, { number: 63, marked: false } ],
      [ { number: 7, marked: false }, { number: 17, marked: false }, { number: 42, marked: false }, { number: 55, marked: false }, { number: 72, marked: false } ]
    ]
  },
  {
    id: "500",
    grid: [
      [ { number: 10, marked: false }, { number: 26, marked: false }, { number: 39, marked: false }, { number: 46, marked: false }, { number: 67, marked: false } ],
      [ { number: 5, marked: false }, { number: 23, marked: false }, { number: 43, marked: false }, { number: 55, marked: false }, { number: 62, marked: false } ],
      [ { number: 2, marked: false }, { number: 22, marked: false }, { number: 0, marked: true },  { number: 60, marked: false }, { number: 68, marked: false } ],
      [ { number: 11, marked: false }, { number: 30, marked: false }, { number: 33, marked: false }, { number: 48, marked: false }, { number: 64, marked: false } ],
      [ { number: 15, marked: false }, { number: 35, marked: false }, { number: 31, marked: false }, { number: 57, marked: false }, { number: 71, marked: false } ]
    ]
  },
  //Cartones Carton Morados
  {
    id: "M1",
    grid: [
      [ { number: 1, marked: false }, { number: 26, marked: false }, { number: 37, marked: false }, { number: 50, marked: false }, { number: 71, marked: false } ],
      [ { number: 3, marked: false }, { number: 28, marked: false }, { number: 33, marked: false }, { number: 53, marked: false }, { number: 73, marked: false } ],
      [ { number: 2, marked: false }, { number: 22, marked: false }, { number: 0, marked: true },  { number: 57, marked: false }, { number: 68, marked: false } ],
      [ { number: 9, marked: false }, { number: 21, marked: false }, { number: 34, marked: false }, { number: 46, marked: false }, { number: 70, marked: false } ],
      [ { number: 13, marked: false }, { number: 29, marked: false }, { number: 45, marked: false }, { number: 52, marked: false }, { number: 63, marked: false } ]
    ]
  },
  {
    id: "M2",
    grid: [
      [ { number: 2, marked: false }, { number: 25, marked: false }, { number: 45, marked: false }, { number: 47, marked: false }, { number: 66, marked: false } ],
      [ { number: 12, marked: false }, { number: 22, marked: false }, { number: 39, marked: false }, { number: 55, marked: false }, { number: 72, marked: false } ],
      [ { number: 14, marked: false }, { number: 29, marked: false }, { number: 0, marked: true },  { number: 59, marked: false }, { number: 70, marked: false } ],
      [ { number: 9, marked: false }, { number: 21, marked: false }, { number: 44, marked: false }, { number: 53, marked: false }, { number: 64, marked: false } ],
      [ { number: 4, marked: false }, { number: 24, marked: false }, { number: 41, marked: false }, { number: 46, marked: false }, { number: 74, marked: false } ]
    ]
  },

  {
    id: "M3",
    grid: [
      [ { number: 3, marked: false }, { number: 18, marked: false }, { number: 35, marked: false }, { number: 50, marked: false }, { number: 61, marked: false } ],
      [ { number: 6, marked: false }, { number: 27, marked: false }, { number: 41, marked: false }, { number: 57, marked: false }, { number: 67, marked: false } ],
      [ { number: 5, marked: false }, { number: 19, marked: false }, { number: 0, marked: true },  { number: 54, marked: false }, { number: 75, marked: false } ],
      [ { number: 10, marked: false }, { number: 30, marked: false }, { number: 31, marked: false }, { number: 52, marked: false }, { number: 66, marked: false } ],
      [ { number: 12, marked: false }, { number: 26, marked: false }, { number: 32, marked: false }, { number: 53, marked: false }, { number: 70, marked: false } ]
    ]
  },

  {
    id: "M4",
    grid: [
      [ { number: 4, marked: false }, { number: 19, marked: false }, { number: 40, marked: false }, { number: 60, marked: false }, { number: 72, marked: false } ],
      [ { number: 12, marked: false }, { number: 21, marked: false }, { number: 38, marked: false }, { number: 56, marked: false }, { number: 69, marked: false } ],
      [ { number: 15, marked: false }, { number: 23, marked: false }, { number: 0, marked: true },  { number: 49, marked: false }, { number: 62, marked: false } ],
      [ { number: 10, marked: false }, { number: 27, marked: false }, { number: 41, marked: false }, { number: 53, marked: false }, { number: 67, marked: false } ],
      [ { number: 8, marked: false }, { number: 16, marked: false }, { number: 42, marked: false }, { number: 55, marked: false }, { number: 74, marked: false } ]
    ]
  },

  {
    id: "M5",
    grid: [
      [ { number: 5, marked: false }, { number: 28, marked: false }, { number: 43, marked: false }, { number: 49, marked: false }, { number: 70, marked: false } ],
      [ { number: 4, marked: false }, { number: 26, marked: false }, { number: 31, marked: false }, { number: 59, marked: false }, { number: 69, marked: false } ],
      [ { number: 3, marked: false }, { number: 29, marked: false }, { number: 0, marked: true },  { number: 57, marked: false }, { number: 74, marked: false } ],
      [ { number: 1, marked: false }, { number: 24, marked: false }, { number: 39, marked: false }, { number: 54, marked: false }, { number: 67, marked: false } ],
      [ { number: 12, marked: false }, { number: 25, marked: false }, { number: 41, marked: false }, { number: 47, marked: false }, { number: 66, marked: false } ]
    ]
  },

  {
    id: "M6",
    grid: [
      [ { number: 6, marked: false }, { number: 26, marked: false }, { number: 40, marked: false }, { number: 59, marked: false }, { number: 73, marked: false } ],
      [ { number: 15, marked: false }, { number: 17, marked: false }, { number: 41, marked: false }, { number: 57, marked: false }, { number: 71, marked: false } ],
      [ { number: 13, marked: false }, { number: 21, marked: false }, { number: 0, marked: true },  { number: 55, marked: false }, { number: 61, marked: false } ],
      [ { number: 14, marked: false }, { number: 20, marked: false }, { number: 35, marked: false }, { number: 60, marked: false }, { number: 63, marked: false } ],
      [ { number: 11, marked: false }, { number: 19, marked: false }, { number: 34, marked: false }, { number: 46, marked: false }, { number: 72, marked: false } ]
    ]
  },

  {
    id: "M7",
    grid: [
      [ { number: 7, marked: false }, { number: 30, marked: false }, { number: 43, marked: false }, { number: 56, marked: false }, { number: 74, marked: false } ],
      [ { number: 8, marked: false }, { number: 25, marked: false }, { number: 42, marked: false }, { number: 55, marked: false }, { number: 75, marked: false } ],
      [ { number: 9, marked: false }, { number: 22, marked: false }, { number: 0, marked: true },  { number: 52, marked: false }, { number: 63, marked: false } ],
      [ { number: 5, marked: false }, { number: 16, marked: false }, { number: 38, marked: false }, { number: 53, marked: false }, { number: 72, marked: false } ],
      [ { number: 12, marked: false }, { number: 21, marked: false }, { number: 34, marked: false }, { number: 54, marked: false }, { number: 61, marked: false } ]
    ]
  },

  {
    id: "M8",
    grid: [
      [ { number: 8, marked: false }, { number: 26, marked: false }, { number: 44, marked: false }, { number: 48, marked: false }, { number: 66, marked: false } ],
      [ { number: 1, marked: false }, { number: 25, marked: false }, { number: 45, marked: false }, { number: 56, marked: false }, { number: 64, marked: false } ],
      [ { number: 12, marked: false }, { number: 28, marked: false }, { number: 0, marked: true },  { number: 57, marked: false }, { number: 72, marked: false } ],
      [ { number: 7, marked: false }, { number: 18, marked: false }, { number: 34, marked: false }, { number: 47, marked: false }, { number: 71, marked: false } ],
      [ { number: 5, marked: false }, { number: 23, marked: false }, { number: 35, marked: false }, { number: 58, marked: false }, { number: 67, marked: false } ]
    ]
  },

  {
    id: "M9",
    grid: [
      [ { number: 9, marked: false }, { number: 27, marked: false }, { number: 41, marked: false }, { number: 56, marked: false }, { number: 62, marked: false } ],
      [ { number: 10, marked: false }, { number: 18, marked: false }, { number: 31, marked: false }, { number: 49, marked: false }, { number: 69, marked: false } ],
      [ { number: 11, marked: false }, { number: 16, marked: false }, { number: 0, marked: true },  { number: 52, marked: false }, { number: 64, marked: false } ],
      [ { number: 7, marked: false }, { number: 30, marked: false }, { number: 30, marked: false }, { number: 58, marked: false }, { number: 75, marked: false } ],
      [ { number: 8, marked: false }, { number: 29, marked: false }, { number: 29, marked: false }, { number: 59, marked: false }, { number: 73, marked: false } ]
    ]
  },

  {
    id: "M10",
    grid: [
      [ { number: 10, marked: false }, { number: 24, marked: false }, { number: 33, marked: false }, { number: 46, marked: false }, { number: 62, marked: false } ],
      [ { number: 11, marked: false }, { number: 27, marked: false }, { number: 38, marked: false }, { number: 6, marked: false }, { number: 65, marked: false } ],
      [ { number: 8, marked: false }, { number: 22, marked: false }, { number: 0, marked: true },  { number: 50, marked: false }, { number: 72, marked: false } ],
      [ { number: 4, marked: false }, { number: 17, marked: false }, { number: 39, marked: false }, { number: 52, marked: false }, { number: 61, marked: false } ],
      [ { number: 15, marked: false }, { number: 29, marked: false }, { number: 36, marked: false }, { number: 49, marked: false }, { number: 69, marked: false } ]
    ]
  },

  {
    id: "M11",
    grid: [
      [ { number: 11, marked: false }, { number: 29, marked: false }, { number: 35, marked: false }, { number: 53, marked: false }, { number: 68, marked: false } ],
      [ { number: 4, marked: false }, { number: 21, marked: false }, { number: 37, marked: false }, { number: 54, marked: false }, { number: 72, marked: false } ],
      [ { number: 14, marked: false }, { number: 19, marked: false }, { number: 0, marked: true },  { number: 50, marked: false }, { number: 66, marked: false } ],
      [ { number: 3, marked: false }, { number: 16, marked: false }, { number: 33, marked: false }, { number: 52, marked: false }, { number: 75, marked: false } ],
      [ { number: 8, marked: false }, { number: 30, marked: false }, { number: 43, marked: false }, { number: 56, marked: false }, { number: 63, marked: false } ]
    ]
  },

  {
    id: "M12",
    grid: [
      [ { number: 12, marked: false }, { number: 27, marked: false }, { number: 38, marked: false }, { number: 58, marked: false }, { number: 74, marked: false } ],
      [ { number: 13, marked: false }, { number: 21, marked: false }, { number: 42, marked: false }, { number: 54, marked: false }, { number: 67, marked: false } ],
      [ { number: 11, marked: false }, { number: 22, marked: false }, { number: 0, marked: true },  { number: 46, marked: false }, { number: 68, marked: false } ],
      [ { number: 3, marked: false }, { number: 26, marked: false }, { number: 39, marked: false }, { number: 53, marked: false }, { number: 70, marked: false } ],
      [ { number: 2, marked: false }, { number: 19, marked: false }, { number: 45, marked: false }, { number: 50, marked: false }, { number: 64, marked: false } ]
    ]
  },

  {
    id: "M13",
    grid: [
      [ { number: 13, marked: false }, { number: 17, marked: false }, { number: 37, marked: false }, { number: 58, marked: false }, { number: 62, marked: false } ],
      [ { number: 1, marked: false }, { number: 18, marked: false }, { number: 35, marked: false }, { number: 51, marked: false }, { number: 65, marked: false } ],
      [ { number: 15, marked: false }, { number: 28, marked: false }, { number: 0, marked: true },  { number: 56, marked: false }, { number: 66, marked: false } ],
      [ { number: 4, marked: false }, { number: 21, marked: false }, { number: 36, marked: false }, { number: 60, marked: false }, { number: 64, marked: false } ],
      [ { number: 11, marked: false }, { number: 29, marked: false }, { number: 39, marked: false }, { number: 59, marked: false }, { number: 71, marked: false } ]
    ]
  },

  {
    id: "M15",
    grid: [
      [ { number: 15, marked: false }, { number: 17, marked: false }, { number: 37, marked: false }, { number: 46, marked: false }, { number: 62, marked: false } ],
      [ { number: 4, marked: false }, { number: 16, marked: false }, { number: 41, marked: false }, { number: 48, marked: false }, { number: 66, marked: false } ],
      [ { number: 5, marked: false }, { number: 27, marked: false }, { number: 0, marked: true },  { number: 52, marked: false }, { number: 63, marked: false } ],
      [ { number: 7, marked: false }, { number: 20, marked: false }, { number: 35, marked: false }, { number: 59, marked: false }, { number: 68, marked: false } ],
      [ { number: 1, marked: false }, { number: 24, marked: false }, { number: 39, marked: false }, { number: 60, marked: false }, { number: 64, marked: false } ]
    ]
  },

  {
    id: "M16",
    grid: [
      [ { number: 1, marked: false }, { number: 22, marked: false }, { number: 32, marked: false }, { number: 47, marked: false }, { number: 72, marked: false } ],
      [ { number: 5, marked: false }, { number: 19, marked: false }, { number: 38, marked: false }, { number: 51, marked: false }, { number: 63, marked: false } ],
      [ { number: 9, marked: false }, { number: 29, marked: false }, { number: 0, marked: true },  { number: 57, marked: false }, { number: 69, marked: false } ],
      [ { number: 8, marked: false }, { number: 23, marked: false }, { number: 36, marked: false }, { number: 56, marked: false }, { number: 71, marked: false } ],
      [ { number: 13, marked: false }, { number: 25, marked: false }, { number: 39, marked: false }, { number: 58, marked: false }, { number: 62, marked: false } ]
    ]
  },

  {
    id: "M17",
    grid: [
      [ { number: 2, marked: false }, { number: 18, marked: false }, { number: 45, marked: false }, { number: 46, marked: false }, { number: 71, marked: false } ],
      [ { number: 12, marked: false }, { number: 25, marked: false }, { number: 37, marked: false }, { number: 55, marked: false }, { number: 73, marked: false } ],
      [ { number: 5, marked: false }, { number: 22, marked: false }, { number: 0, marked: true },  { number: 58, marked: false }, { number: 68, marked: false } ],
      [ { number: 6, marked: false }, { number: 19, marked: false }, { number: 34, marked: false }, { number: 49, marked: false }, { number: 70, marked: false } ],
      [ { number: 1, marked: false }, { number: 20, marked: false }, { number: 36, marked: false }, { number: 59, marked: false }, { number: 69, marked: false } ]
    ]
  },

  {
    id: "M18",
    grid: [
      [ { number: 3, marked: false }, { number: 17, marked: false }, { number: 41, marked: false }, { number: 53, marked: false }, { number: 61, marked: false } ],
      [ { number: 7, marked: false }, { number: 18, marked: false }, { number: 39, marked: false }, { number: 60, marked: false }, { number: 62, marked: false } ],
      [ { number: 1, marked: false }, { number: 21, marked: false }, { number: 0, marked: true },  { number: 47, marked: false }, { number: 73, marked: false } ],
      [ { number: 14, marked: false }, { number: 23, marked: false }, { number: 37, marked: false }, { number: 49, marked: false }, { number: 70, marked: false } ],
      [ { number: 15, marked: false }, { number: 19, marked: false }, { number: 46, marked: false }, { number: 52, marked: false }, { number: 68, marked: false } ]
    ]
  },

  {
    id: "M19",
    grid: [
      [ { number: 4, marked: false }, { number: 30, marked: false }, { number: 35, marked: false }, { number: 48, marked: false }, { number: 73, marked: false } ],
      [ { number: 11, marked: false }, { number: 24, marked: false }, { number: 41, marked: false }, { number: 52, marked: false }, { number: 75, marked: false } ],
      [ { number: 7, marked: false }, { number: 17, marked: false }, { number: 0, marked: true },  { number: 57, marked: false }, { number: 74, marked: false } ],
      [ { number: 14, marked: false }, { number: 19, marked: false }, { number: 32, marked: false }, { number: 53, marked: false }, { number: 65, marked: false } ],
      [ { number: 13, marked: false }, { number: 28, marked: false }, { number: 42, marked: false }, { number: 50, marked: false }, { number: 66, marked: false } ]
    ]
  },

  {
    id: "M20",
    grid: [
      [ { number: 5, marked: false }, { number: 23, marked: false }, { number: 42, marked: false }, { number: 50, marked: false }, { number: 70, marked: false } ],
      [ { number: 9, marked: false }, { number: 18, marked: false }, { number: 33, marked: false }, { number: 57, marked: false }, { number: 61, marked: false } ],
      [ { number: 8, marked: false }, { number: 21, marked: false }, { number: 0, marked: true },  { number: 51, marked: false }, { number: 75, marked: false } ],
      [ { number: 7, marked: false }, { number: 30, marked: false }, { number: 34, marked: false }, { number: 52, marked: false }, { number: 74, marked: false } ],
      [ { number: 11, marked: false }, { number: 27, marked: false }, { number: 32, marked: false }, { number: 56, marked: false }, { number: 69, marked: false } ]
    ]
  },

  {
    id: "M21",
    grid: [
      [ { number: 6, marked: false }, { number: 25, marked: false }, { number: 39, marked: false }, { number: 54, marked: false }, { number: 73, marked: false } ],
      [ { number: 5, marked: false }, { number: 29, marked: false }, { number: 38, marked: false }, { number: 48, marked: false }, { number: 75, marked: false } ],
      [ { number: 11, marked: false }, { number: 24, marked: false }, { number: 0, marked: true },  { number: 49, marked: false }, { number: 69, marked: false } ],
      [ { number: 7, marked: false }, { number: 16, marked: false }, { number: 40, marked: false }, { number: 56, marked: false }, { number: 67, marked: false } ],
      [ { number: 12, marked: false }, { number: 30, marked: false }, { number: 31, marked: false }, { number: 53, marked: false }, { number: 68, marked: false } ]
    ]
  },

  {
    id: "M22",
    grid: [
      [ { number: 7, marked: false }, { number: 30, marked: false }, { number: 32, marked: false }, { number: 50, marked: false }, { number: 64, marked: false } ],
      [ { number: 5, marked: false }, { number: 21, marked: false }, { number: 43, marked: false }, { number: 51, marked: false }, { number: 65, marked: false } ],
      [ { number: 8, marked: false }, { number: 28, marked: false }, { number: 0, marked: true },  { number: 58, marked: false }, { number: 73, marked: false } ],
      [ { number: 12, marked: false }, { number: 29, marked: false }, { number: 35, marked: false }, { number: 49, marked: false }, { number: 75, marked: false } ],
      [ { number: 3, marked: false }, { number: 20, marked: false }, { number: 41, marked: false }, { number: 59, marked: false }, { number: 72, marked: false } ]
    ]
  },

  {
    id: "M23",
    grid: [
      [ { number: 8, marked: false }, { number: 28, marked: false }, { number: 33, marked: false }, { number: 60, marked: false }, { number: 66, marked: false } ],
      [ { number: 2, marked: false }, { number: 16, marked: false }, { number: 39, marked: false }, { number: 58, marked: false }, { number: 61, marked: false } ],
      [ { number: 4, marked: false }, { number: 25, marked: false }, { number: 0, marked: true },  { number: 47, marked: false }, { number: 70, marked: false } ],
      [ { number: 7, marked: false }, { number: 17, marked: false }, { number: 35, marked: false }, { number: 48, marked: false }, { number: 64, marked: false } ],
      [ { number: 15, marked: false }, { number: 23, marked: false }, { number: 43, marked: false }, { number: 54, marked: false }, { number: 68, marked: false } ]
    ]
  },

  {
    id: "M24",
    grid: [
      [ { number: 9, marked: false }, { number: 28, marked: false }, { number: 41, marked: false }, { number: 53, marked: false }, { number: 65, marked: false } ],
      [ { number: 4, marked: false }, { number: 30, marked: false }, { number: 34, marked: false }, { number: 48, marked: false }, { number: 64, marked: false } ],
      [ { number: 8, marked: false }, { number: 22, marked: false }, { number: 0, marked: true },  { number: 51, marked: false }, { number: 68, marked: false } ],
      [ { number: 3, marked: false }, { number: 23, marked: false }, { number: 31, marked: false }, { number: 52, marked: false }, { number: 75, marked: false } ],
      [ { number: 11, marked: false }, { number: 24, marked: false }, { number: 38, marked: false }, { number: 59, marked: false }, { number: 74, marked: false } ]
    ]
  },

  {
    id: "M25",
    grid: [
      [ { number: 10, marked: false }, { number: 28, marked: false }, { number: 33, marked: false }, { number: 59, marked: false }, { number: 64, marked: false } ],
      [ { number: 12, marked: false }, { number: 26, marked: false }, { number: 35, marked: false }, { number: 54, marked: false }, { number: 61, marked: false } ],
      [ { number: 14, marked: false }, { number: 27, marked: false }, { number: 0, marked: true },  { number: 60, marked: false }, { number: 74, marked: false } ],
      [ { number: 15, marked: false }, { number: 16, marked: false }, { number: 37, marked: false }, { number: 52, marked: false }, { number: 71, marked: false } ],
      [ { number: 1, marked: false }, { number: 18, marked: false }, { number: 42, marked: false }, { number: 50, marked: false }, { number: 65, marked: false } ]
    ]
  },

  {
    id: "M26",
    grid: [
      [ { number: 11, marked: false }, { number: 27, marked: false }, { number: 45, marked: false }, { number: 48, marked: false }, { number: 71, marked: false } ],
      [ { number: 6, marked: false }, { number: 24, marked: false }, { number: 32, marked: false }, { number: 52, marked: false }, { number: 72, marked: false } ],
      [ { number: 2, marked: false }, { number: 26, marked: false }, { number: 0, marked: true },  { number: 49, marked: false }, { number: 62, marked: false } ],
      [ { number: 13, marked: false }, { number: 18, marked: false }, { number: 44, marked: false }, { number: 50, marked: false }, { number: 74, marked: false } ],
      [ { number: 12, marked: false }, { number: 17, marked: false }, { number: 34, marked: false }, { number: 46, marked: false }, { number: 66, marked: false } ]
    ]
  },

  {
    id: "M27",
    grid: [
      [ { number: 12, marked: false }, { number: 17, marked: false }, { number: 43, marked: false }, { number: 46, marked: false }, { number: 61, marked: false } ],
      [ { number: 3, marked: false }, { number: 27, marked: false }, { number: 34, marked: false }, { number: 53, marked: false }, { number: 71, marked: false } ],
      [ { number: 2, marked: false }, { number: 28, marked: false }, { number: 0, marked: true },  { number: 60, marked: false }, { number: 74, marked: false } ],
      [ { number: 15, marked: false }, { number: 16, marked: false }, { number: 40, marked: false }, { number: 58, marked: false }, { number: 70, marked: false } ],
      [ { number: 5, marked: false }, { number: 25, marked: false }, { number: 44, marked: false }, { number: 55, marked: false }, { number: 65, marked: false } ]
    ]
  },

  {
    id: "M28",
    grid: [
      [ { number: 13, marked: false }, { number: 24, marked: false }, { number: 43, marked: false }, { number: 53, marked: false }, { number: 67, marked: false } ],
      [ { number: 4, marked: false }, { number: 28, marked: false }, { number: 32, marked: false }, { number: 46, marked: false }, { number: 71, marked: false } ],
      [ { number: 10, marked: false }, { number: 26, marked: false }, { number: 0, marked: true },  { number: 58, marked: false }, { number: 69, marked: false } ],
      [ { number: 14, marked: false }, { number: 23, marked: false }, { number: 45, marked: false }, { number: 54, marked: false }, { number: 74, marked: false } ],
      [ { number: 1, marked: false }, { number: 25, marked: false }, { number: 41, marked: false }, { number: 49, marked: false }, { number: 70, marked: false } ]
    ]
  },

  {
    id: "M29",
    grid: [
      [{ number: 14, marked: false }, { number: 16, marked: false }, { number: 33, marked: false }, { number: 47, marked: false }, { number: 73, marked: false }],
      [{ number: 5, marked: false }, { number: 29, marked: false }, { number: 35, marked: false }, { number: 48, marked: false }, { number: 61, marked: false }],
      [{ number: 9, marked: false }, { number: 20, marked: false }, { number: 0, marked: true }, { number: 60, marked: false }, { number: 72, marked: false }],
      [{ number: 15, marked: false }, { number: 26, marked: false }, { number: 36, marked: false }, { number: 57, marked: false }, { number: 70, marked: false }],
      [{ number: 7, marked: false }, { number: 19, marked: false }, { number: 38, marked: false }, { number: 50, marked: false }, { number: 62, marked: false }]
    ]
  },

    {
    id: "M30",
    grid: [
      [ { number: 15, marked: false }, { number: 19, marked: false }, { number: 42, marked: false }, { number: 51, marked: false }, { number: 69, marked: false } ],
      [ { number: 13, marked: false }, { number: 16, marked: false }, { number: 35, marked: false }, { number: 56, marked: false }, { number: 62, marked: false } ],
      [ { number: 2, marked: false }, { number: 23, marked: false }, { number: 0, marked: true },  { number: 49, marked: false }, { number: 71, marked: false } ],
      [ { number: 9, marked: false }, { number: 21, marked: false }, { number: 41, marked: false }, { number: 50, marked: false }, { number: 65, marked: false } ],
      [ { number: 3, marked: false }, { number: 25, marked: false }, { number: 43, marked: false }, { number: 60, marked: false }, { number: 67, marked: false } ]
    ]
  },
    
    {
    id: "M31",
    grid: [
      [ { number: 1, marked: false }, { number: 17, marked: false }, { number: 45, marked: false }, { number: 51, marked: false }, { number: 69, marked: false } ],
      [ { number: 4, marked: false }, { number: 21, marked: false }, { number: 35, marked: false }, { number: 48, marked: false }, { number: 64, marked: false } ],
      [ { number: 7, marked: false }, { number: 27, marked: false }, { number: 0, marked: true },  { number: 50, marked: false }, { number: 74, marked: false } ],
      [ { number: 5, marked: false }, { number: 29, marked: false }, { number: 32, marked: false }, { number: 46, marked: false }, { number: 68, marked: false } ],
      [ { number: 3, marked: false }, { number: 26, marked: false }, { number: 41, marked: false }, { number: 47, marked: false }, { number: 66, marked: false } ]
    ]
  },
    
    {
    id: "M32",
    grid: [
      [ { number: 2, marked: false }, { number: 23, marked: false }, { number: 44, marked: false }, { number: 50, marked: false }, { number: 65, marked: false } ],
      [ { number: 1, marked: false }, { number: 19, marked: false }, { number: 32, marked: false }, { number: 51, marked: false }, { number: 71, marked: false } ],
      [ { number: 6, marked: false }, { number: 29, marked: false }, { number: 0, marked: true },  { number: 49, marked: false }, { number: 72, marked: false } ],
      [ { number: 3, marked: false }, { number: 24, marked: false }, { number: 33, marked: false }, { number: 57, marked: false }, { number: 68, marked: false } ],
      [ { number: 5, marked: false }, { number: 21, marked: false }, { number: 45, marked: false }, { number: 47, marked: false }, { number: 67, marked: false } ]
    ]
  },

  {
    id: "M33",
    grid: [
      [ { number: 3, marked: false }, { number: 28, marked: false }, { number: 35, marked: false }, { number: 55, marked: false }, { number: 65, marked: false } ],
      [ { number: 14, marked: false }, { number: 27, marked: false }, { number: 36, marked: false }, { number: 52, marked: false }, { number: 68, marked: false } ],
      [ { number: 6, marked: false }, { number: 20, marked: false }, { number: 0, marked: true },  { number: 58, marked: false }, { number: 75, marked: false } ],
      [ { number: 4, marked: false }, { number: 19, marked: false }, { number: 34, marked: false }, { number: 54, marked: false }, { number: 61, marked: false } ],
      [ { number: 5, marked: false }, { number: 30, marked: false }, { number: 42, marked: false }, { number: 57, marked: false }, { number: 71, marked: false } ]
    ]
  },
    
    {
    id: "M34",
    grid: [
      [ { number: 4, marked: false }, { number: 25, marked: false }, { number: 32, marked: false }, { number: 48, marked: false }, { number: 71, marked: false } ],
      [ { number: 8, marked: false }, { number: 24, marked: false }, { number: 31, marked: false }, { number: 57, marked: false }, { number: 74, marked: false } ],
      [ { number: 9, marked: false }, { number: 22, marked: false }, { number: 0, marked: true },  { number: 55, marked: false }, { number: 73, marked: false } ],
      [ { number: 1, marked: false }, { number: 19, marked: false }, { number: 42, marked: false }, { number: 47, marked: false }, { number: 67, marked: false } ],
      [ { number: 13, marked: false }, { number: 26, marked: false }, { number: 39, marked: false }, { number: 58, marked: false }, { number: 68, marked: false } ]
    ]
  },
    
    {
    id: "M35",
    grid: [
      [ { number: 5, marked: false }, { number: 22, marked: false }, { number: 42, marked: false }, { number: 58, marked: false }, { number: 72, marked: false } ],
      [ { number: 11, marked: false }, { number: 17, marked: false }, { number: 41, marked: false }, { number: 54, marked: false }, { number: 66, marked: false } ],
      [ { number: 4, marked: false }, { number: 26, marked: false }, { number: 0, marked: true },  { number: 60, marked: false }, { number: 61, marked: false } ],
      [ { number: 15, marked: false }, { number: 24, marked: false }, { number: 44, marked: false }, { number: 51, marked: false }, { number: 67, marked: false } ],
      [ { number: 6, marked: false }, { number: 20, marked: false }, { number: 38, marked: false }, { number: 49, marked: false }, { number: 64, marked: false } ]
    ]
  },
    
  {
    id: "M36",
    grid: [
      [ { number:  6, marked: false }, { number: 29, marked: false }, { number: 32, marked: false }, { number: 51, marked: false }, { number: 75, marked: false } ],
      [ { number:  8, marked: false }, { number: 20, marked: false }, { number: 43, marked: false }, { number: 55, marked: false }, { number: 65, marked: false } ],
      [ { number: 14, marked: false }, { number: 30, marked: false }, { number:  0, marked: true },  { number: 48, marked: false }, { number: 66, marked: false } ],
      [ { number:  7, marked: false }, { number: 23, marked: false }, { number: 34, marked: false }, { number: 52, marked: false }, { number: 68, marked: false } ],
      [ { number:  3, marked: false }, { number: 19, marked: false }, { number: 41, marked: false }, { number: 59, marked: false }, { number: 61, marked: false } ]
    ]
  },

  {
    id: "M37",
    grid: [
      [ { number:  7, marked: false }, { number: 23, marked: false }, { number: 40, marked: false }, { number: 56, marked: false }, { number: 64, marked: false } ],
      [ { number: 12, marked: false }, { number: 20, marked: false }, { number: 34, marked: false }, { number: 52, marked: false }, { number: 61, marked: false } ],
      [ { number:  9, marked: false }, { number: 30, marked: false }, { number:  0, marked: true },  { number: 57, marked: false }, { number: 75, marked: false } ],
      [ { number: 13, marked: false }, { number: 26, marked: false }, { number: 41, marked: false }, { number: 55, marked: false }, { number: 74, marked: false } ],
      [ { number: 10, marked: false }, { number: 16, marked: false }, { number: 31, marked: false }, { number: 54, marked: false }, { number: 70, marked: false } ]
    ]
  },

  {
    id: "M38",
    grid: [
      [ { number:  8, marked: false }, { number: 16, marked: false }, { number: 38, marked: false }, { number: 47, marked: false }, { number: 63, marked: false } ],
      [ { number: 13, marked: false }, { number: 25, marked: false }, { number: 42, marked: false }, { number: 60, marked: false }, { number: 71, marked: false } ],
      [ { number:  1, marked: false }, { number: 20, marked: false }, { number:  0, marked: true },  { number: 59, marked: false }, { number: 70, marked: false } ],
      [ { number: 10, marked: false }, { number: 26, marked: false }, { number: 40, marked: false }, { number: 54, marked: false }, { number: 73, marked: false } ],
      [ { number: 15, marked: false }, { number: 29, marked: false }, { number: 32, marked: false }, { number: 53, marked: false }, { number: 64, marked: false } ]
    ]
  },

  {
    id: "M39",
    grid: [
      [ { number:  9, marked: false }, { number: 29, marked: false }, { number: 31, marked: false }, { number: 54, marked: false }, { number: 64, marked: false } ],
      [ { number: 11, marked: false }, { number: 25, marked: false }, { number: 44, marked: false }, { number: 50, marked: false }, { number: 65, marked: false } ],
      [ { number: 10, marked: false }, { number: 16, marked: false }, { number:  0, marked: true },  { number: 55, marked: false }, { number: 70, marked: false } ],
      [ { number:  7, marked: false }, { number: 19, marked: false }, { number: 35, marked: false }, { number: 56, marked: false }, { number: 75, marked: false } ],
      [ { number: 12, marked: false }, { number: 30, marked: false }, { number: 36, marked: false }, { number: 59, marked: false }, { number: 74, marked: false } ]
    ]
  },

  {
    id: "M40",
    grid: [
      [ { number: 10, marked: false }, { number: 20, marked: false }, { number: 39, marked: false }, { number: 48, marked: false }, { number: 75, marked: false } ],
      [ { number:  7, marked: false }, { number: 30, marked: false }, { number: 42, marked: false }, { number: 54, marked: false }, { number: 62, marked: false } ],
      [ { number:  3, marked: false }, { number: 23, marked: false }, { number:  0, marked: true },  { number: 58, marked: false }, { number: 73, marked: false } ],
      [ { number: 14, marked: false }, { number: 21, marked: false }, { number: 34, marked: false }, { number: 50, marked: false }, { number: 64, marked: false } ],
      [ { number:  6, marked: false }, { number: 16, marked: false }, { number: 40, marked: false }, { number: 53, marked: false }, { number: 66, marked: false } ]
    ]
  },

  {
    id: "M41",
    grid: [
      [ { number: 11, marked: false }, { number: 25, marked: false }, { number: 44, marked: false }, { number: 47, marked: false }, { number: 75, marked: false } ],
      [ { number:  9, marked: false }, { number: 29, marked: false }, { number: 38, marked: false }, { number: 53, marked: false }, { number: 68, marked: false } ],
      [ { number:  5, marked: false }, { number: 20, marked: false }, { number:  0, marked: true },  { number: 51, marked: false }, { number: 71, marked: false } ],
      [ { number: 10, marked: false }, { number: 30, marked: false }, { number: 33, marked: false }, { number: 58, marked: false }, { number: 72, marked: false } ],
      [ { number: 14, marked: false }, { number: 19, marked: false }, { number: 32, marked: false }, { number: 50, marked: false }, { number: 70, marked: false } ]
    ]
  },

  {
    id: "M42",
    grid: [
      [ { number: 12, marked: false }, { number: 29, marked: false }, { number: 41, marked: false }, { number: 54, marked: false }, { number: 71, marked: false } ],
      [ { number:  3, marked: false }, { number: 28, marked: false }, { number: 33, marked: false }, { number: 47, marked: false }, { number: 68, marked: false } ],
      [ { number:  2, marked: false }, { number: 23, marked: false }, { number:  0, marked: true },  { number: 59, marked: false }, { number: 74, marked: false } ],
      [ { number: 10, marked: false }, { number: 26, marked: false }, { number: 42, marked: false }, { number: 46, marked: false }, { number: 65, marked: false } ],
      [ { number: 13, marked: false }, { number: 22, marked: false }, { number: 45, marked: false }, { number: 48, marked: false }, { number: 67, marked: false } ]
    ]
  },

  {
    id: "M43",
    grid: [
      [ { number: 13, marked: false }, { number: 16, marked: false }, { number: 37, marked: false }, { number: 46, marked: false }, { number: 67, marked: false } ],
      [ { number:  9, marked: false }, { number: 21, marked: false }, { number: 39, marked: false }, { number: 60, marked: false }, { number: 71, marked: false } ],
      [ { number: 15, marked: false }, { number: 27, marked: false }, { number:  0, marked: true },  { number: 47, marked: false }, { number: 68, marked: false } ],
      [ { number:  6, marked: false }, { number: 22, marked: false }, { number: 42, marked: false }, { number: 52, marked: false }, { number: 61, marked: false } ],
      [ { number:  4, marked: false }, { number: 19, marked: false }, { number: 38, marked: false }, { number: 57, marked: false }, { number: 64, marked: false } ]
    ]
  },

  {
    id: "M44",
    grid: [
      [ { number: 14, marked: false }, { number: 26, marked: false }, { number: 32, marked: false }, { number: 58, marked: false }, { number: 65, marked: false } ],
      [ { number: 15, marked: false }, { number: 18, marked: false }, { number: 42, marked: false }, { number: 60, marked: false }, { number: 71, marked: false } ],
      [ { number:  8, marked: false }, { number: 28, marked: false }, { number:  0, marked: true },  { number: 59, marked: false }, { number: 62, marked: false } ],
      [ { number:  2, marked: false }, { number: 25, marked: false }, { number: 43, marked: false }, { number: 55, marked: false }, { number: 68, marked: false } ],
      [ { number:  9, marked: false }, { number: 19, marked: false }, { number: 41, marked: false }, { number: 57, marked: false }, { number: 74, marked: false } ]
    ]
  },

  {
    id: "M45",
    grid: [
      [ { number: 15, marked: false }, { number: 26, marked: false }, { number: 41, marked: false }, { number: 49, marked: false }, { number: 70, marked: false } ],
      [ { number:  2, marked: false }, { number: 19, marked: false }, { number: 34, marked: false }, { number: 48, marked: false }, { number: 72, marked: false } ],
      [ { number:  7, marked: false }, { number: 16, marked: false }, { number:  0, marked: true },  { number: 46, marked: false }, { number: 66, marked: false } ],
      [ { number: 12, marked: false }, { number: 23, marked: false }, { number: 39, marked: false }, { number: 60, marked: false }, { number: 71, marked: false } ],
      [ { number:  1, marked: false }, { number: 22, marked: false }, { number: 33, marked: false }, { number: 58, marked: false }, { number: 62, marked: false } ]
    ]
  },

  {
    id: "M46",
    grid: [
      [ { number: 1, marked: false }, { number: 20, marked: false }, { number: 45, marked: false }, { number: 56, marked: false }, { number: 70, marked: false } ],
      [ { number: 9, marked: false }, { number: 29, marked: false }, { number: 33, marked: false }, { number: 46, marked: false }, { number: 66, marked: false } ],
      [ { number: 3, marked: false }, { number: 22, marked: false }, { number:  0, marked: true },  { number: 51, marked: false }, { number: 64, marked: false } ],
      [ { number: 2, marked: false }, { number: 26, marked: false }, { number: 36, marked: false }, { number: 49, marked: false }, { number: 69, marked: false } ],
      [ { number: 4, marked: false }, { number: 23, marked: false }, { number: 35, marked: false }, { number: 55, marked: false }, { number: 67, marked: false } ]
    ]
  },

  {
    id: "M47",
    grid: [
      [ { number:  2, marked: false }, { number: 20, marked: false }, { number: 34, marked: false }, { number: 58, marked: false }, { number: 73, marked: false } ],
      [ { number:  6, marked: false }, { number: 22, marked: false }, { number: 40, marked: false }, { number: 51, marked: false }, { number: 63, marked: false } ],
      [ { number:  4, marked: false }, { number: 27, marked: false }, { number:  0, marked: true },  { number: 57, marked: false }, { number: 74, marked: false } ],
      [ { number: 12, marked: false }, { number: 26, marked: false }, { number: 45, marked: false }, { number: 54, marked: false }, { number: 69, marked: false } ],
      [ { number:  5, marked: false }, { number: 23, marked: false }, { number: 37, marked: false }, { number: 47, marked: false }, { number: 65, marked: false } ]
    ]
  },

  {
    id: "M48",
    grid: [
      [ { number:  3, marked: false }, { number: 17, marked: false }, { number: 36, marked: false }, { number: 58, marked: false }, { number: 74, marked: false } ],
      [ { number:  8, marked: false }, { number: 28, marked: false }, { number: 34, marked: false }, { number: 54, marked: false }, { number: 75, marked: false } ],
      [ { number: 13, marked: false }, { number: 19, marked: false }, { number:  0, marked: true },  { number: 52, marked: false }, { number: 64, marked: false } ],
      [ { number:  9, marked: false }, { number: 30, marked: false }, { number: 38, marked: false }, { number: 51, marked: false }, { number: 70, marked: false } ],
      [ { number:  5, marked: false }, { number: 21, marked: false }, { number: 37, marked: false }, { number: 47, marked: false }, { number: 69, marked: false } ]
    ]
  },

  {
    id: "M49",
    grid: [
      [ { number:  4, marked: false }, { number: 25, marked: false }, { number: 40, marked: false }, { number: 46, marked: false }, { number: 69, marked: false } ],
      [ { number:  1, marked: false }, { number: 22, marked: false }, { number: 31, marked: false }, { number: 58, marked: false }, { number: 64, marked: false } ],
      [ { number: 11, marked: false }, { number: 19, marked: false }, { number:  0, marked: true },  { number: 47, marked: false }, { number: 74, marked: false } ],
      [ { number: 10, marked: false }, { number: 21, marked: false }, { number: 45, marked: false }, { number: 48, marked: false }, { number: 68, marked: false } ],
      [ { number:  6, marked: false }, { number: 24, marked: false }, { number: 37, marked: false }, { number: 55, marked: false }, { number: 70, marked: false } ]
    ]
  },

  {
    id: "M50",
    grid: [
      [ { number:  5, marked: false }, { number: 30, marked: false }, { number: 43, marked: false }, { number: 51, marked: false }, { number: 75, marked: false } ],
      [ { number: 13, marked: false }, { number: 23, marked: false }, { number: 37, marked: false }, { number: 50, marked: false }, { number: 70, marked: false } ],
      [ { number:  6, marked: false }, { number: 26, marked: false }, { number:  0, marked: true },  { number: 53, marked: false }, { number: 65, marked: false } ],
      [ { number:  2, marked: false }, { number: 25, marked: false }, { number: 44, marked: false }, { number: 57, marked: false }, { number: 61, marked: false } ],
      [ { number:  8, marked: false }, { number: 27, marked: false }, { number: 34, marked: false }, { number: 56, marked: false }, { number: 64, marked: false } ]
    ]
  },

  {
    id: "M51",
    grid: [
      [ { number:  6, marked: false }, { number: 18, marked: false }, { number: 43, marked: false }, { number: 56, marked: false }, { number: 64, marked: false } ],
      [ { number:  9, marked: false }, { number: 28, marked: false }, { number: 44, marked: false }, { number: 59, marked: false }, { number: 69, marked: false } ],
      [ { number: 13, marked: false }, { number: 20, marked: false }, { number:  0, marked: true },  { number: 53, marked: false }, { number: 71, marked: false } ],
      [ { number: 12, marked: false }, { number: 24, marked: false }, { number: 31, marked: false }, { number: 47, marked: false }, { number: 68, marked: false } ],
      [ { number:  2, marked: false }, { number: 29, marked: false }, { number: 40, marked: false }, { number: 58, marked: false }, { number: 65, marked: false } ]
    ]
  },

  {
    id: "M52",
    grid: [
      [ { number:  7, marked: false }, { number: 19, marked: false }, { number: 34, marked: false }, { number: 47, marked: false }, { number: 64, marked: false } ],
      [ { number: 13, marked: false }, { number: 25, marked: false }, { number: 36, marked: false }, { number: 49, marked: false }, { number: 61, marked: false } ],
      [ { number:  6, marked: false }, { number: 29, marked: false }, { number:  0, marked: true },  { number: 51, marked: false }, { number: 74, marked: false } ],
      [ { number:  2, marked: false }, { number: 30, marked: false }, { number: 40, marked: false }, { number: 59, marked: false }, { number: 75, marked: false } ],
      [ { number:  9, marked: false }, { number: 24, marked: false }, { number: 43, marked: false }, { number: 48, marked: false }, { number: 67, marked: false } ]
    ]
  },

  {
    id: "M53",
    grid: [
      [ { number:  8, marked: false }, { number: 24, marked: false }, { number: 41, marked: false }, { number: 52, marked: false }, { number: 72, marked: false } ],
      [ { number:  2, marked: false }, { number: 19, marked: false }, { number: 45, marked: false }, { number: 50, marked: false }, { number: 62, marked: false } ],
      [ { number: 11, marked: false }, { number: 20, marked: false }, { number:  0, marked: true },  { number: 46, marked: false }, { number: 70, marked: false } ],
      [ { number: 13, marked: false }, { number: 23, marked: false }, { number: 39, marked: false }, { number: 57, marked: false }, { number: 64, marked: false } ],
      [ { number: 14, marked: false }, { number: 26, marked: false }, { number: 36, marked: false }, { number: 48, marked: false }, { number: 68, marked: false } ]
    ]
  },

  {
    id: "M54",
    grid: [
      [ { number:  9, marked: false }, { number: 20, marked: false }, { number: 42, marked: false }, { number: 59, marked: false }, { number: 72, marked: false } ],
      [ { number: 13, marked: false }, { number: 28, marked: false }, { number: 44, marked: false }, { number: 48, marked: false }, { number: 48, marked: false } ],
      [ { number:  1, marked: false }, { number: 27, marked: false }, { number:  0, marked: true },  { number: 58, marked: false }, { number: 58, marked: false } ],
      [ { number: 15, marked: false }, { number: 21, marked: false }, { number: 43, marked: false }, { number: 51, marked: false }, { number: 51, marked: false } ],
      [ { number: 14, marked: false }, { number: 17, marked: false }, { number: 39, marked: false }, { number: 60, marked: false }, { number: 60, marked: false } ]
    ]
  },

  {
    id: "M55",
    grid: [
      [ { number: 10, marked: false }, { number: 26, marked: false }, { number: 37, marked: false }, { number: 59, marked: false }, { number: 72, marked: false } ],
      [ { number: 15, marked: false }, { number: 20, marked: false }, { number: 42, marked: false }, { number: 60, marked: false }, { number: 66, marked: false } ],
      [ { number: 12, marked: false }, { number: 17, marked: false }, { number:  0, marked: true },  { number: 58, marked: false }, { number: 65, marked: false } ],
      [ { number: 13, marked: false }, { number: 23, marked: false }, { number: 33, marked: false }, { number: 46, marked: false }, { number: 62, marked: false } ],
      [ { number: 14, marked: false }, { number: 29, marked: false }, { number: 36, marked: false }, { number: 54, marked: false }, { number: 73, marked: false } ]
    ]
  },

  {
    id: "M56",
    grid: [
      [ { number: 11, marked: false }, { number: 25, marked: false }, { number: 31, marked: false }, { number: 51, marked: false }, { number: 63, marked: false } ],
      [ { number:  6, marked: false }, { number: 20, marked: false }, { number: 34, marked: false }, { number: 59, marked: false }, { number: 67, marked: false } ],
      [ { number: 12, marked: false }, { number: 16, marked: false }, { number:  0, marked: true },  { number: 49, marked: false }, { number: 75, marked: false } ],
      [ { number:  8, marked: false }, { number: 19, marked: false }, { number: 37, marked: false }, { number: 54, marked: false }, { number: 71, marked: false } ],
      [ { number:  5, marked: false }, { number: 30, marked: false }, { number: 40, marked: false }, { number: 55, marked: false }, { number: 73, marked: false } ]
    ]
  },

  {
    id: "M57",
    grid: [
      [ { number: 12, marked: false }, { number: 23, marked: false }, { number: 34, marked: false }, { number: 59, marked: false }, { number: 68, marked: false } ],
      [ { number:  3, marked: false }, { number: 25, marked: false }, { number: 45, marked: false }, { number: 56, marked: false }, { number: 74, marked: false } ],
      [ { number:  1, marked: false }, { number: 19, marked: false }, { number:  0, marked: true },  { number: 46, marked: false }, { number: 69, marked: false } ],
      [ { number:  5, marked: false }, { number: 27, marked: false }, { number: 39, marked: false }, { number: 47, marked: false }, { number: 67, marked: false } ],
      [ { number:  7, marked: false }, { number: 17, marked: false }, { number: 43, marked: false }, { number: 55, marked: false }, { number: 66, marked: false } ]
    ]
  },

  {
    id: "M58",
    grid: [
      [ { number: 13, marked: false }, { number: 27, marked: false }, { number: 41, marked: false }, { number: 46, marked: false }, { number: 70, marked: false } ],
      [ { number: 15, marked: false }, { number: 21, marked: false }, { number: 37, marked: false }, { number: 60, marked: false }, { number: 62, marked: false } ],
      [ { number:  1, marked: false }, { number: 26, marked: false }, { number:  0, marked: true },  { number: 56, marked: false }, { number: 65, marked: false } ],
      [ { number:  3, marked: false }, { number: 25, marked: false }, { number: 34, marked: false }, { number: 54, marked: false }, { number: 61, marked: false } ],
      [ { number:  4, marked: false }, { number: 17, marked: false }, { number: 38, marked: false }, { number: 55, marked: false }, { number: 72, marked: false } ]
    ]
  },

  {
    id: "M59",
    grid: [
      [ { number: 14, marked: false }, { number: 19, marked: false }, { number: 31, marked: false }, { number: 48, marked: false }, { number: 63, marked: false } ],
      [ { number:  4, marked: false }, { number: 22, marked: false }, { number: 34, marked: false }, { number: 51, marked: false }, { number: 72, marked: false } ],
      [ { number:  2, marked: false }, { number: 30, marked: false }, { number:  0, marked: true },  { number: 52, marked: false }, { number: 73, marked: false } ],
      [ { number:  6, marked: false }, { number: 16, marked: false }, { number: 32, marked: false }, { number: 54, marked: false }, { number: 75, marked: false } ],
      [ { number:  3, marked: false }, { number: 29, marked: false }, { number: 36, marked: false }, { number: 56, marked: false }, { number: 62, marked: false } ]
    ]
  },

  {
    id: "M60",
    grid: [
      [ { number: 15, marked: false }, { number: 27, marked: false }, { number: 34, marked: false }, { number: 49, marked: false }, { number: 66, marked: false } ],
      [ { number:  1, marked: false }, { number: 17, marked: false }, { number: 39, marked: false }, { number: 50, marked: false }, { number: 63, marked: false } ],
      [ { number: 11, marked: false }, { number: 20, marked: false }, { number:  0, marked: true },  { number: 60, marked: false }, { number: 65, marked: false } ],
      [ { number: 10, marked: false }, { number: 25, marked: false }, { number: 38, marked: false }, { number: 54, marked: false }, { number: 61, marked: false } ],
      [ { number:  9, marked: false }, { number: 16, marked: false }, { number: 36, marked: false }, { number: 53, marked: false }, { number: 64, marked: false } ]
    ]
  },

  {
    id: "M61",
    grid: [
      [ { number:  1, marked: false }, { number: 23, marked: false }, { number: 34, marked: false }, { number: 56, marked: false }, { number: 68, marked: false } ],
      [ { number: 13, marked: false }, { number: 29, marked: false }, { number: 33, marked: false }, { number: 58, marked: false }, { number: 73, marked: false } ],
      [ { number:  2, marked: false }, { number: 19, marked: false }, { number:  0, marked: true },  { number: 50, marked: false }, { number: 72, marked: false } ],
      [ { number: 10, marked: false }, { number: 25, marked: false }, { number: 45, marked: false }, { number: 46, marked: false }, { number: 65, marked: false } ],
      [ { number:  3, marked: false }, { number: 24, marked: false }, { number: 31, marked: false }, { number: 48, marked: false }, { number: 69, marked: false } ]
    ]
  },

  {
    id: "M62",
    grid: [
      [ { number:  2, marked: false }, { number: 29, marked: false }, { number: 33, marked: false }, { number: 54, marked: false }, { number: 67, marked: false } ],
      [ { number: 10, marked: false }, { number: 22, marked: false }, { number: 37, marked: false }, { number: 46, marked: false }, { number: 73, marked: false } ],
      [ { number: 14, marked: false }, { number: 23, marked: false }, { number:  0, marked: true },  { number: 51, marked: false }, { number: 65, marked: false } ],
      [ { number:  1, marked: false }, { number: 24, marked: false }, { number: 36, marked: false }, { number: 52, marked: false }, { number: 70, marked: false } ],
      [ { number: 11, marked: false }, { number: 21, marked: false }, { number: 31, marked: false }, { number: 57, marked: false }, { number: 74, marked: false } ]
    ]
  },

  {
    id: "M63",
    grid: [
      [ { number:  3, marked: false }, { number: 28, marked: false }, { number: 38, marked: false }, { number: 59, marked: false }, { number: 65, marked: false } ],
      [ { number:  7, marked: false }, { number: 17, marked: false }, { number: 35, marked: false }, { number: 49, marked: false }, { number: 68, marked: false } ],
      [ { number:  6, marked: false }, { number: 18, marked: false }, { number:  0, marked: true },  { number: 51, marked: false }, { number: 61, marked: false } ],
      [ { number: 11, marked: false }, { number: 30, marked: false }, { number: 31, marked: false }, { number: 50, marked: false }, { number: 75, marked: false } ],
      [ { number:  9, marked: false }, { number: 27, marked: false }, { number: 33, marked: false }, { number: 47, marked: false }, { number: 74, marked: false } ]
    ]
  },

  {
    id: "M64",
    grid: [
      [ { number: 4, marked: false }, { number: 22, marked: false }, { number: 44, marked: false }, { number: 51, marked: false }, { number: 72, marked: false } ],
      [ { number: 6, marked: false }, { number: 30, marked: false }, { number: 41, marked: false }, { number: 54, marked: false }, { number: 75, marked: false } ],
      [ { number:10, marked: false }, { number: 26, marked: false }, { number:  0, marked: true },  { number: 55, marked: false }, { number: 71, marked: false } ],
      [ { number:14, marked: false }, { number: 28, marked: false }, { number: 36, marked: false }, { number: 56, marked: false }, { number: 70, marked: false } ],
      [ { number: 9, marked: false }, { number: 18, marked: false }, { number: 32, marked: false }, { number: 52, marked: false }, { number: 73, marked: false } ]
    ]
  },

  {
    id: "M65",
    grid: [
      [ { number: 5, marked: false }, { number: 27, marked: false }, { number: 45, marked: false }, { number: 46, marked: false }, { number: 71, marked: false } ],
      [ { number: 1, marked: false }, { number: 28, marked: false }, { number: 31, marked: false }, { number: 58, marked: false }, { number: 63, marked: false } ],
      [ { number:11, marked: false }, { number: 20, marked: false }, { number:  0, marked: true },  { number: 47, marked: false }, { number: 64, marked: false } ],
      [ { number:13, marked: false }, { number: 23, marked: false }, { number: 39, marked: false }, { number: 56, marked: false }, { number: 65, marked: false } ],
      [ { number: 3, marked: false }, { number: 24, marked: false }, { number: 37, marked: false }, { number: 55, marked: false }, { number: 73, marked: false } ]
    ]
  },

  {
    id: "M66",
    grid: [
      [ { number: 6, marked: false }, { number: 16, marked: false }, { number: 42, marked: false }, { number: 54, marked: false }, { number: 62, marked: false } ],
      [ { number:13, marked: false }, { number: 18, marked: false }, { number: 44, marked: false }, { number: 60, marked: false }, { number: 63, marked: false } ],
      [ { number: 3, marked: false }, { number: 17, marked: false }, { number:  0, marked: true },  { number: 47, marked: false }, { number: 73, marked: false } ],
      [ { number:15, marked: false }, { number: 21, marked: false }, { number: 36, marked: false }, { number: 52, marked: false }, { number: 74, marked: false } ],
      [ { number:14, marked: false }, { number: 27, marked: false }, { number: 43, marked: false }, { number: 55, marked: false }, { number: 61, marked: false } ]
    ]
  },

  {
    id: "M67",
    grid: [
      [ { number: 7, marked: false }, { number: 28, marked: false }, { number: 42, marked: false }, { number: 56, marked: false }, { number: 70, marked: false } ],
      [ { number:10, marked: false }, { number: 18, marked: false }, { number: 43, marked: false }, { number: 59, marked: false }, { number: 66, marked: false } ],
      [ { number: 9, marked: false }, { number: 16, marked: false }, { number:  0, marked: true },  { number: 58, marked: false }, { number: 61, marked: false } ],
      [ { number:15, marked: false }, { number: 17, marked: false }, { number: 41, marked: false }, { number: 48, marked: false }, { number: 62, marked: false } ],
      [ { number: 2, marked: false }, { number: 29, marked: false }, { number: 44, marked: false }, { number: 60, marked: false }, { number: 69, marked: false } ]
    ]
  },

  {
    id: "M68",
    grid: [
      [ { number: 8, marked: false }, { number: 21, marked: false }, { number: 40, marked: false }, { number: 49, marked: false }, { number: 66, marked: false } ],
      [ { number: 4, marked: false }, { number: 16, marked: false }, { number: 41, marked: false }, { number: 54, marked: false }, { number: 62, marked: false } ],
      [ { number: 5, marked: false }, { number: 20, marked: false }, { number:  0, marked: true },  { number: 50, marked: false }, { number: 61, marked: false } ],
      [ { number: 9, marked: false }, { number: 18, marked: false }, { number: 44, marked: false }, { number: 57, marked: false }, { number: 69, marked: false } ],
      [ { number:15, marked: false }, { number: 19, marked: false }, { number: 39, marked: false }, { number: 60, marked: false }, { number: 72, marked: false } ]
    ]
  },

  {
    id: "M69",
    grid: [
      [ { number: 9, marked: false }, { number: 26, marked: false }, { number: 40, marked: false }, { number: 51, marked: false }, { number: 67, marked: false } ],
      [ { number: 7, marked: false }, { number: 25, marked: false }, { number: 44, marked: false }, { number: 58, marked: false }, { number: 64, marked: false } ],
      [ { number:10, marked: false }, { number: 28, marked: false }, { number:  0, marked: true },  { number: 49, marked: false }, { number: 75, marked: false } ],
      [ { number:11, marked: false }, { number: 30, marked: false }, { number: 32, marked: false }, { number: 47, marked: false }, { number: 72, marked: false } ],
      [ { number: 6, marked: false }, { number: 27, marked: false }, { number: 36, marked: false }, { number: 52, marked: false }, { number: 61, marked: false } ]
    ]
  },

  {
    id: "M70",
    grid: [
      [ { number:10, marked: false }, { number: 18, marked: false }, { number: 32, marked: false }, { number: 47, marked: false }, { number: 74, marked: false } ],
      [ { number:11, marked: false }, { number: 26, marked: false }, { number: 45, marked: false }, { number: 56, marked: false }, { number: 64, marked: false } ],
      [ { number: 1, marked: false }, { number: 19, marked: false }, { number:  0, marked: true },  { number: 49, marked: false }, { number: 70, marked: false } ],
      [ { number: 2, marked: false }, { number: 20, marked: false }, { number: 31, marked: false }, { number: 46, marked: false }, { number: 73, marked: false } ],
      [ { number:13, marked: false }, { number: 28, marked: false }, { number: 37, marked: false }, { number: 57, marked: false }, { number: 66, marked: false } ]
    ]
  }

  //Cali cartones hasta colores
  {
    id: "",
    grid: [
      [ { number:, marked: false }, { number:, marked: false }, { number:, marked: false }, { number:, marked: false }, { number:, marked: false } ],
      [ { number:, marked: false }, { number:, marked: false }, { number:, marked: false }, { number:, marked: false }, { number:, marked: false } ],
      [ { number:, marked: false }, { number:, marked: false }, { number: 0, marked: true },  { number:, marked: false }, { number:, marked: false } ],
      [ { number:, marked: false }, { number:, marked: false }, { number:, marked: false }, { number:, marked: false }, { number:, marked: false } ],
      [ { number:, marked: false }, { number:, marked: false }, { number:, marked: false }, { number:, marked: false }, { number:, marked: false } ]
    ]
  }
];