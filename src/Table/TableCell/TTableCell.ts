import { Property } from "csstype";

// CELL TYPE FOR ALL CELLS
export type TCellTemplate = {
  value: string; // for sorting purposes
};

// SPECIFIC CELL INTERFACES
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
