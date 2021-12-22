import styled from "styled-components";

type TTableRowStyleProps = {
  hasOnClick: boolean;
};
export const TableRow = styled.tr<TTableRowStyleProps>`
  background-color: red;
  &:hover {
    background-color: ${({ hasOnClick }) => (hasOnClick ? "pink" : "red")};
  }
`;
