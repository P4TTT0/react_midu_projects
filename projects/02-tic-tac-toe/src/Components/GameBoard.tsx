import React from "react"
import Square from "./Square"
import { TURNS } from "../constants";

interface GameBoardProps
{
    board : string[],
    turn : string;
    onBoardClick : (index : number, turn : string) => void
}

const GameBoard : React.FC<GameBoardProps> = ({board, turn, onBoardClick}) =>
{
    return(
        <>
            <section className="game">
                {board.map((_, index) => (
                <Square key={index} updateBoard={() => onBoardClick(index, turn)}>
                    {board[index]}
                </Square>
                ))}
            </section>

            <section className="turn">
                <Square isSelected={turn === TURNS.X}>
                    {TURNS.X}
                </Square>

                <Square isSelected={turn === TURNS.O}>
                    {TURNS.O}
                </Square>
            </section>
        </>
    )
}

export default GameBoard;