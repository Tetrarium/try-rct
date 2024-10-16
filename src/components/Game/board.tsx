import styled from "styled-components";
import { SquareType } from "@/types";
import calculateWinner from "@/utils/calculateWinner";
import { ReactElement } from "react";
import getStatusGame from "@/utils/getStatusGame";
import isWinSquare from "@/utils/isWinSquare";
import Square from "./square";

const BoardContainer = styled.div``;

const BoardRow = styled.div`
  &::after {
    clear: both;
    content: '';
    display: table;
  }
`;

const StatusBoard = styled.div`
  margin-bottom: 10px;
`;

interface BoardProps {
  xIsNext: boolean;
  squares: SquareType[];
  onPlay: (nextSquares: SquareType[]) => void;
}

export default function Board({xIsNext, squares, onPlay}: BoardProps) {
  const handleSquareClick = (i: number): void => {
    if (squares[i] || calculateWinner(squares)) return;

    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? 'X' : 'O';

    onPlay(nextSquares);
  }

  const winner = calculateWinner(squares);
  const status = getStatusGame(winner, xIsNext);

  const board: ReactElement[] = [];
  for (let i = 0; i < 3; i++) {
    const boardRow: ReactElement[] = [];
    for (let j = 0; j < 3; j++) {
      const cellIndex = 3 * i + j;
      boardRow.push(
        <Square
          isWin={isWinSquare(cellIndex, winner?.line)}
          key={j}
          value={squares[cellIndex]}
          onSquareClick={() => handleSquareClick(cellIndex)}
        />
      );
    }
    board.push(
      <BoardRow key={i}>{boardRow}</BoardRow>
    )
  }

  return (
    <BoardContainer>
      <StatusBoard>{status}</StatusBoard>
      {board}
    </BoardContainer>
  )
}
