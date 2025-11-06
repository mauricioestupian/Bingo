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

export function cruzexterna(card: Cartones): boolean {
  const g = card.grid;
  return (
    g[0][2].marked &&
    g[2][0].marked &&
    g[2][4].marked &&
    g[4][2].marked
  );
}

export function cruzinterna(card: Cartones): boolean {
  const g = card.grid;
  return (
    g[1][2].marked &&
    g[2][1].marked &&
    g[2][3].marked &&
    g[3][2].marked
  );
}
export function pleno(card: Cartones): boolean {
  card.grid.forEach((row, i) => {
  console.log(`Fila ${i}:`, row.map(c => `${c.number}:${c.marked}`));
});
  return card.grid.every(row => row.every(cell => cell.marked));
}

/*
export function WinPleno(card: Cartones): string | null {
  return pleno(card) ? "Pleno" : null;
}
*/

export function figuraGanadora(card: Cartones): string | null {
  if (lineaHorizontal(card)) return "Raya horizontal";
  if (lineaVertical(card)) return "Raya vertical";
  if (diagonal1(card)) return "Macuetazo";
  if (diagonal2(card)) return "Machetazo invertido";
  if (cuatroesquinas(card)) return "Cuatro esquinas";
  if (cabezaCola(card)) return "Cabeza y Cola";
  if (cabezaCola2(card)) return "Cabeza y Cola invertido";
  if (cruzinterna(card)) return "Cruz interna";
  if (cruzexterna(card)) return "Cruz externa";
  return null;
}

export function marcaNumeros(cards: Cartones[], num: number): Cartones[] {
  return cards.map(card => ({
    ...card,
    grid: card.grid.map(row =>
      row.map(cell => cell.number === num ? { ...cell, marked: true } : cell)
    )
  }));
}

// Devuelve un Set con las celdas que forman la(s) figura(s) ganadora(s) en formato "r-c"
export function muestrafiguras(card: Cartones): Set<string> {
  const winners = new Set<string>();
  const g = card.grid;
  const size = g.length || 5;

  const addRow = (r: number) => { for (let c = 0; c < size; c++) winners.add(`${r}-${c}`); };
  const addCol = (c: number) => { for (let r = 0; r < size; r++) winners.add(`${r}-${c}`); };
  const addDiagMain = () => { for (let i = 0; i < size; i++) winners.add(`${i}-${i}`); };
  const addDiagSec = () => { for (let i = 0; i < size; i++) winners.add(`${i}-${size - 1 - i}`); };

  // filas completas
  for (let r = 0; r < size; r++) {
    if (g[r].every(cell => cell.marked)) addRow(r);
  }

  // columnas completas
  for (let c = 0; c < size; c++) {
    let all = true;
    for (let r = 0; r < size; r++) {
      if (!g[r][c].marked) { all = false; break; }
    }
    if (all) addCol(c);
  }

  // diagonales
  if (g.every((row, i) => row[i].marked)) addDiagMain();
  if (g.every((row, i) => row[size - 1 - i].marked)) addDiagSec();

  // figuras específicas: usa tus validadores existentes
  if (typeof cuatroesquinas === "function" && cuatroesquinas(card)) {
    [[0,0],[0,size-1],[size-1,0],[size-1,size-1]].forEach(([r,c]) => winners.add(`${r}-${c}`));
  }
  if (typeof cabezaCola === "function" && cabezaCola(card)) {
    // ajustar coordenadas si tu función usa otras posiciones
    [[0,0],[0,1],[size-1,size-2],[size-1,size-1]].forEach(([r,c]) => winners.add(`${r}-${c}`));
  }
  if (typeof cabezaCola2 === "function" && cabezaCola2(card)) {
    [[0,size-2],[0,size-1],[size-1,0],[size-1,1]].forEach(([r,c]) => winners.add(`${r}-${c}`));
  }
  if (typeof cruzexterna === "function" && cruzexterna(card)) {
    [[0,2],[2,0],[2,4],[4,2]].forEach(([r,c]) => winners.add(`${r}-${c}`));
  }
  if (typeof cruzinterna === "function" && cruzinterna(card)) {
    [[1,2],[2,1],[2,3],[3,2]].forEach(([r,c]) => winners.add(`${r}-${c}`));
  }

  /* pleno -> todas las celdas
  if (typeof pleno === "function" && pleno(card)) {
    for (let r = 0; r < size; r++) for (let c = 0; c < size; c++) winners.add(`${r}-${c}`);
  }*/

  return winners;
}

export function figuraPleno(card: Cartones): Set<string> {
  const winners = new Set<string>();
  const g = card.grid;
  const size = g.length || 5;

  if (typeof pleno === "function" && pleno(card)) {
    for (let r = 0; r < size; r++) {
      for (let c = 0; c < size; c++) {
        winners.add(`${r}-${c}`);
      }
    }
  }

  return winners;
}
