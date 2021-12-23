import styled from "styled-components";

export const Table = styled.table`
  width: 100%;
  text-align: left;
  caption {
    color: transparent;
    height: 0;
  }
`;

type TTableColumnStyleProps = {
  width: string;
};

export const Column = styled.col<TTableColumnStyleProps>`
  width: ${({ width }) => width};
`;
