import React from "react";
import { ITableCellString } from "../TTableCell";
import { TableCellStringStyled } from "./TableCellStringStyles";

type TableCellStringProps = {
  cellData: ITableCellString;
};

const TableCellString: React.FC<TableCellStringProps> = ({ cellData }) => {
  return (
    <TableCellStringStyled textAlign={cellData.textAlign}>
      {cellData.value}
    </TableCellStringStyled>
  );
};

export default TableCellString;
