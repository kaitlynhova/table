import React, { useState, useMemo } from "react";
import * as S from "./TableHeaderStyles";
import { ESortingText } from "../utils";
import { TTableColumn } from "../TTable";

export type TTableColumnSortOptions = "ASC" | "DESC";

type TTableHeaderProps = {
  tableHeaderData: TTableColumn[];
  sorTTableColumn: (index: number, direction: TTableColumnSortOptions) => void;
};

const TableHeader: React.FC<TTableHeaderProps> = ({
  tableHeaderData,
  sorTTableColumn,
}) => {
  const [sortDirection, setSortDirection] =
    useState<TTableColumnSortOptions>("ASC");
  const tableHeader = useMemo(
    () =>
      tableHeaderData.map((column: TTableColumn, index: number) => {
        return (
          <S.TableHeader
            textAlign={column.textAlign}
            key={`${column.title}-header`}
          >
            {column.title}
            {column.isSortable && (
              <S.SortButton
                aria-label={`sort ${column.title} ${
                  ESortingText[sortDirection as keyof typeof ESortingText]
                }`}
                tabIndex={0}
                onClick={() => {
                  console.log("current sort", sortDirection);
                  const newSortDirection =
                    sortDirection === "DESC" ? "ASC" : "DESC";
                  sorTTableColumn(index, sortDirection);
                  setSortDirection(newSortDirection);
                }}
              >
                x
              </S.SortButton>
            )}
          </S.TableHeader>
        );
      }),
    [sorTTableColumn, sortDirection, tableHeaderData]
  );
  return <tr>{tableHeader}</tr>;
};

export default TableHeader;
