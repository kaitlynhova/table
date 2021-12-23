import styled from "styled-components";

export const Table = styled.table`
  text-align: left;
  width: 100%;
  caption {
    // these styles let screen readers read it without displaying in the view
    color: transparent;
    height: 0;
  }
`;

type TColGroupColumnStyleProps = {
  width: string;
};

export const ColGroupColumn = styled.col<TColGroupColumnStyleProps>`
  width: ${({ width }) => width};
`;
