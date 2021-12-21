import React from "react";
import * as S from "./TableStyles";
import { TTableData, TRow } from "./TTable";
import TableHeader from "./TableHeader/TableHeader";
import TableRow from "./TableRow/TableRow";

type TableProps = {
  tableData: TTableData;
};

const Table: React.FC<TableProps> = ({ tableData }) => {
  return (
    <S.Table>
      <TableHeader tableHeaderData={tableData.columns} />
      {tableData.rows.map((row: TRow) => (
        <TableRow tableRowData={row} />
      ))}
    </S.Table>
  );
};

export default Table;
