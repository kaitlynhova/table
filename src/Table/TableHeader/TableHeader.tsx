import React, { useState } from "react";
import * as S from "./TableHeaderStyles";
import { ESortingText } from "../utils";
import { TColumn } from "../TTable";

type TableHeaderProps = {
  tableHeaderData: TColumn[];
  sortColumn: (index: number, direction: "ASC" | "DESC") => void;
};

const TableHeader: React.FC<TableHeaderProps> = ({
  tableHeaderData,
  sortColumn,
}) => {
  const [sortDirection, setSortDirection] = useState("ASC");
  const tableHeader = tableHeaderData.map((column: TColumn, index: number) => {
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
              sortColumn(index, newSortDirection);
              setSortDirection(newSortDirection);
            }}
          >
            x
          </S.SortButton>
        )}
      </S.TableHeader>
    );
  });
  return <tr>{tableHeader}</tr>;
};

export default TableHeader;
