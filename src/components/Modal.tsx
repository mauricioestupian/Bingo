import React, { useEffect } from "react";
import "../BingoBoard.css";
import { Cartones } from "../data/Cartones";
import { muestrafiguras,figuraPleno } from "../logic/bingoValidar";

type Props = {
  message: string | null;
  onClose: () => void;
  card: Cartones | null;
  color?: string; // <-- definir color fuente mensaje
  modo?: "figuras" | "pleno"; // define tipo de modal figuras o pleno
};

const Modal: React.FC<Props> = ({ message, onClose, card, color, modo }) => {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  if (!message) return null;

  // winning = card ? muestrafiguras(card) : new Set<string>();
  const winning = card
  ? modo === "pleno"
    ? figuraPleno(card)
    : muestrafiguras(card)
  : new Set<string>();

  return (
    <div className="modal-overlay" role="dialog" aria-modal="true" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {/* botón de cierre pequeño (×) en la esquina */}
        <button className="modal-close" onClick={onClose} aria-label="Cerrar">×</button>

        <div className="modal-message" style={{ color: color || "inherit", textAlign: "center", marginBottom: 8 }}>
          <strong>{message}</strong>
        </div>

        

        {card && (
          <table className="card-table modal-card" aria-hidden={!card}>
            <tbody>
              {card.grid.map((row, r) => (
                <tr key={r}>
                  {row.map((cell, c) => {
                    const key = `${r}-${c}`;
                    const isWinner = winning.has(key);
                    const isCenter = r === 2 && c === 2;
                    const classes = [
                      cell.marked ? "marked" : "",
                      isWinner ? "winner" : "",
                      isCenter ? "center-cell" : ""
                    ].join(" ").trim();
                    return (
                      <td key={key} className={classes}>
                        {cell.number}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        )}
        {/* botón "Cerrar" colocado debajo del mensaje */}
        <div style={{ textAlign: "center", margin: "8px 0 12px 0" }}>
          <button className="btn btn-secondary" onClick={onClose}>
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;