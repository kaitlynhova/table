import { TTableRow } from "./TTable";
import { TTableColumnSortOptions } from "./TableHeader/TableHeader";

export enum ESortingText {
  "ASC" = "ascending",
  "DESC" = "descending",
}

export const calculateGridTemplateColumns = (columnsLength: number) => {
  const equalPercentageWidth = 100 / columnsLength;
  return Array(columnsLength).fill(`${equalPercentageWidth}%`);
};
export const converTTableColumnCountsToPercents = (gridColumns: number[]) => {
  const totalCount = gridColumns.reduce((accumulator, a) => accumulator + a, 0);
  return gridColumns.map(
    (columnNumber: number) => `${(columnNumber / totalCount) * 100}%`
  );
};

export const sorTTableColumnData = (
  sortIndex: number,
  direction: TTableColumnSortOptions,
  rowData: TTableRow[]
): TTableRow[] => {
  switch (direction) {
    case "ASC": {
      return [...rowData].sort((a, b) =>
        a.cells[sortIndex].value < b.cells[sortIndex].value ? -1 : 1
      );
    }
    case "DESC": {
      return [...rowData].sort((a, b) =>
        a.cells[sortIndex].value < b.cells[sortIndex].value ? 1 : -1
      );
    }
  }
};
