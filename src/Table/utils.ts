import { TRow, TCell } from "./TTable";

export enum ESortingText {
  "ASC" = "ascending",
  "DESC" = "descending",
}

export const calculateGridTemplateColumns = (columnsLength: number) => {
  const equalPercentageWidth = 100 / columnsLength;
  return Array(columnsLength).fill(`${equalPercentageWidth}%`);
};
export const convertColumnCountsToPercents = (gridColumns: number[]) => {
  const totalCount = gridColumns.reduce((accumulator, a) => accumulator + a, 0);
  return gridColumns.map(
    (columnNumber: number) => `${(columnNumber / totalCount) * 100}%`
  );
};

export const sortColumnData = (
  sortIndex: number,
  direction: "ASC" | "DESC",
  rowData: TRow[]
): TRow[] => {
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
