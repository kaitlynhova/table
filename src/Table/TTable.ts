import { Property } from "csstype";
import { TTableCell } from "./TableCell/TTableCell";

// ROW TYPE
export type TTableRow = {
  cells: TTableCell[];
  /** Everything below here is for optional link functionality */
  onClick?: () => void;
  onClickAriaLabel?: string;
  onClickUrl?: string;
};

// COLUMN TYPE
// Note: used for th tags
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
  /** Data for th tags */
  columns: TTableColumn[];
  /** Data for table rows */
  rows: TTableRow[];
};
