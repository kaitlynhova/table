import { Property } from "csstype";

// CELL TYPES / INTERFACES

// things that all cells need
export type TCellTemplate = {
  value: string; // for sorting purposes
};

// specific cell interfaces
export interface ICellString extends TCellTemplate {
  cellTypeName: "string";
  textAlign?: Property.TextAlign;
}

export interface ICellCost extends TCellTemplate {
  cellTypeName: "cost";
  currency: string;
  textAlign?: Property.TextAlign;
}

export type TCell = ICellString | ICellCost;

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
