import { Property } from "csstype";

// CELL TYPES
export type TCellString = {
  cellTypeName: "string";
  value: string;
  textAlign?: Property.TextAlign;
};

export type TCellCost = {
  cellTypeName: "cost";
  value: string;
  currency: string;
  textAlign?: Property.TextAlign;
};
export type TCell = TCellString | TCellCost;

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
};

// TABLE DATA
export type TTableData = {
  caption: string; // describe what the table is
  columns: TColumn[];
  rows: TRow[];
  gridColumns?: string[]; // css grid values for all column widths
};
