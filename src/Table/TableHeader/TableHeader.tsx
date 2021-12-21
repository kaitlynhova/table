import React from "react";
import * as S from "./TableHeaderStyles";
import { TColumn } from "../TTable";

type TableHeaderProps = {
  tableHeaderData: TColumn[];
};

const TableHeader: React.FC<TableHeaderProps> = ({ tableHeaderData }) => {
  const tableHeader = tableHeaderData.map((value) => (
    <S.TableHeader>{value.title}</S.TableHeader>
  ));
  return <>{tableHeader}</>;
};

export default TableHeader;
