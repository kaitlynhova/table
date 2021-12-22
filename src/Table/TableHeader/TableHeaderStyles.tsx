import styled from "styled-components";
import { Property } from "csstype";

type TTableHeaderStyleProps = {
  textAlign?: Property.TextAlign;
};
export const TableHeader = styled.th<TTableHeaderStyleProps>`
  background-color: blue;
  text-align: ${({ textAlign }) => (textAlign ? textAlign : "left")};
`;
