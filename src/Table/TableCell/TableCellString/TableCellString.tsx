import React from "react";
import { ICellString } from "../TTableCell";
import { TableCellStringStyled } from "./TableCellStringStyles";

type TableCellStringProps = {
  cellData: ICellString;
};

const TableCellString: React.FC<TableCellStringProps> = ({ cellData }) => {
  return (
    <TableCellStringStyled textAlign={cellData.textAlign}>
      {cellData.value}
    </TableCellStringStyled>
  );
};

export default TableCellString;
