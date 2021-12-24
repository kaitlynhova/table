import React, { useState, useMemo } from "react";
import * as S from "./TableStyles";
import { TTableData, TTableColumn, TTableRow } from "./TTable";
import TableHeader from "./TableHeader/TableHeader";
import TableRow from "./TableRow/TableRow";
import {
  calculateGridTemplateColumns,
  convertTableColumnCountsToPercents,
  sortTableColumnData,
  TTableColumnSortDirections,
} from "./utils";

type TableProps = {
  /**
   * Optional prop, used to specifcy columnWidth. If used, it should be an
   * array of valid grid-template-column values
   * (see https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-columns#values)
   */
  gridColumns?: number[];
  /**
   * All of the data for the table to display
   */
  tableData: TTableData;
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
    direction: TTableColumnSortDirections
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
      <tbody>
        <TableHeader
          gridColumnWidths={gridColumnWidths}
          sortTableColumn={sortTableColumn}
          tableHeaderData={storedColumnsData}
        />
        {tableRowTags}
      </tbody>
    </S.Table>
  );
};

export default Table;
