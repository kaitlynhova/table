import React from "react";
import * as S from "./TableRowStyles";
import { TRow, TCell } from "../TTable";
import TableCellString from "../TableCell/TableCellString/TableCellString";
import TableCellCost from "../TableCell/TableCellCost/TableCellCost";

type TableRowProps = {
  tableRowData: TRow;
};

const TableRow: React.FC<TableRowProps> = ({ tableRowData }) => {
  const isActingLikeALink = !!tableRowData.onClick || !!tableRowData.onClickUrl;

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
        return <td>undefined</td>;
    }
  });
  return (
    <S.TableRow
      aria-label={tableRowData.onClickAriaLabel}
      role={isActingLikeALink ? "link" : "row"}
      tabIndex={isActingLikeALink ? 0 : -1}
      hasOnClick={isActingLikeALink}
      onClick={() => {
        if (tableRowData.onClick) tableRowData.onClick();
        if (tableRowData.onClickUrl)
          window.open(tableRowData.onClickUrl, "_blank");
      }}
    >
      {cells}
    </S.TableRow>
  );
};

export default TableRow;
