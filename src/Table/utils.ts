import { TTableRow } from "./TTable";

// calculate default equal column widths based on column list length
export const calculateGridTemplateColumns = (columnsLength: number) => {
  const equalPercentageWidth = 100 / columnsLength;
  return Array(columnsLength).fill(`${equalPercentageWidth}%`);
};

// allow engineers to give us column #s and then we convert to percentages here.
// ex: [6, 6] => ["50%", "50%"]
// Note: the table should live in a grid layout.
export const convertTableColumnCountsToPercents = (gridColumns: number[]) => {
  const totalColumnsCount = gridColumns.reduce(
    (accumulator, a) => accumulator + a,
    0
  );
  const columnPercentages = gridColumns.map(
    (columnNumber: number) => `${(columnNumber / totalColumnsCount) * 100}%`
  );
  return columnPercentages;
};

// SORTING RELATED

export enum ETableColumnSortDirections {
  ASCENDING = "ASCENDING",
  DESCENDING = "DESCENDING",
}
export type TTableColumnSortDirections =
  keyof typeof ETableColumnSortDirections;

// sort table column data by cell's value by index (column #)
// Note: all cells extend TTableCellTemplate type so we can sort by it's value
export const sortTableColumnData = (
  sortIndex: number,
  direction: TTableColumnSortDirections,
  rowData: TTableRow[]
): TTableRow[] => {
  switch (direction) {
    case ETableColumnSortDirections.ASCENDING: {
      return [...rowData].sort((a, b) =>
        a.cells[sortIndex].value < b.cells[sortIndex].value ? -1 : 1
      );
    }
    case ETableColumnSortDirections.DESCENDING: {
      return [...rowData].sort((a, b) =>
        a.cells[sortIndex].value < b.cells[sortIndex].value ? 1 : -1
      );
    }
    default: {
      // Ascending as default
      return [...rowData].sort((a, b) =>
        a.cells[sortIndex].value < b.cells[sortIndex].value ? -1 : 1
      );
    }
  }
};
