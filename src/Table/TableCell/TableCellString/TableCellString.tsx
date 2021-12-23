import React from "react";
import { ITableCellString } from "../TTableCell";
import { TableCellStringStyled } from "./TableCellStringStyles";

type TableCellStringProps = {
  /**
   * All of the cell's data
   */
  cellData: ITableCellString;
};

const TableCellString: React.FC<TableCellStringProps> = ({ cellData }) => {
  return (
    <TableCellStringStyled
      hasEllipsis={cellData.hasEllipsis}
      textAlign={cellData.textAlign}
    >
      {cellData.value}
    </TableCellStringStyled>
  );
};

export default TableCellString;
