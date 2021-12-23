import React, { useState, useMemo } from "react";
import * as S from "./TableHeaderStyles";
import { ESortingText } from "../utils";
import { TColumn } from "../TTable";

export type TColumnSortOptions = "ASC" | "DESC";

type TTableHeaderProps = {
  tableHeaderData: TColumn[];
  sortColumn: (index: number, direction: TColumnSortOptions) => void;
};

const TableHeader: React.FC<TTableHeaderProps> = ({
  tableHeaderData,
  sortColumn,
}) => {
  const [sortDirection, setSortDirection] = useState<TColumnSortOptions>("ASC");
  const tableHeader = useMemo(
    () =>
      tableHeaderData.map((column: TColumn, index: number) => {
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
                  sortColumn(index, sortDirection);
                  setSortDirection(newSortDirection);
                }}
              >
                x
              </S.SortButton>
            )}
          </S.TableHeader>
        );
      }),
    [sortColumn, sortDirection, tableHeaderData]
  );
  return <tr>{tableHeader}</tr>;
};

export default TableHeader;
