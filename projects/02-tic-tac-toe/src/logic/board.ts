import { WINNING_COMBINATIONS } from "../constants";

export const checkWinner = (board: string[]): boolean => WINNING_COMBINATIONS.some(([a, b, c]) => board[a] && board[a] === board[b] && board[a] === board[c]);

export const checkEndGame = (board: string[]) => board.every(x => x !== null);