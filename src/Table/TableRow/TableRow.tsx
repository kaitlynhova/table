import React from "react";
import * as S from "./TableRowStyles";
import { TRow, TCell } from "../TTable";
import TableCellString from "../TableCell/TableCellString/TableCellString";
import TableCellCost from "../TableCell/TableCellCost/TableCellCost";

type TableRowProps = {
  tableRowData: TRow;
};

const TableRow: React.FC<TableRowProps> = ({ tableRowData }) => {
  const cells = tableRowData.cells.map((cell: TCell) => {
    switch (cell.cellTypeName) {
      case "string":
        return (
          <TableCellString
            key={`${cell.cellTypeName}-cell-${cell.value}`}
            cellData={cell}
          />
        );
      case "cost":
        return (
          <TableCellCost
            key={`${cell.cellTypeName}-cell-${cell.value}-${cell.currency}`}
            cellData={cell}
          />
        );
      default:
        return <td>undefined </td>;
    }
  });
  return (
    <S.TableRow
      aria-label="woooo"
      role={tableRowData.onClick ? "button" : "row"}
      tabIndex={tableRowData.onClick ? 0 : -1}
      hasOnClick={!!tableRowData.onClick}
      onClick={tableRowData.onClick}
    >
      {cells}
    </S.TableRow>
  );
};

export default TableRow;
