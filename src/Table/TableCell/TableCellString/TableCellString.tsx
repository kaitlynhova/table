import React from "react";
import { TCellString } from "../../TTable";
import { TableCellStringStyled } from "./TableCellStringStyles";

type TableCellStringProps = {
  cellData: TCellString;
};

const TableCellString: React.FC<TableCellStringProps> = ({ cellData }) => {
  return (
    <TableCellStringStyled textAlign={cellData.textAlign}>
      {cellData.value}
    </TableCellStringStyled>
  );
};

export default TableCellString;
