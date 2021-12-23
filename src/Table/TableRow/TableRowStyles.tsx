import styled, { css } from "styled-components";

type TTableRowStyleProps = {
  hasOnClick: boolean;
};

export const TableRow = styled.tr<TTableRowStyleProps>`
  ${({ hasOnClick }) =>
    css`
      background-color: #0096c7;
      outline-color: #000000;
      outline-width: 4px;
      outline-offset: 2px;
      &:hover {
        background-color: ${hasOnClick ? "#ff9e00" : "#0096c7"};
        cursor: ${hasOnClick ? "pointer" : "auto"};
      }
    `}
`;
