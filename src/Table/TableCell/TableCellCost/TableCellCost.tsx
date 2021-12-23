import React from "react";
import { ITableCellCost } from "../TTableCell";
import * as S from "./TableCellCostStyles";

type TableCellCostProps = {
  cellData: ITableCellCost;
};

const TableCellCost: React.FC<TableCellCostProps> = ({ cellData }) => {
  return (
    <S.TableCellCostStyled textAlign={cellData.textAlign}>
      {cellData.value}
      <S.Currency>{cellData.currency}</S.Currency>
    </S.TableCellCostStyled>
  );
};

export default TableCellCost;
