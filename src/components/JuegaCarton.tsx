import { useState } from "react";
import BingoBoard from "../BingoBoard";

const JuegaCarton = () => {
  const [calledNumbers, setCalledNumbers] = useState<Set<number>>(new Set());

  return (
    <div>
          <h1>Bingo Game</h1>
          <BingoBoard calledNumbers={calledNumbers} />
    </div>
  );
};

export default JuegaCarton;