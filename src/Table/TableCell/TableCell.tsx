import React from "react";
import { TTableCell } from "./TTableCell";
import TableCellString from "./TableCellString/TableCellString";
import TableCellCost from "./TableCellCost/TableCellCost";

import { TableCellStyled } from "../TableCell/TableCellStyles";

type TableCellProps = {
  /**
   * All of the cell's data
   */
  cellData: TTableCell;
};

const TableCell: React.FC<TableCellProps> = ({ cellData }) => {
  const generateCellInnerHtml = () => {
    switch (cellData.cellTypeName) {
      case "string":
        return (
          <TableCellString
            cellData={cellData}
            key={`${cellData.cellTypeName}-cell-${cellData.value}`}
          />
        );
      case "cost":
        return (
          <TableCellCost
            cellData={cellData}
            key={`${cellData.cellTypeName}-cell-${cellData.value}-${cellData.currency}`}
          />
        );
      default:
        return <td>undefined</td>;
    }
  };
  const data = generateCellInnerHtml();
  return <TableCellStyled>{data}</TableCellStyled>;
};

export default TableCell;
