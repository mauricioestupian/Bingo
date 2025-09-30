import { Cartones } from '../data/Cartones';

export function lineaHorizontal(card: Cartones): boolean {
  return card.grid.some(row => row.every(cell => cell.marked));
}

export function lineaVertical(card: Cartones): boolean {
  for (let col = 0; col < 5; col++) {
    let allMarked = true;
    for (let row = 0; row < 5; row++) {
      if (!card.grid[row][col].marked) {
        allMarked = false;
        break;
      }
    }
    if (allMarked) return true;
  }
  return false;
}

export function diagonal1(card: Cartones): boolean {
  return card.grid.every((row, i) => row[i].marked);
}

export function diagonal2(card: Cartones): boolean {
  return card.grid.every((row, i) => row[4 - i].marked);
}

export function cuatroesquinas(card: Cartones): boolean {
  const g = card.grid;
  return (
    g[0][0].marked &&
    g[0][4].marked &&
    g[4][0].marked &&
    g[4][4].marked
  );
}

export function cabezaCola(card: Cartones): boolean {
  const g = card.grid;
  return (
    g[0][0].marked &&
    g[0][1].marked &&
    g[4][3].marked &&
    g[4][4].marked
  );
}

export function cabezaCola2(card: Cartones): boolean {
  const g = card.grid;
  return (
    g[0][3].marked &&
    g[0][4].marked &&
    g[4][0].marked &&
    g[4][1].marked
  );
}

export function pleno(card: Cartones): boolean {
  card.grid.forEach((row, i) => {
  console.log(`Fila ${i}:`, row.map(c => `${c.number}:${c.marked}`));
});
  return card.grid.every(row => row.every(cell => cell.marked));
}

export function WinPleno(card: Cartones): string | null {
  if (pleno(card)) return "Cartón Pleno";
  return null;
}


export function figuraGanadora(card: Cartones): string | null {
  if (lineaHorizontal(card)) return "Línea horizontal";
  if (lineaVertical(card)) return "Línea vertical";
  if (diagonal1(card)) return "Diagonal principal";
  if (diagonal2(card)) return "Diagonal secundaria";
  if (cuatroesquinas(card)) return "Cuatro esquinas";
  if (cabezaCola(card)) return "Cabeza y Cola";
  if (cabezaCola2(card)) return "Cabeza y Cola invertido";
  return null;
}

export function marcaNumeros(cards: Cartones[], number: number): Cartones[] {
  return cards.map(card => ({
    ...card,
    grid: card.grid.map(row =>
      row.map(cell =>
        cell.number === number ? { ...cell, marked: true } : cell
      )
    )
  }));
}
