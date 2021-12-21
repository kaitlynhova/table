// CELL TYPES
export type TCellString = {
  cellTypeName: "string";
  value: string;
};
export type TCellCost = {
  cellTypeName: "cost";
  value: string;
  currency: string;
};
export type TCell = TCellString | TCellCost;

// ROW TYPE
export type TRow = {
  isSelected?: boolean;
  cells: TCell[];
};

// COLUMN TYPE
export type TColumn = {
  title: string;
  tooltipText?: string;
  alignContent?: "center" | "left" | "right";
};

// TABLE DATA
export type TTableData = {
  caption: string; // describe what the table is
  columns: TColumn[];
  rows: TRow[];
  gridColumns?: string[]; // css grid values for all column widths
};
