import { useState } from "react";
import Square from "./Components/Square";
import WinnerModal from "./Components/WinnerModal";

const TURNS = {
  X: 'X',
  O: 'O'
};

const WINNING_COMBINATIONS: number[][] = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8], // Horizontales
  [0, 3, 6], [1, 4, 7], [2, 5, 8], // Verticales
  [0, 4, 8], [2, 4, 6]             // Diagonales
]; 

const App: React.FC = () => {
  const [board, setBoard] = useState<(string | null)[]>(Array(9).fill(null));
  const [actualTurn, setActualTurn] = useState<string>(TURNS.X);
  const [winner, setWinner] = useState<string | null>(null);

  const onBoardClick = (index: number, turn: string) => {
    if(winner) return;
    setBoard((previousBoard) => {
      if (previousBoard[index] !== null) return previousBoard; 
      
      const newBoard = [...previousBoard];
      newBoard[index] = turn;
      
      if (verifyIfWin(newBoard as string[])) setWinner(actualTurn);
      return newBoard;
    });
    setActualTurn(turn === TURNS.X ? TURNS.O : TURNS.X);
  };
  
  const verifyIfWin = (board: string[]): boolean => {
    return WINNING_COMBINATIONS.some(([a, b, c]) =>
      board[a] && board[a] === board[b] && board[a] === board[c]
    );
  };
  


  return (
    <main className="board">
      <h1>Tic Tac Toe</h1>
      <section className="game">
        {board.map((_, index) => (
          <Square key={index} updateBoard={() => onBoardClick(index, actualTurn)}>
            {board[index]}
          </Square>
        ))}
      </section>

      <section className="turn">
          <Square isSelected={actualTurn === TURNS.X}>
            {TURNS.X}
          </Square>

          <Square isSelected={actualTurn === TURNS.O}>
            {TURNS.O}
          </Square>
      </section>

          <WinnerModal winner={winner} />
    </main>
  );
};

export default App;
