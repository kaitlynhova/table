import React from "react";
import * as S from "./TableStyles";
import { TTableData, TRow } from "./TTable";
import TableHeader from "./TableHeader/TableHeader";
import TableRow from "./TableRow/TableRow";
import { calculateGridTemplateColumns } from "./utils";

type TableProps = {
  tableData: TTableData;
  gridColumns?: string[];
};

const Table: React.FC<TableProps> = ({ tableData, gridColumns }) => {
  const calculatedGridColumns = gridColumns
    ? gridColumns
    : calculateGridTemplateColumns(tableData.columns.length);

  const colGroup = calculatedGridColumns.map(
    (colWidth: string, index: number) => (
      <S.Column
        key={`${tableData.columns[index].title}-column`}
        width={colWidth}
      />
    )
  ); // used to manage the width of

  const tableRows = tableData.rows.map((row: TRow) => (
    <TableRow key={row.cells[0].value} tableRowData={row} />
  ));

  return (
    <S.Table>
      <caption>{tableData.caption} </caption>
      <colgroup>{colGroup}</colgroup>
      <tbody>
        <TableHeader tableHeaderData={tableData.columns} />
        {tableRows}
      </tbody>
    </S.Table>
  );
};

export default Table;
