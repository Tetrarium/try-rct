import { SquareProps } from "@/types";
import styled from "styled-components"

const SquareBtn = styled.button<{ $isWin: boolean }>`
  background: ${props => props.$isWin ? "#ccc" : "#fff"};
  border: 1px solid #999;
  float: left;
  font-size: 24px;
  font-weight: bold;
  line-height: 34px;
  height: 34px;
  width: 34px;
  margin-right: -1px;
  margin-top: -1px;
  padding: 0;
  text-align: center;
`;

export default function Square({ value, onSquareClick, isWin }: SquareProps & { isWin: boolean }) {
  return (
    <SquareBtn
      $isWin={isWin}
      onClick={onSquareClick}
    >{value}</SquareBtn>    
  )
}