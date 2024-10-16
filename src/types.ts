export type SquareType = 'X' | 'O' | null;

export interface SquareProps {
  value: SquareType;
  onSquareClick: () => void;
}

export interface Winner{
  char: SquareType;
  line: number[];
}