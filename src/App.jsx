import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import "./App.css";
import "./img/titulo.png";

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
  const [valor1, setValor1] = useState("");
  const [valor2, setValor2] = useState("");

  const handleChange1 = (e) => setValor1(e.target.value);
  const handleChange2 = (e) => setValor2(e.target.value);

  const resultado = (parseFloat(valor1) || 0) * (parseFloat(valor2) || 0);

  const [calledNumbers, setCalledNumbers] = useState(new Set());
  const [lastNumber, setLastNumber] = useState(null);

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
  };

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
        <div>
          <BingoBall value={lastNumber} />
        </div>
      </div>
      <div className="buttons">
        <Button variant="success" onClick={singNumber}>
          Cantar número
        </Button>

        <Button variant="outline-danger" onClick={resetBoard}>
          Reiniciar tablero
        </Button>
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
                onClick={() => toggleNumber(num)}
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
