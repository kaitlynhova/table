import { Property } from "csstype";

// CELL TYPE FOR ALL CELLS
export type TTableCellTemplate = {
  value: string; // for sorting purposes
};

// SPECIFIC CELL INTERFACES
/** Copy and paste the following template for new cell interfaces -->
   export interface ITableCell<SPECIFIC_CELL_TYPE_NAME_HERE> extends TTableCellTemplate {
    // specific stuff here
   }
*/
export interface ITableCellString extends TTableCellTemplate {
  cellTypeName: "string";
  textAlign?: Property.TextAlign;
}

export interface ITableCellCost extends TTableCellTemplate {
  cellTypeName: "cost";
  currency: string;
  textAlign?: Property.TextAlign;
}

export type TTableCell = ITableCellString | ITableCellCost;
