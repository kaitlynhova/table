import styled from "styled-components";
import { Property } from "csstype";

type TTableCellStringStyledProps = {
  textAlign?: Property.TextAlign;
};
export const TableCellCostStyled = styled.td<TTableCellStringStyledProps>`
  text-align: ${({ textAlign = "left" }) => textAlign};
`;

export const Currency = styled.span`
  font-weight: bold;
`;
