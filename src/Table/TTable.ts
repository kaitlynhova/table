import { Property } from "csstype";
import { TCell } from "./TableCell/TTableCell";

// ROW TYPE
export type TRow = {
  onClick?: () => void;
  onClickUrl?: string;
  onClickAriaLabel?: string;
  cells: TCell[];
};

// COLUMN TYPE
export type TColumn = {
  textAlign?: Property.TextAlign;
  title: string;
  tooltipText?: string;
  isSortable: boolean;
};

// TABLE DATA
export type TTableData = {
  caption: string; // describe what the table is
  columns: TColumn[];
  rows: TRow[];
  gridColumns?: string[]; // css grid values for all column widths
};
