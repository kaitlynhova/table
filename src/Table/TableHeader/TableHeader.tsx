import React, { useState, useMemo } from "react";
import * as S from "./TableHeaderStyles";
import { ESortingText } from "../utils";
import { TTableColumn } from "../TTable";

export type TTableColumnSortOptions = "ASC" | "DESC";

type TTableHeaderProps = {
  /**
   * All of the table header data
   */
  tableHeaderData: TTableColumn[];
  gridColumnWidths: string[];
  /**
   * Function to call when you want to sort a column
   */
  sortTableColumn: (index: number, direction: TTableColumnSortOptions) => void;
};

const TableHeader: React.FC<TTableHeaderProps> = ({
  tableHeaderData,
  sortTableColumn,
  gridColumnWidths,
}) => {
  // STATE
  const [sortDirection, setSortDirection] =
    useState<TTableColumnSortOptions>("ASC");

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
                aria-label={`sort ${column.title} ${
                  ESortingText[sortDirection as keyof typeof ESortingText]
                }`}
                onClick={() => {
                  const newSortDirection =
                    sortDirection === "DESC" ? "ASC" : "DESC";
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
    [sortTableColumn, sortDirection, tableHeaderData]
  );
  return <tr>{tableHeaderTags}</tr>;
};

export default TableHeader;
