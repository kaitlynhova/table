import React from "react";
import { TCellCost } from "../../TTable";

type TableCellCostProps = {
  cellData: TCellCost;
};

const TableCellCost: React.FC<TableCellCostProps> = ({ cellData }) => {
  return <td>{cellData.value}</td>;
};

export default TableCellCost;
