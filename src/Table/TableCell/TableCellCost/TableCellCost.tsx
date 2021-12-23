import React from "react";
import { ICellCost } from "../../TTable";
import * as S from "./TableCellCostStyles";

type TableCellCostProps = {
  cellData: ICellCost;
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
