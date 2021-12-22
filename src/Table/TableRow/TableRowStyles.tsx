import styled, { css } from "styled-components";

type TTableRowStyleProps = {
  hasOnClick: boolean;
};

export const TableRow = styled.tr<TTableRowStyleProps>`
  ${({ hasOnClick }) =>
    css`
      background-color: red;
      &:hover {
        cursor: ${hasOnClick ? "pointer" : "auto"};
        background-color: ${hasOnClick ? "pink" : "red"};
      }
    `}
`;
