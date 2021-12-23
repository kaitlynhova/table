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
  /** Describe what the table is for */
  caption: string;
  columns: TTableColumn[];
  rows: TTableRow[];
};
