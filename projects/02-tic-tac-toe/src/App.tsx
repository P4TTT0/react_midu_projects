import { useState } from "react";
import WinnerModal from "./components/WinnerModal";
import confetti from "canvas-confetti";
import { checkEndGame, checkWinner } from "./logic/board";
import { TURNS } from "./constants";
import GameBoard from "./components/GameBoard";

const App: React.FC = () => {
  const [board, setBoard] = useState<(string)[]>(Array(9).fill(null));
  const [actualTurn, setActualTurn] = useState<string>(TURNS.X);
  const [winner, setWinner] = useState<string | null>(null);

  const resetGame = () =>
  {
    setBoard(Array(9).fill(null));
    setActualTurn(TURNS.X);
    setWinner(null);
  }

  const onBoardClick = (index: number, turn: string) => {
    if(board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard); 

    if (checkWinner(newBoard as string[]))
    {
      confetti();
      setWinner(actualTurn);
    } 
    else if (checkEndGame(newBoard as string[])) setWinner("EMPATE"); 

    setActualTurn(turn === TURNS.X ? TURNS.O : TURNS.X);
  };

  return (
    <main className="board">
      <h1>Tic Tac Toe</h1>
      <button onClick={resetGame}>Reset game</button>

      <GameBoard board={board} turn={actualTurn} onBoardClick={onBoardClick}></GameBoard>
      <WinnerModal onResetGameClick={resetGame} winner={winner} />
    </main>
  );
};

export default App;
