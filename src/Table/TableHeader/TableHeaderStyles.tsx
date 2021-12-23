import styled, { css } from "styled-components";
import { Property } from "csstype";

type TTableHeaderStyleProps = {
  textAlign?: Property.TextAlign;
};
export const TableHeader = styled.th<TTableHeaderStyleProps>`
  background-color: blue;
  padding: 0;
  text-align: ${({ textAlign }) => (textAlign ? textAlign : "left")};
`;

export const SortButton = styled.button`
  ${() => css`
    background-color: purple;
    cursor: pointer;
    border: none;
    width: 100%;
  `};
`;
