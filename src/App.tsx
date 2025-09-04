import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from 'react';
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import "./App.css";
import Modal from './components/Modal';
import { BingoCard, bingoCards } from './data/bingoCards';
import "./img/titulo.png";
import { getWinningFigure, markNumberOnCards } from './logic/bingoValidation';


const TOTAL_NUMBERS = 75;

function getBingoLetter(number) {
  if (number >= 1 && number <= 15) return "B";
  if (number >= 16 && number <= 30) return "I";
  if (number >= 31 && number <= 45) return "N";
  if (number >= 46 && number <= 60) return "G";
  if (number >= 61 && number <= 75) return "O";
  return "";
}

function App() {
  const [playedNumbers, setPlayedNumbers] = useState<number[]>([]);
  const [cards, setCards] = useState<BingoCard[]>(() => [...bingoCards]);
  const [modalMessage, setModalMessage] = useState<string | null>(null);
  const [inputId, setInputId] = useState<string>("");
  const [selectedCard, setSelectedCard] = useState<BingoCard | undefined>(undefined);
  



// ✅ Función flecha que genera un número aleatorio no repetido
const singNumber = () => {
    const remaining = Array.from(
      { length: TOTAL_NUMBERS },
      (_, i) => i + 1
    ).filter((n) => !calledNumbers.has(n));

    if (remaining.length === 0) {
      alert("¡Ya se han cantado todos los números!");
      return;
    }

    const random = remaining[Math.floor(Math.random() * remaining.length)];
    const updated = new Set(calledNumbers);
    updated.add(random);
    setCalledNumbers(updated);

    const letter = getBingoLetter(random);
    const fullValue = `${letter} ${random}`;
    setLastNumber(fullValue);

    /* 🔊 Sonido
    const audio = new Audio(
      "https://www.soundjay.com/button/sounds/button-16.mp3"
    );
    audio.play();

     🗣️ Voz
    const utterance = new SpeechSynthesisUtterance(fullValue);
    utterance.lang = "es-ES";
    speechSynthesis.speak(utterance);*/
  
  // Marcar en cartones
    const updatedCards = markNumberOnCards(cards, random);
    setCards(updatedCards);

    // Guardar en historial
    setPlayedNumbers(prev => [...prev, random]);

  };
  
  
  function validateFigures() {
    const results: string[] = [];

    cards.forEach(card => {
      const figure = getWinningFigure(card);
      if (figure) {
        results.push(`Cartón ${card.id} completó: ${figure}`);
      }
    });

    if (results.length > 0) {
      setModalMessage(results.join('\n'));
    } else {
      setModalMessage('Ningún cartón ha completado una figura aún.');
    }
  }
  
  function validarCarton(cardId: string) {
  const card = cards.find(c => c.id === cardId);

  if (!card) {
    setModalMessage(`❌ No se encontró el cartón con ID ${cardId}`);
    setSelectedCard(undefined);
    return;
  }

  const figure = getWinningFigure(card);

  if (figure) {
    setModalMessage(`🎉 El cartón ${cardId} ha completado la figura: ${figure}`);
  } else {
    setModalMessage(`El cartón ${cardId} no ha completado ninguna figura aún.`);
  }

    setSelectedCard(card);
    setSelectedCard(undefined);
}
  
  const [valor1, setValor1] = useState("");
  const [valor2, setValor2] = useState("");

  const handleChange1 = (e) => setValor1(e.target.value);
  const handleChange2 = (e) => setValor2(e.target.value);

  const resultado = (parseFloat(valor1) || 0) * (parseFloat(valor2) || 0);

  const [calledNumbers, setCalledNumbers] = useState(new Set());
  const [lastNumber, setLastNumber] = useState(null);

  const resetBoard = () => {
    setCalledNumbers(new Set());
    setLastNumber(null);
  };

  
  return (
    <Container>
      <div className="grid-container">
        <div></div>
        <div className="img-container">
          <img src="/titulo.png" className="title-image" />
        </div>
        <div className="BingoBallContainer">
          <BingoBall value={lastNumber} />
        </div>
        <div className="buttons">
          <Button variant="success" onClick={singNumber}>
            Cantar número
          </Button>
          <Button variant="outline-danger" onClick={resetBoard}>
            Reiniciar tablero
          </Button>
          <div>
            <input
              type="text"
              placeholder="# cartón"
              value={inputId}
              onChange={e => setInputId(e.target.value)}
            />
            <Button onClick={() => validarCarton(inputId)}>
            Validar Bingo
            </Button>
          </div>
        </div>
      </div>
      <Board
        calledNumbers={calledNumbers}
        setCalledNumbers={setCalledNumbers}
      />
      <div>
        <Row className="justify-content-md-center">
          <Col xs lg="3">
            <InputGroup className="mb-3">
              <InputGroup.Text># Cartones</InputGroup.Text>
              <Form.Control
                aria-label="First name"
                type="number"
                value={valor1}
                onChange={handleChange1}
              />
            </InputGroup>
          </Col>
          <Col md="auto">
            <p>
              Total: <strong>{resultado}</strong>
            </p>
          </Col>
          <Col xs lg="3">
            <InputGroup className="mb-3">
              <InputGroup.Text>Valor Apostado</InputGroup.Text>
              <Form.Control
                type="number"
                aria-label="First name"
                value={valor2}
                onChange={handleChange2}
              />
            </InputGroup>
          </Col>
        </Row>
      </div>
      <div>
      <h1>Bingo</h1>
      <button onClick={validateFigures}>Validar figuras</button>

      {modalMessage && (
        <Modal
        message={modalMessage}
        onClose={() => {
          setModalMessage(null);
          setSelectedCard(null);
        }}
        card={selectedCard}
      />
      )}

    </div>

    </Container>
    
  );
}

function BingoBall({ value }) {
  if (!value) return null;

  return <div className="bingo-ball">{value}</div>;
}

function Board({ calledNumbers, setCalledNumbers }) {
  const rows = [
    { letter: "B", range: [1, 15] },
    { letter: "I", range: [16, 30] },
    { letter: "N", range: [31, 45] },
    { letter: "G", range: [46, 60] },
    { letter: "O", range: [61, 75] },
  ];

  const toggleNumber = (num) => {
    const updated = new Set(calledNumbers);
    if (updated.has(num)) {
      updated.delete(num);
    } else {
      updated.add(num);
    }
    setCalledNumbers(updated);
  };

  return (
    <div className="board">
      {rows.map((row) => (
        <div key={row.letter} className="row">
          <div className="cell header-cell">{row.letter}</div>
          {Array.from({ length: 15 }, (_, i) => {
            const num = row.range[0] + i;
            const marked = calledNumbers.has(num);
            return (
              <div
                key={num}
                className={`cell ${marked ? "marked" : ""}`}
                /*onClick={() => toggleNumber(num)}*/
              >
                {num}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}

export default App;
