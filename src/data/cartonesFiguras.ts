import { Cartones } from './Cartones';

export const crearCartonesEjemplo = (): Cartones[] => {
  const ejemplos: Cartones[] = [];

  // 1. Raya Horizontal
  ejemplos.push({
    id: "ej1",
    grid: [
      [
        { number: 1, marked: true },
        { number: 2, marked: true },
        { number: 3, marked: true },
        { number: 4, marked: true },
        { number: 5, marked: true },
      ],
      [
        { number: 6, marked: false },
        { number: 7, marked: false },
        { number: 8, marked: false },
        { number: 9, marked: false },
        { number: 10, marked: false },
      ],
      [
        { number: 11, marked: false },
        { number: 12, marked: false },
        { number: 0, marked: false },
        { number: 14, marked: false },
        { number: 15, marked: false },
      ],
      [
        { number: 16, marked: false },
        { number: 17, marked: false },
        { number: 18, marked: false },
        { number: 19, marked: false },
        { number: 20, marked: false },
      ],
      [
        { number: 21, marked: false },
        { number: 22, marked: false },
        { number: 23, marked: false },
        { number: 24, marked: false },
        { number: 25, marked: false },
      ],
    ],
  });

  // 2. Raya Vertical
  ejemplos.push({
    id: "ej2",
    grid: [
      [
        { number: 1, marked: true },
        { number: 2, marked: false },
        { number: 3, marked: false },
        { number: 4, marked: false },
        { number: 5, marked: false },
      ],
      [
        { number: 6, marked: true },
        { number: 7, marked: false },
        { number: 8, marked: false },
        { number: 9, marked: false },
        { number: 10, marked: false },
      ],
      [
        { number: 11, marked: true },
        { number: 12, marked: false },
        { number: 0, marked: false },
        { number: 14, marked: false },
        { number: 15, marked: false },
      ],
      [
        { number: 16, marked: true },
        { number: 17, marked: false },
        { number: 18, marked: false },
        { number: 19, marked: false },
        { number: 20, marked: false },
      ],
      [
        { number: 21, marked: true },
        { number: 22, marked: false },
        { number: 23, marked: false },
        { number: 24, marked: false },
        { number: 25, marked: false },
      ],
    ],
  });

  // 3. Macuetazo (diagonal principal)
  ejemplos.push({
    id: "ej3",
    grid: [
      [
        { number: 1, marked: true },
        { number: 2, marked: false },
        { number: 3, marked: false },
        { number: 4, marked: false },
        { number: 5, marked: false },
      ],
      [
        { number: 6, marked: false },
        { number: 7, marked: true },
        { number: 8, marked: false },
        { number: 9, marked: false },
        { number: 10, marked: false },
      ],
      [
        { number: 11, marked: false },
        { number: 12, marked: false },
        { number: 0, marked: true },
        { number: 14, marked: false },
        { number: 15, marked: false },
      ],
      [
        { number: 16, marked: false },
        { number: 17, marked: false },
        { number: 18, marked: false },
        { number: 19, marked: true },
        { number: 20, marked: false },
      ],
      [
        { number: 21, marked: false },
        { number: 22, marked: false },
        { number: 23, marked: false },
        { number: 24, marked: false },
        { number: 25, marked: true },
      ],
    ],
  });

  // 4. Machetazo Invertido (diagonal secundaria)
  ejemplos.push({
    id: "ej4",
    grid: [
      [
        { number: 1, marked: false },
        { number: 2, marked: false },
        { number: 3, marked: false },
        { number: 4, marked: false },
        { number: 5, marked: true },
      ],
      [
        { number: 6, marked: false },
        { number: 7, marked: false },
        { number: 8, marked: false },
        { number: 9, marked: true },
        { number: 10, marked: false },
      ],
      [
        { number: 11, marked: false },
        { number: 12, marked: false },
        { number: 0, marked: true },
        { number: 14, marked: false },
        { number: 15, marked: false },
      ],
      [
        { number: 16, marked: false },
        { number: 17, marked: true },
        { number: 18, marked: false },
        { number: 19, marked: false },
        { number: 20, marked: false },
      ],
      [
        { number: 21, marked: true },
        { number: 22, marked: false },
        { number: 23, marked: false },
        { number: 24, marked: false },
        { number: 25, marked: false },
      ],
    ],
  });

  // 5. Cuatro Esquinas
  ejemplos.push({
    id: "ej5",
    grid: [
      [
        { number: 1, marked: true },
        { number: 2, marked: false },
        { number: 3, marked: false },
        { number: 4, marked: false },
        { number: 5, marked: true },
      ],
      [
        { number: 6, marked: false },
        { number: 7, marked: false },
        { number: 8, marked: false },
        { number: 9, marked: false },
        { number: 10, marked: false },
      ],
      [
        { number: 11, marked: false },
        { number: 12, marked: false },
        { number: 0, marked: false },
        { number: 14, marked: false },
        { number: 15, marked: false },
      ],
      [
        { number: 16, marked: false },
        { number: 17, marked: false },
        { number: 18, marked: false },
        { number: 19, marked: false },
        { number: 20, marked: false },
      ],
      [
        { number: 21, marked: true },
        { number: 22, marked: false },
        { number: 23, marked: false },
        { number: 24, marked: false },
        { number: 25, marked: true },
      ],
    ],
  });

  // 6. Cuatro Esquinas Interno
  ejemplos.push({
    id: "ej6",
    grid: [
      [
        { number: 1, marked: false },
        { number: 2, marked: false },
        { number: 3, marked: false },
        { number: 4, marked: false },
        { number: 5, marked: false },
      ],
      [
        { number: 6, marked: false },
        { number: 7, marked: true },
        { number: 8, marked: false },
        { number: 9, marked: true },
        { number: 10, marked: false },
      ],
      [
        { number: 11, marked: false },
        { number: 12, marked: false },
        { number: 0, marked: false },
        { number: 14, marked: false },
        { number: 15, marked: false },
      ],
      [
        { number: 16, marked: false },
        { number: 17, marked: true },
        { number: 18, marked: false },
        { number: 19, marked: true },
        { number: 20, marked: false },
      ],
      [
        { number: 21, marked: false },
        { number: 22, marked: false },
        { number: 23, marked: false },
        { number: 24, marked: false },
        { number: 25, marked: false },
      ],
    ],
  });

  // 7. Cabeza y Cola
  ejemplos.push({
    id: "ej7",
    grid: [
      [
        { number: 1, marked: true },
        { number: 2, marked: true },
        { number: 3, marked: false },
        { number: 4, marked: false },
        { number: 5, marked: false },
      ],
      [
        { number: 6, marked: false },
        { number: 7, marked: false },
        { number: 8, marked: false },
        { number: 9, marked: false },
        { number: 10, marked: false },
      ],
      [
        { number: 11, marked: false },
        { number: 12, marked: false },
        { number: 0, marked: false },
        { number: 14, marked: false },
        { number: 15, marked: false },
      ],
      [
        { number: 16, marked: false },
        { number: 17, marked: false },
        { number: 18, marked: false },
        { number: 19, marked: false },
        { number: 20, marked: false },
      ],
      [
        { number: 21, marked: false },
        { number: 22, marked: false },
        { number: 23, marked: false },
        { number: 24, marked: true },
        { number: 25, marked: true },
      ],
    ],
  });

  // 8. Cabeza y Cola Invertido
  ejemplos.push({
    id: "ej8",
    grid: [
      [
        { number: 1, marked: false },
        { number: 2, marked: false },
        { number: 3, marked: false },
        { number: 4, marked: true },
        { number: 5, marked: true },
      ],
      [
        { number: 6, marked: false },
        { number: 7, marked: false },
        { number: 8, marked: false },
        { number: 9, marked: false },
        { number: 10, marked: false },
      ],
      [
        { number: 11, marked: false },
        { number: 12, marked: false },
        { number: 0, marked: false },
        { number: 14, marked: false },
        { number: 15, marked: false },
      ],
      [
        { number: 16, marked: false },
        { number: 17, marked: false },
        { number: 18, marked: false },
        { number: 19, marked: false },
        { number: 20, marked: false },
      ],
      [
        { number: 21, marked: true },
        { number: 22, marked: true },
        { number: 23, marked: false },
        { number: 24, marked: false },
        { number: 25, marked: false },
      ],
    ],
  });

  // 9. Cruz Externa
  ejemplos.push({
    id: "ej9",
    grid: [
      [
        { number: 1, marked: false },
        { number: 2, marked: false },
        { number: 3, marked: true },
        { number: 4, marked: false },
        { number: 5, marked: false },
      ],
      [
        { number: 6, marked: false },
        { number: 7, marked: false },
        { number: 8, marked: false },
        { number: 9, marked: false },
        { number: 10, marked: false },
      ],
      [
        { number: 11, marked: true },
        { number: 12, marked: false },
        { number: 0, marked: false },
        { number: 14, marked: false },
        { number: 15, marked: true },
      ],
      [
        { number: 16, marked: false },
        { number: 17, marked: false },
        { number: 18, marked: false },
        { number: 19, marked: false },
        { number: 20, marked: false },
      ],
      [
        { number: 21, marked: false },
        { number: 22, marked: false },
        { number: 23, marked: true },
        { number: 24, marked: false },
        { number: 25, marked: false },
      ],
    ],
  });

  // 10. Cruz Interna
  ejemplos.push({
    id: "ej10",
    grid: [
      [
        { number: 1, marked: false },
        { number: 2, marked: false },
        { number: 3, marked: false },
        { number: 4, marked: false },
        { number: 5, marked: false },
      ],
      [
        { number: 6, marked: false },
        { number: 7, marked: false },
        { number: 8, marked: true },
        { number: 9, marked: false },
        { number: 10, marked: false },
      ],
      [
        { number: 11, marked: false },
        { number: 12, marked: true },
        { number: 0, marked: false },
        { number: 14, marked: true },
        { number: 15, marked: false },
      ],
      [
        { number: 16, marked: false },
        { number: 17, marked: false },
        { number: 18, marked: true },
        { number: 19, marked: false },
        { number: 20, marked: false },
      ],
      [
        { number: 21, marked: false },
        { number: 22, marked: false },
        { number: 23, marked: false },
        { number: 24, marked: false },
        { number: 25, marked: false },
      ],
    ],
  });

  // 11. Pleno (todas las celdas)
  ejemplos.push({
    id: "ej11",
    grid: [
      [
        { number: 1, marked: true },
        { number: 2, marked: true },
        { number: 3, marked: true },
        { number: 4, marked: true },
        { number: 5, marked: true },
      ],
      [
        { number: 6, marked: true },
        { number: 7, marked: true },
        { number: 8, marked: true },
        { number: 9, marked: true },
        { number: 10, marked: true },
      ],
      [
        { number: 11, marked: true },
        { number: 12, marked: true },
        { number: 0, marked: true },
        { number: 14, marked: true },
        { number: 15, marked: true },
      ],
      [
        { number: 16, marked: true },
        { number: 17, marked: true },
        { number: 18, marked: true },
        { number: 19, marked: true },
        { number: 20, marked: true },
      ],
      [
        { number: 21, marked: true },
        { number: 22, marked: true },
        { number: 23, marked: true },
        { number: 24, marked: true },
        { number: 25, marked: true },
      ],
    ],
  });

  return ejemplos;
};
