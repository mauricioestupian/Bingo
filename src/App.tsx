import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import QRCode from "react-qr-code";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import JuegaCarton from "./components/JuegaCarton";
import Modal from "./components/Modal";
import { Cartones, cartones } from './data/Cartones';
import "./img/titulo.png";
import { figuraGanadora, marcaNumeros, pleno } from "./logic/bingoValidar";


const TOTAL = 75;

function tableroGeneral(number:number) {
  if (number >= 1 && number <= 15) return "B";
  if (number >= 16 && number <= 30) return "I";
  if (number >= 31 && number <= 45) return "N";
  if (number >= 46 && number <= 60) return "G";
  if (number >= 61 && number <= 75) return "O";
  return "";
}

function App() {
  const [inputId, setInputId] = useState<string>("");
  const [playedNumbers, setPlayedNumbers] = useState<number[]>([]);
  const [cards, setCards] = useState<Cartones[]>(() => [...cartones]);
  const [modalMessage, mensajeModal] = useState<string | null>(null);
  const [modalMessageColor, setModalMessageColor] = useState<string>(""); // <-- nuevo
  const [selectedCard, cartonSeleccionado] = useState<Cartones | null>(null);

  const [valor1, setValor1] = useState("");
  const [valor2, setValor2] = useState("");

  //const handleChange1 = (e) => setValor1(e.target.value);
  //const handleChange2 = (e) => setValor2(e.target.value);
  const handleChange1 = (e: React.ChangeEvent<HTMLInputElement>) => setValor1(e.target.value);
const handleChange2 = (e: React.ChangeEvent<HTMLInputElement>) => setValor2(e.target.value);

  const resultado = (parseFloat(valor1) || 0) * (parseFloat(valor2) || 0);

  //const [calledNumbers, setCalledNumbers] = useState(new Set());
  const [calledNumbers, setCalledNumbers] = useState<Set<number>>(new Set<number>());
  //const [lastNumber, setLastNumber] = useState<number | null>(null);
  const [lastNumber, setLastNumber] = useState<string | number | null>(null);
  const [modalMode, setModalMode] = useState<"figuras" | "pleno">("figuras");

  const [showQR, setShowQR] = useState(false);
  //https://bingo-eight-liart.vercel.app/
  //const cartonUrl = `http://bingo-eight-liart.vercel.app/carton`;
  const cartonUrl: string = `${window.location.origin}/carton`;
  // Cambia esta URL por la de tu servidor si lo despliegas


// ✅ Función flecha que genera un número aleatorio no repetido
const singNumber = () => {
    const remaining = Array.from(
      { length: TOTAL },
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

    const letter = tableroGeneral(random);
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
    const updatedCards = marcaNumeros(cards, random);
    setCards(updatedCards);

    // Guardar en historial
    setPlayedNumbers(prev => [...prev, random]);

};  
  
  function validateFigures() {
    const results: string[] = [];

    cards.forEach(card => {
      const figure = figuraGanadora(card);
      if (figure) {
        results.push(`Cartón ${card.id} completó: ${figure}`);
      }
    });

    if (results.length > 0) {
      mensajeModal(results.join('\n'));
    } else {
      mensajeModal('Ningún cartón ha completado una figura aún.');
    }
  }
  
  function validarCarton(cardId: string) {
    const card = cards.find(c => c.id === cardId);
    if (!card) {
      mensajeModal(`❌ No se encontró el cartón con ID ${cardId}`);
      setModalMessageColor("red");
      cartonSeleccionado(null);
      return;
    }

    const figure = figuraGanadora(card);
    if (figure) {
      mensajeModal(`🎉 El cartón ${cardId} ha completado la figura: ${figure}`);
      setModalMessageColor("Black");
      setModalMode("figuras"); 
    } else {
      mensajeModal(`El cartón ${cardId} no ha completado ninguna figura aún.`);
      setModalMessageColor("red");
      setModalMode("figuras"); 
    }

    // Clonar el cartón y forzar que la casilla central [2][2] muestre el valor captado (cardId)
    const cardCopy: Cartones = {
      ...card,
      grid: card.grid.map((row) => row.map(cell => ({ ...cell })))
    };

    // Si quieres mostrar el id (string) como número intenta parsearlo, si no, dejar el número original
    const parsed = Number(cardId);
    cardCopy.grid[2][2].number = Number.isFinite(parsed) && parsed !== 0 ? parsed : cardCopy.grid[2][2].number;

    // Si prefieres mostrar el id como texto (no número), convierte a string y ajusta render del modal
    // cardCopy.grid[2][2].number = parsed || cardCopy.grid[2][2].number;

    // pasar el cartón modificado al modal
    cartonSeleccionado(cardCopy);
  }

  function validarPleno(cardId: string) {
  const card = cards.find(c => c.id === cardId);

  if (!card) {
    mensajeModal(`❌ No se encontró el cartón con ID ${cardId}`);
    setModalMessageColor("red");
    cartonSeleccionado(null);
    setModalMode("pleno");
    return;
  }

  const isPleno = typeof pleno === "function" && pleno(card);

  if (isPleno) {
    mensajeModal(`🎉 El cartón ${cardId} ha completado: Pleno`);
    setModalMessageColor("black");
    setModalMode("pleno");
  } else {
    mensajeModal(`El cartón ${cardId} no ha completado pleno aún.`);
    setModalMessageColor("red");
    setModalMode("pleno");
    }
    
    // Clonar el cartón y modificar la celda central como en validarCarton
  const cardCopy: Cartones = {
    ...card,
    grid: card.grid.map((row) => row.map(cell => ({ ...cell })))
  };

  const parsed = Number(cardId);
  cardCopy.grid[2][2].number = Number.isFinite(parsed) && parsed !== 0 ? parsed : cardCopy.grid[2][2].number;

  cartonSeleccionado(cardCopy);


  }
  
  function resetGame() {
  // Restaurar cartones originales sin marcas
  const freshCards = cartones.map(card => ({
    ...card,
    grid: card.grid.map((row, rowIndex) =>
      row.map((cell, colIndex) => ({
        ...cell,
        marked: cell.number === 0 || (rowIndex === 2 && colIndex === 2)
      }))
    )
  }));

  setCards(freshCards);
  setPlayedNumbers([]);
  mensajeModal(null);
  cartonSeleccionado(null);
}
  
  

  const resetBoard = () => {
    setCalledNumbers(new Set());
    setLastNumber(null);
    resetGame()
  };

  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
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
            <Button onClick={() => validarCarton(inputId)} variant="outline-light">
            Validar Figura
            </Button>
            <Button onClick={() => validarPleno(inputId)} variant="outline-light">
            Validar Pleno
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
          mensajeModal(null);
          cartonSeleccionado(null);
          setModalMessageColor("");
        }}
                  card={selectedCard}
                  color={modalMessageColor}
                   modo={modalMode}// <-- pasar color al modal
      />
      )}

      </div>
       <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h1>Generador de Cartón de Bingo</h1>
      <button onClick={() => setShowQR((prev) => !prev)}>
        {showQR ? "Ocultar QR" : "Generar QR para un nuevo cartón"}
      </button>
      {showQR && (
  <div style={{ margin: "30px auto" }}>
    <QRCode value={cartonUrl} size={256} />
    <p>Escanea este código QR en otro dispositivo para obtener un cartón nuevo.</p>
  </div>
)}
    </div>

          </Container>
        } />
         <Route path="/carton" element={<JuegaCarton />} />
        </Routes>
      </BrowserRouter>
  );
}

function BingoBall({ value }: { value: string | number | null }) {
  if (!value) return null;
  return <div className="bingo-ball">{value}</div>;
}

function Board({
  calledNumbers,
  setCalledNumbers,
}: {
  calledNumbers: Set<number>;
  setCalledNumbers: React.Dispatch<React.SetStateAction<Set<number>>>;
}) {
  const rows = [
    { letter: "B", range: [1, 15] },
    { letter: "I", range: [16, 30] },
    { letter: "N", range: [31, 45] },
    { letter: "G", range: [46, 60] },
    { letter: "O", range: [61, 75] },
  ];

  // Tipar el parámetro num como number
  const toggleNumber = (num: number) => {
    const updated = new Set<number>(calledNumbers);
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
                // Si quieres permitir marcar/desmarcar, descomenta la siguiente línea:
                // onClick={() => toggleNumber(num)}
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
