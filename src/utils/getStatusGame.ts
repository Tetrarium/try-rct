import { Winner } from "@/types";

export default function getStatusGame(winner: Winner | null, xIsNext: boolean): string {
  if (winner) {
    return "Winner: " + winner.char;
  }

  return "Next player: " + (xIsNext ? "X" : "O");
}
