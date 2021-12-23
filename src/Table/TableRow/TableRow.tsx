import React from "react";
import * as S from "./TableRowStyles";
import { TTableRow } from "../TTable";
import { TTableCell } from "../TableCell/TTableCell";
import TableCell from "../TableCell/TableCell";

type TableRowProps = {
  /**
   * All of data for 1 table row
   */
  tableRowData: TTableRow;
};

const TableRow: React.FC<TableRowProps> = ({ tableRowData }) => {
  // CONSTS
  const isActingLikeALink = !!tableRowData.onClick || !!tableRowData.onClickUrl;
  const tableCellTags = tableRowData.cells.map((cell: TTableCell) => {
    return <TableCell cellData={cell} />;
  });

  // FUNCTIONS
  const behaveLikeLink = () => {
    if (tableRowData.onClick) tableRowData.onClick();
    if (tableRowData.onClickUrl) window.open(tableRowData.onClickUrl, "_blank");
  };
  return (
    <S.TableRow
      aria-label={tableRowData.onClickAriaLabel}
      hasOnClick={isActingLikeALink}
      onClick={() => {
        behaveLikeLink();
      }}
      onKeyDown={(event: React.KeyboardEvent) => {
        if (event.key === "Enter") {
          behaveLikeLink();
        }
      }}
      role={isActingLikeALink ? "link" : "row"}
      tabIndex={isActingLikeALink ? 0 : -1}
    >
      {tableCellTags}
    </S.TableRow>
  );
};

export default TableRow;
