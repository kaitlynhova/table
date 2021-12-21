import styled from "styled-components";

export const Table = styled.table`
  width: 100%;
  text-align: left;
`;

type TColumnStyleProps = {
  width: string;
};

export const Column = styled.col<TColumnStyleProps>`
  width: ${({ width }) => width};
`;
