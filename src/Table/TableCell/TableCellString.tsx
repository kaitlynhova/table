import React from "react";
import { TCellString } from "../TTable";

type TableCellStringProps = {
  cellData: TCellString;
};

const TableCellString: React.FC<TableCellStringProps> = ({ cellData }) => {
  return <td>{cellData.value}</td>;
};

export default TableCellString;
