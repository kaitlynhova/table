import styled, { css } from "styled-components";
import { Property } from "csstype";

type TTableHeaderStyleProps = {
  textAlign?: Property.TextAlign;
};
export const TableHeader = styled.th<TTableHeaderStyleProps>`
  background-color: #ff9e00;
  padding: 0;
  text-align: ${({ textAlign }) => (textAlign ? textAlign : "left")};
`;

export const SortButton = styled.button`
  ${() => css`
    background-color: #ff6d00;
    border: none;
    cursor: pointer;
    outline-color: #000000;
    outline-width: 4px;
    outline-offset: 2px;
    width: 100%;
  `};
`;
