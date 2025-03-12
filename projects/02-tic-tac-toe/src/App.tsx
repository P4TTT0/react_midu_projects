import { useEffect, useState } from "react";
import confetti from "canvas-confetti";
import { checkEndGame, checkWinner } from "./logic/board";
import { TURNS } from "./constants";
import GameBoard from "./components/GameBoard";
import WinnerModal from "./components/WinnerModal";
import { getFromLocalStorage, removeFromLocalStorage, saveOnLocalStorage } from "./functions/funLocalStorage";

const App: React.FC = () => {
  const [board, setBoard] = useState<(string)[]>(() =>
  {
    const value = getFromLocalStorage("board");
    return value ? value : Array(9).fill(null);
  });
  const [actualTurn, setActualTurn] = useState<string>(() =>
  {
    const value = getFromLocalStorage("turn");
    return value ? value : TURNS.X;
  });
  const [winner, setWinner] = useState<string | null>(() => getFromLocalStorage("winner"));
  useEffect(() =>  saveOnLocalStorage("board", board), [board])
  useEffect(() =>  saveOnLocalStorage("winner", winner), [winner])
  useEffect(() =>  saveOnLocalStorage("turn", actualTurn), [actualTurn])

  const clear = () => 
  {
    removeFromLocalStorage("winner");
    removeFromLocalStorage("board");
    removeFromLocalStorage("turn");
  }

  const resetGame = () =>
  {
    setBoard(Array(9).fill(null));
    setActualTurn(TURNS.X);
    setWinner(null);
    clear();
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
    else if (checkEndGame(newBoard as string[]))
      setWinner("EMPATE"); 

    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setActualTurn(newTurn);
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
