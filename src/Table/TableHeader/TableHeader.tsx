import React, { useState, useMemo } from "react";
import * as S from "./TableHeaderStyles";
import {
  ETableColumnSortDirections,
  TTableColumnSortDirections,
} from "../utils";
import { TTableColumn } from "../TTable";

type TTableHeaderProps = {
  /**
   * All of the table header data
   */
  tableHeaderData: TTableColumn[];
  /**
   * List of column width percentages
   */
  gridColumnWidths: string[];
  /**
   * Function to call when you want to sort a column
   */
  sortTableColumn: (
    index: number,
    direction: TTableColumnSortDirections
  ) => void;
};

const TableHeader: React.FC<TTableHeaderProps> = ({
  tableHeaderData,
  sortTableColumn,
  gridColumnWidths,
}) => {
  // STATE
  const [sortDirection, setSortDirection] =
    useState<TTableColumnSortDirections>(ETableColumnSortDirections.ASCENDING);

  // CONSTS
  const tableHeaderTags = useMemo(
    () =>
      tableHeaderData.map((column: TTableColumn, index: number) => {
        return (
          <S.TableHeader
            key={`${column.title}-header`}
            textAlign={column.textAlign}
            width={gridColumnWidths[index]}
          >
            <S.TableHeaderP>{column.title}</S.TableHeaderP>
            {column.isSortable && (
              <S.SortButton
                aria-label={`sort ${column.title} ${ETableColumnSortDirections[sortDirection]}`}
                onClick={() => {
                  const newSortDirection =
                    sortDirection === ETableColumnSortDirections.DESCENDING
                      ? ETableColumnSortDirections.ASCENDING
                      : ETableColumnSortDirections.DESCENDING;
                  sortTableColumn(index, sortDirection);
                  setSortDirection(newSortDirection);
                }}
                tabIndex={0}
              >
                x
              </S.SortButton>
            )}
          </S.TableHeader>
        );
      }),
    [tableHeaderData, gridColumnWidths, sortDirection, sortTableColumn]
  );
  return <tr>{tableHeaderTags}</tr>;
};

export default TableHeader;
