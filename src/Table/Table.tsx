import React, { useState } from "react";
import * as S from "./TableStyles";
import { TTableData, TColumn, TRow } from "./TTable";
import TableHeader from "./TableHeader/TableHeader";
import TableRow from "./TableRow/TableRow";
import {
  calculateGridTemplateColumns,
  convertColumnCountsToPercents,
  sortColumnData,
} from "./utils";

type TableProps = {
  tableData: TTableData;
  gridColumns?: number[];
};

const Table: React.FC<TableProps> = ({ tableData, gridColumns }) => {
  const [storedColumnsData] = useState<TColumn[]>(tableData.columns);
  const [storedRowsData, setStoredRowsData] = useState<TRow[]>(tableData.rows);

  const calculatedGridColumns = gridColumns
    ? convertColumnCountsToPercents(gridColumns)
    : calculateGridTemplateColumns(tableData.columns.length);

  const colGroupColumns = calculatedGridColumns.map(
    (colWidth: string, index: number) => (
      <S.Column
        key={`${tableData.columns[index].title}-column`}
        width={colWidth}
      />
    )
  ); // used to manage the width of the table columns
  const tableRows = storedRowsData.map((row: TRow) => (
    <TableRow key={row.cells[0].value} tableRowData={row} />
  ));

  const sortColumn = (index: number, direction: "ASC" | "DESC") => {
    const sortedRowsData: TRow[] = sortColumnData(
      index,
      direction,
      storedRowsData
    );
    setStoredRowsData([...sortedRowsData]);
  };

  return (
    <S.Table>
      <caption>{tableData.caption} </caption>
      <colgroup>{colGroupColumns}</colgroup>
      <tbody>
        <TableHeader
          sortColumn={sortColumn}
          tableHeaderData={storedColumnsData}
        />
        {tableRows}
      </tbody>
    </S.Table>
  );
};

export default Table;
