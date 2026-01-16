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
      setCard(selectedCard);
    }
  };

  return (
    <div style={styles.container}>
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
        <tbody>
          {card.grid.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, colIndex) => (
                <td
                  key={colIndex}
                  style={{
                    ...styles.cell,
                    backgroundColor: cell.marked ? '#4caf50' : '#fff',
                    color: cell.marked ? '#fff' : '#000',
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
    backgroundColor: '#f5f5f5',
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
  cell: {
    border: '1px solid #ccc',
    padding: '10px',
    width: '40px',
    height: '40px',
    textAlign: 'center' as const,
    fontWeight: 'bold' as const,
    fontSize: '1rem',
  },
};


export default JuegaCarton;