import React, { useState, useMemo } from "react";
import * as S from "./TableStyles";
import { TTableData, TTableColumn, TTableRow } from "./TTable";
import TableHeader, {
  TTableColumnSortOptions,
} from "./TableHeader/TableHeader";
import TableRow from "./TableRow/TableRow";
import {
  calculateGridTemplateColumns,
  converTTableColumnCountsToPercents,
  sorTTableColumnData,
} from "./utils";

type TableProps = {
  tableData: TTableData;
  gridColumns?: number[];
};

const Table: React.FC<TableProps> = ({ tableData, gridColumns }) => {
  const [storedColumnsData] = useState<TTableColumn[]>(tableData.columns);
  const [storedRowsData, setStoredRowsData] = useState<TTableRow[]>(
    tableData.rows
  );

  const calculatedGridColumns = gridColumns
    ? converTTableColumnCountsToPercents(gridColumns)
    : calculateGridTemplateColumns(tableData.columns.length);

  const colGroupColumns = useMemo(
    () =>
      calculatedGridColumns.map((colWidth: string, index: number) => (
        <S.Column
          key={`${tableData.columns[index].title}-column`}
          width={colWidth}
        />
      )),
    []
  ); // used to manage the width of the table columns
  const tableRows = storedRowsData.map((row: TTableRow) => (
    <TableRow key={row.cells[0].value} tableRowData={row} />
  ));

  const sorTTableColumn = (
    index: number,
    direction: TTableColumnSortOptions
  ) => {
    const sortedRowsData: TTableRow[] = sorTTableColumnData(
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
          sorTTableColumn={sorTTableColumn}
          tableHeaderData={storedColumnsData}
        />
        {tableRows}
      </tbody>
    </S.Table>
  );
};

export default Table;
