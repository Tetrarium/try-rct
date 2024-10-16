export default function isWinSquare(square: number, lines?: number[]) {
  if (!lines) return false;

  return lines.includes(square);
}