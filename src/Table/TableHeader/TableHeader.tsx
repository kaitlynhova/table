import React from "react";
import * as S from "./TableHeaderStyles";
import { TColumn } from "../TTable";

type TableHeaderProps = {
  tableHeaderData: TColumn[];
};

const TableHeader: React.FC<TableHeaderProps> = ({ tableHeaderData }) => {
  const tableHeader = tableHeaderData.map((value) => (
    <S.TableHeader key={`${value.title}-header`}>{value.title}</S.TableHeader>
  ));
  return <tr>{tableHeader}</tr>;
};

export default TableHeader;
