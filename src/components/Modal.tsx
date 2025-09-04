import React from 'react';
import { BingoCard } from '../data/bingoCards';
import BingoCardView from './BingoCardView';

type ModalProps = {
  message: string;
  onClose: () => void;
  card?: BingoCard | null; // ✅ acepta null o undefined
};

const Modal: React.FC<ModalProps> = ({ message, onClose, card }) => {
  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <h2>Resultado de Bingo</h2>
        <p>{message}</p>

        {/* ✅ Aquí usamos la prop correctamente */}
        {card && <BingoCardView card={card} />}

        <button onClick={onClose}>Cerrar</button>
      </div>
    </div>
  );
};

const styles = {
  overlay: {
    position: 'fixed' as const,
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    backgroundColor: 'rgba(0,0,0,0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  modal: {
    backgroundColor: '#fff',
    padding: '2rem',
    borderRadius: '8px',
    textAlign: 'center',
    minWidth: '300px'
  }
};

export default Modal;