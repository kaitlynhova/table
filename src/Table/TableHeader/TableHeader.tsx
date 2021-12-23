import React, { useState, useMemo } from "react";
import * as S from "./TableHeaderStyles";
import { ESortingText } from "../utils";
import { TTableColumn } from "../TTable";

export type TTableColumnSortOptions = "ASC" | "DESC";

type TTableHeaderProps = {
  tableHeaderData: TTableColumn[];
  sortTableColumn: (index: number, direction: TTableColumnSortOptions) => void;
};

const TableHeader: React.FC<TTableHeaderProps> = ({
  tableHeaderData,
  sortTableColumn,
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
                  const newSortDirection =
                    sortDirection === "DESC" ? "ASC" : "DESC";
                  sortTableColumn(index, sortDirection);
                  setSortDirection(newSortDirection);
                }}
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
