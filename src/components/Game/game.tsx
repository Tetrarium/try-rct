import styled from "styled-components";
import Board from "./board";
import { useState } from "react";
import { SquareType } from "@/types";

const GameContainer = styled.div`
  display: flex;
  flex-direction: row;
`

const InfoContainer = styled.div`
  margin-left: 40px;
`

export default function Game() {
  const [history, setHistory] = useState<SquareType[][]>([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  const handlePlay = (nextSquares: SquareType[]): void => {
    console.log(nextSquares);
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  const jumpTo = (nextMove: number) => {
    setCurrentMove(nextMove);
  }

  const moves = history.map((_, move) => {
    let description: string;

    if (move > 0) {
      description = 'Go to move #' + move;
    } else {
      description = 'Go to game start';
    }

    if (move === history.length - 1) {
      return (
        <li key={move}>
          <div>You are at move #{move}</div>
        </li>
      );
    }

    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)} >{description}</button>
      </li>
    );
  });

  return (
    <GameContainer>
      <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      <InfoContainer>
        <ol>{moves}</ol>
      </InfoContainer>
    </GameContainer>
  );
}