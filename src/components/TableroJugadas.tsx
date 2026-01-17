import React, { useEffect, useState } from 'react';
import '../App.css';

type PlayedNumbersData = {
  playedNumbers: number[];
  lastNumber: string | number | null;
};

const TableroJugadas: React.FC = () => {
  const [playedNumbers, setPlayedNumbers] = useState<number[]>([]);
  const [lastNumber, setLastNumber] = useState<string | number | null>(null);

  useEffect(() => {
    // Escuchar cambios en localStorage
    const handleStorageChange = () => {
      const data = localStorage.getItem('bingoGameData');
      if (data) {
        try {
          const parsed: PlayedNumbersData = JSON.parse(data);
          setPlayedNumbers(parsed.playedNumbers);
          setLastNumber(parsed.lastNumber);
        } catch (error) {
          console.error('Error parsing bingo game data:', error);
        }
      }
    };

    // Escuchar en el mismo tab
    window.addEventListener('storage', handleStorageChange);

    // Cargar datos iniciales
    handleStorageChange();

    // Limpiar listener
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const rows = [
    { letter: 'B', range: [1, 15] as [number, number] },
    { letter: 'I', range: [16, 30] as [number, number] },
    { letter: 'N', range: [31, 45] as [number, number] },
    { letter: 'G', range: [46, 60] as [number, number] },
    { letter: 'O', range: [61, 75] as [number, number] },
  ];

  return (
      <div style={styles.pageContainer}>
                <img src="/titulo.png" className="title-image-2" />
            
            <div style={styles.lastNumberContainer}><h1 style={styles.title}>Tablero de Balotas Jugadas</h1>
              <div style={styles.lastNumberLabel}>Último número:  
                  <div className="bingo-ball-2">{lastNumber !== null ? lastNumber : 'N/A'}</div>;
                </div>
               
            </div>
      <div className="board">
        {rows.map((row) => (
          <div key={row.letter} className="row">
            <div className="cell header-cell">{row.letter}</div>
            {Array.from({ length: 15 }, (_, i) => {
              const num = row.range[0] + i;
              const isPlayed = playedNumbers.includes(num);
              return (
                <div
                  key={num}
                  className={`cell ${isPlayed ? 'marked' : ''}`}
                >
                  {num}
                </div>
              );
            })}
          </div>
        ))}
      </div>

      <div style={styles.statsContainer}>
        <p style={styles.stats}>Balotas jugadas: <strong>{playedNumbers.length}</strong> / 75</p>
      </div>
    </div>
  );
};

const styles = {
  pageContainer: {
    minHeight: '100vh',
    padding: '2rem 1rem',
  },
  title: {
    fontSize: '2.5rem',
    color: '#f0f0f0',
    textAlign: 'center' as const,
  },
  lastNumberContainer: {
    textAlign: 'center' as const,
    marginBottom: '1rem',
  },
  lastNumberLabel: {
    fontSize: '1.5rem',
    color: '#b0b0b0',
    marginBottom: '0.5rem',
  },
  statsContainer: {
    backgroundColor: '#1e1e1e',
    borderRadius: '8px',
    padding: '1.5rem',
    maxWidth: '600px',
    margin: '2rem auto 0',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
    border: '3px solid #ff00ff',
    animation: 'neonRainbow 4s infinite',
  },
  stats: {
    fontSize: '1.3rem',
    color: '#f0f0f0',
    margin: 0,
    textAlign: 'center' as const,
  },
};

export default TableroJugadas;
