import { Property } from "csstype";
import { TTableCell } from "./TableCell/TTableCell";

// ROW TYPE
export type TTableRow = {
  onClick?: () => void;
  onClickUrl?: string;
  onClickAriaLabel?: string;
  cells: TTableCell[];
};

// COLUMN TYPE
export type TTableColumn = {
  textAlign?: Property.TextAlign;
  title: string;
  tooltipText?: string;
  isSortable: boolean;
};

// TABLE DATA EXPECTED SHAPE
export type TTableData = {
  caption: string; // describe what the table is
  columns: TTableColumn[];
  rows: TTableRow[];
  gridColumns?: string[]; // css grid values for all column widths
};
