import React from 'react';
import { BingoCard } from '../data/bingoCards';

type Props = {
  card: BingoCard;
};

const BingoCardView: React.FC<Props> = ({ card }) => {
  return (
    <div style={styles.container}>
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

export default BingoCardView;