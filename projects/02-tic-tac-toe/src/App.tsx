import { useState } from "react";
import Square from "./Components/Square";

const TURNS = {
  X: 'X',
  O: 'O'
};

const App: React.FC = () => {
  const [board, setBoard] = useState<(string | null)[]>(Array(9).fill(null));
  const [actualTurn, setActualTurn] = useState<string>(TURNS.X);

  const onBoardClick = (index: number, turn: string) => {
    setBoard((previousBoard) => {
      if (previousBoard[index] !== null) return previousBoard; 

      const newBoard = [...previousBoard];
      newBoard[index] = turn;

      setActualTurn(turn === TURNS.X ? TURNS.O : TURNS.X);

      return newBoard;
    });
  };

  return (
    <main className="board">
      <h1>Tic Tac Toe</h1>
      <section className="game">
        {board.map((_, index) => (
          <Square
            key={index}
            index={index}
            updateBoard={() => onBoardClick(index, actualTurn)}
          >
            {board[index]}
          </Square>
        ))}
      </section>
    </main>
  );
};

export default App;
