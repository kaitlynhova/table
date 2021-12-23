import React from "react";
import "./App.css";
import Table from "./Table/Table";
import { TTableData } from "./Table/TTable";
const tableData: TTableData = {
  caption: "types of rows and columns",
  columns: [
    { title: "column1", tooltipText: "tooltip Text 1", isSortable: true },
    { title: "column2", tooltipText: "tooltip Text 2", isSortable: true },
    { title: "column3", tooltipText: "tooltip Text 3", isSortable: false },
  ],
  rows: [
    {
      cells: [
        {
          cellTypeName: "string",
          value: "B",
        },
        {
          cellTypeName: "string",
          value: "row 2 column 2",
        },
        {
          cellTypeName: "string",
          value: "row 2 column 3",
        },
      ],
    },
    {
      onClickUrl: "https://www.fast.co/",
      onClickAriaLabel: "visit fast.co website",
      cells: [
        {
          cellTypeName: "cost",
          value: "40",
          currency: "USD",
          textAlign: "center",
        },
        {
          cellTypeName: "string",
          value: "row 1 column 2",
        },
        {
          cellTypeName: "string",
          value: "row 1 column 3",
        },
      ],
    },
    {
      cells: [
        {
          cellTypeName: "string",
          value: "C",
        },
        {
          cellTypeName: "string",
          value: "row 3 column 2",
        },
        {
          cellTypeName: "string",
          value: "row 3 column 3",
        },
      ],
    },
  ],
};
function App() {
  return (
    <div className="App">
      <Table tableData={tableData} gridColumns={[4, 2, 3]} />
    </div>
  );
}

export default App;
