import { Property } from "csstype";
import { TTableCell } from "./TableCell/TTableCell";

// ROW TYPE
export type TTableRow = {
  cells: TTableCell[];
  onClick?: () => void;
  onClickAriaLabel?: string;
  onClickUrl?: string;
};

// COLUMN TYPE
export type TTableColumn = {
  isSortable: boolean;
  textAlign?: Property.TextAlign;
  title: string;
  tooltipText?: string;
};

// TABLE DATA EXPECTED SHAPE
export type TTableData = {
  caption: string; // describe what the table is
  columns: TTableColumn[];
  gridColumns?: number[]; // # of columns the columns should take up
  rows: TTableRow[];
};
