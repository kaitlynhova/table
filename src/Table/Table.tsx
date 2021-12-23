import React, { useState, useMemo } from "react";
import * as S from "./TableStyles";
import { TTableData, TTableColumn, TTableRow } from "./TTable";
import TableHeader, {
  TTableColumnSortOptions,
} from "./TableHeader/TableHeader";
import TableRow from "./TableRow/TableRow";
import {
  calculateGridTemplateColumns,
  convertTableColumnCountsToPercents,
  sortTableColumnData,
} from "./utils";

type TableProps = {
  tableData: TTableData;
  gridColumns?: number[];
};

const Table: React.FC<TableProps> = ({ tableData, gridColumns }) => {
  // STATE
  const [storedColumnsData] = useState<TTableColumn[]>(tableData.columns);
  const [storedRowsData, setStoredRowsData] = useState<TTableRow[]>(
    tableData.rows
  );

  // CONSTS
  const gridColumnWidths = useMemo(
    () =>
      gridColumns
        ? convertTableColumnCountsToPercents(gridColumns)
        : calculateGridTemplateColumns(tableData.columns.length),
    [gridColumns, tableData.columns.length]
  );
  const colGroupColumnsTags = useMemo(
    () =>
      gridColumnWidths.map((colWidth: string, index: number) => (
        <S.ColGroupColumn
          key={`${tableData.columns[index].title}-column`}
          width={colWidth}
        />
      )),
    [gridColumnWidths, tableData.columns]
  );
  const tableRowTags = useMemo(
    () =>
      storedRowsData.map((row: TTableRow) => (
        <TableRow key={row.cells[0].value} tableRowData={row} />
      )),
    [storedRowsData]
  );

  // FUNCTIONS
  const sortTableColumn = (
    index: number,
    direction: TTableColumnSortOptions
  ) => {
    const sortedRowsData: TTableRow[] = sortTableColumnData(
      index,
      direction,
      storedRowsData
    );
    setStoredRowsData([...sortedRowsData]);
  };

  return (
    <S.Table>
      <caption>{tableData.caption} </caption>
      <colgroup>{colGroupColumnsTags}</colgroup>
      <tbody>
        <TableHeader
          sortTableColumn={sortTableColumn}
          tableHeaderData={storedColumnsData}
        />
        {tableRowTags}
      </tbody>
    </S.Table>
  );
};

export default Table;
