import styled from "styled-components";
import { Property } from "csstype";

type TTableCellStringStyledProps = {
  textAlign?: Property.TextAlign;
};
export const TableCellStringStyled = styled.td<TTableCellStringStyledProps>`
  text-align: ${({ textAlign = "left" }) => textAlign};
`;
