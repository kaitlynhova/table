import styled, { css } from "styled-components";
import { Property } from "csstype";

type TTableCellStringStyledProps = {
  textAlign?: Property.TextAlign;
  hasEllipsis?: boolean;
};
export const TableCellStringStyled = styled.div<TTableCellStringStyledProps>`
  ${({ textAlign = "left" }) => css`
    text-align: ${textAlign};
  `}
  ${({ hasEllipsis = true }) =>
    hasEllipsis
      ? css`
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        `
      : css`
          overflow-wrap: break-word;
        `}
`;
