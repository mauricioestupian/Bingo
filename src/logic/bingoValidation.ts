import { BingoCard } from '../data/bingoCards';

export function lineaHorizontal(card: BingoCard): boolean {
  return card.grid.some(row => row.every(cell => cell.marked));
}

export function lineaVertical(card: BingoCard): boolean {
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

export function diagonal1(card: BingoCard): boolean {
  return card.grid.every((row, i) => row[i].marked);
}

export function diagonal2(card: BingoCard): boolean {
  return card.grid.every((row, i) => row[4 - i].marked);
}

export function cuatroesquinas(card: BingoCard): boolean {
  const g = card.grid;
  return (
    g[0][0].marked &&
    g[0][4].marked &&
    g[4][0].marked &&
    g[4][4].marked
  );
}

export function pleno(card: BingoCard): boolean {
  return card.grid.every(row => row.every(cell => cell.marked));
}

export function getWinningFigure(card: BingoCard): string | null {
  if (pleno(card)) return "Cartón Pleno";
  if (lineaHorizontal(card)) return "Línea horizontal";
  if (lineaVertical(card)) return "Línea vertical";
  if (diagonal1(card)) return "Diagonal principal";
  if (diagonal2(card)) return "Diagonal secundaria";
  if (cuatroesquinas(card)) return "Cuatro esquinas";
  return null;
}

export function markNumberOnCards(cards: BingoCard[], number: number): BingoCard[] {
  return cards.map(card => ({
    ...card,
    grid: card.grid.map(row =>
      row.map(cell =>
        cell.number === number ? { ...cell, marked: true } : cell
      )
    )
  }));
}
