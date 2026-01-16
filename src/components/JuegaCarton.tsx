import React, { useState } from 'react';
import { Cartones, cartones } from '../data/Cartones';

type Props = {
  card?: Cartones;
};

const JuegaCarton:  React.FC<Props> = ({ card: initialCard }) => {
  const [card, setCard] = useState<Cartones>(initialCard || cartones[0]);

  const handleSelectCard = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedCard = cartones.find(c => c.id === e.target.value);
    if (selectedCard) {
      // Hacer una copia profunda y marcar siempre el centro
      setCard({
        ...selectedCard,
        grid: selectedCard.grid.map(row =>
          row.map(cell =>
            cell.number === 0 ? { ...cell, marked: true } : { ...cell }
          )
        )
      });
    }
  };

  const handleCellClick = (rowIndex: number, colIndex: number) => {
    const cell = card.grid[rowIndex][colIndex];
    // No permitir cambiar el estado de la celda central (número 0)
    if (cell.number === 0) return;

    setCard(prevCard => ({
      ...prevCard,
      grid: prevCard.grid.map((row, rIdx) =>
        rIdx === rowIndex
          ? row.map((cell, cIdx) =>
              cIdx === colIndex
                ? { ...cell, marked: !cell.marked }
                : cell
            )
          : row
      )
    }));
  };

  return (
    <div style={styles.container}>
      <div className="img-container">
          <img src="/titulo.png" className="title-image" />
        </div>
      <div style={styles.selectorContainer}>
        <label htmlFor="carton-select">Selecciona un cartón: </label>
        <select 
          id="carton-select"
          value={card.id} 
          onChange={handleSelectCard}
          style={styles.select}
        >
          {cartones.map(c => (
            <option key={c.id} value={c.id}>
              Cartón {c.id}
            </option>
          ))}
        </select>
      </div>
      <h3>Cartón {card.id}</h3>
      <table style={styles.table}>
        <thead>
          <tr>
            {['B', 'I', 'N', 'G', 'O'].map((letter) => (
              <th key={letter} style={styles.header}>
                {letter}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {card.grid.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, colIndex) => (
                <td
                  key={colIndex}
                  onClick={() => handleCellClick(rowIndex, colIndex)}
                  style={{
                    ...styles.cell,
                    backgroundColor: cell.marked ? '#4caf50' : '#fff',
                    color: cell.marked ? '#fff' : '#000',
                    cursor: 'pointer',
                  }}
                >
                  {cell.number === 0 ? '★' : cell.number}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const styles = {
  container: {
    marginTop: '1rem',
    textAlign: 'center' as const,
  },
  selectorContainer: {
    marginBottom: '1.5rem',
    padding: '1rem',
    backgroundColor: '#D13737',
    borderRadius: '4px',
  },
  select: {
    marginLeft: '0.5rem',
    padding: '0.5rem',
    fontSize: '1rem',
    borderRadius: '4px',
    border: '1px solid #ccc',
    cursor: 'pointer',
  },
  table: {
    borderCollapse: 'collapse' as const,
    margin: '0 auto',
  },
  header: {
    backgroundColor: '#D13737',
    color: '#fff',
    border: '1px solid #ccc',
    padding: '10px',
    width: '100px',
    height: '40px',
    textAlign: 'center' as const,
    fontWeight: 'bold' as const,
    fontSize: '1.2rem',
  },
  cell: {
    border: '1px solid #ccc',
    padding: '10px',
    width: '100px',
    height: '100px',
    textAlign: 'center' as const,
    fontWeight: 'bold' as const,
    fontSize: '2rem',
  },
};


export default JuegaCarton;