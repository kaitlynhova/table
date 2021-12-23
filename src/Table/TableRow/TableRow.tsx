import React from "react";
import * as S from "./TableRowStyles";
import { TTableRow } from "../TTable";
import { TTableCell } from "../TableCell/TTableCell";
import TableCellString from "../TableCell/TableCellString/TableCellString";
import TableCellCost from "../TableCell/TableCellCost/TableCellCost";

type TableRowProps = {
  tableRowData: TTableRow;
};

const TableRow: React.FC<TableRowProps> = ({ tableRowData }) => {
  // CONSTS
  const isActingLikeALink = !!tableRowData.onClick || !!tableRowData.onClickUrl;
  const tableCellTags = tableRowData.cells.map((cell: TTableCell) => {
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

  // FUNCTIONS
  const behaveLikeLink = () => {
    if (tableRowData.onClick) tableRowData.onClick();
    if (tableRowData.onClickUrl) window.open(tableRowData.onClickUrl, "_blank");
  };
  return (
    <S.TableRow
      aria-label={tableRowData.onClickAriaLabel}
      role={isActingLikeALink ? "link" : "row"}
      tabIndex={isActingLikeALink ? 0 : -1}
      hasOnClick={isActingLikeALink}
      onClick={() => {
        behaveLikeLink();
      }}
      onKeyDown={(event: React.KeyboardEvent) => {
        if (event.key === "Enter") {
          behaveLikeLink();
        }
      }}
    >
      {tableCellTags}
    </S.TableRow>
  );
};

export default TableRow;
